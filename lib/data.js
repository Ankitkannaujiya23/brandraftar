export const site = {
  name: "BrandRaftar", url: "https://brandraftar.com",
  tel: "+918808247847", phone: "+91 88082 47847", wa: "918808247847", email: "techvechofficial@gmail.com"
};
export const wa = (t = "Hi BrandRaftar, I want to grow my business online.") => `https://wa.me/${site.wa}?text=${encodeURIComponent(t)}`;

export const services = [
  {
    slug: "branding", title: "Branding & Identity", short: "Logo, visual identity and messaging that make you look like the obvious choice.",
    h1: "Branding for local businesses that people remember",
    meta: "Logo design, brand identity and messaging for local businesses. Look premium, build trust and stand out from competitors.",
    intro: "A strong brand lets you charge more and convert faster. We build an identity system that works on your signboard, Instagram, packaging and website.",
    points: [["Brand strategy", "Positioning, audience and tone of voice defined before a single pixel."], ["Logo & identity", "Logo, colours, typography and usage guidelines."], ["Collateral", "Visiting cards, menus, packaging, social templates."], ["Brand messaging", "Taglines and copy that speak your customer’s language."]],
    deliver: ["Logo suite", "Brand guidelines PDF", "Social media kit", "Stationery & print files"],
    faqs: [["How long does branding take?", "Usually 2–4 weeks depending on scope and feedback speed."], ["Do I get the source files?", "Yes. You own all final files and the full brand guidelines."]]
  },
  {
    slug: "seo", title: "SEO & Local SEO", short: "Rank on Google and Maps when customers search near you.",
    h1: "SEO and local SEO that brings customers to your door",
    meta: "Local SEO, Google Business Profile optimisation and on-page SEO for local businesses. Rank higher, get more calls and walk-ins.",
    intro: "Customers search before they buy. We make sure you show up on Google Search and Maps for the keywords that bring real enquiries, not just traffic.",
    points: [["Local SEO", "Google Business Profile, citations, reviews and map-pack ranking."], ["On-page & technical", "Speed, structure, schema and Core Web Vitals fixed properly."], ["Content & keywords", "Service and location pages built around buyer intent."], ["Link building", "Relevant, quality backlinks. No spammy shortcuts."]],
    deliver: ["SEO audit", "Keyword map", "Monthly ranking & lead report", "Google Business Profile management"],
    faqs: [["How soon will I see SEO results?", "Local SEO often moves in 6–12 weeks. Competitive keywords take longer. We report progress monthly."], ["Do you guarantee rank #1?", "No honest agency can. We commit to a transparent plan and measurable leads."]]
  },
  {
    slug: "performance-ads", title: "Performance Ads", short: "Google and Meta ads built to produce leads and sales, not just clicks.",
    h1: "Google and Meta ads that generate leads you can count",
    meta: "Google Ads, Facebook and Instagram ads management for local businesses. Lower cost per lead, tracked on WhatsApp, calls and forms.",
    intro: "We run ads against a clear cost-per-lead target, with call, WhatsApp and form tracking so you know exactly what each rupee returns.",
    points: [["Google Ads", "Search, Maps and Performance Max campaigns."], ["Meta Ads", "Facebook and Instagram creatives and audiences."], ["Conversion tracking", "Calls, WhatsApp clicks and forms tracked end to end."], ["Landing pages", "Fast pages built to turn clicks into enquiries."]],
    deliver: ["Campaign setup", "Ad creatives", "Weekly optimisation", "Clear monthly report"],
    faqs: [["What ad budget do I need?", "It depends on your city and industry. We suggest a test budget after a free audit."], ["Is ad spend included in your fee?", "No. Ad spend is paid directly to Google or Meta from your account."]]
  },
  {
    slug: "website-design", title: "Website Design & Development", short: "Fast, SEO-ready websites that turn visitors into enquiries.",
    h1: "Fast, SEO-ready websites built to convert",
    meta: "Modern, fast, mobile-first website design and development for local businesses with SEO, WhatsApp and booking built in.",
    intro: "Your website is your 24/7 salesperson. We build lightning-fast sites with SEO, WhatsApp, call and booking forms built in from day one.",
    points: [["Modern design", "Clean, mobile-first and on brand."], ["Speed", "Static rendering and optimised images for 90+ Lighthouse scores."], ["Built-in SEO", "Schema, sitemap, clean URLs and metadata done right."], ["Conversion tools", "WhatsApp, click-to-call, booking and lead forms."]],
    deliver: ["Custom website", "On-page SEO setup", "Analytics & tracking", "Training & handover"],
    faqs: [["Which technology do you use?", "Next.js and Tailwind CSS, for speed and SEO. WordPress is available if you prefer."], ["Can I edit content myself?", "Yes. We can add a simple CMS so you update content without a developer."]]
  },
  {
    slug: "social-media", title: "Social Media & Content", short: "Consistent content that builds trust and keeps you top of mind.",
    h1: "Social media management that builds trust and demand",
    meta: "Social media management, reels and content creation for local businesses. Grow followers who actually become customers.",
    intro: "Posting is easy. Posting content that earns trust and enquiries is the hard part. We plan, create and publish content around your offers and audience.",
    points: [["Content calendar", "Monthly plan aligned with offers and festivals."], ["Reels & creatives", "Short videos and designs that fit the platform."], ["Community management", "Replies, DMs and reviews handled."], ["Reporting", "Reach, engagement and enquiries tracked."]],
    deliver: ["Monthly content calendar", "Posts, reels and stories", "Profile optimisation", "Monthly report"],
    faqs: [["Which platforms do you manage?", "Instagram, Facebook, LinkedIn, YouTube and Google Business Profile."], ["Do you shoot content?", "Yes. On-location shoots are available in select cities."]]
  },
  {
    slug: "lead-generation", title: "Lead Generation & Automation", short: "A full funnel: capture, follow up and close with WhatsApp automation.",
    h1: "Lead generation systems that turn enquiries into customers",
    meta: "Lead generation funnels, WhatsApp automation and CRM setup for local businesses. Capture, follow up and convert more enquiries.",
    intro: "Most businesses lose leads to slow follow-up. We connect your ads, website and WhatsApp into one funnel that responds instantly and keeps nurturing.",
    points: [["Funnel design", "Offer, landing page and follow-up sequence."], ["WhatsApp automation", "Instant replies, reminders and broadcasts."], ["CRM setup", "Every lead tracked from enquiry to sale."], ["Offers & retention", "Repeat-customer campaigns that grow lifetime value."]],
    deliver: ["Lead funnel", "WhatsApp flows", "CRM dashboard", "Weekly lead report"],
    faqs: [["Do I need a CRM?", "Not necessarily. We can start with a simple sheet-based system and upgrade later."], ["Can you follow up on my existing leads?", "Yes. We can set up re-engagement campaigns for your old enquiries."]]
  }
];
export const steps = [["01", "Audit", "We review your brand, website, ads, SEO and competitors. Free."], ["02", "Strategy", "A clear 90-day plan with goals, channels and budget."], ["03", "Execute", "Branding, website, SEO and ads go live. You see every step."], ["04", "Scale", "We track leads and sales, then double down on what works."]];
export const whys = [["Full-funnel, one team", "Branding, website, SEO, ads and follow-up work together, not in silos."], ["Local-first", "We know how Indian local customers search, compare and buy."], ["Transparent reporting", "Leads, calls and cost per lead. No vanity metrics."], ["WhatsApp-first support", "Talk to a real person, fast, on the channel you already use."]];
export const industries = ["Restaurants & Cafes", "Clinics & Dentists", "Salons & Spas", "Gyms & Studios", "Coaching & Education", "Real Estate", "Retail & D2C", "Home Services", "Hotels & Travel", "Interior & Construction"];
export const faqs = [
  ["What does BrandRaftar do?", "We help local businesses grow online through branding, websites, SEO, paid ads, social media and lead-generation systems."],
  ["Which businesses do you work with?", "Any local or service business: restaurants, clinics, salons, gyms, coaching centres, real estate, retail and more."],
  ["How do I get started?", "Book a free strategy call or message us on WhatsApp. We audit your current presence and share a plan."],
  ["How soon will I see results?", "Ads can bring leads within days. SEO and branding compound over 2–3 months. We share a timeline in your plan."],
  ["Do you work with businesses outside my city?", "Yes. We work with businesses across India, remotely and on call."],
  ["How is pricing decided?", "Pricing depends on scope and goals. After the free audit you get a clear, fixed proposal."]];

