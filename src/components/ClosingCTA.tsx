"use client";

import React from "react";
import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section className="py-[88px] md:py-[140px] bg-[#F7F6F2]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-[#111111] text-white p-8 md:p-16 text-center shadow-lg">
          {/* Landscape image faded behind it */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none"
            style={{ backgroundImage: "url('/hero-bg.png')", filter: "grayscale(30%)" }}
          />

          <div className="relative z-10 max-w-[760px] mx-auto">
            <span className="text-[14px] label-uppercase text-white/60 tracking-[0.06em] block mb-3">
              START A CONVERSATION
            </span>
            <h2 className="text-[32px] md:text-[46px] text-white tracking-[-0.015em] leading-[1.15] mb-5">
              Have a mandate or a bulk requirement?
            </h2>
            <p className="text-[18px] md:text-[20px] text-white/80 leading-[1.6] mb-10">
              Direct consultation with Naresh Jadav to review property particulars, title documentation, or crop delivery parameters.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="bg-[#111111] hover:bg-[#222222] text-white border border-white/30 text-[17px] px-8 py-3.5 rounded-full transition-colors min-h-[44px] inline-flex items-center justify-center cursor-pointer shadow-sm"
              >
                Schedule Consultation
              </Link>
              <a
                href="https://wa.me/919106571342"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-white/90 text-[#111111] text-[17px] px-8 py-3.5 rounded-full transition-colors min-h-[44px] inline-flex items-center justify-center cursor-pointer shadow-sm"
              >
                WhatsApp the desk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
