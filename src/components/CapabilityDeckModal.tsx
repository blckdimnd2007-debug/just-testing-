import React from 'react';
import { X, Download, FileText, CheckCircle2, Shield, Layers, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CapabilityDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CapabilityDeckModal: React.FC<CapabilityDeckModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  if (!isOpen) return null;

  const handleDownload = () => {
    const textContent = `
================================================================================
KAVIAR ARCHITECTURE & ENGINEERING · CORPORATE CAPABILITY STATEMENT (AEC)
================================================================================
Headquarters: Guindy Institutional Complex, Chennai, India
Global Licensure: Class-1 Registered General Contractor & Structural Engineering
Website: kaviar-aec.com | Contact: institutional@kaviar-aec.com

EXECUTIVE SUMMARY
KAVIAR is an integrated Architecture, Engineering, and Construction (AEC) firm
operating across South and Western India. We specialize in post-tensioned high-rise
commercial assets, high-tolerance industrial manufacturing plants, and bespoke
coastal residential monuments.

CORE PERFORMANCE METRICS:
- 15+ Years continuous practice with zero litigation defaults
- 120+ Major capital projects successfully commissioned
- 2.4M+ Sq.Ft constructed under Guaranteed Maximum Price (GMP) terms
- 0.00 Lost Time Injury (LTI) rate across 5.2 Million consecutive safe man-hours
- ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 Certified

TECHNICAL ADVANTAGE:
1. ISO 19650 BIM Level 3 Integration: 100% digital clash resolution prior to pour
2. Direct Equipment Fleet: Self-owned concrete batching plants, boom pumps, and tower cranes
3. Laser Screed Superflat Flooring: Tolerances complying with ASTM E1155 FF/FL standards
4. Fiduciary Integrity: Binding GMP contracts backed by institutional bank guarantees

PRIMARY SECTOR EXPERIENCE:
- Commercial Grade-A Towers: The Monolith (42 Fl, 680k Sq.Ft, LEED Platinum)
- Industrial Research & High-Bay: Stellantis Nexus Campus (420k Sq.Ft)
- Luxury Residential Cantilever: ECR Coastal Villa Estate (38k Sq.Ft)
- Civil Infrastructure: Kavalur Elevated Segmental Expressway (14.2 km)

BANKING & FIDUCIARY REFERENCES:
- HDFC Bank Corporate Banking Group
- ICICI Commercial Real Estate Division
- Statutory Audits: Deloitte & Touche

To request audited financials or invite KAVIAR to an active RFP tender,
contact institutional-tenders@kaviar-aec.com.
================================================================================
`;
    const element = document.createElement('a');
    const file = new Blob([textContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'KAVIAR-AEC-CORPORATE-CAPABILITY-STATEMENT-2026.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-3xl max-h-[90vh] border shadow-2xl flex flex-col overflow-hidden transition-colors ${
        isLight
          ? 'bg-[#FFFFFF] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#0E1017] border-[#252C3D] text-[#F7F7F6]'
      }`}>
        {/* Header */}
        <div className={`p-4 sm:p-6 border-b flex items-center justify-between ${
          isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
        }`}>
          <div className="flex items-center space-x-3">
            <FileText className={`w-4 h-4 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`} />
            <div className="text-xs sm:text-sm font-technical font-bold tracking-wider uppercase">
              CORPORATE CAPABILITY STATEMENT // DOSSIER 2026
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 transition-colors border cursor-pointer ${
              isLight
                ? 'border-[#D0D0CA] text-[#666F80] hover:text-[#0E0E0E] hover:border-[#0E0E0E]'
                : 'border-[#262E3E] text-[#8A92A6] hover:text-[#FFFFFF] hover:border-[#FFFFFF]'
            }`}
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Preview */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6 text-xs font-technical">
          <div className={`p-4 border ${
            isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
          }`}>
            <div className={`text-[10px] uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
              DOCUMENT SPECIFICATION
            </div>
            <div className="text-base font-bold mt-1 font-heading uppercase">
              KAVIAR AEC INSTITUTIONAL CAPABILITY PRESENTATION
            </div>
            <div className={`text-[11px] mt-1 ${isLight ? 'text-[#555D6E]' : 'text-[#9AA2B5]'}`}>
              Class-1 General Contractor · ISO 19650 BIM Protocols · 2.4M Sq.Ft Audited Track Record
            </div>
          </div>

          <div className={`space-y-3 leading-relaxed ${isLight ? 'text-[#4A5162]' : 'text-[#C5CCDB]'}`}>
            <p>
              This comprehensive briefing statement is prepared for real estate investment trusts (REITs),
              sovereign development funds, architectural studios, and commercial enterprises.
            </p>
            <p>
              It encompasses audited safety logs, banking references, plant and equipment schedules,
              senior partner bios, and detailed case studies of our post-tensioned high-rise and industrial builds.
            </p>
          </div>

          <div className={`grid grid-cols-2 gap-4 p-4 border ${
            isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#131620] border-[#222838]'
          }`}>
            <div>
              <span className={`block text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#7D8597]'}`}>
                TOTAL PAGES
              </span>
              <span className="text-sm font-bold">28 PAGES (EXECUTIVE BRIEF)</span>
            </div>
            <div>
              <span className={`block text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#7D8597]'}`}>
                REVISION STAMP
              </span>
              <span className="text-sm font-bold text-emerald-500">Q1 2026 AUDITED</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`p-4 sm:p-6 border-t flex items-center justify-between ${
          isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#11141E] border-[#222838]'
        }`}>
          <button
            onClick={onClose}
            className={`px-4 py-2 border text-xs font-technical transition-colors cursor-pointer ${
              isLight
                ? 'border-[#D0D0CA] text-[#666F80] hover:text-[#0E0E0E]'
                : 'border-[#262E3E] text-[#8A92A6] hover:text-[#FFFFFF]'
            }`}
          >
            DISMISS
          </button>

          <button
            onClick={handleDownload}
            className={`px-6 py-3 font-bold text-xs font-technical tracking-[0.2em] uppercase transition-all cursor-pointer flex items-center space-x-2 shadow-md ${
              isLight
                ? 'bg-[#0E0E0E] text-[#FFFFFF] hover:bg-[#282B33]'
                : 'bg-[#FFFFFF] text-[#0A0B0E] hover:bg-[#E3D9CC]'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>DOWNLOAD CAPABILITY STATEMENT (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
