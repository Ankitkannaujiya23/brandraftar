import Link from "next/link";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import { GrowthChart, Funnel } from "@/components/Charts";
import { Support, Commitments } from "@/components/Trust";
import RoiCalculator from "@/components/RoiCalculator";
import HeroGrowth from "@/components/HeroGrowth";
import { services, steps, whys, industries, faqs, wa } from "@/lib/data";
export const metadata = { alternates: { canonical: "/" } };
export default function Home() {
  return (<>
    <section className="relative overflow-hidden pb-20 pt-16 md:pt-24"><div className="aurora" aria-hidden="true" />
      <div className="wrap relative grid items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
        <div><Reveal><span className="eyebrow">Growth partner for local businesses</span></Reveal>
          <Reveal delay={80}><h1 className="text-5xl font-medium leading-[.98] tracking-tighter md:text-6xl lg:text-7xl">Take your business online at full <span className="font-serif italic text-brand">raftar.</span></h1></Reveal>
          <Reveal delay={160}><p className="mt-7 max-w-xl text-lg text-mute">Branding, SEO, ads and lead generation under one roof. We help local businesses get found, get trusted and get customers.</p></Reveal>
          <Reveal delay={240} className="mt-9 flex flex-wrap gap-3"><Link href="/contact" className="btn btn-p">Book a free strategy call →</Link><a href={wa()} target="_blank" rel="noopener noreferrer" className="btn btn-g">Chat on WhatsApp</a></Reveal></div>
        <Reveal delay={200} className="mx-auto w-full max-w-sm md:max-w-none"><HeroGrowth /></Reveal>
      </div></section>

    <div className="overflow-hidden border-y border-line py-5" aria-hidden="true"><div className="mq">{[...industries, ...industries].map((x, i) => <span key={i} className="px-6 text-xl font-medium tracking-tight text-mute">{x}<span className="pl-12 text-brand">✦</span></span>)}</div></div>

    <section className="py-28"><div className="wrap"><Reveal><span className="eyebrow">Services</span><h2 className="h2 max-w-3xl">Everything you need to <span className="font-serif italic">grow</span>, in one place.</h2></Reveal>
      <div className="mt-14 grid gap-4 md:grid-cols-3">{services.map((s, i) => (<Reveal key={s.slug} delay={i * 70}><Link href={"/services/" + s.slug} className="card block h-full"><p className="text-sm text-brand">0{i + 1}</p><h3 className="mt-6 text-2xl font-medium tracking-tight">{s.title}</h3><p className="mt-3 text-mute">{s.short}</p><p className="mt-6 text-sm font-medium">Learn more →</p></Link></Reveal>))}</div></div></section>

    <section className="bg-white py-28"><div className="wrap"><Reveal><span className="eyebrow">How growth compounds</span><h2 className="h2 max-w-3xl">Not random marketing. One <span className="font-serif italic text-brand">connected</span> system.</h2><p className="mt-5 max-w-2xl text-mute">Branding makes people trust you, SEO and ads bring them in, your website and WhatsApp convert them, and follow-up turns enquiries into sales. Each step lifts the next.</p></Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-2"><Reveal><GrowthChart /></Reveal><Reveal delay={120}><Funnel /></Reveal></div></div></section>

    <section id="process" className="bg-ink py-28 text-paper"><div className="wrap"><Reveal><span className="eyebrow !text-paper/60">Process</span><h2 className="h2 max-w-3xl">From audit to <span className="font-serif italic text-brand">sales</span> in four steps.</h2></Reveal>
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-4">{steps.map(([n, t, d], i) => (<Reveal key={n} delay={i * 90} className="bg-ink p-7"><p className="text-brand">{n}</p><h3 className="mt-8 text-2xl font-medium tracking-tight">{t}</h3><p className="mt-3 text-sm text-paper/60">{d}</p></Reveal>))}</div></div></section>

    <section className="py-28"><div className="wrap"><Reveal><span className="eyebrow">Growth calculator</span><h2 className="h2 max-w-3xl">See what <span className="font-serif italic text-brand">more enquiries</span> could mean for your revenue.</h2></Reveal><div className="mt-12"><RoiCalculator /></div></div></section>

    <section className="py-28"><div className="wrap grid gap-14 md:grid-cols-2"><Reveal><span className="eyebrow">Why BrandRaftar</span><h2 className="h2">Built for local businesses that want <span className="font-serif italic">real</span> leads.</h2></Reveal>
      <div className="grid gap-4">{whys.map(([t, d], i) => (<Reveal key={t} delay={i * 80}><div className="card"><h3 className="text-xl font-medium tracking-tight">{t}</h3><p className="mt-2 text-mute">{d}</p></div></Reveal>))}</div></div></section>

    <section className="bg-white py-28"><div className="wrap"><Reveal><span className="eyebrow">Your support system</span><h2 className="h2 max-w-3xl">You are never <span className="font-serif italic text-brand">guessing.</span> A team is behind you.</h2></Reveal><div className="mt-12"><Support /></div>
      <div className="mt-16"><p className="mb-5 text-sm font-medium uppercase tracking-[.2em] text-mute">Our commitments</p><Commitments /></div></div></section>

    <section id="faq" className="py-20"><div className="wrap max-w-3xl"><Reveal><span className="eyebrow">FAQ</span><h2 className="h2 mb-10">Questions, <span className="font-serif italic">answered.</span></h2></Reveal><FAQ items={faqs} /></div></section>

    <section className="pb-28 pt-10"><div className="wrap grid items-start gap-12 md:grid-cols-5"><Reveal className="md:col-span-2"><span className="eyebrow">Get started</span><h2 className="h2">Let’s grow your business.</h2><p className="mt-5 text-mute">Free audit and a clear plan. No pressure.</p></Reveal><Reveal className="md:col-span-3" delay={100}><LeadForm /></Reveal></div></section>
  </>);
}