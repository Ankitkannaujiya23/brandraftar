import Link from "next/link";
import {services} from "@/lib/data";
export const metadata={title:"Digital Marketing Services for Local Businesses",description:"Branding, SEO, Google and Meta ads, website design, social media and lead generation for local businesses.",alternates:{canonical:"/services"}};
export default function Services(){
  return(<section className="py-24"><div className="wrap"><span className="eyebrow">Services</span><h1 className="h2 max-w-3xl">Services built around <span className="font-serif italic text-brand">your growth.</span></h1>
    <div className="mt-14 grid gap-4 md:grid-cols-2">{services.map(s=>(<Link key={s.slug} href={"/services/"+s.slug} className="card block"><h2 className="text-2xl font-medium tracking-tight">{s.title}</h2><p className="mt-3 text-mute">{s.short}</p><p className="mt-5 text-sm font-medium">View details →</p></Link>))}</div></div></section>);
}
