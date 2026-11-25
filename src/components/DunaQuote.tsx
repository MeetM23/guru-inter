import React from "react";

export default function DunaQuote() {
  return (
    <section id="operations" className="py-20 bg-[#FAF9F5] border-b border-[#E5E3DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <div className="text-[11px] font-mono uppercase tracking-wider text-[#898683] mb-6">
          Operating Philosophy
        </div>

        <blockquote className="text-xl sm:text-2xl lg:text-3xl font-normal text-[#1A1816] leading-relaxed tracking-tight">
          &ldquo;Operating at the intersection of commercial capital, distressed government tender properties, and agricultural trade requires rigorous ground execution and unwavering legal clarity.&rdquo;
        </blockquote>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#1A1816] text-amber-400 font-bold text-xs flex items-center justify-center">
            GI
          </div>
          <div className="text-left">
            <div className="text-xs font-semibold text-[#1A1816]">Naresh Jadav</div>
            <div className="text-[11px] text-[#6B6864]">Principal &middot; Guru International</div>
          </div>
        </div>
      </div>
    </section>
  );
}
