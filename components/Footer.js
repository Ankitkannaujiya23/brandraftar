import Link from "next/link";
import {site,services,wa} from "@/lib/data";
export default function Footer(){
  return(<footer className="border-t border-line pb-28 pt-16"><div className="wrap grid gap-10 md:grid-cols-4">
    <div className="md:col-span-2"><p className="text-2xl font-semibold tracking-tight">Brand<span className="text-brand">Raftar</span></p>
      <p className="mt-3 max-w-sm text-mute">Branding, SEO, ads and lead generation that help local businesses grow online, fast.</p></div>
    <div><p className="mb-3 text-sm font-medium">Services</p><ul className="space-y-2 text-sm text-mute">{services.map(s=><li key={s.slug}><Link className="hover:text-ink" href={"/services/"+s.slug}>{s.title}</Link></li>)}</ul></div>
    <div><p className="mb-3 text-sm font-medium">Contact</p><ul className="space-y-2 text-sm text-mute">
      <li><a className="hover:text-ink" href={"tel:"+site.tel}>{site.phone}</a></li>
      <li><a className="hover:text-ink" href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
      <li><a className="hover:text-ink" href={"mailto:"+site.email}>{site.email}</a></li></ul></div>
  </div><div className="wrap mt-12 text-xs text-mute">© {new Date().getFullYear()} BrandRaftar. All rights reserved.</div></footer>);
}
