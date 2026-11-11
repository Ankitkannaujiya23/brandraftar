import Link from "next/link";
import {notFound} from "next/navigation";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import {services,site,extras} from "@/lib/data";
import {ServiceVisual} from "@/components/Charts";
import Reveal from "@/components/Reveal";
import {Support,Commitments} from "@/components/Trust";
export const dynamicParams=false;
export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
export function generateMetadata({params}){
  const s=services.find(x=>x.slug==params.slug);if(!s)return{};
  return{title:s.title+" for Local Businesses",description:s.meta,alternates:{canonical:"/services/"+s.slug},openGraph:{title:s.title,description:s.meta,url:"/services/"+s.slug}};
}
export default function Service({params}){
  const s=services.find(x=>x.slug==params.slug);if(!s)notFound();
  const ex=extras[s.slug];
  const ld={"@context":"https://schema.org","@type":"Service",name:s.title,description:s.meta,provider:{"@type":"Organization",name:site.name,url:site.url},areaServed:"India",url:site.url+"/services/"+s.slug};
  return(<>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
  <section className="py-24"><div className="wrap"><nav aria-label="Breadcrumb" className="mb-6 text-sm text-mute"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / {s.title}</nav>
    <h1 className="max-w-4xl text-5xl font-medium leading-[1] tracking-tighter md:text-7xl">{s.h1}</h1><p className="mt-6 max-w-2xl text-lg text-mute">{s.intro}</p>
    <Link href="#book" className="btn btn-p mt-8">Get a free audit →</Link></div></section>
  <section className="pb-24"><div className="wrap grid gap-4 md:grid-cols-2">{s.points.map(([t,d])=>(<div key={t} className="card"><h2 className="text-xl font-medium tracking-tight">{t}</h2><p className="mt-2 text-mute">{d}</p></div>))}</div></section>
  <section className="pb-24"><div className="wrap grid items-center gap-10 md:grid-cols-2"><div><span className="eyebrow">How it improves your business</span><h2 className="h2">The <span className="font-serif italic text-brand">outcome</span>, explained.</h2>
    <ul className="mt-8 space-y-4">{ex.kpi.map(k=><li key={k} className="flex gap-3 text-lg"><span className="text-brand">✓</span>{k}</li>)}</ul></div><Reveal><ServiceVisual v={ex.vis}/></Reveal></div></section>
  <section className="pb-24"><div className="wrap"><span className="eyebrow">Your 90-day roadmap</span><div className="mt-4 grid gap-4 md:grid-cols-3">{["Days 1–30: Foundation","Days 31–60: Launch & optimise","Days 61–90: Scale"].map((t,i)=>(<Reveal key={t} delay={i*100}><div className="card h-full"><p className="text-sm text-brand">Phase {i+1}</p><h3 className="mt-4 text-xl font-medium tracking-tight">{t}</h3><p className="mt-2 text-mute">{ex.rm[i]}</p><div className="mt-6 h-1 rounded bg-paper"><div className="fillw h-1 rounded bg-brand" style={{"--w":(i+1)*33.3+"%","--d":i*200}}/></div></div></Reveal>))}</div></div></section>
  <section className="bg-ink py-20 text-paper"><div className="wrap"><h2 className="text-3xl font-medium tracking-tight md:text-5xl">What you get</h2><ul className="mt-8 grid gap-3 md:grid-cols-4">{s.deliver.map(x=><li key={x} className="rounded-xl border border-white/15 p-5"><span className="text-brand">✦ </span>{x}</li>)}</ul></div></section>
  <section className="pb-24"><div className="wrap"><span className="eyebrow">Your support system</span><div className="mt-4"><Support/></div><div className="mt-10"><Commitments/></div></div></section>
  <section className="py-24"><div className="wrap max-w-3xl"><h2 className="h2 mb-10">FAQs</h2><FAQ items={s.faqs}/></div></section>
  <section id="book" className="pb-28"><div className="wrap max-w-3xl"><h2 className="h2 mb-8">Book a free strategy call</h2><LeadForm service={s.title}/>
    <p className="mt-10 text-sm text-mute">Also explore: {services.filter(x=>x.slug!=s.slug).slice(0,3).map((x,i)=><span key={x.slug}>{i?" · ":""}<Link className="underline" href={"/services/"+x.slug}>{x.title}</Link></span>)}</p></div></section></>);
}
