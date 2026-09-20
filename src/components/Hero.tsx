import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Layers, Maximize2, Compass, Eye, Sparkles, Building2 } from 'lucide-react';
import { HERO_SLIDES } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onExploreProjects: () => void;
  onExploreServices: () => void;
  onOpenLiveSites: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onExploreServices,
  onOpenLiveSites
}) => {
  const { theme } = useTheme();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<'render' | 'blueprint'>('render');

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const currentSlide = HERO_SLIDES[currentSlideIndex];
  const isLight = theme === 'light';

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section
      id="hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-28 md:pt-32 pb-10 overflow-hidden border-b transition-colors duration-300 ${
        isLight
          ? 'bg-[#F7F7F5] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#090A0E] border-[#1C202B] text-[#F7F7F6]'
      }`}
    >
      {/* Background Architectural Canvas with Dynamic Overlays */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  viewMode === 'blueprint'
                    ? 'filter invert contrast-150 grayscale'
                    : isLight
                    ? 'grayscale contrast-115 brightness-[0.92] opacity-35'
                    : 'grayscale contrast-125 brightness-[0.38]'
                }`}
              />
            </div>
          );
        })}

        {/* Dynamic Architectural Blueprint Grid Overlay */}
        <div className={`absolute inset-0 blueprint-grid pointer-events-none ${isLight ? 'opacity-30' : 'opacity-40'}`} />

        {/* Ambient Gradient Lighting */}
        <div
          className={`absolute inset-0 pointer-events-none ${
            isLight
              ? 'bg-gradient-to-t from-[#F7F7F5] via-[#F7F7F5]/70 to-transparent'
              : 'bg-gradient-to-t from-[#090A0E] via-[#090A0E]/60 to-transparent'
          }`}
        />
        <div
          className={`absolute inset-0 pointer-events-none ${
            isLight
              ? 'bg-gradient-to-r from-[#F7F7F5]/90 via-[#F7F7F5]/40 to-transparent'
              : 'bg-gradient-to-r from-[#090A0E]/90 via-[#090A0E]/40 to-transparent'
          }`}
        />
      </div>

      {/* Top Floating Engineering Telemetry Bar */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-technical">
          <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full border backdrop-blur-md transition-colors"
            style={{
              backgroundColor: isLight ? 'rgba(255,255,255,0.85)' : 'rgba(20,23,30,0.7)',
              borderColor: isLight ? '#E0E0DB' : '#222836'
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className={isLight ? 'text-[#3E4554] font-medium' : 'text-[#D0D6E2] font-medium'}>
              AEC PRACTICE // CLASS-1 EPC CONTRACTOR & STRUCTURAL ATELIER
            </span>
          </div>

          {/* View Mode Toggle (Render vs Wireframe) */}
          <div className="flex items-center space-x-1 p-1 border rounded-sm"
            style={{
              backgroundColor: isLight ? '#FFFFFF' : '#14161F',
              borderColor: isLight ? '#E2E2DC' : '#262C3A'
            }}
          >
            <button
              onClick={() => setViewMode('render')}
              className={`px-3 py-1 text-[10px] font-technical uppercase transition-all cursor-pointer ${
                viewMode === 'render'
                  ? isLight
                    ? 'bg-[#0E0E0E] text-[#FFFFFF] font-bold'
                    : 'bg-[#FFFFFF] text-[#0A0B0E] font-bold'
                  : isLight
                  ? 'text-[#666F80] hover:text-[#0E0E0E]'
                  : 'text-[#8A93A6] hover:text-[#FFFFFF]'
              }`}
            >
              PHOTOREAL
            </button>
            <button
              onClick={() => setViewMode('blueprint')}
              className={`px-3 py-1 text-[10px] font-technical uppercase transition-all cursor-pointer ${
                viewMode === 'blueprint'
                  ? isLight
                    ? 'bg-[#0E0E0E] text-[#FFFFFF] font-bold'
                    : 'bg-[#FFFFFF] text-[#0A0B0E] font-bold'
                  : isLight
                  ? 'text-[#666F80] hover:text-[#0E0E0E]'
                  : 'text-[#8A93A6] hover:text-[#FFFFFF]'
              }`}
            >
              BLUEPRINT / CAD
            </button>
          </div>
        </div>
      </div>

      {/* Hero Core Content: Sculptural Monumental Typography */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-12 items-end">
          {/* Main Title & Action Cluster (8 cols) */}
          <div className="col-span-12 lg:col-span-8">
            {/* Tagline / Subtitle */}
            <div className="flex items-center space-x-3 text-xs md:text-sm font-technical tracking-[0.25em] uppercase mb-4">
              <span className={`inline-block w-8 h-[1px] ${isLight ? 'bg-[#0E0E0E]' : 'bg-[#E3D9CC]'}`} />
              <span className={isLight ? 'text-[#5A6376] font-semibold' : 'text-[#A0A8BC]'}>
                Architecture × Engineering × Construction
              </span>
            </div>

            {/* Monumental Headline using Sculptural Syne Font */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] xl:text-[120px] font-extrabold tracking-[-0.04em] leading-[0.88] uppercase select-none">
              <span className={`block transition-colors ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                WE BUILD
              </span>
              <span
                className={`block font-light italic transition-colors ${
                  isLight
                    ? 'text-[#444B5B] hover:text-[#0E0E0E]'
                    : 'text-[#D0D6E2] hover:text-[#FFFFFF]'
                }`}
              >
                WHAT LASTS.
              </span>
            </h1>

            {/* Structural manifesto subtext */}
            <p className={`mt-6 md:mt-8 max-w-2xl text-base sm:text-lg font-normal leading-relaxed ${
              isLight ? 'text-[#4E5669]' : 'text-[#C5CCDB]'
            }`}>
              Turnkey architectural execution, post-tensioned structural engineering, and general
              contracting for institutional, commercial, and monumental residences built to outlive generations.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreProjects}
                id="hero-explore-projects-btn"
                className={`group relative inline-flex items-center space-x-3 px-8 py-4 font-bold text-xs font-technical tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer shadow-lg ${
                  isLight
                    ? 'bg-[#0E0E0E] text-[#FFFFFF] hover:bg-[#2A2D36] hover:translate-y-[-1px]'
                    : 'bg-[#FFFFFF] text-[#0A0B0E] hover:bg-[#E3D9CC] hover:translate-y-[-1px]'
                }`}
              >
                <span>EXPLORE PROJECTS</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <button
                onClick={onExploreServices}
                id="hero-our-services-btn"
                className={`group inline-flex items-center space-x-3 px-8 py-4 font-semibold text-xs font-technical tracking-[0.2em] uppercase border transition-all duration-300 cursor-pointer ${
                  isLight
                    ? 'border-[#0E0E0E] text-[#0E0E0E] hover:bg-[#0E0E0E] hover:text-[#FFFFFF]'
                    : 'border-[#384052] text-[#F5F5F3] hover:border-[#FFFFFF] hover:bg-[#151821]'
                }`}
              >
                <span>OUR CAPABILITIES</span>
              </button>

              {/* Sub-indicator */}
              <div className="hidden sm:flex items-center space-x-2 text-xs font-technical px-3 py-2 border rounded-xs"
                style={{
                  borderColor: isLight ? '#E0E0DC' : '#222836',
                  color: isLight ? '#666F80' : '#8C94A6'
                }}
              >
                <span>LOD 400 BIM</span>
                <span>·</span>
                <span className="text-emerald-500 font-semibold">0.00 LTI</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Project Showcase Card (4 cols) */}
          <div className="col-span-12 lg:col-span-4">
            <div
              className={`p-6 border backdrop-blur-xl transition-all duration-500 shadow-2xl relative overflow-hidden ${
                isLight
                  ? 'bg-white/90 border-[#E2E2DC]'
                  : 'bg-[#12141C]/90 border-[#252C3C]'
              }`}
            >
              {/* Corner decorative architectural crop marks */}
              <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-current opacity-40" />
              <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-current opacity-40" />
              <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-current opacity-40" />
              <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-current opacity-40" />

              <div className="flex items-center justify-between text-xs font-technical pb-3 border-b"
                style={{ borderColor: isLight ? '#EAEAEC' : '#222836' }}
              >
                <div className="flex items-center space-x-2">
                  <Building2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span className="uppercase tracking-wider font-semibold">FEATURED LANDMARK</span>
                </div>
                <span className="font-bold">
                  {currentSlide.number} / {String(HERO_SLIDES.length).padStart(2, '0')}
                </span>
              </div>

              {/* Project Image Preview Miniature */}
              <div className="mt-4 relative aspect-[16/9] overflow-hidden border"
                style={{ borderColor: isLight ? '#EAEAEC' : '#222836' }}
              >
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/80 text-[10px] font-technical text-white uppercase">
                  {currentSlide.tag}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-xl font-bold font-heading uppercase tracking-tight">
                  {currentSlide.title}
                </h3>
                <div className={`text-xs font-technical mt-1 ${isLight ? 'text-[#666F80]' : 'text-[#8E97AB]'}`}>
                  {currentSlide.subtitle}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t grid grid-cols-2 gap-2 text-[10px] font-technical"
                style={{ borderColor: isLight ? '#EAEAEC' : '#222836' }}
              >
                <div>
                  <span className="text-[#888888] block">LOCATION</span>
                  <span className="font-semibold block mt-0.5">{currentSlide.location}</span>
                </div>
                <div>
                  <span className="text-[#888888] block">TOLERANCE</span>
                  <span className="font-semibold text-emerald-500 block mt-0.5">±1.5MM PRECISION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Strip of Hero: Slide Navigator & Live Site Counter */}
      <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t pt-5 transition-colors ${
        isLight ? 'border-[#E2E2DC]' : 'border-[#1C202B]'
      }`}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Slide Navigator with 01 / 05 format */}
          <div className="flex items-center space-x-5">
            <div className="text-xs font-technical tracking-[0.2em] font-bold">
              <span>{currentSlide.number}</span>
              <span className={`mx-2 ${isLight ? 'text-[#B0B4BF]' : 'text-[#4A5366]'}`}>/</span>
              <span className={isLight ? 'text-[#7D8597]' : 'text-[#7D8597]'}>
                {String(HERO_SLIDES.length).padStart(2, '0')}
              </span>
            </div>

            {/* Slide Navigation Progress Bars */}
            <div className="flex items-center space-x-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`h-1 transition-all duration-300 cursor-pointer ${
                    idx === currentSlideIndex
                      ? isLight
                        ? 'w-10 bg-[#0E0E0E]'
                        : 'w-10 bg-[#FFFFFF]'
                      : isLight
                      ? 'w-4 bg-[#D5D8E0] hover:bg-[#8E96A6]'
                      : 'w-4 bg-[#2A3142] hover:bg-[#606C85]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center space-x-1 pl-3 border-l"
              style={{ borderColor: isLight ? '#E2E2DC' : '#222836' }}
            >
              <button
                onClick={handlePrev}
                className={`p-2 transition-colors border cursor-pointer ${
                  isLight
                    ? 'border-[#E2E2DC] hover:bg-[#EAEAEA] text-[#0E0E0E]'
                    : 'border-[#222836] hover:bg-[#171A24] text-[#D0D6E2]'
                }`}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className={`p-2 transition-colors border cursor-pointer ${
                  isLight
                    ? 'border-[#E2E2DC] hover:bg-[#EAEAEA] text-[#0E0E0E]'
                    : 'border-[#222836] hover:bg-[#171A24] text-[#D0D6E2]'
                }`}
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Center Coordinates & Brand Philosophy */}
          <div className={`text-xs font-technical tracking-wider text-center ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
            PRECISION · STRUCTURE · BUILT TO LAST
          </div>

          {/* Quick Active Sites Status */}
          <button
            onClick={onOpenLiveSites}
            className={`flex items-center space-x-2.5 text-xs font-technical transition-colors group cursor-pointer ${
              isLight ? 'text-[#2B303C] hover:text-[#0E0E0E]' : 'text-[#D0D6E2] hover:text-[#FFFFFF]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform" />
            <span className="tracking-[0.15em] uppercase font-medium">4 ACTIVE SITES CASTING LIVE</span>
            <Maximize2 className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </section>
  );
};
