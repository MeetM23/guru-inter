"use client";

import React, { useState } from "react";
import { Phone, Mail, MessageCircle, Send, Check } from "lucide-react";

export default function DunaInquiry() {
  const [division, setDivision] = useState<"finance" | "agro">("finance");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    details: "",
    category: "Industrial Real Estate Finance",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `*Guru International - Inquiry*\n` +
        `• Name: ${formData.name}\n` +
        `• Company: ${formData.company || "N/A"}\n` +
        `• Phone: ${formData.phone}\n` +
        `• Email: ${formData.email || "N/A"}\n` +
        `• Sector: ${division === "finance" ? "Property & Finance" : "Agro Commodities"}\n` +
        `• Category: ${formData.category}\n` +
        `• Requirement: ${formData.details}`
    );

    window.open(`https://wa.me/919106571342?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section id="inquiry" className="py-20 bg-white border-b border-[#E5E3DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#898683] mb-2">
              Direct Contact Desk
            </div>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#1A1816] tracking-tight">
              Initiate a consultation or <span className="font-semibold">request mandi pricing.</span>
            </h2>
            <p className="mt-3 text-sm text-[#4D4846] max-w-xl mx-auto">
              Connect directly with our desk for property finance underwriting, possession case reviews, or bulk commodity dispatches.
            </p>
          </div>

          {/* Form Card modeled after Duna */}
          <div className="bg-[#FAF9F5] rounded-2xl border border-[#E5E3DC] p-6 sm:p-10 shadow-[0_4px_25px_rgb(0,0,0,0.02)]">
            {/* Division Switcher */}
            <div className="flex justify-center mb-8">
              <div className="bg-[#EDECE7] p-1 rounded-full flex items-center">
                <button
                  type="button"
                  onClick={() => {
                    setDivision("finance");
                    setFormData({ ...formData, category: "Industrial Real Estate Finance" });
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                    division === "finance"
                      ? "bg-[#1A1816] text-white shadow-sm"
                      : "text-[#6B6864] hover:text-[#1A1816]"
                  }`}
                >
                  Property & Finance
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setDivision("agro");
                    setFormData({ ...formData, category: "Cumin Seeds (Jeera)" });
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                    division === "agro"
                      ? "bg-[#1A1816] text-white shadow-sm"
                      : "text-[#6B6864] hover:text-[#1A1816]"
                  }`}
                >
                  Agro Commodities
                </button>
              </div>
            </div>

            {sent ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-semibold text-[#1A1816]">Requirement Forwarded</h4>
                <p className="text-xs text-[#4D4846] max-w-sm mx-auto">
                  Your inquiry has been formatted and redirected to our WhatsApp desk (+91 91065 71342).
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-3 px-4 py-2 rounded-full bg-white border border-[#E5E3DC] text-xs font-semibold text-[#1A1816]"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1A1816] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Naresh Jadav"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E5E3DC] text-[#1A1816] placeholder-[#B2AFAE] text-xs sm:text-sm focus:outline-none focus:border-[#1A1816]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#1A1816] mb-1.5">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Business Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E5E3DC] text-[#1A1816] placeholder-[#B2AFAE] text-xs sm:text-sm focus:outline-none focus:border-[#1A1816]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1A1816] mb-1.5">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94281 11775"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E5E3DC] text-[#1A1816] placeholder-[#B2AFAE] text-xs sm:text-sm focus:outline-none focus:border-[#1A1816]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#1A1816] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="jadavnaresh1982@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E5E3DC] text-[#1A1816] placeholder-[#B2AFAE] text-xs sm:text-sm focus:outline-none focus:border-[#1A1816]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1A1816] mb-1.5">
                    Category of Interest
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E5E3DC] text-[#1A1816] text-xs sm:text-sm focus:outline-none focus:border-[#1A1816]"
                  >
                    {division === "finance" ? (
                      <>
                        <option>Industrial Real Estate Finance & Mortgages</option>
                        <option>Commercial Property Acquisition & LRD</option>
                        <option>Government Tender / E-Auction Advisory</option>
                        <option>SARFAESI Possession Dispute Resolution</option>
                        <option>Sub-Registrar Title Search & TSR</option>
                      </>
                    ) : (
                      <>
                        <option>Cumin Seeds (Jeera) - Sortex 99.5%</option>
                        <option>Black Gram (Urad) - Whole / Split / Mogar</option>
                        <option>Tuwar / Toor (Pigeon Peas) - Fatka Dal</option>
                        <option>Multi-Commodity Consignment Dispatch</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1A1816] mb-1.5">
                    Brief Requirement *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder={
                      division === "finance"
                        ? "Briefly describe the property location, loan quantum, or nature of the possession issue..."
                        : "State the estimated volume (MT), delivery mandi / port, and packaging specification..."
                    }
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#E5E3DC] text-[#1A1816] placeholder-[#B2AFAE] text-xs sm:text-sm focus:outline-none focus:border-[#1A1816]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#1A1816] hover:bg-[#2D2926] text-white font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Inquiry to WhatsApp Desk</span>
                </button>
              </form>
            )}

            {/* Quick Contact Micro-Cards */}
            <div className="mt-8 pt-6 border-t border-[#E5E3DC] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <a
                href="tel:+919428111775"
                className="flex items-center gap-2 text-[#4D4846] hover:text-[#1A1816]"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call: +91 94281 11775</span>
              </a>
              <a
                href="https://wa.me/919106571342"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#4D4846] hover:text-emerald-700"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp: +91 91065 71342</span>
              </a>
              <a
                href="mailto:jadavnaresh1982@gmail.com"
                className="flex items-center gap-2 text-[#4D4846] hover:text-[#1A1816]"
              >
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <span>jadavnaresh1982@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
