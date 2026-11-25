"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Property Finance", href: "#property-finance" },
    { label: "Possession & Tenders", href: "#possession-tender" },
    { label: "Agro Commodities", href: "#commodities" },
    { label: "Operations", href: "#ecosystem" },
    { label: "Inquiries", href: "#inquiry" },
  ];

  return (
    <>
      <nav
        className={`w-full z-50 transition-all duration-200 ${
          scrolled
            ? "fixed top-0 left-0 bg-[#F7F6F2]/80 backdrop-blur-[12px] border-b border-black/[0.06]"
            : "absolute top-0 left-0 bg-transparent border-b-0"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-6 h-16 flex items-center justify-between">
          {/* Left: GURU Logo height 28px */}
          <div className="flex items-center">
            <Logo size="sm" variant="default" />
          </div>

          {/* Center: Duna-style calm editorial nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-normal tracking-[-0.01em] text-[#1A1A1A] opacity-70 hover:opacity-100 transition-opacity duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: Contact Desk button - black pill #111, white text 13px weight 500 */}
          <div className="hidden md:flex items-center">
            <a
              href="#inquiry"
              className="bg-[#111] hover:bg-[#333] text-white text-[13px] font-medium px-4 py-2 rounded-full transition-colors duration-150 cursor-pointer"
            >
              Contact Desk
            </a>
          </div>

          {/* Mobile Menu Button - 13px "Menu" button on <=768px */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-[13px] font-medium text-[#1A1A1A] px-3 py-1.5 rounded-full hover:bg-black/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 z-40 bg-[#F7F6F2]/95 backdrop-blur-xl border-b border-black/[0.06] px-5 py-6 md:hidden flex flex-col space-y-4 shadow-sm animate-duna-fade-up">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-[14px] font-normal text-[#1A1A1A] py-1"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-black/[0.06] flex items-center justify-between">
            <a
              href="#inquiry"
              onClick={() => setMobileOpen(false)}
              className="inline-block bg-[#111] text-white text-[13px] font-medium px-4 py-2 rounded-full text-center"
            >
              Contact Desk
            </a>
            <span className="text-xs text-[#1A1A1A]/60">+91 94281 11775</span>
          </div>
        </div>
      )}
    </>
  );
}
