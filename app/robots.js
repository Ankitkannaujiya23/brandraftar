import { site } from "@/lib/data";
export const dynamic = "force-static";
export default function robots() { return { rules: { userAgent: "*", allow: "/", disallow: "/api/" }, sitemap: site.url + "/sitemap.xml" } }
