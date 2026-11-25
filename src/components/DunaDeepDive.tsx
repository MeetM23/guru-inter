import React from "react";
import { Check, ShieldCheck, ArrowRight, MessageCircle } from "lucide-react";

export default function DunaDeepDive() {
  return (
    <section id="possession-tender" className="py-20 bg-white border-b border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Detailed Editorial Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#898683]">
              Specialized Operations Desk
            </div>

            <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1816] tracking-tight leading-tight">
              Resolving government tender assets and <span className="font-semibold">SARFAESI possession.</span>
            </h2>

            <p className="text-sm text-[#4D4846] leading-relaxed">
              Acquiring assets via government auctions or bank SARFAESI sales offers exceptional entry valuations, but often comes with physical possession bottlenecks, pending municipal taxes, and title ambiguities.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-[#1A1816]">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#EDECE7] flex items-center justify-center text-[11px] font-mono font-bold shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <span className="font-semibold">Pre-Bid Verification & TSR: </span>
                  Comprehensive 30-year search report, encumbrance certificate, and revenue record validation before deposit of EMD.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#EDECE7] flex items-center justify-center text-[11px] font-mono font-bold shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <span className="font-semibold">Physical Possession Execution: </span>
                  Coordination with District Magistrate / Court Commissioner panels for unencumbered, lawful site handover.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#EDECE7] flex items-center justify-center text-[11px] font-mono font-bold shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <span className="font-semibold">Statutory Settlement & Mutation: </span>
                  Clearing past state electricity, municipal property tax, and recording final sale certificates at the Sub-Registrar office.
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a
                href="#inquiry"
                className="px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-[#1A1816] hover:bg-[#2D2926] transition-colors inline-flex items-center gap-1.5"
              >
                <span>Submit Property Case</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/919106571342"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#1A1816] hover:underline flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Technical Commodity Mandi Deep-Dive Box */}
          <div id="commodities" className="lg:col-span-6 bg-[#FAF9F5] border border-[#E5E3DC] rounded-2xl p-7 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E3DC]">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#898683] block">
                  Commodity Quality Matrix
                </span>
                <h3 className="text-base font-bold text-[#1A1816] mt-0.5">
                  Sortex Certified Mandi Specifications
                </h3>
              </div>
              <span className="text-xs font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                APMC DIRECT
              </span>
            </div>

            {/* Spec Table */}
            <div className="space-y-4 text-xs">
              <div className="bg-white p-4 rounded-xl border border-[#E5E3DC] space-y-2">
                <div className="flex justify-between items-center font-semibold text-[#1A1816]">
                  <span>Cumin Seeds (Jeera)</span>
                  <span className="text-emerald-700 font-mono">99.5% Sortex Clean</span>
                </div>
                <div className="text-[11px] text-[#6B6864] leading-relaxed">
                  Volatile oil content min 2.5% to 3.2%, moisture under 8.5%, zero foreign matter. Packed in 25/50kg laminated PP bags.
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E5E3DC] space-y-2">
                <div className="flex justify-between items-center font-semibold text-[#1A1816]">
                  <span>Black Gram (Urad / Urad Dal)</span>
                  <span className="text-emerald-700 font-mono">Machine Clean / Polished</span>
                </div>
                <div className="text-[11px] text-[#6B6864] leading-relaxed">
                  Available in Whole Sabut, Split Chilka, and Washed Mogar/Dhuli. Moisture controlled under 11% for high mill yield.
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-[#E5E3DC] space-y-2">
                <div className="flex justify-between items-center font-semibold text-[#1A1816]">
                  <span>Tuwar / Toor (Pigeon Peas)</span>
                  <span className="text-emerald-700 font-mono">Grade A Fatka Dal</span>
                </div>
                <div className="text-[11px] text-[#6B6864] leading-relaxed">
                  Raw grain and finished processed pulses with uniform golden grain texture, natural sweet flavor, and high cooking recovery.
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[#898683] pt-1 border-t border-[#E5E3DC] flex items-center justify-between">
              <span>Full Truckload (FTL) & Container Freight</span>
              <span>Direct APMC Invoicing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
