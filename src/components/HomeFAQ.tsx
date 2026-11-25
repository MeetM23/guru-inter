"use client";

import React, { useState } from "react";
import { siteContent } from "@/content/site";
import InteractiveIcon from "./ui/InteractiveIcon";
import { ChevronDown } from "pulsoicon-react";

export default function HomeFAQ() {
  const { homeFAQ } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-[88px] md:py-[140px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="mb-16 text-center max-w-[700px] mx-auto">
          <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
            COMMON INQUIRIES
          </span>
          <h2
            className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            Frequently asked questions.
          </h2>
        </div>

        <div className="max-w-[880px] mx-auto space-y-4">
          {homeFAQ.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-[18px] border border-[#E5E3DC] overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 min-h-[56px] cursor-pointer group"
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
                  <div className="px-6 pb-6 pt-1 text-[18px] text-[#1A1A1A]/75 leading-[1.65] border-t border-[#E5E3DC]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
