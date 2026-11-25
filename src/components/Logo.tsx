import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
  className?: string;
  onClick?: () => void;
}

export default function Logo({
  size = "md",
  variant = "default",
  className = "",
  onClick,
}: LogoProps) {
  const isWhite = variant === "white";

  // Height mappings matching user specification:
  // Navbar height: 36–44px desktop, 30–34px mobile.
  // Footer: slightly smaller.
  const heightClasses = {
    sm: "h-[28px]", // Exact 28px for navbar / compact
    md: "h-[32px] sm:h-[38px] lg:h-[42px]", // Standard
    lg: "h-[38px] sm:h-[46px] lg:h-[52px]", // Display / hero
  };

  const src = isWhite ? "/logo/guru-logo-white.svg" : "/logo/guru-logo.svg";

  return (
    <Link
      href="/"
      onClick={onClick}
      className={`inline-flex items-center select-none bg-transparent p-0 m-0 border-0 shadow-none outline-none focus:outline-none transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="GURU International Homepage"
    >
      {/* Crisp SVG logo with natural aspect ratio and zero stretching */}
      <img
        src={src}
        alt="GURU International"
        className={`${heightClasses[size]} w-auto object-contain block bg-transparent`}
        loading="eager"
      />
    </Link>
  );
}
