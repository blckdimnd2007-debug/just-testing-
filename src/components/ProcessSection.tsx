import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight, FileCheck, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { PROCESS_STEPS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

export const ProcessSection: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section
      id="process"
      className={`py-24 md:py-32 border-b transition-colors duration-300 relative overflow-hidden ${
        isLight
          ? 'bg-[#F7F7F5] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#0B0D13] border-[#1C202B] text-[#F7F7F6]'
      }`}
    >
      {/* Background Technical Grid and Axis Lines */}
      <div className={`absolute inset-0 blueprint-grid pointer-events-none ${isLight ? 'opacity-20' : 'opacity-20'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between border-b pb-6 mb-16 gap-4 ${
          isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
        }`}>
          <div>
            <div className="text-xs md:text-sm font-technical tracking-[0.25em] uppercase flex items-center space-x-3 mb-2">
              <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>07</span>
              <span className={isLight ? 'text-[#A0A6B5]' : 'text-[#505769]'}>—</span>
              <span className={isLight ? 'text-[#666F82]' : 'text-[#9AA2B5]'}>
                OUR PROCESS & RIGOR
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] font-heading uppercase">
              PRECISION EXECUTION LIFECYCLE
            </h2>
          </div>

          <div className={`text-xs font-technical flex items-center space-x-2 ${
            isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
          }`}>
            <span className={`w-2 h-2 ${isLight ? 'bg-[#0E0E0E]' : 'bg-[#FFFFFF]'}`}></span>
            <span>STANDARDIZED UNDER ISO 19650 & FIDIC PROTOCOLS</span>
          </div>
        </div>

        {/* 4 Process Horizontal Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {PROCESS_STEPS.map((step, idx) => {
            const isCurrent = activeStepIndex === idx;
            return (
              <div
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? isLight
                      ? 'bg-[#FFFFFF] border-[#0E0E0E] shadow-xl'
                      : 'bg-[#151824] border-[#FFFFFF] shadow-2xl'
                    : isLight
                    ? 'bg-[#EAEAE8] border-[#DCDCD6] hover:border-[#0E0E0E]'
                    : 'bg-[#0E1018] border-[#222838] hover:border-[#4B5565]'
                }`}
              >
                <div>
                  <div className={`flex items-center justify-between text-xs font-technical pb-3 border-b ${
                    isLight ? 'border-[#E0E0DA] text-[#777E90]' : 'border-[#1E2330] text-[#7D8597]'
                  }`}>
                    <span className={isCurrent ? (isLight ? 'text-[#0E0E0E] font-bold' : 'text-[#FFFFFF] font-bold') : ''}>
                      STAGE {step.number}
                    </span>
                    <span className={`text-[10px] ${isLight ? 'text-[#888E9E]' : 'text-[#6B7385]'}`}>
                      REF // PR-0{idx + 1}
                    </span>
                  </div>

                  <h3
                    className={`mt-4 text-2xl font-black font-heading tracking-tight uppercase ${
                      isCurrent
                        ? isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
                        : isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <div className={`mt-2 text-xs font-technical uppercase ${
                    isLight ? 'text-[#777E90]' : 'text-[#7D8597]'
                  }`}>
                    {step.subtitle.split('&')[0]}
                  </div>
                </div>

                <div className={`mt-8 pt-4 border-t flex items-center justify-between text-[11px] font-technical ${
                  isLight ? 'border-[#E0E0DA]' : 'border-[#1E2330]'
                }`}>
                  <span className={isCurrent ? (isLight ? 'text-[#0E0E0E] font-bold' : 'text-[#FFFFFF] font-bold') : (isLight ? 'text-[#777E90]' : 'text-[#7D8597]')}>
                    {isCurrent ? 'ACTIVE PROTOCOL' : 'VIEW SPECS'}
                  </span>
                  <span className={isCurrent ? (isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]') : (isLight ? 'text-[#888E9E]' : 'text-[#50596E]')}>
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Detail Card for Selected Step */}
        <div className={`border p-6 md:p-10 relative overflow-hidden transition-colors shadow-2xl ${
          isLight
            ? 'border-[#E2E2DC] bg-[#FFFFFF]'
            : 'border-[#242C3C] bg-[#12151F]'
        }`}>
          <div className={`absolute top-4 right-4 hidden md:flex items-center space-x-3 text-[10px] font-technical ${
            isLight ? 'text-[#777E90]' : 'text-[#7D8597]'
          }`}>
            <span>COORDINATE GRID: {activeStep.number}.00</span>
            <span>|</span>
            <span>TOLERANCE: ±1.5MM</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-6">
              <div className={`inline-block text-[11px] font-technical uppercase tracking-[0.2em] mb-2 ${
                isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
              }`}>
                STAGE {activeStep.number} SPECIFICATION
              </div>
              <h4 className="text-2xl sm:text-3xl font-bold font-heading uppercase">
                {activeStep.title} — {activeStep.subtitle}
              </h4>
              <p className={`mt-4 text-sm sm:text-base font-light leading-relaxed ${
                isLight ? 'text-[#4A5162]' : 'text-[#C5CCDB]'
              }`}>
                {activeStep.description}
              </p>

              <div className={`mt-6 p-4 border text-xs font-technical ${
                isLight
                  ? 'bg-[#F7F7F5] border-[#E0E0DA] text-[#4A5162]'
                  : 'bg-[#181C26] border-[#252C3C] text-[#9AA2B5]'
              }`}>
                <span className={`font-bold block mb-1 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  TECHNICAL SPECIFICATION BASELINE:
                </span>
                {activeStep.technicalSpecs}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <div className={`text-xs font-technical uppercase tracking-wider mb-4 ${
                isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
              }`}>
                STAGE {activeStep.number} VERIFIED DELIVERABLES:
              </div>
              <div className="space-y-3">
                {activeStep.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className={`p-3.5 border flex items-start space-x-3 text-xs ${
                      isLight
                        ? 'bg-[#F7F7F5] border-[#E0E0DA] text-[#2B303C]'
                        : 'bg-[#161922] border-[#252C3C] text-[#E0E4ED]'
                    }`}
                  >
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${
                      isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
                    }`} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
