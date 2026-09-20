import React, { useState } from 'react';
import { Calculator, Download, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProjectCalculatorProps {
  onTransferToRfp: (estimateData: any) => void;
}

export const ProjectCalculator: React.FC<ProjectCalculatorProps> = ({ onTransferToRfp }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [projectType, setProjectType] = useState<'Commercial' | 'Residential' | 'Industrial' | 'Infrastructure'>('Commercial');
  const [sqFt, setSqFt] = useState<number>(120000);
  const [location, setLocation] = useState<string>('Chennai (OMR Corridor / Coastal)');
  const [timelineTarget, setTimelineTarget] = useState<'Fast-Track' | 'Standard' | 'Phased'>('Standard');

  // Calculations based on engineering benchmarks
  const concreteVolumeM3 = Math.round(sqFt * 0.082);
  const steelTonnage = Math.round(sqFt * 0.0055);
  const estimatedMonths = timelineTarget === 'Fast-Track'
    ? Math.round(Math.max(12, sqFt / 14000))
    : timelineTarget === 'Standard'
    ? Math.round(Math.max(16, sqFt / 9500))
    : Math.round(Math.max(20, sqFt / 7500));
  
  const bimCoordinationWeeks = Math.round(Math.min(16, Math.max(6, sqFt / 25000)));
  const estimatedSiteCrew = Math.round(Math.max(40, sqFt / 1800));

  const estimateObject = {
    type: projectType,
    sqFt: sqFt.toLocaleString(),
    location,
    timelineTarget,
    concreteVolumeM3,
    steelTonnage,
    estimatedMonths,
    bimCoordinationWeeks,
    estimatedSiteCrew
  };

  const handleDownloadSpec = () => {
    const textContent = `
================================================================================
KAVIAR ARCHITECTURE & ENGINEERING · PRELIMINARY PROJECT EXECUTION SPECIFICATION
================================================================================
Generated: ${new Date().toISOString()}
Document Ref: KAV-SPEC-${Math.floor(100000 + Math.random() * 900000)}

1. PROJECT BASELINE
   - Asset Classification: ${projectType} Development
   - Gross Floor Area: ${sqFt.toLocaleString()} Sq.Ft
   - Geotechnical / Regional Location: ${location}
   - Schedule Track: ${timelineTarget} Execution Model

2. STRUCTURAL MASS & RESOURCE ESTIMATES (APPROX.)
   - High-Performance Concrete: ~${concreteVolumeM3.toLocaleString()} m³ (M50/M60 Class)
   - Structural & High-Yield TMT Steel: ~${steelTonnage.toLocaleString()} Metric Tons (Fe550D)
   - Peak Site Workforce: ~${estimatedSiteCrew} Direct-hire personnel

3. BIM & CONSTRUCTION TIMELINE BENCHMARK
   - Digital Twin & LOD 350 Clash Resolution: ~${bimCoordinationWeeks} Weeks Pre-pour
   - Projected Construction Duration: ~${estimatedMonths} Months to Handover
   - Contract Model: Guaranteed Maximum Price (GMP) with Liquidated Damages

4. APPLICABLE STANDARDS & GUARANTEES
   - ISO 9001:2015 Quality & ISO 45001 Safety
   - 0.00 Lost Time Incident (LTI) Safety Protocol
   - 10-Year Comprehensive Structural Warranty

To convert this into a binding Guaranteed Maximum Price (GMP) bid,
submit full drawings to rfp@kaviar-aec.com or use the portal at kaviar-aec.com.
================================================================================
`;
    const element = document.createElement('a');
    const file = new Blob([textContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `KAVIAR-PRELIMINARY-SPEC-${projectType.toUpperCase()}-${sqFt}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section
      id="estimator"
      className={`py-24 md:py-32 border-b transition-colors duration-300 relative ${
        isLight
          ? 'bg-[#F7F7F5] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#0B0C11] border-[#1C202B] text-[#F7F7F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between border-b pb-6 mb-16 gap-4 ${
          isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
        }`}>
          <div>
            <div className="text-xs md:text-sm font-technical tracking-[0.25em] uppercase flex items-center space-x-3 mb-2">
              <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>09</span>
              <span className={isLight ? 'text-[#A0A6B5]' : 'text-[#505769]'}>—</span>
              <span className={isLight ? 'text-[#666F82]' : 'text-[#9AA2B5]'}>PRELIMINARY ESTIMATOR</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] font-heading uppercase">
              PROJECT SCOPE CALCULATOR
            </h2>
          </div>

          <div className={`text-xs font-technical max-w-sm ${isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'}`}>
            Instant algorithmic engineering forecast: calculates concrete mass, steel tonnage,
            and timeline benchmarks.
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Controls Form (7 cols on lg) */}
          <div className={`col-span-12 lg:col-span-7 p-6 sm:p-8 border shadow-lg ${
            isLight
              ? 'bg-[#FFFFFF] border-[#E2E2DC]'
              : 'bg-[#11131C] border-[#222838]'
          }`}>
            {/* Step 1: Project Type */}
            <div className="mb-8">
              <label className={`block text-xs font-technical uppercase tracking-wider mb-3 ${
                isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
              }`}>
                1. ASSET CLASSIFICATION
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(['Commercial', 'Residential', 'Industrial', 'Infrastructure'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectType(type)}
                    className={`py-3 px-3 text-xs font-technical border transition-all cursor-pointer ${
                      projectType === type
                        ? isLight
                          ? 'bg-[#0E0E0E] text-[#FFFFFF] font-bold border-[#0E0E0E]'
                          : 'bg-[#FFFFFF] text-[#0A0B0E] font-bold border-[#FFFFFF]'
                        : isLight
                        ? 'bg-[#F7F7F5] text-[#4A5162] border-[#E0E0DA] hover:border-[#0E0E0E]'
                        : 'bg-[#161922] text-[#A0A8BC] border-[#252C3C] hover:border-[#4B5565]'
                    }`}
                  >
                    {type.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Sq.Ft Range Slider */}
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-technical mb-3">
                <span className={`uppercase tracking-wider ${isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'}`}>
                  2. GROSS FLOOR AREA (SQ.FT)
                </span>
                <span className={`font-bold text-sm ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  {sqFt.toLocaleString()} SQ.FT
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="800000"
                step="10000"
                value={sqFt}
                onChange={(e) => setSqFt(Number(e.target.value))}
                className={`w-full h-1.5 appearance-none cursor-pointer ${
                  isLight ? 'bg-[#DCDCD6] accent-[#0E0E0E]' : 'bg-[#2A3142] accent-[#FFFFFF]'
                }`}
              />
              <div className={`flex justify-between text-[10px] font-technical mt-2 ${
                isLight ? 'text-[#888E9E]' : 'text-[#70788C]'
              }`}>
                <span>10,000 SQ.FT</span>
                <span>200,000 SQ.FT</span>
                <span>500,000 SQ.FT</span>
                <span>800,000+ SQ.FT</span>
              </div>
            </div>

            {/* Step 3: Location */}
            <div className="mb-8">
              <label className={`block text-xs font-technical uppercase tracking-wider mb-3 ${
                isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
              }`}>
                3. GEOGRAPHIC METRO & SEISMIC ZONE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Chennai (OMR Corridor / Coastal)',
                  'Bengaluru (Tech Park / Outer Ring)',
                  'Hyderabad (HITEC City / Financial District)',
                  'Sriperumbudur / Industrial Belt'
                ].map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setLocation(loc)}
                    className={`py-2.5 px-3 text-left text-xs font-technical border transition-all cursor-pointer ${
                      location === loc
                        ? isLight
                          ? 'bg-[#0E0E0E] text-[#FFFFFF] font-bold border-[#0E0E0E]'
                          : 'bg-[#1F2432] text-[#FFFFFF] font-bold border-[#FFFFFF]'
                        : isLight
                        ? 'bg-[#F7F7F5] text-[#555D6E] border-[#E0E0DA] hover:border-[#0E0E0E]'
                        : 'bg-[#141721] text-[#8C95A7] border-[#252C3C] hover:border-[#4B5565]'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Timeline Target */}
            <div>
              <label className={`block text-xs font-technical uppercase tracking-wider mb-3 ${
                isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'
              }`}>
                4. SCHEDULE DELIVERY TRACK
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Fast-Track', 'Standard', 'Phased'] as const).map((track) => (
                  <button
                    key={track}
                    onClick={() => setTimelineTarget(track)}
                    className={`py-2.5 px-2 text-center text-xs font-technical border transition-all cursor-pointer ${
                      timelineTarget === track
                        ? isLight
                          ? 'bg-[#0E0E0E] text-[#FFFFFF] font-bold border-[#0E0E0E]'
                          : 'bg-[#FFFFFF] text-[#0A0B0E] font-bold border-[#FFFFFF]'
                        : isLight
                        ? 'bg-[#F7F7F5] text-[#555D6E] border-[#E0E0DA] hover:border-[#0E0E0E]'
                        : 'bg-[#141721] text-[#8C95A7] border-[#252C3C] hover:border-[#4B5565]'
                    }`}
                  >
                    {track.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generated Execution Framework Output (5 cols on lg) */}
          <div className={`col-span-12 lg:col-span-5 p-6 sm:p-8 border shadow-2xl ${
            isLight
              ? 'bg-[#FFFFFF] border-[#E2E2DC]'
              : 'bg-[#131620] border-[#252D3D]'
          }`}>
            <div className={`flex items-center justify-between text-xs font-technical pb-4 border-b ${
              isLight ? 'border-[#EAEAE8] text-[#777E90]' : 'border-[#1E2330] text-[#7D8597]'
            }`}>
              <span>ALGORITHMIC FORECAST</span>
              <span className="text-emerald-500 font-bold">ESTIMATE READY</span>
            </div>

            <div className="mt-6 space-y-4">
              <div className={`p-3 border ${
                isLight ? 'bg-[#F7F7F5] border-[#E0E0DA]' : 'bg-[#171B26] border-[#252C3C]'
              }`}>
                <div className={`text-[10px] font-technical uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                  ESTIMATED CONCRETE MASS
                </div>
                <div className={`text-xl font-bold font-technical mt-0.5 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  ~{concreteVolumeM3.toLocaleString()} m³
                </div>
                <div className={`text-[10px] ${isLight ? 'text-[#888E9E]' : 'text-[#70788C]'}`}>
                  M50/M60 Self-Compacting Mix
                </div>
              </div>

              <div className={`p-3 border ${
                isLight ? 'bg-[#F7F7F5] border-[#E0E0DA]' : 'bg-[#171B26] border-[#252C3C]'
              }`}>
                <div className={`text-[10px] font-technical uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                  STRUCTURAL STEEL REBAR
                </div>
                <div className={`text-xl font-bold font-technical mt-0.5 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                  ~{steelTonnage.toLocaleString()} METRIC TONS
                </div>
                <div className={`text-[10px] ${isLight ? 'text-[#888E9E]' : 'text-[#70788C]'}`}>
                  Fe550D High Ductility Corrosion Resisting
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className={`p-3 border ${
                  isLight ? 'bg-[#F7F7F5] border-[#E0E0DA]' : 'bg-[#171B26] border-[#252C3C]'
                }`}>
                  <div className={`text-[10px] font-technical uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                    CONSTRUCTION TIMELINE
                  </div>
                  <div className={`text-lg font-bold font-technical mt-0.5 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                    ~{estimatedMonths} MONTHS
                  </div>
                  <div className={`text-[10px] ${isLight ? 'text-[#888E9E]' : 'text-[#70788C]'}`}>
                    Turnkey handover
                  </div>
                </div>

                <div className={`p-3 border ${
                  isLight ? 'bg-[#F7F7F5] border-[#E0E0DA]' : 'bg-[#171B26] border-[#252C3C]'
                }`}>
                  <div className={`text-[10px] font-technical uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                    BIM PRE-POUR CYCLE
                  </div>
                  <div className={`text-lg font-bold font-technical mt-0.5 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                    ~{bimCoordinationWeeks} WEEKS
                  </div>
                  <div className={`text-[10px] ${isLight ? 'text-[#888E9E]' : 'text-[#70788C]'}`}>
                    Clash resolution
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-3">
              <button
                onClick={handleDownloadSpec}
                className={`w-full py-3.5 font-bold text-xs font-technical tracking-[0.2em] uppercase transition-all cursor-pointer flex items-center justify-center space-x-2 shadow-md ${
                  isLight
                    ? 'bg-[#0E0E0E] text-[#FFFFFF] hover:bg-[#282B33]'
                    : 'bg-[#FFFFFF] text-[#0A0B0E] hover:bg-[#E3D9CC]'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD PRELIMINARY SPEC SHEET</span>
              </button>

              <button
                onClick={() => onTransferToRfp(estimateObject)}
                className={`w-full py-3 border font-semibold text-xs font-technical tracking-[0.2em] uppercase transition-all cursor-pointer flex items-center justify-center space-x-2 ${
                  isLight
                    ? 'border-[#D0D0CA] text-[#0E0E0E] hover:border-[#0E0E0E] hover:bg-[#F7F7F5]'
                    : 'border-[#303848] text-[#D0D6E2] hover:border-[#FFFFFF] hover:text-[#FFFFFF]'
                }`}
              >
                <span>TRANSFER SPEC TO FORMAL RFP</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className={`mt-4 text-[10px] font-technical text-center ${
              isLight ? 'text-[#888E9E]' : 'text-[#70788C]'
            }`}>
              Based on empirical historical costs under ISO 19650 guidelines.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
