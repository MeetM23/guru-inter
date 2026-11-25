"use client";

import React from "react";
import Logo from "./Logo";
import { MessageCircle, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="footer-section"
      className="relative w-full overflow-hidden text-white min-h-screen flex flex-col justify-between select-none"
    >
      {/* Full-bleed Painterly Landscape Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/footer-bg.png')" }}
      />

      {/* Atmospheric vignette over the sky for pristine text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#2B545E]/85 via-black/20 to-black/65 pointer-events-none" />

      {/* Top 6 Navigation Columns - Elegant spacing in the sky (pt-28 sm:pt-32 lg:pt-36) so it never conflicts with the navbar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 pt-28 sm:pt-32 lg:pt-36">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-8 lg:gap-10">
          {/* Column 1: Property Finance */}
          <div>
            <h4 className="font-semibold text-white text-[16px] sm:text-[18px] mb-4 sm:mb-5 tracking-tight">
              Property Finance
            </h4>
            <ul className="space-y-3 text-[14px] sm:text-[15px] text-white/90 font-normal">
              <li>
                <a href="#property-finance" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Industrial Term Loans
                </a>
              </li>
              <li>
                <a href="#property-finance" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Commercial Mortgages
                </a>
              </li>
              <li>
                <a href="#property-finance" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Lease Rental Discounting
                </a>
              </li>
              <li>
                <a href="#property-finance" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Factory Debt Syndication
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Possession & Tenders */}
          <div>
            <h4 className="font-semibold text-white text-[16px] sm:text-[18px] mb-4 sm:mb-5 tracking-tight">
              Possession &amp; Tenders
            </h4>
            <ul className="space-y-3 text-[14px] sm:text-[15px] text-white/90 font-normal">
              <li>
                <a href="#possession-tender" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  SARFAESI Resolutions
                </a>
              </li>
              <li>
                <a href="#possession-tender" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Govt. Tender Auctions
                </a>
              </li>
              <li>
                <a href="#possession-tender" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  DM / Court Orders
                </a>
              </li>
              <li>
                <a href="#possession-tender" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  30-Year Title TSR
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Agro Commodities */}
          <div>
            <h4 className="font-semibold text-white text-[16px] sm:text-[18px] mb-4 sm:mb-5 tracking-tight">
              Agro Commodities
            </h4>
            <ul className="space-y-3 text-[14px] sm:text-[15px] text-white/90 font-normal">
              <li>
                <a href="#commodities" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Cumin Seeds (Sortex 99.5%)
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Black Gram (Urad Whole/Split)
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Tuwar Dal (Fatka Grade)
                </a>
              </li>
              <li>
                <a href="#commodities" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Bulk APMC Dispatch
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Sourcing Hubs */}
          <div>
            <h4 className="font-semibold text-white text-[16px] sm:text-[18px] mb-4 sm:mb-5 tracking-tight">
              Operating Hubs
            </h4>
            <ul className="space-y-3 text-[14px] sm:text-[15px] text-white/90 font-normal">
              <li>
                <span className="text-white/90">Gujarat Industrial Estates</span>
              </li>
              <li>
                <span className="text-white/90">APMC Mandi Unjha</span>
              </li>
              <li>
                <span className="text-white/90">Gondal &amp; Rajkot Yards</span>
              </li>
              <li>
                <span className="text-white/90">Pan-India Logistics</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h4 className="font-semibold text-white text-[16px] sm:text-[18px] mb-4 sm:mb-5 tracking-tight">
              Company
            </h4>
            <ul className="space-y-3 text-[14px] sm:text-[15px] text-white/90 font-normal">
              <li>
                <a href="#ecosystem" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  About the Firm
                </a>
              </li>
              <li>
                <a href="#ecosystem" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Operating Principles
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Direct Mandate Desk
                </a>
              </li>
              <li>
                <a href="#inquiry" className="hover:text-white hover:translate-x-0.5 transition-all inline-block">
                  Client Verification
                </a>
              </li>
            </ul>
          </div>

          {/* Column 6: Direct Desk */}
          <div>
            <h4 className="font-semibold text-white text-[16px] sm:text-[18px] mb-4 sm:mb-5 tracking-tight">
              Direct Desk
            </h4>
            <ul className="space-y-3 text-[14px] sm:text-[15px] text-white/90 font-normal">
              <li>
                <a
                  href="tel:+919428111775"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>+91 94281 11775</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919106571342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1 font-medium"
                >
                  <span>WhatsApp: 91065 71342</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:jadavnaresh1982@gmail.com"
                  className="hover:text-white transition-colors block text-xs break-all pt-1 opacity-80"
                >
                  jadavnaresh1982@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Spacious Middle Canvas (Allows the river, valley, and mountains to show beautifully) */}
      <div className="flex-1 min-h-[160px] sm:min-h-[240px] relative z-10" />

      {/* Bottom Bar: Overlaid over the bottom landscape with clean readable typography */}
      <div className="relative z-10 w-full px-6 sm:px-12 pb-8 pt-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-[13px] sm:text-[14px] text-white/95 gap-4">
          {/* Left: Copyright & Legal links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-center md:text-left">
            <span className="font-semibold text-white">&copy; Guru 2026</span>
            <a href="#inquiry" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Statutory Due Diligence
            </a>
            <a href="#inquiry" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </a>
            <a href="#inquiry" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Terms of Supply
            </a>
          </div>

          {/* Right: Direct Desk Action */}
          <div className="flex items-center gap-3">
            <span className="text-white/85 text-xs sm:text-[13px] hidden sm:inline">Connect with our desk:</span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://wa.me/919106571342"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 shadow-xs"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="tel:+919428111775"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 shadow-xs"
                title="Call Desk"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:jadavnaresh1982@gmail.com"
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 shadow-xs"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
