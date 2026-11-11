"use client";
import Link from "next/link";
import {useEffect,useRef,useState} from "react";
const inr=n=>"₹"+n.toLocaleString("en-IN");
function useCount(v){const [n,setN]=useState(v),p=useRef(v);
  useEffect(()=>{const s=p.current,t0=performance.now();let id;
    const f=t=>{const k=Math.min((t-t0)/700,1);setN(Math.round(s+(v-s)*(1-Math.pow(1-k,3))));if(k<1)id=requestAnimationFrame(f);else p.current=v};
    id=requestAnimationFrame(f);return()=>cancelAnimationFrame(id)},[v]);return n}
function Slider({l,v,set,min,max,step,fmt}){return(<label className="block"><span className="flex justify-between text-sm"><span>{l}</span><b>{fmt(v)}</b></span>
  <input type="range" min={min} max={max} step={step} value={v} onChange={e=>set(+e.target.value)} className="mt-2 w-full accent-brand"/></label>)}
export default function RoiCalculator(){
  const [leads,setLeads]=useState(40),[close,setClose]=useState(20),[val,setVal]=useState(5000),[up,setUp]=useState(60),[cl,setCl]=useState(5);
  const now=Math.round(leads*close/100*val),next=Math.round(leads*(1+up/100)*(close+cl)/100*val);
  const a=useCount(now),b=useCount(next),d=useCount(next-now);
  return(<div className="grid gap-6 md:grid-cols-2">
    <div className="card space-y-6"><p className="font-medium">Your numbers today</p>
      <Slider l="Enquiries per month" v={leads} set={setLeads} min={5} max={500} step={5} fmt={x=>x}/>
      <Slider l="Enquiries that become customers" v={close} set={setClose} min={5} max={80} step={1} fmt={x=>x+"%"}/>
      <Slider l="Average sale value" v={val} set={setVal} min={500} max={100000} step={500} fmt={inr}/>
      <p className="border-t border-line pt-5 font-medium">What you expect from better marketing</p>
      <Slider l="More enquiries" v={up} set={setUp} min={10} max={150} step={5} fmt={x=>"+"+x+"%"}/>
      <Slider l="Better follow-up (closing rate)" v={cl} set={setCl} min={0} max={15} step={1} fmt={x=>"+"+x+" pts"}/></div>
    <div className="card flex flex-col justify-between bg-ink !text-paper"><div><p className="text-sm text-paper/60">Monthly revenue from enquiries</p>
      <p className="mt-2 text-lg text-paper/70">Now: {inr(a)}</p><p className="mt-5 text-sm text-paper/60">With a full growth system</p>
      <p className="text-5xl font-medium tracking-tight md:text-6xl">{inr(b)}</p>
      <p className="mt-5 inline-block rounded-full bg-brand px-4 py-1.5 text-sm font-medium text-white">+{inr(d)} per month</p></div>
      <div><p className="mt-8 text-xs text-paper/50">An estimate from your own inputs, not a promise. We build a real forecast after your free audit.</p>
      <Link href="/contact" className="btn mt-4 w-full bg-paper text-ink hover:bg-brand hover:text-white">Get my real growth plan →</Link></div></div></div>);
}
