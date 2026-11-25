"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShortHero from "@/components/ShortHero";
import InteractiveIcon from "@/components/ui/InteractiveIcon";
import { siteContent } from "@/content/site";
import { CheckCircle2, ChevronDown, ArrowRight, ShieldCheck, Truck, Scale, Sparkles } from "pulsoicon-react";

export default function AgroCommoditiesPage() {
  const { commodities, commodityProcess, seasonality, commodityFAQ } = siteContent;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Navbar />
      <ShortHero
        breadcrumb="Bulk Agro Commodities"
        title="Bulk Agro Commodities"
        intro="Direct spot procurement and Sortex-grade processing of Cumin Seeds, Black Gram, and Tuwar Dal directly from established Gujarat APMC trading mandis."
      />

      {/* 1. 3 Large Product Cards */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-14">
            <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
              PRIMARY COMMODITY LINES
            </span>
            <h2
              className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              Verified APMC mandi supply.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {commodities.map((item) => (
              <div
                key={item.id}
                id={item.id}
                className="bg-white rounded-[24px] border border-[#E5E3DC] overflow-hidden flex flex-col justify-between shadow-[0_4px_20px_rgba(23,16,13,0.02)] hover:shadow-[0_12px_36px_rgba(23,16,13,0.06)] hover:border-[#B2AFAE] transition-all"
              >
                <div>
                  {/* Image placeholder / crop banner */}
                  <div className="w-full h-[220px] bg-[#EFECE6] border-b border-[#E5E3DC] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
                    <div className="w-16 h-16 rounded-full bg-white/70 border border-[#DBD7CC] flex items-center justify-center mb-3 text-[24px] text-[#111111]">
                      🌱
                    </div>
                    <span className="text-[14px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em]">
                      {item.origin}
                    </span>
                    <span className="text-[18px] text-[#111111] mt-1 font-mono">
                      {item.botanical}
                    </span>
                  </div>

                  <div className="p-7 md:p-8">
                    <h3 className="text-[26px] text-[#111111] tracking-[-0.015em] mb-2 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[16px] text-[#1A1A1A]/70 leading-[1.6] mb-6">
                      {item.description}
                    </p>

                    {/* Specifications List */}
                    <div className="space-y-3 pt-4 border-t border-[#E5E3DC]/60 text-[15px]">
                      <div className="flex items-center justify-between">
                        <span className="text-[#1A1A1A]/60">Standard Grade:</span>
                        <span className="text-[#111111] text-right">{item.specs.grade}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#1A1A1A]/60">Purity Guarantee:</span>
                        <span className="text-[#111111] text-right">{item.specs.purity}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#1A1A1A]/60">Max Moisture:</span>
                        <span className="text-[#111111] text-right">{item.specs.moisture}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#1A1A1A]/60">Packaging:</span>
                        <span className="text-[#111111] text-right">{item.specs.packing}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-[#1A1A1A]/60">Min Order Qty:</span>
                        <span className="text-[#111111] font-mono">{item.specs.moq}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-7 md:p-8 pt-0">
                  <Link
                    href={`/contact?division=agro&commodity=${item.id}`}
                    className="w-full bg-[#111111] hover:bg-[#333333] text-white text-[16px] py-3.5 rounded-full text-center transition-colors min-h-[44px] flex items-center justify-center cursor-pointer shadow-xs"
                  >
                    Request Quote &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Specs Table */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-14">
            <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
              STANDARDIZED PARAMETERS
            </span>
            <h2
              className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              Commodity trade specification matrix.
            </h2>
          </div>

          <div className="bg-white rounded-[24px] border border-[#E5E3DC] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#FAF9F5] border-b border-[#E5E3DC] text-[15px] label-uppercase text-[#1A1A1A]/60">
                    <th className="py-5 px-6">Product</th>
                    <th className="py-5 px-6">Grade / Type</th>
                    <th className="py-5 px-6">Purity Level</th>
                    <th className="py-5 px-6">Moisture Limit</th>
                    <th className="py-5 px-6">Packaging Mode</th>
                    <th className="py-5 px-6">Minimum Order</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E3DC]/70 text-[16px] text-[#1A1A1A]">
                  {commodities.map((item) => (
                    <tr key={item.id} className="hover:bg-[#FAF9F5]/60 transition-colors">
                      <td className="py-5 px-6 font-medium text-[#111111]">{item.name}</td>
                      <td className="py-5 px-6 text-[#1A1A1A]/75">{item.specs.grade}</td>
                      <td className="py-5 px-6 text-[#1A1A1A]/75">{item.specs.purity}</td>
                      <td className="py-5 px-6 text-[#1A1A1A]/75">{item.specs.moisture}</td>
                      <td className="py-5 px-6 text-[#1A1A1A]/75">{item.specs.packing}</td>
                      <td className="py-5 px-6 font-mono text-[#111111]">{item.specs.moq}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sourcing -> Quality -> Dispatch Process */}
      <section id="dispatch" className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-14">
            <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
              SUPPLY CHAIN INTEGRITY
            </span>
            <h2
              className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              From APMC auction floor to buyer warehouse.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {commodityProcess.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-[24px] border border-[#E5E3DC] p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[26px] text-[#111111]/40 block mb-4 font-mono">
                    {step.step}
                  </span>
                  <h3 className="text-[21px] text-[#111111] tracking-[-0.015em] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[16px] text-[#1A1A1A]/70 leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Seasonality Strip */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-14">
            <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
              MANDI CALENDAR
            </span>
            <h2
              className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              Harvest arrivals &amp; crop seasonality.
            </h2>
          </div>

          <div className="bg-white rounded-[24px] border border-[#E5E3DC] p-8 md:p-10 shadow-xs">
            <div className="grid grid-cols-12 gap-2 text-center text-[15px] mb-4">
              {seasonality.map((s) => (
                <div key={s.month} className="font-mono text-[#111111] font-medium">
                  {s.month}
                </div>
              ))}
            </div>

            {/* Row 1: Cumin */}
            <div className="mb-6">
              <div className="text-[15px] text-[#111111] font-medium mb-2">
                Cumin Seeds (Jeera) — Peak Arrivals: Feb to Apr
              </div>
              <div className="grid grid-cols-12 gap-2">
                {seasonality.map((s) => (
                  <div
                    key={`c-${s.month}`}
                    className={`h-8 rounded-[6px] ${
                      s.cumin ? "bg-[#111111] text-white text-[12px] flex items-center justify-center" : "bg-[#FAF9F5]"
                    }`}
                  >
                    {s.cumin ? "Peak" : ""}
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2: Black Gram */}
            <div className="mb-6">
              <div className="text-[15px] text-[#111111] font-medium mb-2">
                Black Gram (Urad) — Peak Arrivals: Sep to Nov
              </div>
              <div className="grid grid-cols-12 gap-2">
                {seasonality.map((s) => (
                  <div
                    key={`u-${s.month}`}
                    className={`h-8 rounded-[6px] ${
                      s.urad ? "bg-[#111111] text-white text-[12px] flex items-center justify-center" : "bg-[#FAF9F5]"
                    }`}
                  >
                    {s.urad ? "Peak" : ""}
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3: Tuwar Dal */}
            <div>
              <div className="text-[15px] text-[#111111] font-medium mb-2">
                Tuwar Dal (Pigeon Pea) — Peak Arrivals: Dec to Feb
              </div>
              <div className="grid grid-cols-12 gap-2">
                {seasonality.map((s) => (
                  <div
                    key={`t-${s.month}`}
                    className={`h-8 rounded-[6px] ${
                      s.tuwar ? "bg-[#111111] text-white text-[12px] flex items-center justify-center" : "bg-[#FAF9F5]"
                    }`}
                  >
                    {s.tuwar ? "Peak" : ""}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Accordion */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-14 text-center max-w-[700px] mx-auto">
            <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
              COMMODITY FAQ
            </span>
            <h2
              className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              Frequently asked questions on bulk crop trade.
            </h2>
          </div>

          <div className="max-w-[880px] mx-auto space-y-4">
            {commodityFAQ.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[18px] border border-[#E5E3DC] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 min-h-[56px] cursor-pointer"
                  >
                    <span className="text-[18px] md:text-[20px] text-[#111111] leading-snug">
                      {faq.question}
                    </span>
                    <div className={`transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
                      <InteractiveIcon
                        icon={ChevronDown}
                        mode="active"
                        active={isOpen}
                        size={20}
                        className="text-[#111111]"
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-[17px] text-[#1A1A1A]/75 leading-[1.65] border-t border-[#E5E3DC]/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Closing CTA -> /contact?division=agro */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="bg-[#111111] rounded-[32px] text-white p-8 md:p-16 text-center">
            <div className="max-w-[720px] mx-auto">
              <h2 className="text-[32px] md:text-[44px] text-white tracking-[-0.015em] leading-[1.15] mb-4">
                Require bulk grain or spice supply?
              </h2>
              <p className="text-[18px] md:text-[20px] text-white/75 leading-[1.6] mb-8">
                Request spot rate quotes, moisture inspection certificates, or schedule an APMC yard inspection with our procurement team.
              </p>
              <Link
                href="/contact?division=agro"
                className="bg-white hover:bg-white/90 text-[#111111] text-[17px] px-8 py-3.5 rounded-full transition-colors min-h-[44px] inline-flex items-center justify-center cursor-pointer"
              >
                Request Commodity Quote &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
