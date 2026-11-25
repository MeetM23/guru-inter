"use client";

import React from "react";
import Link from "next/link";
import InteractiveIcon from "./ui/InteractiveIcon";
import { MessageCircle, Phone, Mail, ArrowUpRight } from "pulsoicon-react";

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

      {/* Top 6 Navigation Columns */}
      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-5 md:px-8 pt-28 sm:pt-32 lg:pt-36">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Column 1: Property Finance */}
          <div>
            <h4 className="text-[16px] text-white/55 tracking-[0.06em] uppercase mb-4 sm:mb-5">
              Property Finance
            </h4>
            <ul className="text-[17px] leading-[2] text-white/90">
              <li>
                <Link href="/property-finance#term-loans" className="hover:text-white transition-colors block">
                  Industrial Term Loans
                </Link>
              </li>
              <li>
                <Link href="/property-finance#commercial-mortgages" className="hover:text-white transition-colors block">
                  Commercial Mortgages
                </Link>
              </li>
              <li>
                <Link href="/property-finance#lrd" className="hover:text-white transition-colors block">
                  Lease Rental Discounting
                </Link>
              </li>
              <li>
                <Link href="/property-finance#debt-syndication" className="hover:text-white transition-colors block">
                  Factory Debt Syndication
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Possession & Tenders */}
          <div>
            <h4 className="text-[16px] text-white/55 tracking-[0.06em] uppercase mb-4 sm:mb-5">
              Possession &amp; Tenders
            </h4>
            <ul className="text-[17px] leading-[2] text-white/90">
              <li>
                <Link href="/property-finance#sarfaesi" className="hover:text-white transition-colors block">
                  SARFAESI Resolutions
                </Link>
              </li>
              <li>
                <Link href="/property-finance#tender-auctions" className="hover:text-white transition-colors block">
                  Govt. Tender Auctions
                </Link>
              </li>
              <li>
                <Link href="/property-finance#dm-court-orders" className="hover:text-white transition-colors block">
                  DM / Court Orders
                </Link>
              </li>
              <li>
                <Link href="/property-finance#title-tsr" className="hover:text-white transition-colors block">
                  30-Year Title TSR
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Agro Commodities */}
          <div>
            <h4 className="text-[16px] text-white/55 tracking-[0.06em] uppercase mb-4 sm:mb-5">
              Agro Commodities
            </h4>
            <ul className="text-[17px] leading-[2] text-white/90">
              <li>
                <Link href="/agro-commodities#cumin-seeds" className="hover:text-white transition-colors block">
                  Cumin Seeds (99.5%)
                </Link>
              </li>
              <li>
                <Link href="/agro-commodities#black-gram" className="hover:text-white transition-colors block">
                  Black Gram (Urad)
                </Link>
              </li>
              <li>
                <Link href="/agro-commodities#tuwar-dal" className="hover:text-white transition-colors block">
                  Tuwar Dal (Fatka)
                </Link>
              </li>
              <li>
                <Link href="/agro-commodities#dispatch" className="hover:text-white transition-colors block">
                  Bulk APMC Dispatch
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Sourcing Hubs */}
          <div>
            <h4 className="text-[16px] text-white/55 tracking-[0.06em] uppercase mb-4 sm:mb-5">
              Operating Hubs
            </h4>
            <ul className="text-[17px] leading-[2] text-white/90">
              <li>
                <span className="text-white/85">Gujarat Industrial Estates</span>
              </li>
              <li>
                <span className="text-white/85">APMC Mandi Unjha</span>
              </li>
              <li>
                <span className="text-white/85">Gondal &amp; Rajkot Yards</span>
              </li>
              <li>
                <span className="text-white/85">Pan-India Logistics</span>
              </li>
            </ul>
          </div>

          {/* Column 5: Company */}
          <div>
            <h4 className="text-[16px] text-white/55 tracking-[0.06em] uppercase mb-4 sm:mb-5">
              Company
            </h4>
            <ul className="text-[17px] leading-[2] text-white/90">
              <li>
                <Link href="/about" className="hover:text-white transition-colors block">
                  About the Firm
                </Link>
              </li>
              <li>
                <Link href="/about#principles" className="hover:text-white transition-colors block">
                  Operating Principles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors block">
                  Direct Mandate Desk
                </Link>
              </li>
              <li>
                <Link href="/about#values" className="hover:text-white transition-colors block">
                  Core Values
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6: Direct Desk */}
          <div>
            <h4 className="text-[16px] text-white/55 tracking-[0.06em] uppercase mb-4 sm:mb-5">
              Direct Desk
            </h4>
            <ul className="text-[17px] leading-[2] text-white/90">
              <li>
                <a
                  href="tel:+919428111775"
                  className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <InteractiveIcon icon={Phone} mode="hover" size={16} className="opacity-80" />
                  <span>+91 94281 11775</span>
                  <InteractiveIcon icon={ArrowUpRight} mode="hover" size={15} className="opacity-75 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919106571342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-2 group"
                >
                  <InteractiveIcon icon={MessageCircle} mode="hover" size={16} className="opacity-80" />
                  <span>WhatsApp: 91065 71342</span>
                  <InteractiveIcon icon={ArrowUpRight} mode="hover" size={15} className="opacity-75 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:jadavnaresh1982@gmail.com"
                  className="hover:text-white transition-colors inline-flex items-center gap-2 text-[15px] break-all pt-1 opacity-80 hover:opacity-100 group"
                >
                  <InteractiveIcon icon={Mail} mode="hover" size={16} className="shrink-0" />
                  <span>jadavnaresh1982@gmail.com</span>
                </a>
              </li>
              <li className="pt-2 text-[14px] leading-snug text-white/75">
                17, Yogiraj Complex, At &amp; Ta. Mandal, Dist. Ahmedabad - 382130, Gujarat
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Spacious Middle Canvas */}
      <div className="flex-1 min-h-[160px] sm:min-h-[220px] relative z-10" />

      {/* Bottom Bar: Copyright and Links */}
      <div className="relative z-10 w-full px-5 md:px-8 pb-8 pt-4">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between text-[14px] sm:text-[15px] text-white/95 gap-4">
          {/* Left: Copyright & Legal links */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-center md:text-left">
            <span className="text-white">&copy; Guru International 2026</span>
            <Link href="/about#principles" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Statutory Due Diligence
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors underline-offset-4 hover:underline">
              Terms of Supply
            </Link>
          </div>

          {/* Right: Direct Desk Action */}
          <div className="flex items-center gap-3">
            <span className="text-white/80 text-[14px] hidden sm:inline">Connect with our desk:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919106571342"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 shadow-xs min-h-[44px] min-w-[44px] cursor-pointer"
                title="WhatsApp Us"
              >
                <InteractiveIcon icon={MessageCircle} mode="hover" size={20} />
              </a>
              <a
                href="tel:+919428111775"
                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 shadow-xs min-h-[44px] min-w-[44px] cursor-pointer"
                title="Call Desk"
              >
                <InteractiveIcon icon={Phone} mode="hover" size={20} />
              </a>
              <a
                href="mailto:jadavnaresh1982@gmail.com"
                className="w-11 h-11 rounded-full bg-white/20 hover:bg-white/35 backdrop-blur-md flex items-center justify-center text-white transition-all duration-200 shadow-xs min-h-[44px] min-w-[44px] cursor-pointer"
                title="Email Us"
              >
                <InteractiveIcon icon={Mail} mode="hover" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
