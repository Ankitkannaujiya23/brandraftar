import {supports,commitments} from "@/lib/data";
export function Support(){
  return(<div className="grid gap-4 md:grid-cols-3">{supports.map(([t,d],i)=>(<div key={t} className="card"><p className="text-sm text-brand">0{i+1}</p><h3 className="mt-4 text-xl font-medium tracking-tight">{t}</h3><p className="mt-2 text-mute">{d}</p></div>))}</div>);
}
export function Commitments(){
  return(<div className="grid gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-4">{commitments.map(([t,d])=>(<div key={t} className="bg-white p-6"><p className="text-brand">✓</p><h3 className="mt-3 font-medium tracking-tight">{t}</h3><p className="mt-1 text-sm text-mute">{d}</p></div>))}</div>);
}
