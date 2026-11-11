// Animated growth visual for the hero. Pure SVG + CSS, no extra libraries.
export default function HeroGrowth() {
    const bars = [40, 62, 55, 90, 120, 160, 215];
    return (
        <div className="hg relative aspect-square w-full" role="img" aria-label="Animated illustration of business growth: bars and a line rising upward">
            <style>{`
      .hg .bar{transform-box:fill-box;transform-origin:bottom;transform:scaleY(0);animation:hgUp 1.1s cubic-bezier(.2,.8,.2,1) forwards;animation-delay:calc(var(--i)*120ms + 400ms)}
      .hg .line{stroke-dasharray:1;stroke-dashoffset:1;animation:hgDraw 2.2s cubic-bezier(.2,.8,.2,1) 1.1s forwards}
      .hg .tip{opacity:0;animation:hgFade .6s ease 3s forwards}
      .hg .dot{transform-box:fill-box;transform-origin:center;animation:hgPulse 2s ease-in-out 3s infinite}
      .hg .streak{animation:hgStreak 3.2s linear infinite;animation-delay:calc(var(--i)*900ms)}
      .hg .chip{animation:hgFloat 5s ease-in-out infinite;animation-delay:calc(var(--i)*700ms)}
      @keyframes hgUp{to{transform:scaleY(1)}}
      @keyframes hgDraw{to{stroke-dashoffset:0}}
      @keyframes hgFade{to{opacity:1}}
      @keyframes hgPulse{50%{transform:scale(1.9);opacity:.35}}
      @keyframes hgStreak{from{transform:translateX(120px);opacity:0}20%{opacity:.8}to{transform:translateX(-260px);opacity:0}}
      @keyframes hgFloat{50%{transform:translateY(-10px)}}
      @media(prefers-reduced-motion:reduce){.hg .bar{transform:none}.hg .line{stroke-dashoffset:0}.hg .tip{opacity:1}}
    `}</style>
            <div className="absolute inset-0 rounded-[2rem] border border-line bg-white shadow-[0_40px_80px_-40px_rgba(255,90,31,.35)]" />
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs><linearGradient id="hgB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ff5a1f" /><stop offset="1" stopColor="#ffb347" /></linearGradient></defs>
                {[90, 150, 210, 270].map(y => <line key={y} x1="30" x2="370" y1={y} y2={y} stroke="#eeece5" />)}
                {[0, 1, 2].map(i => <line key={i} className="streak" style={{ "--i": i }} x1="370" x2={i == 1 ? "330" : "350"} y1={70 + i * 34} y2={70 + i * 34} stroke="#ff5a1f" strokeWidth="2" strokeLinecap="round" />)}
                {bars.map((h, i) => <rect key={i} className="bar" style={{ "--i": i }} x={36 + i * 48} y={330 - h} width="30" height={h} rx="8" fill={i > 3 ? "url(#hgB)" : "#ece9e1"} />)}
                <line x1="30" x2="370" y1="330" y2="330" stroke="#d9d6cc" />
                <path className="line" pathLength="1" d="M51 272C75 255 80 262 99 250S135 258 147 257S180 225 195 222S230 195 243 192S278 150 291 152S325 100 339 97" fill="none" stroke="#0b0b0c" strokeWidth="4" strokeLinecap="round" />
                <g className="tip"><path d="M322 88L345 86L343 109" fill="none" stroke="#0b0b0c" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle className="dot" cx="339" cy="97" r="6" fill="#ff5a1f" /><circle cx="339" cy="97" r="6" fill="#ff5a1f" /></g>
            </svg>
            <span className="chip absolute left-[6%] top-[8%] rounded-full border border-line bg-white px-4 py-2 text-xs font-medium shadow-lg" style={{ "--i": 0 }}><b className="text-brand">↗</b> More enquiries</span>
            <span className="chip absolute right-[4%] top-[34%] rounded-full bg-ink px-4 py-2 text-xs font-medium text-paper shadow-lg" style={{ "--i": 1 }}>Local rankings ↑</span>
            <span className="chip absolute bottom-[8%] left-[8%] rounded-full border border-line bg-white px-4 py-2 text-xs font-medium shadow-lg" style={{ "--i": 2 }}><b className="text-[#25d366]">●</b> WhatsApp leads ↑</span>
            <p className="absolute bottom-3 right-5 text-[10px] text-mute">Illustrative</p>
        </div>);
}