import React from "react";
import { Building2, Scale, Wheat, Check, ArrowRight } from "lucide-react";

export default function DunaBentoCards() {
  const cards = [
    {
      number: "01",
      tag: "Credit Underwriting",
      title: "Industrial & Commercial Property Financing",
      description:
        "Bespoke debt underwriting for factories, logistics parks, retail plazas, and commercial plot developments with competitive institutional terms.",
      features: [
        "Lease Rental Discounting (LRD) on occupied commercial spaces",
        "Project term debt for industrial manufacturing units",
        "30-year sub-registrar title search reports (TSR)",
      ],
      linkText: "Explore Property Finance",
      href: "#property-finance",
    },
    {
      number: "02",
      tag: "Statutory Resolution",
      title: "Government Tender & Possession Matters",
      description:
        "Specialized field coordination and legal clearance for properties acquired through government tenders, state e-auctions, and SARFAESI bank auctions.",
      features: [
        "Section 13(2) & 13(4) notice resolution and OTS support",
        "Physical possession execution via Court Commissioner / DM orders",
        "Municipal and statutory dues clearance for clean mutation",
      ],
      linkText: "Explore Possession Advisory",
      href: "#possession-tender",
    },
    {
      number: "03",
      tag: "Agro Mandi Supply",
      title: "Bulk Trading of Cumin, Black Gram & Tuwar",
      description:
        "Wholesale supply sourced directly from primary APMC mandis. Rigorous Sortex sorting, moisture control, and full containerized logistics across India.",
      features: [
        "Cumin Seeds (Jeera): Machine Clean & Sortex 99.5%",
        "Black Gram (Urad): Whole Sabut, Split & Washed Dhuli",
        "Tuwar / Toor (Pigeon Peas): High-yield Fatka dal",
      ],
      linkText: "Explore Commodity Grades",
      href: "#commodities",
    },
  ];

  return (
    <section id="property-finance" className="py-20 bg-[#F7F7F5] border-b border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="text-[11px] font-mono uppercase tracking-wider text-[#898683] mb-2">
            Structured Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1816] tracking-tight leading-tight">
            Institutional execution built for <span className="font-semibold">high-stakes transactions.</span>
          </h2>
          <p className="mt-3 text-sm text-[#4D4846] leading-relaxed">
            Every division is designed to eliminate operational bottlenecks — whether structuring a multi-crore mortgage, executing a physical property takeover, or dispatching 100 MT of Sortex seeds.
          </p>
        </div>

        {/* 3 Bento Cards modeled after Duna */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#E5E3DC] p-7 flex flex-col justify-between hover:border-[#B2AFAE] transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.02)]"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#EDECE7] mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#898683]">
                    {card.tag}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#1A1816]">{card.number}</span>
                </div>

                <h3 className="text-xl font-semibold text-[#1A1816] tracking-tight mb-3">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4D4846] leading-relaxed mb-6">
                  {card.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[#EDECE7] mb-6">
                  {card.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-[#1A1816]">
                      <span className="text-[#898683] font-bold mt-0.5">&bull;</span>
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={card.href}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A1816] hover:text-amber-700 transition-colors pt-2"
              >
                <span>{card.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
