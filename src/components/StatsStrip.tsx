"use client";

import React from "react";
import { siteContent } from "@/content/site";

export default function StatsStrip() {
  const { stats } = siteContent;

  return (
    <section className="py-16 md:py-20 bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className="text-[44px] md:text-[56px] text-[#111111] leading-none mb-3 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-[16px] text-[#1A1A1A]/70 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
