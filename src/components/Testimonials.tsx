"use client";

import React from "react";
import { siteContent } from "@/content/site";

export default function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section className="py-[88px] md:py-[140px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80 overflow-hidden w-full">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 w-full overflow-hidden">
        <div className="mb-16 text-center max-w-[700px] mx-auto">
          <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
            COUNTERPARTY FEEDBACK
          </span>
          <h2
            className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            Trusted by borrowers, auction buyers &amp; mandi procurers.
          </h2>
        </div>

        {/* Quote Cards: Desktop 3 columns, mobile horizontal scroll */}
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory w-full max-w-full">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] border border-[#E5E3DC] p-8 md:p-10 flex flex-col justify-between shadow-xs min-w-[300px] md:min-w-0 snap-center shrink-0 md:shrink"
            >
              <div className="mb-8">
                <div className="text-[32px] text-[#111111]/30 leading-none mb-4 font-serif">
                  &ldquo;
                </div>
                <blockquote className="text-[20px] md:text-[21px] text-[#111111] leading-[1.55] tracking-[-0.01em]">
                  {item.quote}
                </blockquote>
              </div>

              <div className="pt-6 border-t border-[#E5E3DC]/70">
                <div className="text-[16px] text-[#111111] font-medium">{item.author}</div>
                <div className="text-[14px] text-[#1A1A1A]/65">{item.role}</div>
                <div className="text-[14px] text-[#1A1A1A]/50 mt-0.5">{item.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
