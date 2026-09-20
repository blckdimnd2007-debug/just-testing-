import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const CredibilityMetrics: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById('metrics-section');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const METRICS = [
    {
      value: '15+',
      label: 'YEARS PRACTICE',
      sub: 'CONTINUOUS CLASS-1 OPERATION'
    },
    {
      value: '120+',
      label: 'LANDMARKS DELIVERED',
      sub: 'COMMERCIAL, RESIDENTIAL, INFRA'
    },
    {
      value: '08',
      label: 'METRO HUBS',
      sub: 'REGIONAL EPC COMMAND CENTERS'
    },
    {
      value: '2.4M+',
      label: 'SQ.FT EXECUTED',
      sub: 'POST-TENSIONED & COMPOSITE'
    },
    {
      value: '0.00',
      label: 'LTI INCIDENT RATE',
      sub: '5.2 MILLION SAFE WORK HOURS'
    },
    {
      value: '100%',
      label: 'SCHEDULE RIGOR',
      sub: 'ON-TIME GMP MILESTONE AUDITS'
    }
  ];

  return (
    <section
      id="metrics-section"
      className={`py-20 md:py-28 border-b transition-colors duration-300 relative ${
        isLight
          ? 'bg-[#F7F7F5] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#0D0F16] border-[#1C202B] text-[#F7F7F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`border-b pb-4 mb-12 flex items-center justify-between ${
          isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
        }`}>
          <div className="text-xs md:text-sm font-technical tracking-[0.25em] uppercase flex items-center space-x-3">
            <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>05</span>
            <span className={isLight ? 'text-[#A0A6B5]' : 'text-[#505769]'}>—</span>
            <span className={isLight ? 'text-[#666F82]' : 'text-[#9AA2B5]'}>PERFORMANCE SPECS</span>
          </div>
          <span className={`text-xs font-technical ${isLight ? 'text-[#777E90]' : 'text-[#7D8597]'}`}>
            AUDITED CONTRACTOR BENCHMARKS
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {METRICS.map((metric, index) => (
            <div
              key={index}
              className={`border-l pl-4 md:pl-6 transition-all duration-700 ${
                isLight ? 'border-[#D0D0CA]' : 'border-[#262E3E]'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Huge number in Syne */}
              <div className={`text-4xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight ${
                isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
              }`}>
                {metric.value}
              </div>

              {/* Label */}
              <div className={`mt-2 text-xs font-technical font-bold tracking-wider uppercase ${
                isLight ? 'text-[#3E4554]' : 'text-[#D0D6E2]'
              }`}>
                {metric.label}
              </div>

              {/* Sub-label */}
              <div className={`mt-1 text-[10px] font-technical uppercase ${
                isLight ? 'text-[#777E90]' : 'text-[#7A8296]'
              }`}>
                {metric.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
