import React from "react";
import { MessageCircle, Check } from "lucide-react";

export default function AgroCommodities() {
  const commodities = [
    {
      id: "cumin",
      name: "Cumin Seeds (Jeera)",
      origin: "Gujarat & Rajasthan Mandi Belts",
      description:
        "Machine cleaned and Sortex sorted cumin seeds with bold seeds, high essential volatile oil content, and earthy aroma. Sourced directly from major APMC mandis including Unjha and Gondal.",
      specs: [
        { key: "Grade / Processing", value: "Machine Clean & 99% / 99.5% Sortex" },
        { key: "Volatile Oil Content", value: "Min 2.5% to 3.2%" },
        { key: "Moisture Content", value: "Max 8.0% - 9.0%" },
        { key: "Foreign Matter", value: "Less than 0.5% (Sortex Grade)" },
        { key: "Packaging", value: "25kg / 50kg PP & Jute Bags" },
      ],
      applications: "Spice Grinders, Extractors, Food Processors, Domestic Wholesale",
    },
    {
      id: "black-gram",
      name: "Black Gram (Urad / Urad Dal)",
      origin: "Central & Western Indian Mandis",
      description:
        "High-protein black gram available in whole grain (Sabut), split with skin (Chilka), and unhusked polished dal (Mogar/Dhuli). Ideal for commercial milling, papad manufacturers, and wholesale grocery supply.",
      specs: [
        { key: "Types Available", value: "Whole (Sabut), Split (Chilka), Washed (Dhuli)" },
        { key: "Moisture Content", value: "Max 10.0% - 11.5%" },
        { key: "Purity Level", value: "99% Machine Cleaned" },
        { key: "Foreign Matter", value: "Less than 1.0%" },
        { key: "Packaging", value: "30kg / 50kg Heavy-Duty Bags" },
      ],
      applications: "Dal Millers, Papad Manufacturers, FMCG Packers, Wholesale Mandis",
    },
    {
      id: "tuwar",
      name: "Tuwar / Toor (Pigeon Peas)",
      origin: "Gujarat, Maharashtra & MP Agricultural Hubs",
      description:
        "Selected bold-grain pigeon peas and processed Fatka tuwar dal. Known for uniform cooking recovery, authentic taste, and natural golden color without artificial adulteration.",
      specs: [
        { key: "Varieties", value: "Raw Grain & Finished Fatka Dal" },
        { key: "Moisture Content", value: "Max 10.0% - 11.0%" },
        { key: "Cooking Yield", value: "High Retention & Soft Texture" },
        { key: "Foreign Matter", value: "Nil / Regulated Standard" },
        { key: "Packaging", value: "25kg, 30kg & 50kg Branded Bags" },
      ],
      applications: "Institutional Food Supply, Regional Grocery Distributorships, Millers",
    },
  ];

  return (
    <section id="commodities" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/60 inline-block px-2.5 py-1 rounded border border-amber-300 mb-3">
            Commodity Trading Division
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-950 tracking-tight">
            Wholesale supply of Cumin Seeds, Black Gram & Tuwar
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Guru International procures agricultural staples directly from farmers and primary APMC mandis. We supply bulk consignments with strict moisture control, sortex cleaning, and dependable road logistics.
          </p>
        </div>

        {/* Commodity Specifications: Structured Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {commodities.map((item) => (
            <div
              key={item.id}
              className="border border-slate-200 rounded-lg bg-slate-50/50 flex flex-col justify-between overflow-hidden"
            >
              <div className="p-6 bg-white border-b border-slate-200">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {item.origin}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{item.name}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{item.description}</p>
              </div>

              {/* Technical Spec Sheet */}
              <div className="p-6 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Technical Specifications
                </div>
                <div className="divide-y divide-slate-200 border-t border-b border-slate-200 text-xs">
                  {item.specs.map((s, idx) => (
                    <div key={idx} className="py-2 flex justify-between gap-4">
                      <span className="text-slate-500">{s.key}</span>
                      <span className="font-semibold text-slate-900 text-right">{s.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 text-xs text-slate-600">
                  <span className="font-semibold text-slate-900">Key Buyers: </span>
                  {item.applications}
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-4 bg-slate-100 border-t border-slate-200">
                <a
                  href={`https://wa.me/919106571342?text=Hello%20Guru%20International,%20please%20share%20the%20current%20bulk%20mandi%20rate%20for%20${encodeURIComponent(
                    item.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 rounded text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Request Mandi Rate on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trade Logistics & Quality Checklist */}
        <div className="mt-12 border border-slate-200 rounded-lg p-6 bg-slate-50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-700">
          <div>
            <div className="font-bold text-slate-900 text-sm mb-1">Direct Mandi Sourcing</div>
            <p className="text-slate-600 leading-relaxed">
              Consignments sourced directly from APMC mandis without multiple broker markups.
            </p>
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm mb-1">Pre-Dispatch Inspection</div>
            <p className="text-slate-600 leading-relaxed">
              Moisture, grain purity, and bag weight verified prior to truck loading.
            </p>
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm mb-1">Standard Packaging</div>
            <p className="text-slate-600 leading-relaxed">
              Dispatched in new PP bags or customized export-grade jute packing.
            </p>
          </div>
          <div>
            <div className="font-bold text-slate-900 text-sm mb-1">Pan-India Freight</div>
            <p className="text-slate-600 leading-relaxed">
              Full truckload (FTL) delivery coordinated across consumer hubs and ports.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
