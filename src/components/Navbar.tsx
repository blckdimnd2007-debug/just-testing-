import React, { useState, useEffect } from 'react';
import { Radio, ArrowUpRight, Menu, X, Compass, Download, Sun, Moon, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenLiveSites: () => void;
  onOpenRfp: () => void;
  onOpenDeck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenLiveSites,
  onOpenRfp,
  onOpenDeck
}) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setTimeString(timeStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const isLight = theme === 'light';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isLight
            ? 'bg-[#F7F7F5]/90 backdrop-blur-xl border-b border-[#E2E2DC] shadow-sm py-3.5'
            : 'bg-[#090A0E]/90 backdrop-blur-xl border-b border-[#1E222B] shadow-2xl py-3.5'
          : 'bg-transparent border-b border-white/10 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity with Sculptural Syne Font */}
          <a
            href="#"
            className="flex items-center space-x-3 group cursor-pointer select-none"
          >
            {/* Architectural Icon Mark */}
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div
                className={`absolute inset-0 border transition-transform duration-500 group-hover:rotate-90 ${
                  isLight ? 'border-[#0E0E0E]' : 'border-[#FFFFFF]'
                }`}
              />
              <div
                className={`w-2.5 h-2.5 transition-transform duration-500 group-hover:scale-125 ${
                  isLight ? 'bg-[#0E0E0E]' : 'bg-[#E3D9CC]'
                }`}
              />
            </div>

            <div className="flex flex-col">
              <span
                className={`text-xl sm:text-2xl font-black tracking-[-0.04em] font-heading uppercase ${
                  isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
                }`}
              >
                KAVIAR
              </span>
              <span
                className={`text-[9px] font-technical tracking-[0.25em] uppercase -mt-1 ${
                  isLight ? 'text-[#777E90]' : 'text-[#8A90A2]'
                }`}
              >
                AEC · ARCHITECTURE
              </span>
            </div>
          </a>

          {/* Central Live Coordinates & Clock Ticker */}
          <div
            className={`hidden lg:flex items-center space-x-3 text-[11px] font-technical px-4 py-1.5 border transition-colors ${
              isLight
                ? 'bg-[#FFFFFF] border-[#E2E2DC] text-[#555C6D] shadow-xs'
                : 'bg-[#12141A]/80 backdrop-blur-sm border-[#222733] text-[#8C93A4]'
            }`}
          >
            <Compass className={`w-3.5 h-3.5 animate-pulse ${isLight ? 'text-[#0E0E0E]' : 'text-[#E3D9CC]'}`} />
            <span>13°04&apos;12&quot;N 80°14&apos;20&quot;E</span>
            <span className={isLight ? 'text-[#D0D0CA]' : 'text-[#333846]'}>|</span>
            <span className={isLight ? 'text-[#0E0E0E] font-medium' : 'text-[#F5F5F3] font-medium'}>
              CHENNAI {timeString || '12:00:00'} IST
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden xl:flex items-center space-x-7 text-[12px] font-technical tracking-[0.15em] font-medium ${
              isLight ? 'text-[#4A5162]' : 'text-[#B8BED0]'
            }`}
          >
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'} transition-colors uppercase cursor-pointer relative py-1 group`}
            >
              <span>01 STUDIO</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className={`hover:${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'} transition-colors uppercase cursor-pointer relative py-1 group`}
            >
              <span>02 PROJECTS</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('bim-rigor')}
              className={`hover:${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'} transition-colors uppercase cursor-pointer relative py-1 group`}
            >
              <span>03 BIM RIGOR</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('capabilities')}
              className={`hover:${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'} transition-colors uppercase cursor-pointer relative py-1 group`}
            >
              <span>04 CAPABILITIES</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className={`hover:${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'} transition-colors uppercase cursor-pointer relative py-1 group`}
            >
              <span>05 PROCESS</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('estimator')}
              className={`hover:${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'} transition-colors uppercase cursor-pointer relative py-1 group ${
                isLight ? 'text-[#0E0E0E] font-bold' : 'text-[#FFFFFF] font-bold'
              }`}
            >
              <span>CALCULATOR</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-current transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          {/* Action Hub: Theme Switcher, Live Sites & RFP Portal */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 sm:px-3 sm:py-2 flex items-center space-x-1.5 text-xs font-technical border transition-all cursor-pointer ${
                isLight
                  ? 'bg-[#FFFFFF] border-[#E2E2DC] text-[#0E0E0E] hover:bg-[#EAEAEA]'
                  : 'bg-[#14161E] border-[#252A36] text-[#E3D9CC] hover:bg-[#1C202B] hover:border-[#4B5565]'
              }`}
              title={isLight ? 'Switch to Obsidian Noir (Dark)' : 'Switch to Alabaster Studio (Light)'}
              aria-label="Toggle theme"
            >
              {isLight ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#0E0E0E]" />
                  <span className="hidden sm:inline-block tracking-wider font-semibold">NOIR</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#E3D9CC]" />
                  <span className="hidden sm:inline-block tracking-wider font-semibold">LIGHT</span>
                </>
              )}
            </button>

            {/* Live Sites Button */}
            <button
              onClick={onOpenLiveSites}
              id="live-sites-nav-btn"
              className={`hidden md:flex items-center space-x-2 text-[11px] font-technical px-3 py-2 border transition-all cursor-pointer ${
                isLight
                  ? 'bg-[#FFFFFF] border-[#E2E2DC] text-[#0E0E0E] hover:border-[#0E0E0E]'
                  : 'bg-[#14161E] border-[#252A36] text-[#D0D6E2] hover:border-[#FFFFFF]'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-[0.15em] uppercase font-medium">
                LIVE SITES (4)
              </span>
            </button>

            {/* RFP Trigger */}
            <button
              onClick={onOpenRfp}
              id="submit-rfp-nav-btn"
              className={`flex items-center space-x-1.5 text-[11px] font-technical tracking-[0.18em] px-4 py-2 font-bold transition-all cursor-pointer shadow-sm ${
                isLight
                  ? 'bg-[#0E0E0E] text-[#FFFFFF] hover:bg-[#2A2A2A]'
                  : 'bg-[#FFFFFF] text-[#0A0B0E] hover:bg-[#E2D9CC]'
              }`}
            >
              <span>SUBMIT RFP</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile hamburger button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`xl:hidden p-2 border transition-colors ${
                isLight
                  ? 'bg-[#FFFFFF] border-[#E2E2DC] text-[#0E0E0E]'
                  : 'bg-[#14161E] border-[#252A36] text-[#FFFFFF]'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            className={`xl:hidden mt-4 pt-4 pb-6 border-t ${
              isLight
                ? 'border-[#E2E2DC] bg-[#F7F7F5] text-[#0E0E0E]'
                : 'border-[#1F2430] bg-[#0A0B0E] text-[#F5F5F3]'
            }`}
          >
            <div className="flex flex-col space-y-4 text-xs font-technical tracking-[0.15em]">
              <div
                className={`text-[10px] pb-2 border-b ${
                  isLight ? 'text-[#777E90] border-[#E2E2DC]' : 'text-[#777F92] border-[#1C202B]'
                }`}
              >
                13°04&apos;12&quot;N 80°14&apos;20&quot;E · CHENNAI {timeString} IST
              </div>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-1 hover:font-bold"
              >
                01 WHO WE ARE
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left py-1 hover:font-bold"
              >
                02 SELECTED PROJECTS
              </button>
              <button
                onClick={() => scrollToSection('bim-rigor')}
                className="text-left py-1 hover:font-bold"
              >
                03 BIM / TECHNICAL SLIDER
              </button>
              <button
                onClick={() => scrollToSection('capabilities')}
                className="text-left py-1 hover:font-bold"
              >
                04 CAPABILITIES
              </button>
              <button
                onClick={() => scrollToSection('process')}
                className="text-left py-1 hover:font-bold"
              >
                05 CONSTRUCTION PROCESS
              </button>
              <button
                onClick={() => scrollToSection('estimator')}
                className="text-left font-bold py-1"
              >
                06 SCOPE ESTIMATOR
              </button>

              <div className="pt-2 flex flex-col space-y-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLiveSites();
                  }}
                  className={`w-full py-2.5 text-center flex items-center justify-center space-x-2 border ${
                    isLight ? 'bg-[#FFFFFF] border-[#E2E2DC]' : 'bg-[#14161E] border-[#252A36]'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>VIEW LIVE SITES (4)</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenRfp();
                  }}
                  className={`w-full py-3 font-bold text-center tracking-[0.18em] ${
                    isLight ? 'bg-[#0E0E0E] text-[#FFFFFF]' : 'bg-[#FFFFFF] text-[#0A0B0E]'
                  }`}
                >
                  SUBMIT RFP & SPEC
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDeck();
                  }}
                  className={`w-full py-2.5 text-center flex items-center justify-center space-x-2 border ${
                    isLight
                      ? 'bg-[#EAEAE8] border-[#D8D8D2] text-[#0E0E0E]'
                      : 'bg-[#11131A] border-[#242A36] text-[#D0D6E2]'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>CAPABILITY STATEMENT (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
