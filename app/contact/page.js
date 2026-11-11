import LeadForm from "@/components/LeadForm";
import {site,wa} from "@/lib/data";
export const metadata={title:"Contact & Book a Free Strategy Call",description:"Book a free strategy call with BrandRaftar or message us on WhatsApp to grow your local business online.",alternates:{canonical:"/contact"}};
export default function Contact(){
  return(<section className="py-24"><div className="wrap grid gap-12 md:grid-cols-5"><div className="md:col-span-2"><span className="eyebrow">Contact</span><h1 className="h2">Let’s talk <span className="font-serif italic text-brand">growth.</span></h1>
    <ul className="mt-8 space-y-3 text-mute"><li><a className="hover:text-ink" href={"tel:"+site.tel}>📞 {site.phone}</a></li><li><a className="hover:text-ink" target="_blank" rel="noopener noreferrer" href={wa()}>💬 WhatsApp us</a></li><li><a className="hover:text-ink" href={"mailto:"+site.email}>✉️ {site.email}</a></li></ul></div>
    <div className="md:col-span-3"><LeadForm/></div></div></section>);
}
