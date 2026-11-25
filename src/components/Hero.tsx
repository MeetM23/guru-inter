"use client";

import React from "react";
import Link from "next/link";
import InteractiveIcon from "./ui/InteractiveIcon";
import { Activity, ArrowRight, Calendar } from "pulsoicon-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-auto md:h-[860px] min-h-[720px] bg-[#F7F6F2]">
      {/* Background Landscape Illustration */}
      <img
        src="/hero-bg.png"
        alt="Industrial & Agriculture Landscape"
        className="absolute inset-0 w-full h-full object-cover object-top opacity-90 pointer-events-none select-none z-0"
      />

      {/* Overlay 1: Soft white wash halo behind the text block */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(247,246,242,0.75) 0%, rgba(247,246,242,0) 70%)",
        }}
      />

      {/* Overlay 2: Seamless bottom dissolve into #F7F6F2 with no hard edge */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(247,246,242,0) 55%, rgba(247,246,242,0.85) 85%, #F7F6F2 100%)",
        }}
      />

      {/* Content Block: centered, matching reference image positioning */}
      <div className="relative z-10 max-w-[1040px] mx-auto px-5 text-center pt-[150px] pb-[100px] md:pt-[270px] md:pb-0 flex flex-col items-center">
        {/* a) Eyebrow badge: exact compact size matching reference image */}
        <div className="hero-animate-badge mb-5">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[13px] text-white bg-[#111111]/90 hover:bg-[#111111] transition-colors duration-150 cursor-pointer shadow-xs min-h-[36px]"
          >
            {/* Looping pulse icon for live physical operations desk */}
            <InteractiveIcon
              icon={Activity}
              mode="loop"
              intervalMs={4000}
              size={13}
              className="text-[#C28F43] shrink-0"
            />
            <span>Western India Operations · Gujarat Mandi &amp; Property Desk</span>
            {/* Interactive hover arrow that glides forward when the badge is hovered */}
            <InteractiveIcon
              icon={ArrowRight}
              mode="hover"
              size={12}
              className="opacity-80 shrink-0"
            />
          </Link>
        </div>

        {/* b) Headline: font size matching reference image (~58px–60px desktop) managing in exactly 2 lines */}
        <h1
          className="hero-animate-h1 text-[#111111] tracking-[-0.015em] leading-[1.12] max-w-[1000px] mx-auto mb-4 text-center"
          style={{ fontSize: "clamp(32px, 4.2vw, 58px)" }}
        >
          <span className="block whitespace-normal sm:whitespace-nowrap">Industrial real estate finance</span>
          <span className="block whitespace-normal sm:whitespace-nowrap">&amp; bulk agro-commodity trade.</span>
        </h1>

        {/* c) Sub-copy: 16.5px, max-width 620px, breaking into 3 clean lines matching reference */}
        <p className="hero-animate-p text-[15px] md:text-[16.5px] leading-[1.6] tracking-normal text-[#1A1A1A]/75 max-w-[620px] mx-auto mb-7">
          Structuring institutional capital for commercial assets, resolving possession
          and government tender matters, and supplying verified Cumin Seeds, Black Gram
          and Tuwar.
        </p>

        {/* d) CTA: Single black pill button matching reference image */}
        <div className="hero-animate-cta flex flex-col items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#333333] text-white text-[16px] px-7 py-3.5 rounded-full transition-colors duration-150 min-h-[44px] cursor-pointer shadow-sm group"
          >
            {/* Interactive calendar icon that flips/lifts its rings on button hover */}
            <InteractiveIcon
              icon={Calendar}
              mode="hover"
              size={17}
              className="text-white/90"
            />
            <span>Schedule Consultation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
