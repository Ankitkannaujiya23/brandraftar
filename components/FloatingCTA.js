import Link from "next/link";
import {site,wa} from "@/lib/data";
export default function FloatingCTA(){
  const c="rounded-full px-5 py-2.5 text-sm font-medium transition hover:bg-brand hover:text-white";
  return(<div className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 gap-1 rounded-full bg-ink p-1.5 text-paper shadow-2xl" style={{marginBottom:"env(safe-area-inset-bottom)"}}>
    <a className={c} href={wa()} target="_blank" rel="noopener noreferrer">WhatsApp</a>
    <a className={c} href={"tel:"+site.tel}>Call</a>
    <Link className={c} href="/contact">Book</Link></div>);
}
