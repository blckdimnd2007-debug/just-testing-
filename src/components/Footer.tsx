import React from 'react';
import { ArrowUpRight, Download, Compass, Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onStartProject: () => void;
  onOpenDeck: () => void;
  onOpenLiveSites: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onStartProject,
  onOpenDeck,
  onOpenLiveSites
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      className={`border-t relative overflow-hidden transition-colors duration-300 ${
        isLight
          ? 'bg-[#F0F0EC] border-[#E0E0DB] text-[#0E0E0E]'
          : 'bg-[#08090D] border-[#1C202B] text-[#F7F7F6]'
      }`}
    >
      {/* Blueprint Grid Watermark */}
      <div className={`absolute inset-0 blueprint-grid-dense pointer-events-none ${isLight ? 'opacity-20' : 'opacity-15'}`} />

      {/* Big CTA Section */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-36 pb-20 relative z-10 border-b ${
        isLight ? 'border-[#E2E2DC]' : 'border-[#1C202B]'
      }`}>
        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="text-xs md:text-sm font-technical tracking-[0.25em] uppercase flex items-center space-x-3 mb-6">
              <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>10</span>
              <span className={isLight ? 'text-[#A0A6B5]' : 'text-[#505769]'}>—</span>
              <span className={isLight ? 'text-[#666F82]' : 'text-[#9AA2B5]'}>
                INITIATE PROJECT COLLABORATION
              </span>
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-black tracking-[-0.04em] leading-[0.88] font-heading uppercase">
              HAVE A PROJECT
              <br />
              IN MIND?
              <br />
              <span className={isLight ? 'text-[#616A7D] font-light' : 'text-[#8A93A6] font-light'}>
                LET&apos;S BUILD IT.
              </span>
            </h2>

            <div className="mt-10 md:mt-12">
              <button
                onClick={onStartProject}
                id="footer-start-project-btn"
                className={`group inline-flex items-center space-x-4 px-10 py-5 font-bold text-sm tracking-[0.2em] uppercase transition-all duration-200 cursor-pointer shadow-2xl ${
                  isLight
                    ? 'bg-[#0E0E0E] text-[#FFFFFF] hover:bg-[#282B33]'
                    : 'bg-[#FFFFFF] text-[#0A0B0E] hover:bg-[#E3D9CC]'
                }`}
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end space-y-8 font-technical">
            <div className={`space-y-3 border-l pl-6 ${
              isLight ? 'border-[#D0D0CA]' : 'border-[#222838]'
            }`}>
              <div className={`text-xs uppercase tracking-wider ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                PRIMARY CORRESPONDENCE
              </div>
              <div>
                <a
                  href="mailto:hello@kaviar-aec.com"
                  className={`text-lg md:text-xl font-bold hover:underline block ${
                    isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
                  }`}
                >
                  hello@kaviar-aec.com
                </a>
                <a
                  href="tel:+914482910000"
                  className={`text-base mt-1 block ${
                    isLight ? 'text-[#3E4554] hover:text-[#0E0E0E]' : 'text-[#D0D6E2] hover:text-[#FFFFFF]'
                  }`}
                >
                  +91 44 8291 0000
                </a>
              </div>
              <div className={`text-xs pt-2 ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                CHENNAI · BENGALURU · HYDERABAD
              </div>
            </div>

            <div className={`border-l pl-6 ${isLight ? 'border-[#D0D0CA]' : 'border-[#222838]'}`}>
              <button
                onClick={onOpenDeck}
                className={`inline-flex items-center space-x-2 text-xs font-technical tracking-wider uppercase border px-4 py-2.5 transition-colors cursor-pointer ${
                  isLight
                    ? 'border-[#D0D0CA] bg-[#FFFFFF] text-[#0E0E0E] hover:border-[#0E0E0E]'
                    : 'border-[#262E3E] bg-[#12151F] text-[#D0D6E2] hover:border-[#FFFFFF] hover:text-[#FFFFFF]'
                }`}
              >
                <Download className="w-3.5 h-3.5" />
                <span>CAPABILITY STATEMENT (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Grid */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 border-b ${
        isLight ? 'border-[#E2E2DC]' : 'border-[#1C202B]'
      }`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-technical">
          {/* Col 1 */}
          <div>
            <div className={`font-bold tracking-wider uppercase mb-4 ${
              isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
            }`}>
              KAVIAR AEC
            </div>
            <p className={`text-[11px] leading-relaxed ${isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'}`}>
              Precision architecture, structural engineering, and general contracting for
              commercial towers, high-tech manufacturing, and monumental residential estates.
            </p>
            <div className={`mt-4 text-[10px] ${isLight ? 'text-[#888E9E]' : 'text-[#70788C]'}`}>
              ISO 9001:2015 · ISO 45001:2018 · ISO 14001:2015
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <div className={`font-bold tracking-wider uppercase mb-4 ${
              isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
            }`}>
              PRIMARY DISCIPLINES
            </div>
            <ul className={`space-y-2 ${isLight ? 'text-[#555D6E]' : 'text-[#9AA2B5]'}`}>
              <li>GENERAL CONTRACTING (GMP)</li>
              <li>POST-TENSIONED STRUCTURAL CIVIL</li>
              <li>COMMERCIAL GRADE-A TOWERS</li>
              <li>LUXURY RESIDENTIAL ATELIER</li>
              <li>BIM LEVEL 3 (ISO 19650)</li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <div className={`font-bold tracking-wider uppercase mb-4 ${
              isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
            }`}>
              REGIONAL OPERATING HUBS
            </div>
            <div className={`space-y-2 ${isLight ? 'text-[#555D6E]' : 'text-[#9AA2B5]'}`}>
              <div>CHENNAI (CENTRAL HQ)</div>
              <div>BENGALURU TECH CORRIDOR</div>
              <div>HYDERABAD FINANCIAL DISTRICT</div>
              <div>SRIPERUMBUDUR INDUSTRIAL ZONE</div>
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <div className={`font-bold tracking-wider uppercase mb-4 ${
              isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
            }`}>
              OPERATIONAL DATUM
            </div>
            <div className={`space-y-1.5 text-[11px] ${isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'}`}>
              <div>COORDINATES: 13°04&apos;12&quot;N 80°14&apos;20&quot;E</div>
              <div>DATUM: MSL +14.2M</div>
              <div className="text-emerald-500 font-semibold">STATUS: 4 SITES ACTIVELY CASTING</div>
            </div>
            <div className="mt-4">
              <button
                onClick={onOpenLiveSites}
                className={`text-[10px] underline hover:opacity-80 cursor-pointer ${
                  isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
                }`}
              >
                OPEN SITE TELEMETRY MONITOR →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Monospace Strip */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-technical gap-4 ${
        isLight ? 'text-[#777E90]' : 'text-[#70788C]'
      }`}>
        <div>
          © {new Date().getFullYear()} KAVIAR ARCHITECTURE & ENGINEERING. ALL RIGHTS RESERVED.
        </div>

        <div className="flex items-center space-x-6">
          <span>TOLERANCE ±2.0MM</span>
          <span>·</span>
          <span>SAFETY SCORE 0.00 LTI</span>
          <span>·</span>
          <button
            onClick={scrollToTop}
            className={`transition-colors uppercase cursor-pointer hover:underline ${
              isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
            }`}
          >
            TOP ↑
          </button>
        </div>
      </div>
    </footer>
  );
};
