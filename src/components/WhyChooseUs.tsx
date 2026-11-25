import React from "react";
import { ShieldCheck, FileCheck, Landmark, Truck, Users, Scale } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Statutory & Title Due Diligence",
      desc: "Every real estate finance file and tender auction property undergoes legal scrutiny to prevent post-disbursement litigations.",
    },
    {
      title: "Direct Sourcing at Source Mandis",
      desc: "Agricultural commodities are procured from farm gates and APMC yards, ensuring genuine freshness and competitive base pricing.",
    },
    {
      title: "Banking Consortium Ties",
      desc: "Direct liaison with leading PSU and private banks to expedite pre-sanction appraisals and term loan disbursements.",
    },
    {
      title: "SARFAESI Legal Handover Expertise",
      desc: "Proven field coordination with revenue and local administrative authorities for lawful possession clearance.",
    },
    {
      title: "Strict Quality & Moisture Limits",
      desc: "Zero compromise on Sortex purity parameters, foreign matter tolerance, and standard lab-verified parameters.",
    },
    {
      title: "Direct Principal Attention",
      desc: "Transactions are spearheaded by seasoned principals, ensuring direct accountability, confidentiality, and swift turnaround.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Operational Principles
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-950 tracking-tight">
            How Guru International executes business
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Operating in real estate capital markets and bulk agro-trading requires high operational rigor, legal clarity, and transparent settlement terms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="text-xs font-mono font-bold text-slate-400 mb-2">0{idx + 1}</div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
