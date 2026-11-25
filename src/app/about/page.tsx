"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShortHero from "@/components/ShortHero";
import InteractiveIcon from "@/components/ui/InteractiveIcon";
import { siteContent } from "@/content/site";
import { ShieldCheck, Compass, Scale, MessageSquare, ArrowRight, CheckCircle2 } from "pulsoicon-react";

export default function AboutPage() {
  const { about, company } = siteContent;

  const valueIconComponents = [
    ShieldCheck,
    Compass,
    Scale,
    MessageSquare,
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Navbar />
      <ShortHero
        breadcrumb="About"
        title="About Guru International"
        intro="Dual-division commercial advisory rooted in Western India. Grounded in hard assets, disciplined by institutional due diligence."
      />

      {/* Section 1: Story */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
                WHO WE ARE
              </span>
              <h2
                className="text-[#111111] tracking-[-0.015em] leading-[1.1] mb-6"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                Western India focus. <br />
                Two divisions. <br />
                One accountable desk.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-[18px] text-[#1A1A1A]/75 leading-[1.65]">
              <p>{about.storyP1}</p>
              <p>{about.storyP2}</p>
              <div className="pt-2 flex flex-wrap gap-4 text-[16px] text-[#111111]">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E5E3DC]">
                  <CheckCircle2 className="w-4 h-4 text-[#111111]" />
                  <span>Direct mandate representation</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E5E3DC]">
                  <CheckCircle2 className="w-4 h-4 text-[#111111]" />
                  <span>Statutory title scrutiny</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E5E3DC]">
                  <CheckCircle2 className="w-4 h-4 text-[#111111]" />
                  <span>Direct APMC yard sourcing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Values (4 Cards) */}
      <section id="values" className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-14 text-center max-w-[700px] mx-auto">
            <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
              MISSION &amp; VALUES
            </span>
            <h2
              className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              The principles behind every transaction.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.values.map((val, idx) => (
              <div
                key={val.title}
                data-icon-trigger
                className="group bg-white rounded-[24px] border border-[#E5E3DC] p-8 flex flex-col justify-between shadow-[0_4px_20px_rgba(23,16,13,0.02)] hover:border-[#B2AFAE] transition-all cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E5E3DC] flex items-center justify-center mb-6 text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200">
                    <InteractiveIcon
                      icon={valueIconComponents[idx]}
                      mode="hover"
                      size={24}
                    />
                  </div>
                  <h3 className="text-[21px] text-[#111111] tracking-[-0.015em] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-[17px] text-[#1A1A1A]/70 leading-[1.6]">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Timeline */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-16">
            <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
              DESK EVOLUTION
            </span>
            <h2
              className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              Milestones in Western India.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {about.milestones.map((milestone, idx) => (
              <div
                key={milestone.title}
                className="bg-white rounded-[20px] border border-[#E5E3DC] p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-[26px] text-[#111111] mb-2 font-mono">
                    {milestone.year}
                  </div>
                  <h4 className="text-[18px] text-[#111111] mb-3 leading-snug">
                    {milestone.title}
                  </h4>
                  <p className="text-[15px] text-[#1A1A1A]/70 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E5E3DC]/60 text-[14px] text-[#1A1A1A]/50">
                  Phase 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Leadership Card & Operating Principles */}
      <section id="principles" className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Leadership desk card */}
            <div className="lg:col-span-5 bg-white rounded-[24px] border border-[#E5E3DC] p-8 md:p-10 shadow-xs">
              <span className="text-[14px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-4">
                DESK LEADERSHIP
              </span>
              <div className="w-24 h-24 rounded-full bg-[#EFECE6] border border-[#E0DCD3] flex items-center justify-center text-[26px] text-[#111111] mb-6">
                NJ
              </div>
              <h3 className="text-[26px] text-[#111111] tracking-[-0.015em] mb-1">
                {company.principalName}
              </h3>
              <p className="text-[17px] text-[#1A1A1A]/70 mb-6">
                {company.principalRole}
              </p>
              <div className="space-y-3 pt-4 border-t border-[#E5E3DC] text-[16px]">
                <div className="flex items-center justify-between">
                  <span className="text-[#1A1A1A]/60">Direct phone:</span>
                  <a href={`tel:${company.phone}`} className="text-[#111111] hover:underline">
                    {company.phone}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1A1A1A]/60">Direct WhatsApp:</span>
                  <a
                    href={`https://wa.me/919106571342`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#111111] hover:underline"
                  >
                    {company.whatsapp}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#1A1A1A]/60">Mandate desk:</span>
                  <span className="text-[#111111]">Gujarat, India</span>
                </div>
              </div>
            </div>

            {/* Operating principles list */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-2">
                OPERATING PRINCIPLES
              </span>
              <h2
                className="text-[#111111] tracking-[-0.015em] leading-[1.1] mb-6"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                Statutory diligence. <br />
                Direct counterparties.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {about.principles.map((pr) => (
                  <div key={pr.title} className="bg-white rounded-[20px] border border-[#E5E3DC] p-6">
                    <h4 className="text-[18px] text-[#111111] mb-2">{pr.title}</h4>
                    <p className="text-[16px] text-[#1A1A1A]/70 leading-relaxed">{pr.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Closing CTA Band */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="relative overflow-hidden rounded-[32px] bg-[#111111] text-white p-8 md:p-16 text-center">
            <div className="relative z-10 max-w-[700px] mx-auto">
              <h2 className="text-[32px] md:text-[44px] text-white tracking-[-0.015em] leading-[1.15] mb-4">
                Have a mandate or a bulk requirement?
              </h2>
              <p className="text-[18px] md:text-[20px] text-white/75 leading-[1.6] mb-8">
                Speak directly with Naresh Jadav to review property particulars, title documentation, or crop delivery parameters.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="bg-white hover:bg-white/90 text-[#111111] text-[17px] px-7 py-3.5 rounded-full transition-colors min-h-[44px] inline-flex items-center justify-center"
                >
                  Schedule Consultation
                </Link>
                <a
                  href="https://wa.me/919106571342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/15 hover:bg-white/25 text-white border border-white/20 text-[17px] px-7 py-3.5 rounded-full transition-colors min-h-[44px] inline-flex items-center justify-center"
                >
                  WhatsApp the desk
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
