// "use client";
// import { useState } from "react";
// import { services, wa } from "@/lib/data";
// export default function LeadForm({ service = "" }) {
//   const [st, setSt] = useState("idle");
//    const [d, setD] = useState(null);

//   async function submit(e) {
//     e.preventDefault(); setSt("loading");
//     const f = Object.fromEntries(new FormData(e.target)); setD(f);
//     try {
//       const r = await fetch("/api/lead", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
//       setSt(r.ok ? "done" : "error")
//     } catch { setSt("error") }
//   }

//   if (st == "done") return (<div className="card text-center"><p className="text-3xl font-medium tracking-tight">Thank you, {d.name}.</p>
//     <p className="mt-3 text-mute">We will contact you within 24 hours. For a faster reply, message us now.</p>
//     <a className="btn btn-p mt-6" target="_blank" rel="noopener noreferrer" href={wa(`Hi BrandRaftar, I am ${d.name} (${d.business || "business"}). I want help with ${d.service || "growing my business"}.`)}>Continue on WhatsApp</a></div>);
//   return (<form onSubmit={submit} className="card grid gap-4 md:grid-cols-2">
//     <label className="grid gap-1.5 text-sm">Name<input required name="name" autoComplete="name" className="inp" /></label>
//     <label className="grid gap-1.5 text-sm">Phone / WhatsApp<input required name="phone" type="tel" autoComplete="tel" className="inp" /></label>
//     <label className="grid gap-1.5 text-sm">Business name<input name="business" autoComplete="organization" className="inp" /></label>
//     <label className="grid gap-1.5 text-sm">Service needed<select name="service" defaultValue={service} className="inp"><option value="">Not sure yet</option>{services.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}</select></label>
//     <label className="grid gap-1.5 text-sm md:col-span-2">Preferred call time<input name="time" placeholder="e.g. Tomorrow, 4 PM" className="inp" /></label>
//     <label className="grid gap-1.5 text-sm md:col-span-2">Tell us about your goal<textarea name="message" rows={3} className="inp" /></label>
//     <input name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
//     <button disabled={st == "loading"} className="btn btn-p md:col-span-2" type="submit">{st == "loading" ? "Sending…" : "Book my free strategy call"}</button>
//     {st == "error" && <p className="text-sm text-red-600 md:col-span-2">Something went wrong. Please WhatsApp us instead.</p>}</form>);
// }



"use client";

import { useState } from "react";
import { services, wa } from "@/lib/data";

export default function LeadForm({ service = "" }) {
  const [st, setSt] = useState("idle");
  const [d, setD] = useState(null);

  async function submit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const f = Object.fromEntries(new FormData(form));

    // Honeypot spam protection
    if (f.company) {
      setSt("done");
      return;
    }

    setSt("loading");

    const payload = {
      name: f.name,
      phone: f.phone,
      business_name: f.business,
      service: f.service,
      preferred_call_time: f.time,
      goal: f.message,
      email: f.email,
      source: "BrandRaftar Website",
    };

    try {
      const r = await fetch(
        "https://api.yamanappliances.com/api/brandraftar/createEnquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await r.json();
      console.log("Lead submission response:", result);
      if (!r.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setD(f);
      setSt("done");
      form.reset();

    } catch (error) {
      console.error("Lead submission error:", error);
      setSt("error");
    }
  }

  if (st === "done") {
    return (
      <div className="card text-center">
        <p className="text-3xl font-medium tracking-tight">
          Thank you, <span className="font-bold text-brand">{d.name}!</span>
        </p>

        <p className="mt-3 text-mute">
          We will contact you within 24 hours.
          For a faster reply, message us now.
        </p>

        <a
          className="btn btn-p mt-6"
          target="_blank"
          rel="noopener noreferrer"
          href={wa(
            `Hi BrandRaftar, I am ${d.name} (${d.business || "business"}). I want help with ${d.service || "growing my business"}.`
          )}
        >
          Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      className="card grid gap-4 md:grid-cols-2"
    >
      <label className="grid gap-1.5 text-sm">
        Name
        <input required name="name" autoComplete="name" className="inp" />
      </label>

      <label className="grid gap-1.5 text-sm">
        Phone / WhatsApp
        <input required name="phone" type="tel" autoComplete="tel" className="inp" />
      </label>

      <label className="grid gap-1.5 text-sm">
        Email
        <input name="email" type="email" autoComplete="email" className="inp" />
      </label>

      <label className="grid gap-1.5 text-sm">
        Service needed
        <select name="service" defaultValue={service} className="inp">
          <option value="">Not sure yet</option>
          {services.map(s => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-1.5 text-sm ">
        Preferred call time
        <input name="time" placeholder="e.g. Tomorrow, 4 PM" className="inp" />
      </label>

      <label className="grid gap-1.5 text-sm">
        Business name
        <input name="business" autoComplete="organization" className="inp" />
      </label>

      <label className="grid gap-1.5 text-sm md:col-span-2">
        Tell us about your goal
        <textarea name="message" rows={3} className="inp" />
      </label>

      <input
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <button
        disabled={st === "loading"}
        className="btn btn-p md:col-span-2"
        type="submit"
      >
        {st === "loading" ? "Sending…" : "Book my free strategy call"}
      </button>

      {st === "error" && (
        <p className="text-sm text-red-600 md:col-span-2">
          Something went wrong. Please WhatsApp us instead.
        </p>
      )}
    </form>
  );
}
