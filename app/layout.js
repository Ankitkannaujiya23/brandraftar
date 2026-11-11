import "./globals.css";
import {Inter,Instrument_Serif} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import {site} from "@/lib/data";
const sans=Inter({subsets:["latin"],variable:"--font-sans",display:"swap"});
const serif=Instrument_Serif({subsets:["latin"],weight:"400",style:"italic",variable:"--font-serif",display:"swap"});
export const metadata={
  metadataBase:new URL(site.url),
  title:{default:"BrandRaftar | Branding, SEO & Ads for Local Businesses in India",template:"%s | BrandRaftar"},
  description:"BrandRaftar helps local businesses grow online with branding, SEO, Google and Meta ads, websites and lead generation. Book a free strategy call.",
  alternates:{canonical:"/"},
  openGraph:{type:"website",siteName:"BrandRaftar",url:site.url,images:["/og.png"]},
  twitter:{card:"summary_large_image"},
  robots:{index:true,follow:true}
};
export const viewport={themeColor:"#fafaf7"};
const ld={"@context":"https://schema.org","@graph":[
 {"@type":"Organization","@id":site.url+"/#org",name:"BrandRaftar",url:site.url,logo:site.url+"/og.png",email:site.email,telephone:site.tel},
 {"@type":"ProfessionalService",name:"BrandRaftar",url:site.url,telephone:site.tel,areaServed:"India",priceRange:"₹₹",description:"Branding, SEO, ads and lead generation for local businesses."},
 {"@type":"WebSite",name:"BrandRaftar",url:site.url}]};
export default function RootLayout({children}){
  return(<html lang="en" className={sans.variable+" "+serif.variable}><body className="font-sans">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld)}}/>
    <Header/><main>{children}</main><Footer/><FloatingCTA/></body></html>);
}
