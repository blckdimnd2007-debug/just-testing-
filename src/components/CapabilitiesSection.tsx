import React, { useState } from 'react';
import { ArrowRight, Check, Shield, Layers, Hammer, FileText } from 'lucide-react';
import { CAPABILITIES_DATA } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface CapabilitiesSectionProps {
  onRequestScope: (serviceName: string) => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onRequestScope }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [activeServiceId, setActiveServiceId] = useState<string>(CAPABILITIES_DATA[0].id);
  const activeService = CAPABILITIES_DATA.find((s) => s.id === activeServiceId) || CAPABILITIES_DATA[0];

  return (
    <section
      id="capabilities"
      className={`relative py-24 md:py-32 border-b transition-colors duration-300 overflow-hidden ${
        isLight
          ? 'bg-[#FFFFFF] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#0A0B10] border-[#1C202B] text-[#F7F7F6]'
      }`}
    >
      {/* Dynamic Background Image that shifts with hovered service */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700">
        <img
          key={activeService.id}
          src={activeService.imageUrl}
          alt={activeService.title}
          className={`w-full h-full object-cover grayscale transition-all duration-1000 scale-100 ${
            isLight
              ? 'opacity-10 contrast-125'
              : 'opacity-20 brightness-[0.25] contrast-150'
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isLight
              ? 'bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/90 to-[#FFFFFF]/95'
              : 'bg-gradient-to-r from-[#0A0B10] via-[#0A0B10]/90 to-[#0A0B10]/95'
          }`}
        />
        <div className={`absolute inset-0 blueprint-grid ${isLight ? 'opacity-20' : 'opacity-20'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between border-b pb-6 mb-16 gap-4 ${
          isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
        }`}>
          <div>
            <div className="text-xs md:text-sm font-technical tracking-[0.25em] uppercase flex items-center space-x-3 mb-2">
              <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>04</span>
              <span className={isLight ? 'text-[#A0A6B5]' : 'text-[#505769]'}>—</span>
              <span className={isLight ? 'text-[#666F82]' : 'text-[#9AA2B5]'}>CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] font-heading uppercase">
              ENGINEERING & BUILD SERVICES
            </h2>
          </div>

          <div className={`text-xs font-technical max-w-xs ${isLight ? 'text-[#666F80]' : 'text-[#8E97AB]'}`}>
            Hover each discipline to inspect structural scope, contractual frameworks, and delivery capabilities.
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: 6 Strong Categories List */}
          <div className="col-span-12 lg:col-span-7 space-y-2">
            {CAPABILITIES_DATA.map((service) => {
              const isSelected = activeServiceId === service.id;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveServiceId(service.id)}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`group relative p-6 md:p-8 border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? isLight
                        ? 'bg-[#F7F7F5] border-[#0E0E0E] shadow-md'
                        : 'bg-[#151822] border-[#FFFFFF] shadow-lg'
                      : isLight
                      ? 'bg-[#FFFFFF] border-[#E2E2DC] hover:border-[#0E0E0E]'
                      : 'bg-[#0E1017]/80 border-[#1E2433] hover:border-[#424C60]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline space-x-4 md:space-x-6">
                      <span
                        className={`text-sm md:text-base font-technical font-bold transition-colors ${
                          isSelected
                            ? isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
                            : isLight ? 'text-[#99A2B4]' : 'text-[#616B80]'
                        }`}
                      >
                        {service.number}
                      </span>
                      <h3
                        className={`text-lg md:text-2xl font-bold font-heading tracking-tight uppercase transition-all ${
                          isSelected
                            ? isLight ? 'text-[#0E0E0E] translate-x-1' : 'text-[#FFFFFF] translate-x-1'
                            : isLight
                            ? 'text-[#505769] group-hover:text-[#0E0E0E]'
                            : 'text-[#9AA2B5] group-hover:text-[#FFFFFF]'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <div
                      className={`p-2 transition-transform duration-300 ${
                        isSelected
                          ? isLight ? 'text-[#0E0E0E] translate-x-1' : 'text-[#FFFFFF] translate-x-1'
                          : isLight ? 'text-[#A0A8BC]' : 'text-[#50596E]'
                      }`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>

                  <p
                    className={`mt-2 text-xs md:text-sm font-technical pl-8 md:pl-12 transition-opacity ${
                      isSelected
                        ? isLight ? 'text-[#505769] opacity-100' : 'text-[#A0A8BC] opacity-100'
                        : isLight
                        ? 'text-[#7D8597] opacity-0 h-0 overflow-hidden md:opacity-70 md:h-auto'
                        : 'text-[#6C768D] opacity-0 h-0 overflow-hidden md:opacity-70 md:h-auto'
                    }`}
                  >
                    {service.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Scope Inspector Box */}
          <div className="col-span-12 lg:col-span-5 sticky top-28">
            <div className={`border p-6 md:p-8 backdrop-blur-md shadow-2xl transition-colors ${
              isLight
                ? 'border-[#E2E2DC] bg-[#FFFFFF]'
                : 'border-[#242C3C] bg-[#12151E]'
            }`}>
              <div className={`flex items-center justify-between text-xs font-technical pb-4 border-b ${
                isLight ? 'border-[#EAEAE8] text-[#777E90]' : 'border-[#1E2330] text-[#7D8597]'
              }`}>
                <span>DISCIPLINE {activeService.number} SCOPE</span>
                <span className={`font-semibold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  ISO 9001 ACCREDITED
                </span>
              </div>

              <div className="mt-6">
                <h4 className="text-2xl font-bold font-heading uppercase tracking-tight">
                  {activeService.title}
                </h4>
                <p className={`mt-3 text-sm leading-relaxed ${isLight ? 'text-[#4A5162]' : 'text-[#C0C8D8]'}`}>
                  {activeService.description}
                </p>
              </div>

              {/* Core Deliverables */}
              <div className={`mt-6 pt-6 border-t ${isLight ? 'border-[#EAEAE8]' : 'border-[#1E2330]'}`}>
                <div className={`text-xs font-technical uppercase tracking-wider mb-3 ${
                  isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
                }`}>
                  PRIMARY TECHNICAL DELIVERABLES:
                </div>
                <ul className="space-y-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-xs">
                      <span className={`w-1.5 h-1.5 mt-1.5 shrink-0 ${
                        isLight ? 'bg-[#0E0E0E]' : 'bg-[#FFFFFF]'
                      }`} />
                      <span className={isLight ? 'text-[#2B303C]' : 'text-[#D0D6E2]'}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Execution Specs */}
              <div className={`mt-6 p-3.5 border text-[11px] font-technical ${
                isLight
                  ? 'bg-[#F7F7F5] border-[#E0E0DA] text-[#4A5162]'
                  : 'bg-[#181C26] border-[#252C3C] text-[#9AA2B5]'
              }`}>
                <span className={`font-bold block mb-1 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  CONTRACT / CAPACITY:
                </span>
                {activeService.specs}
              </div>

              <button
                onClick={() => onRequestScope(activeService.title)}
                className={`mt-6 w-full py-3.5 font-bold text-xs font-technical tracking-[0.2em] uppercase transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-md ${
                  isLight
                    ? 'bg-[#0E0E0E] text-[#FFFFFF] hover:bg-[#282B33]'
                    : 'bg-[#FFFFFF] text-[#0A0B0E] hover:bg-[#E3D9CC]'
                }`}
              >
                <span>REQUEST {activeService.title} SCOPE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
