"use client";

import React from "react";

export default function Marquee() {
  const logos = [
    { name: "APMC Unjha", src: "/logos/apmc-unjha.svg" },
    { name: "Rajkot Yard", src: "/logos/rajkot-yard.svg" },
    { name: "GIDC", src: "/logos/gidc.svg" },
    { name: "NCDEX", src: "/logos/ncdex.svg" },
    { name: "SBI", src: "/logos/sbi.svg" },
    { name: "HDFC", src: "/logos/hdfc.svg" },
    { name: "Gondal APMC", src: "/logos/gondal-apmc.svg" },
    { name: "Kotak", src: "/logos/kotak.svg" },
  ];

  return (
    <section className="w-full bg-[#F7F6F2] pt-2 pb-[120px] select-none">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Label above: 16px, 60% opacity, margin-bottom 40px */}
        <p className="text-[16px] text-[#1A1A1A]/60 text-center mb-10 tracking-normal">
          Trusted by buyers, lenders and mandis across Gujarat
        </p>

        {/* Track wrapper: max-width 1200px, centered, overflow hidden, soft edge fade mask */}
        <div className="marquee-pause-hover marquee-mask max-w-[1200px] mx-auto overflow-hidden">
          <div className="animate-logo-marquee flex items-center">
            {/* Primary Track: gap 88px, logo height 36px, opacity 0.6 */}
            <div className="flex items-center gap-12 md:gap-[88px] pr-12 md:pr-[88px] flex-shrink-0">
              {logos.map((logo) => (
                <div key={logo.name} className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-[24px] md:h-[36px] w-auto grayscale opacity-60 hover:opacity-100 transition-opacity duration-200 select-none pointer-events-auto block"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Seamless Duplicate Track */}
            <div className="flex items-center gap-12 md:gap-[88px] pr-12 md:pr-[88px] flex-shrink-0" aria-hidden="true">
              {logos.map((logo, idx) => (
                <div key={`dup-${logo.name}-${idx}`} className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-[24px] md:h-[36px] w-auto grayscale opacity-60 hover:opacity-100 transition-opacity duration-200 select-none pointer-events-auto block"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
