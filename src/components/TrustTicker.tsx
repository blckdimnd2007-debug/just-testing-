import React from 'react';
import { ShieldCheck, Award, CheckCircle2 } from 'lucide-react';
import { TRUST_CREDENTIALS } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

export const TrustTicker: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  return (
    <section className={`border-b py-4 overflow-hidden relative transition-colors duration-300 ${
      isLight
        ? 'bg-[#EFEFEA] border-[#E0E0DB] text-[#0E0E0E]'
        : 'bg-[#101218] border-[#1C202B] text-[#F7F7F6]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className={`flex items-center space-x-2 text-[11px] font-technical tracking-[0.2em] uppercase pr-6 shrink-0 md:border-r ${
            isLight ? 'text-[#666F80] border-[#D0D0CA]' : 'text-[#8A92A6] border-[#222838]'
          }`}>
            <ShieldCheck className={`w-4 h-4 ${isLight ? 'text-[#0E0E0E]' : 'text-[#E3D9CC]'}`} />
            <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
              COMPLIANCE RIGOR
            </span>
            <span>· ISO & STANDARDS</span>
          </div>

          <div className="flex items-center space-x-8 overflow-x-auto no-scrollbar py-1">
            {TRUST_CREDENTIALS.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 shrink-0 text-xs font-technical group cursor-default"
              >
                <div className={`w-1.5 h-1.5 transition-colors ${
                  isLight
                    ? 'bg-[#A0A6B5] group-hover:bg-[#0E0E0E]'
                    : 'bg-[#4B5565] group-hover:bg-[#FFFFFF]'
                }`} />
                <span className={`font-semibold tracking-wider ${
                  isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
                }`}>
                  {item.label}
                </span>
                <span className={`hidden sm:inline text-[11px] ${
                  isLight ? 'text-[#777E90]' : 'text-[#7D8597]'
                }`}>
                  ({item.desc})
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
