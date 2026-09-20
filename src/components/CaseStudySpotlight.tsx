import React from 'react';
import { ArrowUpRight, Quote, Shield, Calendar, MapPin, Layers } from 'lucide-react';
import { EXECUTIVE_QUOTES } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface CaseStudySpotlightProps {
  onOpenRfp: () => void;
}

export const CaseStudySpotlight: React.FC<CaseStudySpotlightProps> = ({ onOpenRfp }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section
      className={`py-24 md:py-32 border-b transition-colors duration-300 relative ${
        isLight
          ? 'bg-[#FFFFFF] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#090B10] border-[#1C202B] text-[#F7F7F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between border-b pb-6 mb-16 gap-4 ${
          isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
        }`}>
          <div>
            <div className="text-xs md:text-sm font-technical tracking-[0.25em] uppercase flex items-center space-x-3 mb-2">
              <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>06</span>
              <span className={isLight ? 'text-[#A0A6B5]' : 'text-[#505769]'}>—</span>
              <span className={isLight ? 'text-[#666F82]' : 'text-[#9AA2B5]'}>
                FLAGSHIP CASE STUDY & PROOF
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] font-heading uppercase">
              THE MONOLITH TOWER
            </h2>
          </div>

          <div className={`text-xs font-technical ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
            42 STOREYS · 680,000 SQ.FT · COMPLETED 4 MONTHS AHEAD OF SCHEDULE
          </div>
        </div>

        {/* Spotlight Grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Visual Showcase */}
          <div className="col-span-12 lg:col-span-7">
            <div className={`border overflow-hidden relative shadow-xl ${
              isLight ? 'border-[#E2E2DC] bg-[#FFFFFF]' : 'border-[#222838] bg-[#12151E]'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
                alt="The Monolith Tower Landmark"
                className="w-full aspect-[16/10] object-cover grayscale contrast-125 brightness-95 hover:grayscale-0 transition-all duration-700"
              />
              <div className={`p-4 border-t grid grid-cols-3 gap-2 text-center text-xs font-technical ${
                isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#10121A] border-[#1E2330]'
              }`}>
                <div className={`border-r ${isLight ? 'border-[#E0E0DA]' : 'border-[#222838]'}`}>
                  <div className={`text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#7D8597]'}`}>CORE WALL</div>
                  <div className={`font-bold mt-0.5 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                    650MM M60 CONCRETE
                  </div>
                </div>
                <div className={`border-r ${isLight ? 'border-[#E0E0DA]' : 'border-[#222838]'}`}>
                  <div className={`text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#7D8597]'}`}>CURTAIN WALL</div>
                  <div className={`font-bold mt-0.5 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                    LOW-E CERAMIC FRIT
                  </div>
                </div>
                <div>
                  <div className={`text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#7D8597]'}`}>CERTIFICATION</div>
                  <div className="font-bold text-emerald-500 mt-0.5">LEED PLATINUM 88 PTS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Scope & Institutional Testimony */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className={`p-6 md:p-8 border shadow-lg ${
              isLight
                ? 'bg-[#F7F7F5] border-[#E2E2DC]'
                : 'bg-[#12151F] border-[#222838]'
            }`}>
              <div className={`flex items-center space-x-2 text-xs font-technical mb-4 ${
                isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
              }`}>
                <Quote className={`w-4 h-4 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`} />
                <span className={`uppercase font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  DEVELOPER EXECUTIVE TESTIMONY
                </span>
              </div>

              <blockquote className={`text-sm md:text-base font-light leading-relaxed italic ${
                isLight ? 'text-[#2B303C]' : 'text-[#D0D6E2]'
              }`}>
                &ldquo;{EXECUTIVE_QUOTES[0].quote}&rdquo;
              </blockquote>

              <div className={`mt-6 pt-4 border-t flex items-center justify-between ${
                isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
              }`}>
                <div>
                  <div className={`text-sm font-bold font-heading uppercase ${
                    isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
                  }`}>
                    {EXECUTIVE_QUOTES[0].author}
                  </div>
                  <div className={`text-xs font-technical ${isLight ? 'text-[#777E90]' : 'text-[#7D8597]'}`}>
                    {EXECUTIVE_QUOTES[0].title}, {EXECUTIVE_QUOTES[0].organization}
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural Highlights */}
            <div className={`space-y-3 text-xs font-technical ${isLight ? 'text-[#4A5162]' : 'text-[#A0A8BC]'}`}>
              <div className={`flex items-center justify-between border-b pb-2 ${
                isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
              }`}>
                <span>CONSTRUCTION METHOD:</span>
                <span className={`font-semibold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  Jump-form core + post-tensioned slab
                </span>
              </div>
              <div className={`flex items-center justify-between border-b pb-2 ${
                isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
              }`}>
                <span>BIM COORDINATION:</span>
                <span className={`font-semibold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  100% LOD 400 Clash-Free Handover
                </span>
              </div>
              <div className={`flex items-center justify-between border-b pb-2 ${
                isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
              }`}>
                <span>BUDGET VARIANCE:</span>
                <span className="text-emerald-500 font-bold">0.0% (Delivered under GMP)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Executive Quotes Carousel / Row */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t ${
          isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
        }`}>
          {EXECUTIVE_QUOTES.slice(1).map((item, idx) => (
            <div
              key={idx}
              className={`p-6 border ${
                isLight
                  ? 'bg-[#F7F7F5] border-[#E2E2DC]'
                  : 'bg-[#11131A] border-[#222838]'
              }`}
            >
              <div className={`text-xs font-technical uppercase mb-2 ${
                isLight ? 'text-[#777E90]' : 'text-[#7D8597]'
              }`}>
                RE: {item.project}
              </div>
              <p className={`text-xs sm:text-sm italic leading-relaxed ${
                isLight ? 'text-[#2B303C]' : 'text-[#D0D6E2]'
              }`}>
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className={`mt-4 pt-3 border-t flex items-center justify-between text-xs font-technical ${
                isLight ? 'border-[#E2E2DC]' : 'border-[#1C202C]'
              }`}>
                <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  {item.author}
                </span>
                <span className={isLight ? 'text-[#777E90]' : 'text-[#7D8597]'}>
                  {item.organization}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
