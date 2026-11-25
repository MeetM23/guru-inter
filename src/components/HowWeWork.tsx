"use client";

import React from "react";
import { siteContent } from "@/content/site";

export default function HowWeWork() {
  const { howWeWork } = siteContent;

  return (
    <section className="py-[88px] md:py-[140px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="mb-16">
          <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
            PROCESS &amp; EXECUTION
          </span>
          <h2
            className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            How we work.
          </h2>
        </div>

        {/* 4 numbered steps in a horizontal line with a connecting hairline */}
        <div className="relative">
          {/* Connecting hairline on desktop */}
          <div className="hidden md:block absolute top-[28px] left-[40px] right-[40px] h-[1px] bg-[#D5D0C5] z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {howWeWork.map((step) => (
              <div key={step.step} className="flex flex-col">
                {/* Step indicator circle */}
                <div className="w-14 h-14 rounded-full bg-white border border-[#D5D0C5] flex items-center justify-center text-[18px] text-[#111111] font-mono mb-6 shadow-xs">
                  {step.step}
                </div>
                <h3 className="text-[21px] text-[#111111] tracking-[-0.015em] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-[17px] text-[#1A1A1A]/75 leading-[1.6]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
