"use client";

import React, { useState } from "react";
import { Building2, Scale, Wheat, CheckCircle2, ArrowRight, ShieldCheck, FileText } from "lucide-react";

export default function DunaInteractiveDeck() {
  const [activeTab, setActiveTab] = useState<"finance" | "possession" | "commodities">("finance");

  return (
    <div className="bg-white rounded-2xl border border-[#E5E3DC] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
      {/* Top Tab Switcher Strip */}
      <div className="bg-[#FAF9F5] border-b border-[#E5E3DC] px-4 py-2.5 flex items-center justify-between overflow-x-auto">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setActiveTab("finance")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "finance"
                ? "bg-[#1A1816] text-white shadow-sm"
                : "text-[#6B6864] hover:text-[#1A1816] hover:bg-[#EDECE7]/60"
            }`}
          >
            01 Industrial & Commercial Finance
          </button>
          <button
            onClick={() => setActiveTab("possession")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "possession"
                ? "bg-[#1A1816] text-white shadow-sm"
                : "text-[#6B6864] hover:text-[#1A1816] hover:bg-[#EDECE7]/60"
            }`}
          >
            02 Possession & Govt Tenders
          </button>
          <button
            onClick={() => setActiveTab("commodities")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "commodities"
                ? "bg-[#1A1816] text-white shadow-sm"
                : "text-[#6B6864] hover:text-[#1A1816] hover:bg-[#EDECE7]/60"
            }`}
          >
            03 Agro Commodities (Jeera, Urad, Tuwar)
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-[11px] text-[#898683] font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Active Operating Engine</span>
        </div>
      </div>

      {/* Main Tab Content Panel */}
      <div className="p-6 sm:p-8">
        {activeTab === "finance" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-block text-[11px] font-mono uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Capital Structuring & Mortgages
              </div>
              <h3 className="text-2xl font-semibold text-[#1A1816] tracking-tight">
                Industrial property loans & commercial term syndication
              </h3>
              <p className="text-xs sm:text-sm text-[#4D4846] leading-relaxed">
                We underwrite credit applications for greenfield factories, logistics hubs, and commercial centers through leading banking consortia and institutional lenders.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Lease Rental Discounting (LRD) on commercial assets</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Project term loans & factory expansion lines</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sub-registrar 30-year title search verification</span>
                </div>
              </div>
            </div>

            {/* Duna-style Simulated Operational Card */}
            <div className="lg:col-span-6 bg-[#FAF9F5] border border-[#E5E3DC] rounded-xl p-5 space-y-3.5">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#E5E3DC]">
                <span className="font-semibold text-[#1A1816]">Case File: Industrial Plant Loan</span>
                <span className="font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold">
                  VERIFIED
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-3 rounded border border-[#E5E3DC]">
                  <div className="text-[#898683] text-[10px] uppercase">Facility Type</div>
                  <div className="font-semibold text-[#1A1816] mt-0.5">Term Loan / LRD</div>
                </div>
                <div className="bg-white p-3 rounded border border-[#E5E3DC]">
                  <div className="text-[#898683] text-[10px] uppercase">Underwriting Window</div>
                  <div className="font-semibold text-[#1A1816] mt-0.5">14–21 Working Days</div>
                </div>
              </div>
              <div className="bg-white p-3 rounded border border-[#E5E3DC] text-xs space-y-1">
                <div className="text-[#898683] text-[10px] uppercase">Documentation Status</div>
                <div className="text-[#1A1816] font-medium flex items-center justify-between">
                  <span>Revenue Records (7/12 & 6A)</span>
                  <span className="text-emerald-600 font-bold">Clear</span>
                </div>
                <div className="text-[#1A1816] font-medium flex items-center justify-between">
                  <span>GIDC / Industrial Allotment NOC</span>
                  <span className="text-emerald-600 font-bold">Approved</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "possession" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-block text-[11px] font-mono uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Dispute & Statutory Resolution
              </div>
              <h3 className="text-2xl font-semibold text-[#1A1816] tracking-tight">
                SARFAESI possession matters & government tender clearance
              </h3>
              <p className="text-xs sm:text-sm text-[#4D4846] leading-relaxed">
                Specialized advisory representing property purchasers in statutory clearances, municipal auction allotments, bank auctions, and unencumbered physical possession transitions.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>SARFAESI Act Section 13(2) & 13(4) procedural resolution</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>DM / CMM Court Commissioner physical handover assistance</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Government tender property due diligence & auction bidding</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FAF9F5] border border-[#E5E3DC] rounded-xl p-5 space-y-3.5">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#E5E3DC]">
                <span className="font-semibold text-[#1A1816]">Resolution Pipeline</span>
                <span className="font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-bold">
                  ACTIVE CASE
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between bg-white p-3 rounded border border-[#E5E3DC]">
                  <div>
                    <div className="font-semibold text-[#1A1816]">Govt. Tender Bid Documentation</div>
                    <div className="text-[#898683] text-[10px]">EMD, eligibility criteria, title TSR</div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600">Completed</span>
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded border border-[#E5E3DC]">
                  <div>
                    <div className="font-semibold text-[#1A1816]">SARFAESI Handover Protocol</div>
                    <div className="text-[#898683] text-[10px]">District Magistrate order execution</div>
                  </div>
                  <span className="text-xs font-semibold text-amber-600">In Handover</span>
                </div>
                <div className="flex items-center justify-between bg-white p-3 rounded border border-[#E5E3DC]">
                  <div>
                    <div className="font-semibold text-[#1A1816]">Sub-Registrar Sale Certificate</div>
                    <div className="text-[#898683] text-[10px]">Registry, stamp duty, mutation entry</div>
                  </div>
                  <span className="text-xs font-semibold text-slate-400">Scheduled</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "commodities" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-block text-[11px] font-mono uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                APMC Direct Mandi Supply
              </div>
              <h3 className="text-2xl font-semibold text-[#1A1816] tracking-tight">
                Bulk trading of Cumin Seeds, Black Gram & Tuwar
              </h3>
              <p className="text-xs sm:text-sm text-[#4D4846] leading-relaxed">
                Direct procurement from Gujarat and western India APMC mandis. Full container and truckload consignments with Sortex cleaning, strict moisture benchmarks, and reliable dispatch.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cumin Seeds (Jeera): Machine Clean & Sortex 99.5%</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Black Gram (Urad): Whole (Sabut), Split & Washed Dhuli</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-[#1A1816]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tuwar Dal (Pigeon Peas): High cooking yield Fatka dal</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-[#FAF9F5] border border-[#E5E3DC] rounded-xl p-5 space-y-3.5">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-[#E5E3DC]">
                <span className="font-semibold text-[#1A1816]">Current Mandi Dispatch Board</span>
                <span className="font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[10px] font-bold">
                  LIVE GRADES
                </span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="bg-white p-3 rounded border border-[#E5E3DC] flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#1A1816]">Cumin Seeds (Jeera)</span>
                    <span className="block text-[10px] text-[#898683]">Sortex 99.5% &middot; Volatile Oil &gt;2.5%</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#1A1816]">25/50kg PP Bags</span>
                </div>
                <div className="bg-white p-3 rounded border border-[#E5E3DC] flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#1A1816]">Black Gram (Urad)</span>
                    <span className="block text-[10px] text-[#898683]">Whole & Split &middot; Moisture &lt;11%</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#1A1816]">30/50kg Bags</span>
                </div>
                <div className="bg-white p-3 rounded border border-[#E5E3DC] flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-[#1A1816]">Tuwar Dal (Pigeon Peas)</span>
                    <span className="block text-[10px] text-[#898683]">Grade A Fatka &middot; Unadulterated</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#1A1816]">Bulk FTL Supply</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
