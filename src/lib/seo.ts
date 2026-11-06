export const SITE_ORIGIN = "https://benmayes.lovable.app";

/** Absolute production URL for a route path: single leading slash, no duplicate slashes. */
export function absoluteUrl(path: string) {
  const clean = ("/" + path).replace(/\/{2,}/g, "/");
  return SITE_ORIGIN + clean;
}

export function seo(title: string, description: string, path: string, type = "website") {
  const full = path === "/" ? title : `${title} — Benjamin Mayes`;
  const url = absoluteUrl(path);
  return {
    meta: [
      { title: full },
      { name: "description", content: description },
      { property: "og:title", content: full },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

/** Marks a page as an unapproved editorial draft: keeps all seo() tags, adds noindex,follow. */
export function draftSeo(head: ReturnType<typeof seo>) {
  return { ...head, meta: [...head.meta, { name: "robots", content: "noindex,follow" }] };
}
