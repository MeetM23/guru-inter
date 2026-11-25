"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-auto md:h-[820px] min-h-[680px] bg-[#F7F6F2]">
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
            "radial-gradient(ellipse 60% 45% at 50% 52%, rgba(247,246,242,0.75) 0%, rgba(247,246,242,0) 70%)",
        }}
      />

      {/* Overlay 2: Seamless bottom dissolve into #F7F6F2 with no hard edge or divider */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(247,246,242,0) 55%, rgba(247,246,242,0.85) 85%, #F7F6F2 100%)",
        }}
      />

      {/* Content Block: centered, starting padding-top 300px on desktop */}
      <div className="relative z-10 max-w-[840px] mx-auto px-5 text-center pt-[160px] pb-[120px] md:pt-[300px] md:pb-0 flex flex-col items-center">
        {/* a) Eyebrow badge */}
        <div className="hero-animate-badge mb-5">
          <a
            href="#inquiry"
            className="inline-flex items-center gap-1.5 px-3 py-[5px] rounded-full text-[11px] font-medium tracking-normal text-white bg-[#111111]/85 hover:bg-[#111111] transition-colors duration-150 cursor-pointer"
          >
            <span>Western India Operations · Gujarat Mandi &amp; Property Desk</span>
            <svg
              width="10"
              height="10"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="opacity-70"
            >
              <path d="M2.5 6h7m0 0l-3-3m3 3l-3 3" />
            </svg>
          </a>
        </div>

        {/* b) Headline (h1) - exactly 2 lines on desktop matching reference */}
        <h1
          className="hero-animate-h1 text-[#111111] font-normal leading-[1.04] tracking-[-0.045em] max-w-[800px] mx-auto mb-[18px]"
          style={{ fontSize: "clamp(32px, 3.9vw, 56px)" }}
        >
          <span className="block">Industrial real estate finance</span>
          <span className="block">&amp; bulk agro-commodity trade.</span>
        </h1>

        {/* c) Sub-copy (p) */}
        <p className="hero-animate-p text-[14px] md:text-[15px] leading-[1.5] font-normal tracking-[-0.005em] text-[#1A1A1A]/65 max-w-[440px] mx-auto mb-7">
          Structuring institutional capital for commercial assets, resolving possession
          and government tender matters, and supplying verified Cumin Seeds, Black Gram
          and Tuwar.
        </p>

        {/* d) CTA, ONE button only, like Duna */}
        <div className="hero-animate-cta flex flex-col items-center">
          <a
            href="#inquiry"
            className="inline-flex items-center justify-center bg-[#111111] hover:bg-[#333333] text-white text-[13px] font-medium px-[18px] py-[10px] rounded-full transition-colors duration-150 cursor-pointer shadow-xs"
          >
            Schedule Consultation
          </a>

          <a
            href="tel:+919428111775"
            className="mt-3.5 text-[13px] font-normal text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
          >
            Direct: +91 94281 11775
          </a>
        </div>
      </div>
    </section>
  );
}
