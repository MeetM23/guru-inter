"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShortHero from "@/components/ShortHero";
import InquirySection from "@/components/InquirySection";
import { siteContent } from "@/content/site";
import InteractiveIcon from "@/components/ui/InteractiveIcon";
import {
  Phone,
  MessageCircle,
  Mail,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Search,
  Scale,
} from "pulsoicon-react";

function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const divParam = searchParams.get("division");
  const defaultDiv = divParam === "agro" ? "agro" : "property";

  return <InquirySection defaultDivision={defaultDiv} isFullPage={true} />;
}

export default function ContactPage() {
  const { company, hubs, contact } = siteContent;

  return (
    <main className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Navbar />
      <ShortHero
        breadcrumb="Contact the Desk"
        title="Contact the Desk"
        intro="Direct mandate advisory for commercial asset financing and wholesale agro-commodity procurement in Western India."
      />

      {/* 1. Contact Cards Grid */}
      <section className="py-[88px] md:py-[100px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone Card */}
            <div data-icon-trigger className="group bg-white rounded-[24px] border border-[#E5E3DC] p-7 shadow-xs flex flex-col justify-between hover:border-[#B2AFAE] transition-all">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E5E3DC] flex items-center justify-center mb-6 text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200">
                  <InteractiveIcon icon={Phone} mode="hover" size={22} />
                </div>
                <div className="text-[14px] label-uppercase text-[#1A1A1A]/60 mb-2 tracking-[0.06em]">
                  DIRECT CALL
                </div>
                <h3 className="text-[21px] text-[#111111] mb-2">{company.phone}</h3>
                <p className="text-[15px] text-[#1A1A1A]/70">
                  Immediate consultation with Naresh Jadav or desk specialists.
                </p>
              </div>
              <a
                href={`tel:${company.phone}`}
                className="mt-6 text-[16px] text-[#111111] hover:underline inline-flex items-center gap-1.5 min-h-[44px]"
              >
                <span>Call Desk</span>
                <InteractiveIcon icon={ArrowRight} mode="hover" size={15} />
              </a>
            </div>

            {/* WhatsApp Card */}
            <div data-icon-trigger className="group bg-white rounded-[24px] border border-[#E5E3DC] p-7 shadow-xs flex flex-col justify-between hover:border-[#B2AFAE] transition-all">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E5E3DC] flex items-center justify-center mb-6 text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200">
                  <InteractiveIcon icon={MessageCircle} mode="hover" size={22} />
                </div>
                <div className="text-[14px] label-uppercase text-[#1A1A1A]/60 mb-2 tracking-[0.06em]">
                  WHATSAPP DESK
                </div>
                <h3 className="text-[21px] text-[#111111] mb-2">{company.whatsapp}</h3>
                <p className="text-[15px] text-[#1A1A1A]/70">
                  Fast transmission of document lists, title deeds, and crop quotes.
                </p>
              </div>
              <a
                href={`https://wa.me/919106571342`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 text-[16px] text-[#111111] hover:underline inline-flex items-center gap-1.5 min-h-[44px]"
              >
                <span>Chat on WhatsApp</span>
                <InteractiveIcon icon={ArrowRight} mode="hover" size={15} />
              </a>
            </div>

            {/* Email Card */}
            <div data-icon-trigger className="group bg-white rounded-[24px] border border-[#E5E3DC] p-7 shadow-xs flex flex-col justify-between hover:border-[#B2AFAE] transition-all">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E5E3DC] flex items-center justify-center mb-6 text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200">
                  <InteractiveIcon icon={Mail} mode="hover" size={22} />
                </div>
                <div className="text-[14px] label-uppercase text-[#1A1A1A]/60 mb-2 tracking-[0.06em]">
                  EMAIL DISPATCH
                </div>
                <h3 className="text-[18px] text-[#111111] mb-2 break-all">{company.email}</h3>
                <p className="text-[15px] text-[#1A1A1A]/70">
                  Submit formal information memorandums and commercial tender dossiers.
                </p>
              </div>
              <a
                href={`mailto:${company.email}`}
                className="mt-6 text-[16px] text-[#111111] hover:underline inline-flex items-center gap-1.5 min-h-[44px]"
              >
                <span>Write Email</span>
                <InteractiveIcon icon={ArrowRight} mode="hover" size={15} />
              </a>
            </div>

            {/* Registered Office & Hours Card */}
            <div data-icon-trigger className="group bg-white rounded-[24px] border border-[#E5E3DC] p-7 shadow-xs flex flex-col justify-between hover:border-[#B2AFAE] transition-all">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#FAF9F5] border border-[#E5E3DC] flex items-center justify-center mb-6 text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200">
                  {/* Periodic beacon loop for physical administrative headquarters */}
                  <InteractiveIcon icon={MapPin} mode="loop" intervalMs={3500} size={22} />
                </div>
                <div className="text-[14px] label-uppercase text-[#1A1A1A]/60 mb-2 tracking-[0.06em]">
                  REGISTERED DESK
                </div>
                <h3 className="text-[17px] text-[#111111] mb-2 leading-snug">
                  {company.address}
                </h3>
                <p className="text-[15px] text-[#1A1A1A]/70 pt-1 flex items-center gap-1.5">
                  <InteractiveIcon icon={Clock} mode="hover" size={15} className="opacity-70 shrink-0" />
                  <span>Hours: {company.officeHours}</span>
                </p>
              </div>
              <span className="mt-6 text-[15px] text-[#1A1A1A]/60 flex items-center min-h-[44px]">
                Mandal · Dist. Ahmedabad · Gujarat
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full Inquiry Form with ?division= Preselection */}
      <Suspense fallback={<div className="py-20 text-center">Loading contact desk...</div>}>
        <ContactFormWrapper />
      </Suspense>

      {/* 3. Short "what happens after you submit" 3-step strip */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="mb-14">
            <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
              INTAKE PROTOCOL
            </span>
            <h2
              className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
              style={{ fontSize: "var(--text-2xl)" }}
            >
              What happens after you reach out.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contact.postSubmitSteps.map((step, idx) => (
              <div
                key={step.step}
                data-icon-trigger
                className="group bg-white rounded-[24px] border border-[#E5E3DC] p-8 flex flex-col justify-between shadow-xs hover:border-[#B2AFAE] transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[26px] text-[#111111]/40 font-mono">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FAF9F5] border border-[#E5E3DC] flex items-center justify-center text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200">
                      {/* Step 1: Infinite scanning / intake tracking; Steps 2 & 3: Hover verification */}
                      <InteractiveIcon
                        icon={idx === 0 ? Search : idx === 1 ? Scale : CheckCircle2}
                        mode={idx === 0 ? "infinite" : "hover"}
                        size={18}
                      />
                    </div>
                  </div>
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

      {/* 4. Operating Hubs List + Embedded Google Map */}
      <section className="py-[88px] md:py-[120px] bg-[#F7F6F2]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Hubs details */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-2">
                REGIONAL FOOTPRINT
              </span>
              <h2
                className="text-[#111111] tracking-[-0.015em] leading-[1.1] mb-6"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                Operating hubs across Gujarat.
              </h2>
              <div className="space-y-4">
                {hubs.map((hub) => (
                  <div
                    key={hub.name}
                    className="bg-white rounded-[20px] border border-[#E5E3DC] p-6 shadow-xs"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-5 h-5 text-[#111111]" />
                      <h4 className="text-[18px] text-[#111111]">{hub.name}</h4>
                    </div>
                    <div className="text-[14px] text-[#1A1A1A]/60 mb-2 font-mono">
                      {hub.type}
                    </div>
                    <p className="text-[15px] text-[#1A1A1A]/70 leading-relaxed">
                      {hub.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Embedded Google Map (lazy loaded iframe) */}
            <div className="lg:col-span-7 bg-white rounded-[24px] border border-[#E5E3DC] p-4 shadow-xs overflow-hidden">
              <div className="w-full h-[520px] rounded-[18px] overflow-hidden bg-[#FAF9F5]">
                <iframe
                  title="Guru International Regional Operations Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887372.247291771!2d71.02573215!3d22.58554285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959051f5f0ef795%3A0x861bd887454522e2!2sGujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-90 contrast-[1.05]"
                />
              </div>
              <div className="pt-3 px-2 text-[14px] text-[#1A1A1A]/60 flex items-center justify-between">
                <span>Coverage: Ahmedabad · Sanand · Vadodara · Unjha · Gondal · Rajkot</span>
                <span className="hidden sm:inline">Gujarat, Western India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
