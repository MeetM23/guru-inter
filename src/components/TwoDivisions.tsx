"use client";

import React from "react";
import Link from "next/link";
import InteractiveIcon from "./ui/InteractiveIcon";
import { ArrowUpRight } from "pulsoicon-react";

export default function TwoDivisions() {
  return (
    <section id="divisions" className="py-[88px] md:py-[140px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-[16px] label-uppercase text-[#1A1A1A]/60 mb-4 tracking-[0.06em]">
            TWO DIVISIONS, ONE ACCOUNTABLE DESK
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2
                className="text-[#1A1A1A] tracking-[-0.015em] leading-[1.1]"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                Grounded in assets. <br />
                Connected to markets.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[18px] md:text-[21px] text-[#1A1A1A]/75 leading-[1.55]">
                From complex property mandates to everyday commodity movement, we bring local insight and a disciplined approach to every transaction.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Bento Cards: padding 40px, radius 24px, index 16px, title 26px, body 18px, links 17px */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 01: Commercial Finance */}
          <div data-icon-trigger className="group bg-white rounded-[24px] border border-[#E5E3DC] p-7 md:p-10 flex flex-col justify-between shadow-[0_4px_24px_rgba(23,16,13,0.02)] hover:shadow-[0_12px_36px_rgba(23,16,13,0.06)] hover:border-[#B2AFAE] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between text-[16px] text-[#1A1A1A]/60 mb-6">
                <span>01</span>
                <InteractiveIcon
                  icon={ArrowUpRight}
                  mode="hover"
                  size={20}
                  className="text-[#1A1A1A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              <h3 className="text-[26px] text-[#1A1A1A] tracking-[-0.015em] mb-4 leading-tight">
                Commercial <br />
                Finance
              </h3>

              <p className="text-[18px] text-[#1A1A1A]/75 leading-[1.65] mb-8">
                Structured funding for industrial units, commercial property and income-generating assets across Gujarat.
              </p>

              {/* Inner Process Strip */}
              <div className="bg-[#FAF9F5] border border-[#E5E3DC] rounded-[16px] p-4 sm:p-5 mb-8 overflow-hidden">
                <div className="text-[14px] label-uppercase text-[#1A1A1A]/60 mb-3 tracking-[0.06em]">
                  ASSET-LED FINANCE
                </div>
                <div className="flex items-center justify-between gap-1 text-[14px] text-[#1A1A1A]">
                  <span className="px-2 py-1 bg-white border border-[#E5E3DC] rounded text-center shrink-0">
                    Asset review
                  </span>
                  <span className="text-[#1A1A1A]/40">&rarr;</span>
                  <span className="px-2 py-1 bg-white border border-[#E5E3DC] rounded text-center shrink-0">
                    Structuring
                  </span>
                  <span className="text-[#1A1A1A]/40">&rarr;</span>
                  <span className="px-2 py-1 bg-white border border-[#E5E3DC] rounded text-center shrink-0">
                    Capital
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/property-finance"
              className="inline-flex items-center gap-1.5 text-[17px] text-[#1A1A1A] hover:underline pt-2 min-h-[44px]"
            >
              <span>Explore property finance &rarr;</span>
            </Link>
          </div>

          {/* Card 02: Govt Tender & Possession */}
          <div data-icon-trigger className="group bg-white rounded-[24px] border border-[#E5E3DC] p-7 md:p-10 flex flex-col justify-between shadow-[0_4px_24px_rgba(23,16,13,0.02)] hover:shadow-[0_12px_36px_rgba(23,16,13,0.06)] hover:border-[#B2AFAE] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between text-[16px] text-[#1A1A1A]/60 mb-6">
                <span>02</span>
                <InteractiveIcon
                  icon={ArrowUpRight}
                  mode="hover"
                  size={20}
                  className="text-[#1A1A1A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              <h3 className="text-[26px] text-[#1A1A1A] tracking-[-0.015em] mb-4 leading-tight">
                Govt Tender <br />
                &amp; Possession
              </h3>

              <p className="text-[18px] text-[#1A1A1A]/75 leading-[1.65] mb-8">
                Navigate SARFAESI possession matters, government tenders, and e-auction properties with a coordinated resolution desk.
              </p>

              {/* Inner Process Strip */}
              <div className="bg-[#FAF9F5] border border-[#E5E3DC] rounded-[16px] p-5 mb-8">
                <div className="text-[14px] label-uppercase text-[#1A1A1A]/60 mb-3 tracking-[0.06em]">
                  RESOLUTION WORKFLOW
                </div>
                <div className="flex items-center justify-between text-[15px] text-[#1A1A1A] bg-white border border-[#E5E3DC] rounded-[8px] p-3">
                  <div>
                    <div className="text-[#1A1A1A]">Document review</div>
                    <div className="text-[14px] text-[#1A1A1A]/60">TSR · SARFAESI · Tender conditions</div>
                  </div>
                  <span className="text-[#1A1A1A]/60 font-mono text-[14px]">02/04</span>
                </div>
              </div>
            </div>

            <Link
              href="/property-finance#sarfaesi"
              className="inline-flex items-center gap-1.5 text-[17px] text-[#1A1A1A] hover:underline pt-2 min-h-[44px]"
            >
              <span>Explore resolution support &rarr;</span>
            </Link>
          </div>

          {/* Card 03: Bulk Mandi Commodities */}
          <div data-icon-trigger className="group bg-white rounded-[24px] border border-[#E5E3DC] p-7 md:p-10 flex flex-col justify-between shadow-[0_4px_24px_rgba(23,16,13,0.02)] hover:shadow-[0_12px_36px_rgba(23,16,13,0.06)] hover:border-[#B2AFAE] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between text-[16px] text-[#1A1A1A]/60 mb-6">
                <span>03</span>
                <InteractiveIcon
                  icon={ArrowUpRight}
                  mode="hover"
                  size={20}
                  className="text-[#1A1A1A] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>

              <h3 className="text-[26px] text-[#1A1A1A] tracking-[-0.015em] mb-4 leading-tight">
                Bulk Mandi <br />
                Commodities
              </h3>

              <p className="text-[18px] text-[#1A1A1A]/75 leading-[1.65] mb-8">
                Verified bulk sourcing of Cumin Seeds, Black Gram (Urad), and Tuwar (Pigeon Peas) from established APMC mandis.
              </p>

              {/* Inner Metric Box */}
              <div className="bg-[#FAF9F5] border border-[#E5E3DC] rounded-[16px] p-5 mb-8 flex items-baseline justify-between">
                <div>
                  <div className="text-[32px] text-[#1A1A1A] leading-none mb-1">
                    99.5%
                  </div>
                  <div className="text-[14px] text-[#1A1A1A]/60">APMC UNJHA · BULK SOURCING</div>
                </div>
                <div className="text-right text-[14px] text-[#1A1A1A]/65">
                  CUMIN SEEDS <br />
                  SORTEX GRADE
                </div>
              </div>
            </div>

            <Link
              href="/agro-commodities"
              className="inline-flex items-center gap-1.5 text-[17px] text-[#1A1A1A] hover:underline pt-2 min-h-[44px]"
            >
              <span>Speak to commodity desk &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
