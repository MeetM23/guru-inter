"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteContent } from "@/content/site";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CommoditySpotlight() {
  const { commodities } = siteContent;
  const [activeTab, setActiveTab] = useState(0);
  const current = commodities[activeTab];

  return (
    <section className="py-[88px] md:py-[140px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="mb-16">
          <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
            DIRECT APMC PROCUREMENT
          </span>
          <h2
            className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            Commodity spotlight.
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Product visual banner */}
          <div className="lg:col-span-5 bg-white rounded-[24px] border border-[#E5E3DC] p-8 md:p-12 flex flex-col justify-between shadow-xs">
            <div>
              <span className="text-[14px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-2">
                ORIGIN MANDI: {current.origin}
              </span>
              <h3 className="text-[32px] text-[#111111] tracking-[-0.015em] mb-4">
                {current.name}
              </h3>
              <p className="text-[18px] text-[#1A1A1A]/75 leading-[1.6] mb-8">
                {current.description}
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#E5E3DC]/70">
              <div className="flex items-center gap-3 text-[16px] text-[#1A1A1A]">
                <CheckCircle2 className="w-5 h-5 text-[#111111] shrink-0" />
                <span>Sortex machine cleaned &amp; graded</span>
              </div>
              <div className="flex items-center gap-3 text-[16px] text-[#1A1A1A]">
                <CheckCircle2 className="w-5 h-5 text-[#111111] shrink-0" />
                <span>Weighbridge verified dispatches</span>
              </div>
              <div className="flex items-center gap-3 text-[16px] text-[#1A1A1A]">
                <CheckCircle2 className="w-5 h-5 text-[#111111] shrink-0" />
                <span>Moisture &amp; purity lab certified</span>
              </div>
            </div>
          </div>

          {/* Right: Tabs & Detailed specs */}
          <div className="lg:col-span-7 bg-white rounded-[24px] border border-[#E5E3DC] p-8 md:p-12 flex flex-col justify-between shadow-xs">
            <div>
              {/* Cumin / Urad / Tuwar Tabs */}
              <div className="flex flex-wrap gap-2.5 p-1.5 bg-[#FAF9F5] rounded-full border border-[#E5E3DC] mb-8">
                {commodities.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 min-h-[44px] py-2.5 px-4 rounded-full text-[16px] transition-all cursor-pointer ${
                      activeTab === idx
                        ? "bg-[#111111] text-white shadow-xs"
                        : "text-[#1A1A1A]/70 hover:text-[#111111]"
                    }`}
                  >
                    {item.name.split(" ")[0]}
                  </button>
                ))}
              </div>

              {/* Specs Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#FAF9F5] rounded-[16px] border border-[#E5E3DC] p-5">
                  <div className="text-[14px] label-uppercase text-[#1A1A1A]/60 mb-1 tracking-[0.06em]">
                    STANDARD GRADE
                  </div>
                  <div className="text-[20px] text-[#111111] font-medium">{current.specs.grade}</div>
                </div>

                <div className="bg-[#FAF9F5] rounded-[16px] border border-[#E5E3DC] p-5">
                  <div className="text-[14px] label-uppercase text-[#1A1A1A]/60 mb-1 tracking-[0.06em]">
                    PURITY GUARANTEE
                  </div>
                  <div className="text-[20px] text-[#111111] font-medium">{current.specs.purity}</div>
                </div>

                <div className="bg-[#FAF9F5] rounded-[16px] border border-[#E5E3DC] p-5">
                  <div className="text-[14px] label-uppercase text-[#1A1A1A]/60 mb-1 tracking-[0.06em]">
                    MOISTURE LIMIT
                  </div>
                  <div className="text-[20px] text-[#111111] font-medium">{current.specs.moisture}</div>
                </div>

                <div className="bg-[#FAF9F5] rounded-[16px] border border-[#E5E3DC] p-5">
                  <div className="text-[14px] label-uppercase text-[#1A1A1A]/60 mb-1 tracking-[0.06em]">
                    PACKAGING
                  </div>
                  <div className="text-[20px] text-[#111111] font-medium">{current.specs.packing}</div>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-[#E5E3DC]/70">
              <span className="text-[16px] text-[#1A1A1A]/70">
                Minimum order: <strong className="font-mono text-[#111111]">{current.specs.moq}</strong>
              </span>
              <Link
                href="/agro-commodities"
                className="bg-[#111111] hover:bg-[#333333] text-white text-[16px] px-6 py-3 rounded-full transition-colors min-h-[44px] inline-flex items-center justify-center cursor-pointer shadow-xs"
              >
                <span>View All Agro Specifications &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
