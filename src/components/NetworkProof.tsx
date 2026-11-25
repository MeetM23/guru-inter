import React from "react";

export default function NetworkProof() {
  const partners = [
    { title: "National Banking Consortia", subtitle: "Public & Private Lending Panels" },
    { title: "Gujarat Industrial Corridors", subtitle: "GIDC & Industrial Plot Allotments" },
    { title: "APMC Mandi Unjha & Gondal", subtitle: "Direct Cumin & Pulse Sourcing Yards" },
    { title: "SARFAESI Legal Handover Desk", subtitle: "DM/CMM Order Compliance" },
  ];

  return (
    <div className="border-b border-[#E5E3DC] bg-[#FAF9F5]/70 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <p className="text-center text-[11px] font-mono uppercase tracking-wider text-[#898683] mb-6">
          Operating Across Banking Consortia, Industrial Estates & Agricultural Mandis
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {partners.map((item, idx) => (
            <div key={idx} className="p-3 border border-[#E5E3DC]/60 rounded-lg bg-white/50">
              <div className="text-xs sm:text-sm font-semibold text-[#1A1816] tracking-tight">
                {item.title}
              </div>
              <div className="text-[10px] text-[#6B6864] mt-0.5">{item.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
