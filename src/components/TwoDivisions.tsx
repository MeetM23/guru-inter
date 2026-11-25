import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function TwoDivisions() {
  return (
    <section id="property-finance" className="py-20 bg-[#F7F7F5] border-b border-[#E5E3DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Section Header with exact Duna tracking & line-height */}
        <div className="mb-14">
          <div className="text-[10px] duna-mono uppercase text-[#898683] mb-3">
            TWO DIVISIONS, ONE ACCOUNTABLE DESK
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1816] tracking-[-0.035em] leading-[1.15]">
                Grounded in assets. <br />
                Connected to markets.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-xs sm:text-sm text-[#4D4846] leading-[1.65] tracking-[-0.01em] font-normal">
                From complex property mandates to everyday commodity movement, we bring local insight and a disciplined approach to every transaction.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Bento Cards with Duna easing & hover elevation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 01: Commercial Finance */}
          <div className="group bg-white rounded-2xl border border-[#E5E3DC] p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(23,16,13,0.02)] hover:shadow-[0_12px_36px_rgba(23,16,13,0.06)] hover:border-[#B2AFAE] transition-all duration-300 duna-ease">
            <div>
              <div className="flex items-center justify-between text-xs text-[#898683] mb-4">
                <span className="duna-mono text-[11px]">01</span>
                <ArrowUpRight className="w-4 h-4 text-[#1A1816] transition-transform duration-300 duna-ease group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="text-xl font-normal text-[#1A1816] tracking-[-0.025em] mb-2 leading-tight">
                Commercial <br />
                Finance
              </h3>

              <p className="text-xs text-[#6B6864] leading-relaxed mb-6 font-normal">
                Structured funding for industrial units, commercial property and income-generating assets across Gujarat.
              </p>

              {/* Inner Box: Asset-Led Finance */}
              <div className="bg-[#FAF9F5] border border-[#E5E3DC] rounded-xl p-4 mb-6">
                <div className="text-[9px] duna-mono uppercase text-[#898683] mb-3">
                  ASSET-LED FINANCE
                </div>
                <div className="flex items-center justify-between gap-1 text-[11px] font-medium text-[#1A1816]">
                  <span className="px-2 py-1 bg-white border border-[#E5E3DC] rounded text-center shrink-0">
                    Asset review
                  </span>
                  <span className="text-[#898683]">&rarr;</span>
                  <span className="px-2 py-1 bg-white border border-[#E5E3DC] rounded text-center shrink-0">
                    Structuring
                  </span>
                  <span className="text-[#898683]">&rarr;</span>
                  <span className="px-2 py-1 bg-white border border-[#E5E3DC] rounded text-center shrink-0">
                    Capital
                  </span>
                </div>
              </div>
            </div>

            <a
              href="#inquiry"
              className="inline-flex items-center gap-1 text-xs font-normal text-[#1A1816] hover:underline pt-2"
            >
              <span>Discuss property finance</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Card 02: Govt Tender & Possession */}
          <div id="possession-tender" className="group bg-white rounded-2xl border border-[#E5E3DC] p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(23,16,13,0.02)] hover:shadow-[0_12px_36px_rgba(23,16,13,0.06)] hover:border-[#B2AFAE] transition-all duration-300 duna-ease">
            <div>
              <div className="flex items-center justify-between text-xs text-[#898683] mb-4">
                <span className="duna-mono text-[11px]">02</span>
                <ArrowUpRight className="w-4 h-4 text-[#1A1816] transition-transform duration-300 duna-ease group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="text-xl font-normal text-[#1A1816] tracking-[-0.025em] mb-2 leading-tight">
                Govt Tender <br />
                &amp; Possession
              </h3>

              <p className="text-xs text-[#6B6864] leading-relaxed mb-6 font-normal">
                Navigate SARFAESI possession matters, government tenders and e-auction properties with a coordinated resolution desk.
              </p>

              {/* Inner Box: Resolution Workflow */}
              <div className="bg-[#FAF9F5] border border-[#E5E3DC] rounded-xl p-4 mb-6">
                <div className="text-[9px] duna-mono uppercase text-[#898683] mb-2">
                  RESOLUTION WORKFLOW
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[#1A1816] tracking-tight">Document review</div>
                    <div className="text-[10px] text-[#6B6864] mt-0.5">Title &middot; Revenue &middot; Tender conditions</div>
                  </div>
                  {/* Progress Line */}
                  <div className="w-16 h-1 bg-[#E5E3DC] rounded-full relative overflow-hidden">
                    <div className="w-9 h-1 bg-[#F59E0B] rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#inquiry"
              className="inline-flex items-center gap-1 text-xs font-normal text-[#1A1816] hover:underline pt-2"
            >
              <span>Explore resolution support</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Card 03: Bulk Mandi Commodities */}
          <div id="commodities" className="group bg-white rounded-2xl border border-[#E5E3DC] p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(23,16,13,0.02)] hover:shadow-[0_12px_36px_rgba(23,16,13,0.06)] hover:border-[#B2AFAE] transition-all duration-300 duna-ease">
            <div>
              <div className="flex items-center justify-between text-xs text-[#898683] mb-4">
                <span className="duna-mono text-[11px]">03</span>
                <ArrowUpRight className="w-4 h-4 text-[#1A1816] transition-transform duration-300 duna-ease group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <h3 className="text-xl font-normal text-[#1A1816] tracking-[-0.025em] mb-2 leading-tight">
                Bulk Mandi <br />
                Commodities
              </h3>

              <p className="text-xs text-[#6B6864] leading-relaxed mb-6 font-normal">
                Verified bulk sourcing of Cumin Seeds, Black Gram (Urad), and Tuwar (Pigeon Peas) from established APMC mandis.
              </p>

              {/* Inner Box: 99.5% Sortex */}
              <div className="bg-[#FAF9F5] border border-[#E5E3DC] rounded-xl p-4 mb-6">
                <div className="flex items-baseline justify-between">
                  <div className="text-2xl sm:text-3xl font-semibold text-[#1A1816] tracking-tight">
                    99.5%
                  </div>
                  <div className="text-[9px] duna-mono uppercase text-right text-[#898683]">
                    CUMIN SEEDS <br />
                    SORTEX GRADE
                  </div>
                </div>
                <div className="text-[9px] duna-mono uppercase text-[#898683] mt-2 pt-2 border-t border-[#E5E3DC]">
                  APMC JEERA &middot; BULK SOURCING
                </div>
              </div>
            </div>

            <a
              href="#inquiry"
              className="inline-flex items-center gap-1 text-xs font-normal text-[#1A1816] hover:underline pt-2"
            >
              <span>Speak to the commodity desk</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
