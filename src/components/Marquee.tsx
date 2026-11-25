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

  // Render the list twice in one continuous flex row for seamless translateX(0) -> translateX(-50%)
  const marqueeList = [...logos, ...logos];

  return (
    <section className="w-full bg-[#F7F6F2] pt-2 pb-24 select-none">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6">
        {/* Label above: 12px, weight 400, colour #1A1A1A at 50% opacity, centered, margin-bottom 28px */}
        <p className="text-[12px] font-normal text-[#1A1A1A]/50 text-center mb-7 tracking-normal">
          Trusted by buyers, lenders and mandis across Gujarat
        </p>

        {/* Track wrapper: max-width 960px, centered, overflow hidden, soft edge fade mask */}
        <div className="marquee-pause-hover marquee-mask max-w-[960px] mx-auto overflow-hidden">
          <div className="animate-logo-marquee flex items-center">
            {/* Primary Track */}
            <div className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16 flex-shrink-0">
              {logos.map((logo) => (
                <div key={logo.name} className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-[18px] md:h-[22px] w-auto grayscale opacity-45 hover:opacity-80 transition-opacity duration-200 select-none pointer-events-auto block"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Seamless Duplicate Track for continuous infinite translateX(-50%) */}
            <div className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16 flex-shrink-0" aria-hidden="true">
              {logos.map((logo, idx) => (
                <div key={`dup-${logo.name}-${idx}`} className="flex-shrink-0 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-[18px] md:h-[22px] w-auto grayscale opacity-45 hover:opacity-80 transition-opacity duration-200 select-none pointer-events-auto block"
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
