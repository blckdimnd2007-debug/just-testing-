import React from 'react';
import { ShieldCheck, Crosshair, Eye, Cpu, CheckCircle2, Lock, FileCheck2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface OperationalRigorProps {
  onOpenRfp: () => void;
}

export const OperationalRigor: React.FC<OperationalRigorProps> = ({ onOpenRfp }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const STRENGTHS = [
    {
      title: 'PRECISION',
      tagline: 'Engineering-led execution.',
      description: 'Laser-guided total stations, sub-millimeter formwork alignment, and in-house structural engineers overseeing every cubic meter poured.',
      metric: '±2.0MM',
      metricLabel: 'TOLERANCE THRESHOLD'
    },
    {
      title: 'TRANSPARENCY',
      tagline: 'Clear timelines and reporting.',
      description: 'Direct access to high-definition site camera streams, weekly drone volumetric surveys, and unedited weekly cost ledger reports.',
      metric: '24/7',
      metricLabel: 'LIVE TELEMETRY STREAM'
    },
    {
      title: 'CONTROL',
      tagline: 'End-to-end management.',
      description: 'Direct-hire supervisory staff, self-owned batching plants, and dedicated procurement channels eliminate subcontractor fragmentation.',
      metric: '100%',
      metricLabel: 'DIRECT SUPERVISION'
    },
    {
      title: 'EFFICIENCY',
      tagline: 'Technology-driven workflows.',
      description: 'ISO 19650 BIM Level 3 prefabrication sequencing shortens critical paths by an average of 18–22% compared to conventional casting methods.',
      metric: '-22%',
      metricLabel: 'SCHEDULE CYCLE REDUCTION'
    },
    {
      title: 'QUALITY',
      tagline: 'Materials and execution.',
      description: 'Independent third-party cylinder compression testing, ultrasonic rebar weld audits, and certified German formwork systems.',
      metric: '100%',
      metricLabel: 'ULTRASOUND TESTED REBAR'
    }
  ];

  return (
    <section className={`py-24 md:py-32 border-b transition-colors duration-300 relative ${
      isLight
        ? 'bg-[#FFFFFF] border-[#E2E2DC] text-[#0E0E0E]'
        : 'bg-[#090A0F] border-[#1C202B] text-[#F7F7F6]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between border-b pb-6 mb-16 gap-4 ${
          isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
        }`}>
          <div>
            <div className="text-xs md:text-sm font-technical tracking-[0.25em] uppercase flex items-center space-x-3 mb-2">
              <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>08</span>
              <span className={isLight ? 'text-[#A0A6B5]' : 'text-[#505769]'}>—</span>
              <span className={isLight ? 'text-[#666F82]' : 'text-[#9AA2B5]'}>OPERATIONAL RIGOR</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] font-heading uppercase">
              WHY INSTITUTIONS CHOOSE KAVIAR
            </h2>
          </div>

          <div className={`text-xs font-technical max-w-xs ${isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'}`}>
            Zero marketing buzzwords. Specific engineering and fiduciary accountability.
          </div>
        </div>

        {/* 5 Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {STRENGTHS.map((item, index) => (
            <div
              key={item.title}
              className={`p-6 border transition-all flex flex-col justify-between ${
                isLight
                  ? 'bg-[#F7F7F5] border-[#E2E2DC] hover:border-[#0E0E0E] hover:shadow-md'
                  : 'bg-[#11131C] border-[#222838] hover:border-[#4E586D] hover:shadow-xl'
              }`}
            >
              <div>
                <div className={`text-xs font-technical pb-3 border-b ${
                  isLight ? 'border-[#E0E0DA] text-[#777E90]' : 'border-[#1C202C] text-[#7D8597]'
                }`}>
                  0{index + 1}
                </div>

                <h3 className="mt-4 text-xl font-bold font-heading uppercase tracking-tight">
                  {item.title}
                </h3>

                <div className={`mt-1 text-xs font-technical ${isLight ? 'text-[#5A6376]' : 'text-[#A0A8BC]'}`}>
                  {item.tagline}
                </div>

                <p className={`mt-4 text-xs leading-relaxed ${isLight ? 'text-[#666F80]' : 'text-[#8E97AB]'}`}>
                  {item.description}
                </p>
              </div>

              <div className={`mt-8 pt-4 border-t ${isLight ? 'border-[#E0E0DA]' : 'border-[#1C202C]'}`}>
                <div className={`text-2xl font-black font-technical ${
                  isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
                }`}>
                  {item.metric}
                </div>
                <div className={`text-[9px] font-technical uppercase ${
                  isLight ? 'text-[#777E90]' : 'text-[#7D8597]'
                }`}>
                  {item.metricLabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guaranteed Maximum Price (GMP) & Delivery Commitment Box */}
        <div className={`p-8 md:p-10 border relative overflow-hidden shadow-2xl ${
          isLight
            ? 'bg-[#F7F7F5] border-[#E2E2DC]'
            : 'bg-[#11131D] border-[#252C3E]'
        }`}>
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div className="flex items-center space-x-2 text-xs font-technical mb-2 uppercase">
                <Lock className={`w-3.5 h-3.5 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`} />
                <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  FIDUCIARY COMMITMENT // ZERO UNBUDGETED OVERRUNS
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-black font-heading uppercase">
                GUARANTEED MAXIMUM PRICE (GMP) & FIXED TIMELINE CONTRACTS
              </h4>

              <p className={`mt-4 text-sm font-light leading-relaxed ${
                isLight ? 'text-[#4A5162]' : 'text-[#C5CCDB]'
              }`}>
                We contractually absorb material price volatility and construction schedule risks once the 
                LOD 350 design freeze is executed. If we finish late without authorized scope additions, 
                we pay pre-agreed liquidated damages. No hidden contractor variations.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={onOpenRfp}
                className={`py-4 px-6 font-bold text-xs font-technical tracking-[0.2em] uppercase transition-all cursor-pointer text-center shadow-md ${
                  isLight
                    ? 'bg-[#0E0E0E] text-[#FFFFFF] hover:bg-[#282B33]'
                    : 'bg-[#FFFFFF] text-[#0A0B0E] hover:bg-[#E3D9CC]'
                }`}
              >
                REQUEST GMP PROPOSAL
              </button>
              <div className={`text-center text-[10px] font-technical ${
                isLight ? 'text-[#777E90]' : 'text-[#7D8597]'
              }`}>
                FIDIC & AIA RED/YELLOW BOOK COMPLIANT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
