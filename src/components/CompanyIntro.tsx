import React from 'react';
import { ArrowUpRight, Compass, Ruler, Shield, Layers, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CompanyIntroProps {
  onLearnMore: () => void;
  onOpenDeck: () => void;
}

export const CompanyIntro: React.FC<CompanyIntroProps> = ({ onLearnMore, onOpenDeck }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      id="about"
      className={`relative py-24 md:py-32 border-b transition-colors duration-300 overflow-hidden ${
        isLight
          ? 'bg-[#F7F7F5] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#0B0C10] border-[#1C202B] text-[#F7F7F6]'
      }`}
    >
      {/* Background Architectural Watermark Lines */}
      <div className={`absolute inset-0 blueprint-grid-dense pointer-events-none ${isLight ? 'opacity-20' : 'opacity-15'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Monospace numbering */}
        <div className={`flex items-center justify-between border-b pb-4 mb-16 transition-colors ${
          isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
        }`}>
          <div className="text-xs md:text-sm font-technical tracking-[0.25em] uppercase flex items-center space-x-3">
            <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>01</span>
            <span className={isLight ? 'text-[#A0A6B5]' : 'text-[#505769]'}>—</span>
            <span className={isLight ? 'text-[#666F82]' : 'text-[#9AA2B5]'}>WHO WE ARE</span>
          </div>

          <div className={`hidden sm:flex items-center space-x-6 text-[11px] font-technical ${
            isLight ? 'text-[#666F82]' : 'text-[#7A8296]'
          }`}>
            <span>EST. 2011</span>
            <span>·</span>
            <span>CLASS-1 GENERAL CONTRACTOR</span>
            <span>·</span>
            <span>ISO 19650 BIM COMPLIANT</span>
          </div>
        </div>

        {/* 12-Column Asymmetric Architectural Grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column (5 cols on lg): Manifesto & Technical Narrative */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="text-[11px] font-technical uppercase tracking-[0.2em] mb-4 flex items-center space-x-2">
                <span className={`w-3 h-[1px] ${isLight ? 'bg-[#0E0E0E]' : 'bg-[#E3D9CC]'}`} />
                <span className={isLight ? 'text-[#777E90]' : 'text-[#9AA2B5]'}>
                  ARCHITECTURAL & STRUCTURAL MANIFESTO
                </span>
              </div>

              {/* Sculptural Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] leading-[0.95] font-heading uppercase">
                WE TURN
                <br />
                COMPLEX STRUCTURES
                <br />
                <span className={isLight ? 'text-[#4A5162]' : 'text-[#A6AFC2]'}>
                  INTO REALITY.
                </span>
              </h2>

              <p className={`mt-8 text-base md:text-lg font-light leading-relaxed ${
                isLight ? 'text-[#4A5162]' : 'text-[#C5CCDB]'
              }`}>
                A multidisciplinary engineering and construction firm focused on structural precision,
                construction velocity, and enduring longevity. We partner with visionary property developers,
                institutional funds, and architecture studios who demand uncompromised build execution.
              </p>

              {/* Engineering Guiding Principles */}
              <div className={`mt-10 space-y-4 border-t pt-6 ${
                isLight ? 'border-[#E2E2DC]' : 'border-[#1C202B]'
              }`}>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`border-l pl-3 ${isLight ? 'border-[#D0D0CA]' : 'border-[#2A3142]'}`}>
                    <div className={`text-xs font-technical uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                      TOLERANCE
                    </div>
                    <div className="text-sm font-bold font-technical mt-0.5">±2.0MM LASER ALIGNED</div>
                  </div>
                  <div className={`border-l pl-3 ${isLight ? 'border-[#D0D0CA]' : 'border-[#2A3142]'}`}>
                    <div className={`text-xs font-technical uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                      SAFETY RECORD
                    </div>
                    <div className="text-sm font-bold font-technical mt-0.5 text-emerald-500">0.00 LTI (5.2M HRS)</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className={`border-l pl-3 ${isLight ? 'border-[#D0D0CA]' : 'border-[#2A3142]'}`}>
                    <div className={`text-xs font-technical uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                      DIGITAL VDC
                    </div>
                    <div className="text-sm font-bold font-technical mt-0.5">100% PRE-POUR BIM</div>
                  </div>
                  <div className={`border-l pl-3 ${isLight ? 'border-[#D0D0CA]' : 'border-[#2A3142]'}`}>
                    <div className={`text-xs font-technical uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                      PRICING INTEGRITY
                    </div>
                    <div className="text-sm font-bold font-technical mt-0.5">FIXED GMP CONTRACTS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnMore}
                className={`group inline-flex items-center space-x-2 text-xs font-technical tracking-[0.2em] uppercase px-6 py-3.5 font-bold transition-all cursor-pointer shadow-md ${
                  isLight
                    ? 'bg-[#0E0E0E] text-[#FFFFFF] hover:bg-[#2A2D36]'
                    : 'bg-[#FFFFFF] text-[#0A0B0E] hover:bg-[#E3D9CC]'
                }`}
              >
                <span>EXPLORE CAPABILITIES</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onOpenDeck}
                className={`inline-flex items-center space-x-2 text-xs font-technical tracking-[0.2em] uppercase px-5 py-3.5 border transition-all cursor-pointer ${
                  isLight
                    ? 'border-[#D0D0CA] text-[#0E0E0E] hover:border-[#0E0E0E] hover:bg-[#FFFFFF]'
                    : 'border-[#2A3142] text-[#D0D6E2] hover:border-[#FFFFFF] hover:bg-[#141721]'
                }`}
              >
                <span>CAPABILITY STATEMENT</span>
              </button>
            </div>
          </div>

          {/* Right Column (7 cols on lg): Large Architectural Image with CAD annotations */}
          <div className="col-span-12 lg:col-span-7 relative">
            <div className={`relative group overflow-hidden border transition-all duration-500 shadow-2xl ${
              isLight
                ? 'bg-white border-[#E2E2DC]'
                : 'bg-[#12141C] border-[#222838]'
            }`}>
              {/* Technical CAD Overlay Badges */}
              <div className={`absolute top-4 left-4 z-20 flex items-center space-x-2 px-3 py-1.5 text-[10px] font-technical border backdrop-blur-md ${
                isLight
                  ? 'bg-white/90 border-[#E2E2DC] text-[#0E0E0E]'
                  : 'bg-[#0A0B0E]/90 border-[#2A3142] text-[#E0E4ED]'
              }`}>
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span>DATUM 0.00 · POST-TENSIONED HIGH-RISE CORE</span>
              </div>

              <div className={`absolute bottom-4 right-4 z-20 px-3 py-1.5 text-[10px] font-technical border backdrop-blur-md ${
                isLight
                  ? 'bg-white/90 border-[#E2E2DC] text-[#666F80]'
                  : 'bg-[#0A0B0E]/90 border-[#2A3142] text-[#8C94A6]'
              }`}>
                <span>AXIS GRID: C-12 TO H-24</span>
              </div>

              {/* Architectural Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=1600&auto=format&fit=crop"
                  alt="High tolerance concrete engineering structure"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                />

                {/* Visual dimension lines */}
                <div className="absolute inset-x-8 top-1/2 border-t border-dashed border-white/60 pointer-events-none flex justify-between items-center text-[9px] font-technical text-white px-2">
                  <span className="bg-black/80 px-1">SPAN A: 18.5M</span>
                  <span className="bg-black/80 px-1 border border-white/30">BEARING CENTERLINE</span>
                  <span className="bg-black/80 px-1">SPAN B: 24.2M</span>
                </div>

                <div className="absolute inset-y-8 left-1/3 border-l border-dashed border-white/60 pointer-events-none flex flex-col justify-between text-[9px] font-technical text-white py-2 pl-1">
                  <span className="bg-black/80 px-1">+48.0M</span>
                  <span className="bg-black/80 px-1">+24.0M</span>
                  <span className="bg-black/80 px-1">0.0M</span>
                </div>
              </div>

              {/* Image Footer Caption */}
              <div className={`p-4 border-t flex items-center justify-between text-[11px] font-technical ${
                isLight
                  ? 'bg-[#F9F9F8] border-[#E2E2DC] text-[#666F80]'
                  : 'bg-[#10121A] border-[#1E2330] text-[#8C94A6]'
              }`}>
                <span>ARCHITECTURAL SLAB CASTING · OMR FINANCIAL TOWER</span>
                <span className={`font-semibold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  M60 GRADE CONCRETE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
