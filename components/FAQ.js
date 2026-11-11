export default function FAQ({items}){
  const ld={"@context":"https://schema.org","@type":"FAQPage",mainEntity:items.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};
  return(<div>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
    {items.map(([q,a])=>(<details key={q} className="group border-b border-line py-6">
      <summary className="flex cursor-pointer list-none items-center justify-between text-xl font-medium tracking-tight md:text-2xl">{q}<span className="text-brand transition group-open:rotate-45">+</span></summary>
      <p className="mt-3 max-w-2xl text-mute">{a}</p></details>))}</div>);
}
