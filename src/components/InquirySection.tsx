"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import InteractiveIcon from "./ui/InteractiveIcon";
import { ArrowUpRight, MessageCircle, ArrowRight, Building2, Scale } from "pulsoicon-react";

interface InquirySectionProps {
  defaultDivision?: "property" | "agro";
  isFullPage?: boolean;
}

export default function InquirySection({
  defaultDivision = "property",
  isFullPage = false,
}: InquirySectionProps) {
  const [division, setDivision] = useState<"property" | "agro">(defaultDivision);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");

  useEffect(() => {
    if (defaultDivision) {
      setDivision(defaultDivision);
    }
  }, [defaultDivision]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedDiv = division === "property" ? "Property & Finance" : "Agro Commodities";
    const text = encodeURIComponent(
      `*Guru International - Inquiry*\n` +
        `• Name: ${name || "N/A"}\n` +
        `• Company: ${company || "N/A"}\n` +
        `• Phone: ${phone || "N/A"}\n` +
        `• Email: ${email || "N/A"}\n` +
        `• Division: ${selectedDiv}\n` +
        `• Requirement: ${requirement || "N/A"}`
    );

    window.open(`https://wa.me/919106571342?text=${text}`, "_blank");
  };

  return (
    <section id="inquiry" className="py-[88px] md:py-[140px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        {/* Large Warm Parchment Card: padding 40px, radius 24px */}
        <div className="bg-[#EFECE6] border border-[#E0DCD3] rounded-[24px] p-7 md:p-12 shadow-[0_4px_25px_rgba(23,16,13,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Narrative & Contact details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em]">
                INQUIRY DESK · WESTERN INDIA
              </div>

              <h2
                className="text-[#1A1A1A] tracking-[-0.015em] leading-[1.1]"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                A conversation. <br />
                A clear next step.
              </h2>

              <p className="text-[18px] text-[#1A1A1A]/75 leading-[1.65]">
                Tell us what you&apos;re working on. Our desk connects your property mandate or commodity requirement with the right next conversation.
              </p>

              <div className="pt-4 space-y-5">
                <div>
                  <div className="text-[14px] label-uppercase text-[#1A1A1A]/60 mb-1 tracking-[0.06em]">
                    DIRECT DESK
                  </div>
                  <a
                    href="tel:+919428111775"
                    className="text-[18px] text-[#1A1A1A] hover:underline inline-flex items-center gap-1.5 transition-colors min-h-[44px]"
                  >
                    <span>+91 94281 11775</span>
                    <ArrowUpRight className="w-4 h-4 opacity-75" />
                  </a>
                </div>

                <div>
                  <div className="text-[14px] label-uppercase text-[#1A1A1A]/60 mb-1 tracking-[0.06em]">
                    WHATSAPP
                  </div>
                  <a
                    href="https://wa.me/919106571342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] text-[#1A1A1A] hover:underline inline-flex items-center gap-1.5 transition-colors min-h-[44px]"
                  >
                    <span>+91 91065 71342</span>
                    <ArrowUpRight className="w-4 h-4 opacity-75" />
                  </a>
                </div>

                {!isFullPage && (
                  <div className="pt-3">
                    <Link
                      href="/contact"
                      className="text-[17px] text-[#111111] underline underline-offset-4 hover:opacity-80 inline-flex items-center gap-1 min-h-[44px]"
                    >
                      <span>Full contact page &rarr;</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Form (inputs 18px, height 56px, radius 14px, toggle tabs 16px, height 48px) */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Division Tabs */}
                <div>
                  <label className="block text-[16px] text-[#1A1A1A]/75 mb-2.5">
                    Choose your division
                  </label>
                  <div className="grid grid-cols-2 gap-3 p-1.5 bg-[#E2DED5] rounded-full">
                    <button
                      type="button"
                      onClick={() => setDivision("property")}
                      className={`h-[48px] rounded-full text-[16px] transition-all min-h-[44px] flex items-center justify-center gap-2 cursor-pointer ${
                        division === "property"
                          ? "bg-white text-[#111111] shadow-xs"
                          : "text-[#1A1A1A]/70 hover:text-[#111111]"
                      }`}
                    >
                      <InteractiveIcon
                        icon={Building2}
                        mode="active"
                        active={division === "property"}
                        size={17}
                      />
                      <span>Property &amp; Finance</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDivision("agro")}
                      className={`h-[48px] rounded-full text-[16px] transition-all min-h-[44px] flex items-center justify-center gap-2 cursor-pointer ${
                        division === "agro"
                          ? "bg-white text-[#111111] shadow-xs"
                          : "text-[#1A1A1A]/70 hover:text-[#111111]"
                      }`}
                    >
                      <InteractiveIcon
                        icon={Scale}
                        mode="active"
                        active={division === "agro"}
                        size={17}
                      />
                      <span>Agro Commodities</span>
                    </button>
                  </div>
                </div>

                {/* Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[16px] text-[#1A1A1A]/75 mb-1.5">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      className="w-full h-[56px] px-4 rounded-[14px] bg-white border border-[#D5D0C5] text-[18px] text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[16px] text-[#1A1A1A]/75 mb-1.5">
                      Company / organisation
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Organisation name"
                      className="w-full h-[56px] px-4 rounded-[14px] bg-white border border-[#D5D0C5] text-[18px] text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[16px] text-[#1A1A1A]/75 mb-1.5">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91"
                      className="w-full h-[56px] px-4 rounded-[14px] bg-white border border-[#D5D0C5] text-[18px] text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[16px] text-[#1A1A1A]/75 mb-1.5">
                      Email address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full h-[56px] px-4 rounded-[14px] bg-white border border-[#D5D0C5] text-[18px] text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>
                </div>

                {/* Requirement */}
                <div>
                  <label className="block text-[16px] text-[#1A1A1A]/75 mb-1.5">
                    Your requirement
                  </label>
                  <textarea
                    rows={3}
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    placeholder={
                      division === "property"
                        ? "Asset type, location, loan amount, or tender mandate details..."
                        : "Commodity (Cumin, Urad, Tuwar), grade, volume required, destination..."
                    }
                    className="w-full p-4 rounded-[14px] bg-white border border-[#D5D0C5] text-[18px] text-[#1A1A1A] placeholder-[#1A1A1A]/40 focus:outline-none focus:border-[#111111] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full h-[56px] bg-[#111111] hover:bg-[#333333] text-white text-[17px] rounded-full transition-colors flex items-center justify-center gap-2 shadow-sm min-h-[44px] cursor-pointer group"
                >
                  <InteractiveIcon icon={MessageCircle} mode="hover" size={19} />
                  <span>Discuss on WhatsApp</span>
                  <InteractiveIcon
                    icon={ArrowRight}
                    mode="hover"
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-[14px] text-[#1A1A1A]/60 text-center">
                  Share your requirement and supporting documents directly with our desk.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
