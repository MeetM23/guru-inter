"use client";

import React from "react";
import { siteContent } from "@/content/site";
import InteractiveIcon from "./ui/InteractiveIcon";
import { ShieldCheck, Store, Scale, BadgeDollarSign, Truck, UserCheck } from "pulsoicon-react";

export default function WhyGuru() {
  const { whyGuru } = siteContent;

  const iconComponents = [
    ShieldCheck,
    Store,
    Scale,
    BadgeDollarSign,
    Truck,
    UserCheck,
  ];

  return (
    <section className="py-[88px] md:py-[140px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="mb-16">
          <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
            COMPETITIVE ADVANTAGE
          </span>
          <h2
            className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            Why market participants choose Guru.
          </h2>
        </div>

        {/* 6 small feature tiles in a 3x2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyGuru.map((item, idx) => (
            <div
              key={item.id}
              data-icon-trigger
              className="group bg-white rounded-[24px] border border-[#E5E3DC] p-8 flex flex-col justify-between shadow-xs hover:border-[#B2AFAE] transition-all cursor-pointer"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E5E3DC] flex items-center justify-center mb-6 text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200">
                  <InteractiveIcon
                    icon={iconComponents[idx]}
                    mode="hover"
                    size={24}
                  />
                </div>
                <h3 className="text-[21px] text-[#111111] tracking-[-0.015em] mb-3">
                  {item.title}
                </h3>
                <p className="text-[17px] text-[#1A1A1A]/75 leading-[1.6]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
