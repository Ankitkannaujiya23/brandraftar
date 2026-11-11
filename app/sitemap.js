import { services, site } from "@/lib/data";
export const dynamic = "force-static";
export default function sitemap() {
  const now = new Date();
  return [{ url: site.url, lastModified: now, priority: 1 }, { url: site.url + "/services", lastModified: now, priority: .9 }, { url: site.url + "/contact", lastModified: now, priority: .8 },
  ...services.map(s => ({ url: site.url + "/services/" + s.slug, lastModified: now, priority: .8 }))];
}