export const commitments = [["Free audit first", "We review your business before you spend anything."], ["You own everything", "Ad accounts, Google profile, domain and files stay in your name."], ["Plain-language reports", "Leads, calls and cost per lead every month. No jargon."], ["Scope and price in writing", "Clear deliverables and pricing before we start."]];
export const supports = [["Dedicated growth manager", "One person who knows your business and answers you."], ["WhatsApp support group", "Quick replies on the channel you already use."], ["Weekly progress updates", "Short updates on what shipped and what is next."], ["Monthly strategy call", "Review numbers, decide what to scale or stop."], ["Live reporting dashboard", "See leads, calls and spend in one place."], ["Creative and tech team", "Designers, developers, ad and SEO specialists in-house."]];
// Illustrative visuals only: replace with real client data once you have case studies.
export const extras = {
  branding: {
    vis: { t: "bars", title: "Brand strength: before vs after", rows: [["Brand recall", 25, 80], ["Customer trust", 35, 85], ["Pricing power", 30, 70]] },
    rm: ["Brand audit, competitor study and positioning", "Logo, identity system and messaging go live", "Roll out collateral and social kit, then track recall and enquiries"],
    kpi: ["Look premium at first glance", "Justify higher prices", "Stay consistent everywhere"]
  },
  seo: {
    vis: { t: "line", title: "Organic enquiries per month", from: "Month 1", to: "Month 6", a: "Without SEO", b: "With BrandRaftar" },
    rm: ["Audit, keyword map and Google Business Profile clean-up", "On-page fixes, service and location pages, citations", "Content, reviews, link building and monthly ranking reports"],
    kpi: ["Show up on Search and Maps", "Get calls from ready-to-buy customers", "Lower dependence on paid ads"]
  },
  "performance-ads": {
    vis: { t: "bars", title: "Campaign health: before vs after", rows: [["Tracked leads", 20, 85], ["Conversion rate", 30, 70], ["Wasted spend", 70, 25]] },
    rm: ["Tracking setup, audience research and first campaigns", "Test creatives, keywords and landing pages", "Cut what fails, scale what converts, report weekly"],
    kpi: ["Pay for leads, not clicks", "See cost per lead clearly", "Scale budget with confidence"]
  },
  "website-design": {
    vis: { t: "gauge", title: "Page speed score", label: "Mobile speed", from: 45, to: 95 },
    rm: ["Sitemap, wireframes and copy", "Design, build and on-page SEO", "Launch, speed testing, tracking and training"],
    kpi: ["Load fast on mobile", "Rank better with built-in SEO", "Convert visitors with WhatsApp and forms"]
  },
  "social-media": {
    vis: { t: "line", title: "Reach and engagement", from: "Month 1", to: "Month 6", a: "Irregular posting", b: "Planned content" },
    rm: ["Profile clean-up, content pillars and calendar", "Posts, reels and community replies go live", "Double down on formats that bring enquiries"],
    kpi: ["Stay visible every week", "Build trust before the first call", "Turn followers into enquiries"]
  },
  "lead-generation": {
    vis: { t: "funnel", title: "Your lead funnel" },
    rm: ["Map the funnel, offer and tracking", "Launch landing pages, WhatsApp flows and CRM", "Follow up faster, re-engage old leads, report weekly"],
    kpi: ["Reply to every lead instantly", "Never lose a follow-up", "Know which source brings sales"]
  }
};
