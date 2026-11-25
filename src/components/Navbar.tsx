"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import InteractiveIcon from "./ui/InteractiveIcon";
import { X, Menu, ArrowUpRight, Phone, MessageCircle } from "pulsoicon-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  // Lock body scroll when mobile full-screen menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Property Finance", href: "/property-finance" },
    { label: "Agro Commodities", href: "/agro-commodities" },
    { label: "Contact", href: "/contact" },
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
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
          {/* Left: GURU Logo height 40px */}
          <div className="flex items-center">
            <Logo size="md" variant="default" />
          </div>

          {/* Center: Nav links 16px, gap 36px, colour at 80% opacity, with active indicator */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 text-[16px] tracking-normal transition-opacity duration-150 ${
                    isActive
                      ? "text-[#1A1A1A] opacity-100"
                      : "text-[#1A1A1A] opacity-80 hover:opacity-100"
                  }`}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right: Contact Desk button 16px, padding 12px 22px */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-[#111111] hover:bg-[#333333] text-white text-[16px] px-[22px] py-[12px] rounded-full transition-colors duration-150 min-h-[44px] inline-flex items-center justify-center gap-1.5 cursor-pointer shadow-xs group"
            >
              <span>Contact Desk</span>
              <InteractiveIcon
                icon={ArrowUpRight}
                mode="hover"
                size={16}
                className="opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[#1A1A1A] hover:bg-black/5 rounded-full min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <InteractiveIcon
                icon={mobileOpen ? X : Menu}
                mode="hover"
                size={24}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu (Links 28px) */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#F7F6F2] md:hidden flex flex-col justify-between px-6 pt-6 pb-12 animate-duna-fade-up overflow-y-auto">
          {/* Header row in mobile menu */}
          <div className="flex items-center justify-between h-16">
            <Logo size="md" variant="default" onClick={() => setMobileOpen(false)} />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-[#1A1A1A] rounded-full hover:bg-black/5 min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer"
              aria-label="Close menu"
            >
              <InteractiveIcon icon={X} mode="hover" size={26} />
            </button>
          </div>

          {/* Navigation Links at 28px */}
          <div className="my-auto py-8 flex flex-col space-y-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-[28px] tracking-tight transition-opacity ${
                    isActive ? "text-[#111111] opacity-100" : "text-[#1A1A1A] opacity-75 hover:opacity-100"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Footer CTA & Info in Mobile Menu */}
          <div className="pt-6 border-t border-black/10 flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="w-full bg-[#111111] text-white text-[18px] py-4 rounded-full text-center min-h-[44px] flex items-center justify-center"
            >
              Contact Desk
            </Link>
            <div className="flex items-center justify-between text-[15px] text-[#1A1A1A]/70 pt-1">
              <a href="tel:+919428111775" className="hover:text-[#111111] inline-flex items-center gap-1.5">
                <InteractiveIcon icon={Phone} mode="hover" size={15} />
                <span>+91 94281 11775</span>
              </a>
              <a href="https://wa.me/919106571342" target="_blank" rel="noopener noreferrer" className="hover:text-[#111111] inline-flex items-center gap-1.5">
                <InteractiveIcon icon={MessageCircle} mode="hover" size={15} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
