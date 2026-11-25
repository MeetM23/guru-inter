"use client";

import React, { useState } from "react";
import { siteContent } from "@/content/site";
import InteractiveIcon from "./ui/InteractiveIcon";
import { MapPin, Building2, Store, Factory, Scale } from "pulsoicon-react";

export default function OperatingHubs() {
  const { hubs } = siteContent;
  const [activeHub, setActiveHub] = useState(0);

  return (
    <section className="py-[88px] md:py-[140px] bg-[#F7F6F2] border-b border-[#E5E3DC]/80">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        <div className="mb-16">
          <span className="text-[16px] label-uppercase text-[#1A1A1A]/60 tracking-[0.06em] block mb-3">
            ON-THE-GROUND FOOTPRINT
          </span>
          <h2
            className="text-[#111111] tracking-[-0.015em] leading-[1.1]"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            Operating hubs across Western India.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Interactive / Illustrated Gujarat Map with Pins */}
          <div className="lg:col-span-7 bg-white rounded-[24px] border border-[#E5E3DC] p-6 md:p-10 shadow-xs relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            <div className="flex items-center justify-between text-[14px] text-[#1A1A1A]/60 mb-4 label-uppercase tracking-[0.06em]">
              <span>GUJARAT OPERATING GEOGRAPHY</span>
              <span>DIRECT MANDATE TERRITORY</span>
            </div>

            {/* Stylized SVG Map Representation of Gujarat */}
            <div className="relative w-full h-[320px] flex items-center justify-center">
              <svg
                viewBox="0 0 500 360"
                className="w-full h-full max-h-[300px] text-[#E8E4DA] stroke-[#D0CBC0]"
                fill="currentColor"
                strokeWidth="1.5"
              >
                {/* Simplified smooth outline of Gujarat state */}
                <path d="M120 40 L260 30 L320 60 L380 40 L440 90 L460 170 L420 220 L370 240 L350 310 L300 340 L260 310 L250 250 L180 260 L90 230 L50 180 L80 140 L160 150 L180 120 L130 90 Z" />
                {/* Gulf of Kutch / Khambhat water indentations */}
                <path
                  d="M100 160 Q150 170 190 140 Q160 190 110 180 Z"
                  fill="#F7F6F2"
                  stroke="#D0CBC0"
                />
                <path
                  d="M260 250 Q280 290 310 280 Q290 240 260 250 Z"
                  fill="#F7F6F2"
                  stroke="#D0CBC0"
                />
              </svg>

              {/* Pin 1: Unjha (North Gujarat) */}
              <button
                type="button"
                onClick={() => setActiveHub(0)}
                className={`absolute top-[28%] left-[54%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer flex flex-col items-center ${
                  activeHub === 0 ? "z-20" : "z-10"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    activeHub === 0
                      ? "bg-[#111111] text-white scale-110 shadow-md"
                      : "bg-white text-[#111111] border border-[#111111] hover:scale-105"
                  }`}
                >
                  <InteractiveIcon
                    icon={MapPin}
                    mode={activeHub === 0 ? "loop" : "hover"}
                    intervalMs={3200}
                    size={16}
                  />
                </div>
                <span
                  className={`text-[14px] px-2 py-0.5 mt-1 rounded bg-white border border-[#E5E3DC] shadow-xs ${
                    activeHub === 0 ? "text-[#111111]" : "text-[#1A1A1A]/70"
                  }`}
                >
                  Unjha (Cumin)
                </span>
              </button>

              {/* Pin 2: Gondal & Rajkot (Saurashtra) */}
              <button
                type="button"
                onClick={() => setActiveHub(1)}
                className={`absolute top-[58%] left-[34%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer flex flex-col items-center ${
                  activeHub === 1 ? "z-20" : "z-10"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    activeHub === 1
                      ? "bg-[#111111] text-white scale-110 shadow-md"
                      : "bg-white text-[#111111] border border-[#111111] hover:scale-105"
                  }`}
                >
                  <InteractiveIcon
                    icon={MapPin}
                    mode={activeHub === 1 ? "loop" : "hover"}
                    intervalMs={3200}
                    size={16}
                  />
                </div>
                <span
                  className={`text-[14px] px-2 py-0.5 mt-1 rounded bg-white border border-[#E5E3DC] shadow-xs ${
                    activeHub === 1 ? "text-[#111111]" : "text-[#1A1A1A]/70"
                  }`}
                >
                  Gondal &amp; Rajkot
                </span>
              </button>

              {/* Pin 3: Ahmedabad & Sanand (Central) */}
              <button
                type="button"
                onClick={() => setActiveHub(2)}
                className={`absolute top-[42%] left-[62%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer flex flex-col items-center ${
                  activeHub === 2 ? "z-20" : "z-10"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    activeHub === 2
                      ? "bg-[#111111] text-white scale-110 shadow-md"
                      : "bg-white text-[#111111] border border-[#111111] hover:scale-105"
                  }`}
                >
                  <InteractiveIcon
                    icon={MapPin}
                    mode={activeHub === 2 ? "loop" : "hover"}
                    intervalMs={3200}
                    size={16}
                  />
                </div>
                <span
                  className={`text-[14px] px-2 py-0.5 mt-1 rounded bg-white border border-[#E5E3DC] shadow-xs ${
                    activeHub === 2 ? "text-[#111111]" : "text-[#1A1A1A]/70"
                  }`}
                >
                  Ahmedabad / Sanand
                </span>
              </button>

              {/* Pin 4: Vadodara & Dahej Belt */}
              <button
                type="button"
                onClick={() => setActiveHub(3)}
                className={`absolute top-[66%] left-[68%] -translate-x-1/2 -translate-y-1/2 group cursor-pointer flex flex-col items-center ${
                  activeHub === 3 ? "z-20" : "z-10"
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                    activeHub === 3
                      ? "bg-[#111111] text-white scale-110 shadow-md"
                      : "bg-white text-[#111111] border border-[#111111] hover:scale-105"
                  }`}
                >
                  <InteractiveIcon
                    icon={MapPin}
                    mode={activeHub === 3 ? "loop" : "hover"}
                    intervalMs={3200}
                    size={16}
                  />
                </div>
                <span
                  className={`text-[14px] px-2 py-0.5 mt-1 rounded bg-white border border-[#E5E3DC] shadow-xs ${
                    activeHub === 3 ? "text-[#111111]" : "text-[#1A1A1A]/70"
                  }`}
                >
                  Vadodara / Dahej
                </span>
              </button>
            </div>

            <div className="text-[14px] text-[#1A1A1A]/60 text-center pt-2">
              Click any pin on the map to inspect active operations
            </div>
          </div>

          {/* Right: Hub List beside it */}
          <div className="lg:col-span-5 space-y-4">
            {hubs.map((hub, idx) => (
              <div
                key={hub.name}
                onClick={() => setActiveHub(idx)}
                data-icon-trigger
                className={`p-6 rounded-[20px] border transition-all cursor-pointer group ${
                  activeHub === idx
                    ? "bg-white border-[#111111] shadow-md"
                    : "bg-white/70 border-[#E5E3DC] hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <InteractiveIcon
                      icon={idx === 0 ? Store : idx === 1 ? Scale : idx === 2 ? Building2 : Factory}
                      mode="hover"
                      size={18}
                      className={activeHub === idx ? "text-[#111111]" : "text-[#1A1A1A]/60"}
                    />
                    <h4 className="text-[20px] text-[#111111]">{hub.name}</h4>
                  </div>
                  <span className="text-[14px] font-mono text-[#1A1A1A]/50">0{idx + 1}</span>
                </div>
                <div className="text-[14px] text-[#1A1A1A]/60 mb-2 font-mono">
                  {hub.type}
                </div>
                <p className="text-[16px] text-[#1A1A1A]/75 leading-relaxed">
                  {hub.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
