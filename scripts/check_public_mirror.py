#!/usr/bin/env python3
"""Fail CI if a known private/admin path enters the public BWM source tree.

This is a PATH guard, not a secrets scanner or legal review. It cannot detect
confidential information embedded inside an otherwise permitted source file.
"""
from __future__ import annotations

import subprocess
import sys
from pathlib import PurePosixPath

BLOCKED_EXACT = {
    "agents.md",
    "editorial_approval.md",
    "production_readiness.md",
    "roadmap.md",
    "docs/editorial_proof_archive.md",
}
BLOCKED_DIRS = {".lovable", ".env", ".secrets"}
BLOCKED_PREFIX = ("production_release_",)
BLOCKED_EXTENSIONS = {
    ".pem", ".p12", ".pfx", ".key", ".kdbx", ".keystore"
}


def forbidden(path: str) -> bool:
    parts = PurePosixPath(path).parts
    lower = path.lower()
    basename = parts[-1].lower()
    return (
        lower in BLOCKED_EXACT
        or any(part.lower() in BLOCKED_DIRS for part in parts)
        or basename == ".env"
        or basename.startswith(".env.")
        or basename.startswith("id_rsa")
        or basename.startswith("id_ed25519")
        or basename.endswith(tuple(BLOCKED_EXTENSIONS))
        or any(basename.startswith(prefix) for prefix in BLOCKED_PREFIX)
    )


def main() -> int:
    completed = subprocess.run(
        ["git", "ls-files", "-z"],
        capture_output=True,
        check=True,
    )
    files = [p.decode("utf-8") for p in completed.stdout.split(b"\0") if p]
    blocked = sorted(path for path in files if forbidden(path))
    if blocked:
        print("Public source guard FAILED: forbidden tracked paths:")
        for path in blocked:
            print(f"  - {path}")
        print("Remove these paths from the public GitHub tree.")
        return 1
    print(f"Public source path guard passed: {len(files)} tracked paths.")
    print("Note: this is NOT a content-level secret scan or IP review.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
