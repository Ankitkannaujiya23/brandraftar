"use client";
import {useEffect,useRef} from "react";
export default function Reveal({children,className="",delay=0,as:T="div"}){
  const r=useRef(null);
  useEffect(()=>{const e=r.current;if(!e)return;
    const io=new IntersectionObserver(([x])=>{if(x.isIntersecting){e.classList.add("in");io.disconnect()}},{threshold:.12});
    io.observe(e);return()=>io.disconnect()},[]);
  return <T ref={r} className={"rv "+className} style={{transitionDelay:delay+"ms"}}>{children}</T>;
}
