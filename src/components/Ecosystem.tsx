import React from "react";

export default function Ecosystem() {
  const items = [
    {
      title: "Banking Consortia",
      desc: "Structured capital networks",
    },
    {
      title: "GIDC Industrial Corridors",
      desc: "Industrial asset knowledge",
    },
    {
      title: "APMC Mandi Unjha",
      desc: "Commodity sourcing at origin",
    },
    {
      title: "SARFAESI Legal Desk",
      desc: "Resolution & execution support",
    },
  ];

  return (
    <section id="ecosystem" className="py-16 bg-[#F7F7F5] border-b border-[#E5E3DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center text-[10px] duna-mono uppercase text-[#898683] mb-8">
          OUR OPERATING ECOSYSTEM
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:border-r last:border-r-0 border-[#E5E3DC] flex flex-col items-center justify-center hover:bg-white/40 rounded-lg transition-colors duration-200"
            >
              <div className="text-sm font-semibold text-[#1A1816] tracking-tight">
                {item.title}
              </div>
              <div className="text-xs text-[#6B6864] mt-1 font-normal tracking-[-0.01em]">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
