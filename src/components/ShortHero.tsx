import React from "react";
import Link from "next/link";

interface ShortHeroProps {
  breadcrumb: string;
  title: string;
  intro: string;
}

export default function ShortHero({ breadcrumb, title, intro }: ShortHeroProps) {
  return (
    <section className="relative w-full overflow-hidden h-[480px] bg-[#F7F6F2] flex items-center">
      {/* Background Landscape Image cropped to center 40% */}
      <img
        src="/hero-bg.png"
        alt="Guru International Landscape"
        className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none select-none z-0"
        style={{ objectPosition: "center 40%" }}
      />

      {/* Radial soft wash halo */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(247,246,242,0.85) 0%, rgba(247,246,242,0) 75%)",
        }}
      />

      {/* Bottom fade into #F7F6F2 */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(247,246,242,0) 45%, rgba(247,246,242,0.85) 80%, #F7F6F2 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-5 md:px-8 pt-24 pb-8 flex flex-col items-start text-left">
        {/* Breadcrumb: 16px */}
        <div className="text-[16px] text-[#1A1A1A]/60 mb-3 flex items-center gap-2">
          <Link href="/" className="hover:text-[#111111] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#111111]">{breadcrumb}</span>
        </div>

        {/* H1: --text-2xl clamp(36px, 4vw, 52px), line-height 1.1 */}
        <h1
          className="text-[#111111] tracking-[-0.015em] leading-[1.1] mb-3 max-w-[900px]"
          style={{ fontSize: "var(--text-2xl)" }}
        >
          {title}
        </h1>

        {/* Intro: 20px */}
        <p className="text-[18px] md:text-[20px] text-[#1A1A1A]/75 leading-[1.5] max-w-[720px]">
          {intro}
        </p>
      </div>
    </section>
  );
}
