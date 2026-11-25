"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShortHero from "@/components/ShortHero";
import InteractiveIcon from "@/components/ui/InteractiveIcon";
import { siteContent } from "@/content/site";
import {
  Building2,
  FileText,
  Landmark,
  Scale,
  Gavel,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Briefcase,
  Users,
  Coins,
} from "pulsoicon-react";

export default function PropertyFinancePage() {
  const { propertyServices, propertyProcess, propertyChecklist, propertyFAQ } = siteContent;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "term-loans":
        return <InteractiveIcon icon={Building2} mode="hover" size={24} className="text-[#111111]" />;
      case "commercial-mortgages":
        return <InteractiveIcon icon={Landmark} mode="hover" size={24} className="text-[#111111]" />;
      case "lrd":
        return <InteractiveIcon icon={Coins} mode="hover" size={24} className="text-[#111111]" />;
      case "debt-syndication":
        return <InteractiveIcon icon={Briefcase} mode="hover" size={24} className="text-[#111111]" />;
      case "sarfaesi":
        return <InteractiveIcon icon={Scale} mode="hover" size={24} className="text-[#111111]" />;
      case "tender-auctions":
        return <InteractiveIcon icon={Gavel} mode="hover" size={24} className="text-[#111111]" />;
      case "dm-court-orders":
        return <InteractiveIcon icon={ShieldCheck} mode="hover" size={24} className="text-[#111111]" />;
      case "title-tsr":
        return <InteractiveIcon icon={FileText} mode="hover" size={24} className="text-[#111111]" />;
      default:
        return <InteractiveIcon icon={Building2} mode="hover" size={24} className="text-[#111111]" />;
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Navbar />
      <ShortHero
        breadcrumb="Property Finance & Possession"
        title="Property Finance, Possession & Tenders"
        intro="Structuring institutional credit for industrial assets, resolving complex SARFAESI recovery proceedings, and closing bank tender auctions across Gujarat."
      />

      {/* 1. Services Grid (8 Services) */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-14">
            <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
              MANDATE DESK SERVICES
            </span>
            <h2
              className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              Institutional credit &amp; statutory resolution.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {propertyServices.map((svc) => (
              <div
                key={svc.id}
                id={svc.id}
                data-icon-trigger
                className="group bg-white rounded-[24px] border border-[#E5E3DC] p-7 flex flex-col justify-between shadow-[0_4px_20px_rgba(23,16,13,0.02)] hover:shadow-[0_12px_36px_rgba(23,16,13,0.06)] hover:border-[#B2AFAE] transition-all cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E5E3DC] flex items-center justify-center mb-6 group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200">
                    {getServiceIcon(svc.id)}
                  </div>
                  <h3 className="text-[21px] text-[#111111] tracking-[-0.015em] mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-[16px] text-[#1A1A1A]/70 leading-[1.6] mb-6">
                    {svc.shortDescription}
                  </p>
                </div>
                <Link
                  href={`/contact?division=property&service=${svc.id}`}
                  className="inline-flex items-center gap-1.5 text-[16px] text-[#111111] hover:underline pt-2 border-t border-[#E5E3DC]/60 min-h-[44px]"
                >
                  <span>Initiate mandate &rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. "How a mandate works" (4-Step Process) */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-14">
            <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
              MANDATE WORKFLOW
            </span>
            <h2
              className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              How a mandate works.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {propertyProcess.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-[24px] border border-[#E5E3DC] p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[26px] text-[#111111]/40 block mb-4 font-mono">
                    {step.step}
                  </span>
                  <h3 className="text-[21px] text-[#111111] tracking-[-0.015em] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[16px] text-[#1A1A1A]/70 leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who We Work With */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
                COUNTERPARTIES
              </span>
              <h2
                className="text-[#111111] tracking-[-0.015em] leading-[1.1] mb-4"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                Who we work with.
              </h2>
              <p className="text-[18px] text-[#1A1A1A]/75 leading-[1.65]">
                We accept select mandates requiring structured advisory, clean title validation, and direct institutional lender coordination.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-[20px] border border-[#E5E3DC] p-6">
                <h4 className="text-[18px] text-[#111111] mb-2">Industrial Owners &amp; Promoters</h4>
                <p className="text-[16px] text-[#1A1A1A]/70 leading-relaxed">
                  Manufacturers expanding GIDC facilities or seeking term debt refinancing and working capital syndication.
                </p>
              </div>
              <div className="bg-white rounded-[20px] border border-[#E5E3DC] p-6">
                <h4 className="text-[18px] text-[#111111] mb-2">Commercial Real Estate Investors</h4>
                <p className="text-[16px] text-[#1A1A1A]/70 leading-relaxed">
                  Funds and family offices acquiring pre-leased corporate buildings, logistics parks, and retail corridors.
                </p>
              </div>
              <div className="bg-white rounded-[20px] border border-[#E5E3DC] p-6">
                <h4 className="text-[18px] text-[#111111] mb-2">Auction &amp; Tender Bidders</h4>
                <p className="text-[16px] text-[#1A1A1A]/70 leading-relaxed">
                  Participants bidding on bank SARFAESI auctions, DRT notices, and state liquidation assets.
                </p>
              </div>
              <div className="bg-white rounded-[20px] border border-[#E5E3DC] p-6">
                <h4 className="text-[18px] text-[#111111] mb-2">Institutional Lending Partners</h4>
                <p className="text-[16px] text-[#1A1A1A]/70 leading-relaxed">
                  Public and private sector banks seeking high-quality asset origination and verified title underwriting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Documents Checklist */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="bg-[#EFECE6] border border-[#E0DCD3] rounded-[24px] p-8 md:p-14">
            <div className="max-w-[800px] mb-8">
              <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
                PREPARATION &amp; READINESS
              </span>
              <h2
                className="text-[#111111] tracking-[-0.015em] leading-[1.1] mb-4"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                Documents checklist for mandate intake.
              </h2>
              <p className="text-[18px] text-[#1A1A1A]/75 leading-[1.6]">
                To initiate formal asset appraisal or title due diligence, our desk requests the following documentation:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {propertyChecklist.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-[16px] border border-[#D5D0C5] p-5 flex items-start gap-3.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#111111] shrink-0 mt-0.5" />
                  <span className="text-[16px] text-[#1A1A1A] leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
              <span className="text-[15px] text-[#1A1A1A]/65">
                Have confidential documents ready for initial screening?
              </span>
              <Link
                href="/contact?division=property"
                className="bg-[#111111] hover:bg-[#333333] text-white text-[16px] px-6 py-3 rounded-full transition-colors min-h-[44px] inline-flex items-center justify-center cursor-pointer shadow-xs"
              >
                Submit Documents to Desk &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ Accordion (6 Questions) */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-14 text-center max-w-[700px] mx-auto">
            <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
              QUESTIONS &amp; ANSWERS
            </span>
            <h2
              className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              Frequently asked property &amp; legal questions.
            </h2>
          </div>

          <div className="max-w-[880px] mx-auto space-y-4">
            {propertyFAQ.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-[18px] border border-[#E5E3DC] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 min-h-[56px] cursor-pointer"
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
                    <div className="px-6 pb-6 pt-1 text-[17px] text-[#1A1A1A]/75 leading-[1.65] border-t border-[#E5E3DC]/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Closing CTA -> /contact?division=property */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="bg-[#111111] rounded-[32px] text-white p-8 md:p-16 text-center">
            <div className="max-w-[720px] mx-auto">
              <h2 className="text-[32px] md:text-[44px] text-white tracking-[-0.015em] leading-[1.15] mb-4">
                Ready to review your commercial mandate?
              </h2>
              <p className="text-[18px] md:text-[20px] text-white/75 leading-[1.6] mb-8">
                Connect directly with our desk for preliminary title assessment, term loan syndication, or bank auction resolution.
              </p>
              <Link
                href="/contact?division=property"
                className="bg-white hover:bg-white/90 text-[#111111] text-[17px] px-8 py-3.5 rounded-full transition-colors min-h-[44px] inline-flex items-center justify-center cursor-pointer"
              >
                Discuss Property Mandate &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
