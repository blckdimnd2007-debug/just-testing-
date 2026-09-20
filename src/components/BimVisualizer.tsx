import React, { useState } from 'react';
import { Layers, Maximize2, Compass, CheckCircle2, Sliders, Box, Eye, Terminal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const BimVisualizer: React.FC = () => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [activeStage, setActiveStage] = useState<'cad' | 'bim' | 'render' | 'built'>('cad');
  const [showDimensions, setShowDimensions] = useState(true);
  const [showColumns, setShowColumns] = useState(true);
  const [showMep, setShowMep] = useState(true);
  const [selectedElement, setSelectedElement] = useState<string | null>('CORE-SHEAR-WALL');

  const STAGES = [
    {
      id: 'cad' as const,
      number: '01',
      title: 'CAD LINE ARTWORK & 2D BLUEPRINT',
      description: 'Precision dimensioning, axis datum lines, column grid matrix, and structural load distribution.',
      badge: 'LOD 200 · AUTODESK REVIT'
    },
    {
      id: 'bim' as const,
      number: '02',
      title: 'BIM STRUCTURAL 3D WIREFRAME',
      description: 'Federated 3D structural skeleton, rebar density modeling, and zero-collision MEP coordination.',
      badge: 'LOD 400 · NAVISWORKS CLASH 0'
    },
    {
      id: 'render' as const,
      number: '03',
      title: 'VDC PHOTOREALISTIC RENDER',
      description: 'Pre-construction spatial simulation, solar azimuth analysis, and wind aerodynamics calculation.',
      badge: 'LOD 350 · V-RAY SPATIAL'
    },
    {
      id: 'built' as const,
      number: '04',
      title: 'AS-BUILT MONUMENTAL FINISH',
      description: 'Physical completed monument with laser-scanned deviation under ±1.8mm across 42 storeys.',
      badge: 'AS-BUILT · LEICA SCAN CERTIFIED'
    }
  ];

  return (
    <section
      id="bim-rigor"
      className={`py-24 md:py-32 border-b transition-colors duration-300 relative overflow-hidden ${
        isLight
          ? 'bg-[#F7F7F5] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#0B0C11] border-[#1C202B] text-[#F7F7F6]'
      }`}
    >
      {/* Background blueprint grid */}
      <div className={`absolute inset-0 blueprint-grid pointer-events-none ${isLight ? 'opacity-25' : 'opacity-20'}`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between border-b pb-6 mb-12 gap-4 ${
          isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
        }`}>
          <div>
            <div className="text-xs md:text-sm font-technical tracking-[0.25em] uppercase flex items-center space-x-3 mb-2">
              <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>03</span>
              <span className={isLight ? 'text-[#A0A6B5]' : 'text-[#505769]'}>—</span>
              <span className={isLight ? 'text-[#666F82]' : 'text-[#9AA2B5]'}>TECHNICAL RIGOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.03em] font-heading uppercase">
              BLUEPRINT → 3D BIM → AS-BUILT
            </h2>
          </div>

          <div className={`text-xs font-technical max-w-sm ${isLight ? 'text-[#666F80]' : 'text-[#8E97AB]'}`}>
            Interactive progression engine: verify structural calculations, rebar tolerances,
            and MEP clash resolution before physical casting.
          </div>
        </div>

        {/* Stage Selection Navigation Pills */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-8">
          {STAGES.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`p-4 text-left border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? isLight
                      ? 'bg-[#FFFFFF] border-[#0E0E0E] shadow-lg'
                      : 'bg-[#151822] border-[#FFFFFF] shadow-lg'
                    : isLight
                    ? 'bg-[#EAEAE8] border-[#DCDCD6] hover:border-[#0E0E0E]'
                    : 'bg-[#10121A] border-[#222838] hover:border-[#4B5565]'
                }`}
              >
                <div>
                  <div className={`flex items-center justify-between text-[11px] font-technical mb-2 ${
                    isLight ? 'text-[#777E90]' : 'text-[#7D8597]'
                  }`}>
                    <span className={isActive ? (isLight ? 'text-[#0E0E0E] font-bold' : 'text-[#FFFFFF] font-bold') : ''}>
                      STAGE {stage.number}
                    </span>
                    <span className={`text-[9px] px-1.5 py-0.5 border ${
                      isLight
                        ? 'bg-[#FFFFFF] text-[#4A5162] border-[#D0D0CA]'
                        : 'bg-[#1A1E29] text-[#A0A8BC] border-[#2C3446]'
                    }`}>
                      {stage.id.toUpperCase()}
                    </span>
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-heading font-bold uppercase tracking-tight ${
                      isActive
                        ? isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
                        : isLight ? 'text-[#4A5162]' : 'text-[#8C95A7]'
                    }`}
                  >
                    {stage.title.split(' ')[0]} {stage.title.split(' ')[1]}
                  </div>
                </div>

                <div className={`mt-4 pt-2 border-t text-[10px] font-technical ${
                  isLight ? 'border-[#E0E0DA] text-[#777E90]' : 'border-[#1E2330] text-[#70788C]'
                }`}>
                  {stage.badge}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Viewer Canvas Box */}
        <div className={`border overflow-hidden transition-colors ${
          isLight
            ? 'border-[#E2E2DC] bg-[#FFFFFF] shadow-2xl'
            : 'border-[#242A38] bg-[#0E1017] shadow-2xl'
        }`}>
          {/* Top Canvas Bar with Layer Toggles & Telemetry */}
          <div className={`px-4 py-3 border-b flex flex-wrap items-center justify-between gap-3 text-xs font-technical ${
            isLight
              ? 'bg-[#F2F2EF] border-[#E2E2DC]'
              : 'bg-[#141721] border-[#222838]'
          }`}>
            <div className="flex items-center space-x-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                VIEWPORT // {STAGES.find((s) => s.id === activeStage)?.title}
              </span>
              <span className="opacity-30 hidden sm:inline">|</span>
              <span className={`hidden sm:inline ${isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'}`}>
                SCALE 1:100 @ A1
              </span>
            </div>

            {/* Layer Toggles */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowDimensions(!showDimensions)}
                className={`px-2.5 py-1 text-[10px] font-technical border cursor-pointer transition-colors ${
                  showDimensions
                    ? isLight
                      ? 'bg-[#0E0E0E] border-[#0E0E0E] text-[#FFFFFF]'
                      : 'bg-[#FFFFFF] border-[#FFFFFF] text-[#0A0B0E]'
                    : isLight
                    ? 'bg-[#FFFFFF] border-[#D0D0CA] text-[#777E90]'
                    : 'bg-[#10121A] border-[#252C3C] text-[#80889C]'
                }`}
              >
                DIMENSIONS [D]
              </button>
              <button
                onClick={() => setShowColumns(!showColumns)}
                className={`px-2.5 py-1 text-[10px] font-technical border cursor-pointer transition-colors ${
                  showColumns
                    ? isLight
                      ? 'bg-[#0E0E0E] border-[#0E0E0E] text-[#FFFFFF]'
                      : 'bg-[#FFFFFF] border-[#FFFFFF] text-[#0A0B0E]'
                    : isLight
                    ? 'bg-[#FFFFFF] border-[#D0D0CA] text-[#777E90]'
                    : 'bg-[#10121A] border-[#252C3C] text-[#80889C]'
                }`}
              >
                COLUMNS [C]
              </button>
              <button
                onClick={() => setShowMep(!showMep)}
                className={`px-2.5 py-1 text-[10px] font-technical border cursor-pointer transition-colors ${
                  showMep
                    ? isLight
                      ? 'bg-[#0E0E0E] border-[#0E0E0E] text-[#FFFFFF]'
                      : 'bg-[#FFFFFF] border-[#FFFFFF] text-[#0A0B0E]'
                    : isLight
                    ? 'bg-[#FFFFFF] border-[#D0D0CA] text-[#777E90]'
                    : 'bg-[#10121A] border-[#252C3C] text-[#80889C]'
                }`}
              >
                MEP [M]
              </button>
            </div>
          </div>

          {/* Main Visual Display */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full bg-[#07080C] flex items-center justify-center overflow-hidden select-none">
            {/* Stage 1: CAD 2D Blueprint Graphic Canvas */}
            {activeStage === 'cad' && (
              <div className="absolute inset-0 p-6 md:p-12 flex items-center justify-center blueprint-grid-dense">
                <svg
                  viewBox="0 0 1000 500"
                  className="w-full h-full text-[#FFFFFF] max-w-5xl"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Grid Lines Axes */}
                  <g stroke="#333846" strokeWidth="1" strokeDasharray="4,4">
                    <line x1="100" y1="50" x2="100" y2="450" />
                    <line x1="300" y1="50" x2="300" y2="450" />
                    <line x1="500" y1="50" x2="500" y2="450" />
                    <line x1="700" y1="50" x2="700" y2="450" />
                    <line x1="900" y1="50" x2="900" y2="450" />
                    <line x1="50" y1="100" x2="950" y2="100" />
                    <line x1="50" y1="250" x2="950" y2="250" />
                    <line x1="50" y1="400" x2="950" y2="400" />
                  </g>

                  {/* Grid Labels */}
                  <text x="100" y="40" fill="#8892A6" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">AXIS 01</text>
                  <text x="300" y="40" fill="#8892A6" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">AXIS 02</text>
                  <text x="500" y="40" fill="#8892A6" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">AXIS 03 (CORE)</text>
                  <text x="700" y="40" fill="#8892A6" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">AXIS 04</text>
                  <text x="900" y="40" fill="#8892A6" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">AXIS 05</text>

                  <text x="35" y="105" fill="#8892A6" fontSize="11" fontFamily="JetBrains Mono">A</text>
                  <text x="35" y="255" fill="#8892A6" fontSize="11" fontFamily="JetBrains Mono">B</text>
                  <text x="35" y="405" fill="#8892A6" fontSize="11" fontFamily="JetBrains Mono">C</text>

                  {/* Perimeter Structural Walls */}
                  <rect
                    x="100"
                    y="100"
                    width="800"
                    height="300"
                    fill="none"
                    stroke="#D9DFEC"
                    strokeWidth="3"
                  />

                  {/* Central Concrete Shear Core (Interactive) */}
                  <g
                    onClick={() => setSelectedElement('CORE-SHEAR-WALL')}
                    className="cursor-pointer group"
                  >
                    <rect
                      x="420"
                      y="180"
                      width="160"
                      height="140"
                      fill="#141721"
                      stroke="#FFFFFF"
                      strokeWidth="3"
                    />
                    <rect
                      x="440"
                      y="200"
                      width="120"
                      height="100"
                      fill="#0C0E14"
                      stroke="#778096"
                      strokeWidth="1.5"
                    />
                    <text
                      x="500"
                      y="255"
                      fill="#FFFFFF"
                      fontSize="10"
                      fontFamily="JetBrains Mono"
                      textAnchor="middle"
                    >
                      SHEAR CORE [M60]
                    </text>
                  </g>

                  {/* Structural Columns */}
                  {showColumns && (
                    <g fill="#FFFFFF" stroke="#000000" strokeWidth="1">
                      <rect x="90" y="90" width="20" height="20" />
                      <rect x="290" y="90" width="20" height="20" />
                      <rect x="690" y="90" width="20" height="20" />
                      <rect x="890" y="90" width="20" height="20" />
                      <rect x="90" y="240" width="20" height="20" />
                      <rect x="290" y="240" width="20" height="20" />
                      <rect x="690" y="240" width="20" height="20" />
                      <rect x="890" y="240" width="20" height="20" />
                      <rect x="90" y="390" width="20" height="20" />
                      <rect x="290" y="390" width="20" height="20" />
                      <rect x="690" y="390" width="20" height="20" />
                      <rect x="890" y="390" width="20" height="20" />
                    </g>
                  )}

                  {/* MEP Conduit / Route Lines */}
                  {showMep && (
                    <g stroke="#9AA6C2" strokeWidth="1.5" strokeDasharray="6,3">
                      <path d="M 120 120 L 420 200" fill="none" />
                      <path d="M 580 200 L 880 120" fill="none" />
                      <path d="M 120 380 L 420 300" fill="none" />
                      <path d="M 580 300 L 880 380" fill="none" />
                    </g>
                  )}

                  {/* Dimension Lines */}
                  {showDimensions && (
                    <g stroke="#778096" strokeWidth="1">
                      <line x1="100" y1="75" x2="900" y2="75" />
                      <line x1="100" y1="70" x2="100" y2="80" />
                      <line x1="900" y1="70" x2="900" y2="80" />
                      <text x="500" y="70" fill="#D9DFEC" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle">
                        80.00 M (CLEAR SPAN)
                      </text>

                      <line x1="930" y1="100" x2="930" y2="400" />
                      <line x1="925" y1="100" x2="935" y2="100" />
                      <line x1="925" y1="400" x2="935" y2="400" />
                      <text x="965" y="255" fill="#D9DFEC" fontSize="11" fontFamily="JetBrains Mono" textAnchor="middle" transform="rotate(90 965 255)">
                        30.00 M
                      </text>
                    </g>
                  )}
                </svg>
              </div>
            )}

            {/* Stage 2: BIM 3D Structural Wireframe */}
            {activeStage === 'bim' && (
              <div className="absolute inset-0 p-4 md:p-8 flex items-center justify-center">
                <svg
                  viewBox="0 0 1000 500"
                  className="w-full h-full max-w-5xl"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="bimWire" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#8090B0" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>

                  <g stroke="url(#bimWire)" strokeWidth="1.5" fill="none">
                    <polygon points="500,450 150,330 500,210 850,330" stroke="#4A5568" fill="#101218" />
                    <polygon points="500,430 150,310 500,190 850,310" stroke="#718096" />

                    <polygon points="500,380 180,270 500,160 820,270" stroke="#CBD5E0" />
                    <polygon points="500,320 220,220 500,120 780,220" stroke="#E2E8F0" />
                    <polygon points="500,260 250,170 500,80 750,170" stroke="#FFFFFF" fill="#1A202C" fillOpacity="0.4" />

                    <line x1="500" y1="80" x2="500" y2="450" stroke="#FFFFFF" strokeWidth="2.5" />
                    <line x1="250" y1="170" x2="150" y2="330" stroke="#CBD5E0" strokeWidth="2" />
                    <line x1="750" y1="170" x2="850" y2="330" stroke="#CBD5E0" strokeWidth="2" />

                    <line x1="375" y1="125" x2="325" y2="390" stroke="#718096" strokeDasharray="3,3" />
                    <line x1="625" y1="125" x2="675" y2="390" stroke="#718096" strokeDasharray="3,3" />

                    <line x1="250" y1="170" x2="500" y2="320" stroke="#4A5568" />
                    <line x1="750" y1="170" x2="500" y2="320" stroke="#4A5568" />
                  </g>

                  <g fill="#FFFFFF">
                    <circle cx="500" cy="80" r="4" />
                    <circle cx="250" cy="170" r="4" />
                    <circle cx="750" cy="170" r="4" />
                    <circle cx="500" cy="260" r="4" />
                    <circle cx="500" cy="450" r="4" />
                    <circle cx="150" cy="330" r="4" />
                    <circle cx="850" cy="330" r="4" />
                  </g>

                  <text x="515" y="85" fill="#FFFFFF" fontSize="11" fontFamily="JetBrains Mono">
                    NODE #01 · ROOF CROWN (+142.8M)
                  </text>
                  <text x="140" y="355" fill="#A0AEC0" fontSize="10" fontFamily="JetBrains Mono">
                    DIAPHRAGM RAFT BASE (-12.4M)
                  </text>
                  <text x="760" y="175" fill="#FFFFFF" fontSize="10" fontFamily="JetBrains Mono">
                    LEVEL 42 CANTILEVER TRUSS
                  </text>
                </svg>
              </div>
            )}

            {/* Stage 3: VDC Photorealistic Spatial Render */}
            {activeStage === 'render' && (
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1800&auto=format&fit=crop"
                  alt="VDC Architectural Render"
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-6 left-6 text-xs font-technical bg-black/90 p-3 border border-white/20 text-white backdrop-blur-md">
                  <div className="font-bold">PRE-CONSTRUCTION VDC SIMULATION</div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    SOLAR INCIDENCE: 42° | WIND LOADING: 55 M/S AT TOWER APEX
                  </div>
                </div>
              </div>
            )}

            {/* Stage 4: As-Built Completed Monument */}
            {activeStage === 'built' && (
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?q=80&w=1800&auto=format&fit=crop"
                  alt="As-Built Completed Building"
                  className="w-full h-full object-cover contrast-110 brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-xs font-technical bg-black/90 p-3 border border-emerald-500/50 text-white backdrop-blur-md">
                  <div className="text-emerald-400 font-bold flex items-center space-x-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>AS-BUILT ACCREDITED & DELIVERED</span>
                  </div>
                  <div className="text-[10px] text-gray-400 mt-0.5">
                    LEICA SCANNER AUDIT DEVIATION: ±1.8MM (SPEC REQUIREMENT ±3.0MM)
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Technical Spec Box */}
          <div className={`p-4 md:p-6 border-t grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-technical ${
            isLight
              ? 'bg-[#F7F7F5] border-[#E2E2DC]'
              : 'bg-[#12151F] border-[#222838]'
          }`}>
            <div>
              <div className={`uppercase text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                CONCRETE COMPRESSION
              </div>
              <div className={`text-sm font-bold mt-0.5 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                M60 SELF-COMPACTING
              </div>
              <div className={`text-[10px] ${isLight ? 'text-[#888E9E]' : 'text-[#70788C]'}`}>
                Cylinder test: 64.2 MPa @ 28d
              </div>
            </div>

            <div>
              <div className={`uppercase text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                REBAR YIELD STRENGTH
              </div>
              <div className={`text-sm font-bold mt-0.5 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                Fe550D TMT HIGH DUCTILITY
              </div>
              <div className={`text-[10px] ${isLight ? 'text-[#888E9E]' : 'text-[#70788C]'}`}>
                Epoxy fusion bonded
              </div>
            </div>

            <div>
              <div className={`uppercase text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                COORDINATION CLASHES
              </div>
              <div className="text-sm font-bold text-emerald-500 mt-0.5">
                0 CLASHES (RESOLVED)
              </div>
              <div className={`text-[10px] ${isLight ? 'text-[#888E9E]' : 'text-[#70788C]'}`}>
                1,420 automated rules
              </div>
            </div>

            <div>
              <div className={`uppercase text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                SEISMIC ZONE CAPACITY
              </div>
              <div className={`text-sm font-bold mt-0.5 ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>
                ZONE III DAMPENED
              </div>
              <div className={`text-[10px] ${isLight ? 'text-[#888E9E]' : 'text-[#70788C]'}`}>
                IS 1893:2016 Compliant
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
