"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function InquirySection() {
  const [division, setDivision] = useState<"property" | "agro">("property");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState("");

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
    <section id="inquiry" className="py-20 bg-[#F7F7F5] border-b border-[#E5E3DC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Large Warm Parchment Card */}
        <div className="bg-[#EFECE6] border border-[#E0DCD3] rounded-3xl p-8 sm:p-12 shadow-[0_4px_25px_rgba(23,16,13,0.03)] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Narrative & Contact details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-[10px] duna-mono uppercase text-[#898683]">
                INQUIRY DESK &middot; WESTERN INDIA
              </div>

              <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1816] tracking-[-0.035em] leading-[1.15]">
                A conversation. <br />
                A clear next step.
              </h2>

              <p className="text-xs sm:text-[13px] text-[#5C5854] leading-[1.65] font-normal tracking-[-0.01em]">
                Tell us what you&apos;re working on. Our desk connects your property mandate or commodity requirement with the right next conversation.
              </p>

              <div className="pt-4 space-y-4 text-xs">
                <div>
                  <div className="text-[10px] duna-mono uppercase text-[#898683] mb-1">
                    DIRECT DESK
                  </div>
                  <a
                    href="tel:+919428111775"
                    className="text-sm font-semibold text-[#1A1816] hover:underline inline-flex items-center gap-1 transition-colors"
                  >
                    <span>+91 94281 11775</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div>
                  <div className="text-[10px] duna-mono uppercase text-[#898683] mb-1">
                    WHATSAPP
                  </div>
                  <a
                    href="https://wa.me/919106571342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#1A1816] hover:underline inline-flex items-center gap-1 transition-colors"
                  >
                    <span>+91 91065 71342</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Choose division label & switcher */}
                <div>
                  <label className="block text-xs font-normal text-[#1A1816] mb-2 tracking-tight">
                    Choose your division
                  </label>
                  <div className="bg-[#E4E0D7] p-1 rounded-full flex items-center max-w-md">
                    <button
                      type="button"
                      onClick={() => setDivision("property")}
                      className={`flex-1 py-2 text-xs font-medium rounded-full transition-all duration-300 duna-ease ${
                        division === "property"
                          ? "bg-white text-[#1A1816] shadow-xs"
                          : "text-[#6B6864] hover:text-[#1A1816]"
                      }`}
                    >
                      Property &amp; Finance
                    </button>
                    <button
                      type="button"
                      onClick={() => setDivision("agro")}
                      className={`flex-1 py-2 text-xs font-medium rounded-full transition-all duration-300 duna-ease ${
                        division === "agro"
                          ? "bg-white text-[#1A1816] shadow-xs"
                          : "text-[#6B6864] hover:text-[#1A1816]"
                      }`}
                    >
                      Agro Commodities
                    </button>
                  </div>
                </div>

                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  <div>
                    <label className="block text-[11px] font-normal text-[#4D4846] mb-1">
                      Your name
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/90 border border-[#DBD6CB] text-xs text-[#1A1816] placeholder-[#A8A49C] focus:outline-none focus:border-[#1A1816] focus:bg-white transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-normal text-[#4D4846] mb-1">
                      Company / organization
                    </label>
                    <input
                      type="text"
                      placeholder="Organization name"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/90 border border-[#DBD6CB] text-xs text-[#1A1816] placeholder-[#A8A49C] focus:outline-none focus:border-[#1A1816] focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-[11px] font-normal text-[#4D4846] mb-1">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/90 border border-[#DBD6CB] text-xs text-[#1A1816] placeholder-[#A8A49C] focus:outline-none focus:border-[#1A1816] focus:bg-white transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-normal text-[#4D4846] mb-1">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/90 border border-[#DBD6CB] text-xs text-[#1A1816] placeholder-[#A8A49C] focus:outline-none focus:border-[#1A1816] focus:bg-white transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Row 3: Requirement */}
                <div>
                  <label className="block text-[11px] font-normal text-[#4D4846] mb-1">
                    Your requirement
                  </label>
                  <input
                    type="text"
                    placeholder="Asset type, location & funding requirement"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/90 border border-[#DBD6CB] text-xs text-[#1A1816] placeholder-[#A8A49C] focus:outline-none focus:border-[#1A1816] focus:bg-white transition-all duration-200"
                  />
                </div>

                {/* Submit Pill Button with Duna ease */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="group w-full py-3 rounded-full bg-[#1A1816] hover:bg-black text-white text-xs sm:text-[13px] font-medium transition-all duration-300 duna-ease flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <span>Discuss on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 duna-ease group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                {/* Sub-helper text */}
                <p className="text-[11px] text-[#898683] text-center pt-1 font-normal">
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
