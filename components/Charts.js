import {Fragment} from "react";
export function GrowthChart({title="Leads per month",a="Without a system",b="With BrandRaftar",from="Month 1",to="Month 6"}){
  return(<figure className="card !p-5 md:!p-7">
    <figcaption className="mb-4 flex flex-wrap items-center justify-between gap-2"><span className="font-medium">{title}</span>
      <span className="flex gap-4 text-xs text-mute"><span className="flex items-center gap-1.5"><i className="h-0.5 w-5 bg-[#b9b6ad]"/>{a}</span><span className="flex items-center gap-1.5"><i className="h-0.5 w-5 bg-brand"/>{b}</span></span></figcaption>
    <svg viewBox="0 0 600 280" role="img" aria-label={title+": "+b+" grows faster than "+a} className="w-full">
      {[50,110,170,230].map(y=><line key={y} x1="30" x2="580" y1={y} y2={y} stroke="#e7e5de"/>)}
      <defs><linearGradient id="ga" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff5a1f" stopOpacity=".28"/><stop offset="1" stopColor="#ff5a1f" stopOpacity="0"/></linearGradient></defs>
      <path className="area" d="M30 235C150 220 250 170 350 120S500 45 570 30V250H30Z" fill="url(#ga)"/>
      <path className="draw" pathLength="1" d="M30 235C150 232 300 222 570 212" fill="none" stroke="#b9b6ad" strokeWidth="3" strokeLinecap="round" strokeDasharray="1"/>
      <path className="draw" pathLength="1" d="M30 235C150 220 250 170 350 120S500 45 570 30" fill="none" stroke="#ff5a1f" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="570" cy="30" r="6" fill="#ff5a1f"/><circle className="pulse" cx="570" cy="30" r="6" fill="#ff5a1f" style={{transformOrigin:"570px 30px"}}/>
      <text x="30" y="272" fontSize="12" fill="#6b6b66">{from}</text><text x="570" y="272" fontSize="12" textAnchor="end" fill="#6b6b66">{to}</text></svg>
    <p className="mt-2 text-xs text-mute">Illustrative model of a typical growth curve. Not a guarantee. Results depend on your market and budget.</p></figure>);
}
export function Funnel(){
  const rows=[["Be seen","SEO, Google Maps, social, ads",100],["Get clicks","Branding, content, ad creatives",68],["Become enquiries","Website, WhatsApp, booking forms",42],["Become customers","Follow-up, CRM, offers",24]];
  return(<div className="card !p-5 md:!p-7"><p className="mb-5 font-medium">How every service feeds your sales</p>
    <div className="space-y-4">{rows.map(([t,d,w],i)=>(<div key={t}><div className="mb-1.5 flex justify-between text-sm"><span className="font-medium">{t}</span><span className="text-mute">{d}</span></div>
      <div className="h-9 overflow-hidden rounded-lg bg-paper"><div className="fillw h-full rounded-lg bg-brand" style={{"--w":w+"%","--d":i*250,opacity:1-i*.17}}/></div></div>))}</div>
    <p className="mt-4 text-xs text-mute">Illustrative funnel. Each stage is improved by a different BrandRaftar service, so growth compounds.</p></div>);
}
export function Bars({title,rows}){
  return(<div className="card !p-5 md:!p-7"><div className="mb-5 flex flex-wrap justify-between gap-2"><p className="font-medium">{title}</p>
    <span className="flex gap-4 text-xs text-mute"><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[#b9b6ad]"/>Before</span><span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-brand"/>With BrandRaftar</span></span></div>
    <div className="space-y-5">{rows.map(([l,a,b],i)=>(<div key={l}><p className="mb-1.5 text-sm">{l}</p>
      <div className="mb-1.5 h-2.5 rounded-full bg-paper"><div className="fillw h-full rounded-full bg-[#b9b6ad]" style={{"--w":a+"%","--d":i*150}}/></div>
      <div className="h-2.5 rounded-full bg-paper"><div className="fillw h-full rounded-full bg-brand" style={{"--w":b+"%","--d":i*150+300}}/></div></div>))}</div>
    <p className="mt-4 text-xs text-mute">Illustrative. Actual outcomes vary by business and market.</p></div>);
}
export function Gauge({title,label,from,to}){
  return(<div className="card flex flex-col items-center !p-5 text-center md:!p-7"><p className="mb-4 font-medium">{title}</p>
    <svg viewBox="0 0 120 120" className="w-48" role="img" aria-label={label+" improves from "+from+" to "+to}>
      <circle cx="60" cy="60" r="50" fill="none" stroke="#e7e5de" strokeWidth="10"/>
      <circle className="ring" pathLength="100" cx="60" cy="60" r="50" fill="none" stroke="#ff5a1f" strokeWidth="10" strokeLinecap="round" transform="rotate(-90 60 60)" style={{"--v":to}}/>
      <text x="60" y="68" textAnchor="middle" fontSize="28" fontWeight="600" fill="#0b0b0c">{to}</text></svg>
    <p className="mt-2 text-sm text-mute">{label}: typical slow site <b className="text-ink">{from}</b> → BrandRaftar build <b className="text-brand">{to}</b></p>
    <p className="mt-3 text-xs text-mute">Illustrative target. Measured with Google Lighthouse.</p></div>);
}
export function ServiceVisual({v}){
  if(v.t=="bars")return <Bars title={v.title} rows={v.rows}/>;
  if(v.t=="gauge")return <Gauge {...v}/>;
  if(v.t=="line")return <GrowthChart title={v.title} a={v.a} b={v.b} from={v.from} to={v.to}/>;
  return <Funnel/>;
}
