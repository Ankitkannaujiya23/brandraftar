"use client";
import Link from "next/link";
import {useState} from "react";
const links=[["/services","Services"],["/#process","Process"],["/#faq","FAQ"],["/contact","Contact"]];
export default function Header(){
  const [o,setO]=useState(false);
  return(<header className="sticky top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur">
    <div className="wrap flex h-16 items-center justify-between">
      <Link href="/" className="text-lg font-semibold tracking-tight">Brand<span className="text-brand">Raftar</span></Link>
      <nav aria-label="Main" className="hidden items-center gap-8 text-sm text-mute md:flex">
        {links.map(([h,t])=><Link key={h} href={h} className="transition hover:text-ink">{t}</Link>)}
        <Link href="/contact" className="btn btn-p !py-2">Free Audit</Link></nav>
      <button className="text-sm font-medium md:hidden" aria-expanded={o} aria-label="Menu" onClick={()=>setO(!o)}>{o?"Close":"Menu"}</button>
    </div>
    {o&&<nav aria-label="Mobile" className="wrap grid gap-1 pb-5 md:hidden">
      {links.map(([h,t])=><Link key={h} href={h} onClick={()=>setO(false)} className="py-3 text-2xl font-medium tracking-tight">{t}</Link>)}</nav>}
  </header>);
}
