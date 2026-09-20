import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustTicker } from './components/TrustTicker';
import { CompanyIntro } from './components/CompanyIntro';
import { ProjectsMatrix } from './components/ProjectsMatrix';
import { BimVisualizer } from './components/BimVisualizer';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { CredibilityMetrics } from './components/CredibilityMetrics';
import { CaseStudySpotlight } from './components/CaseStudySpotlight';
import { ProcessSection } from './components/ProcessSection';
import { OperationalRigor } from './components/OperationalRigor';
import { ProjectCalculator } from './components/ProjectCalculator';
import { Footer } from './components/Footer';
import { LiveSitesModal } from './components/LiveSitesModal';
import { RfpModal } from './components/RfpModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CapabilityDeckModal } from './components/CapabilityDeckModal';
import { CustomCursor } from './components/CustomCursor';
import { Project } from './types';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [isLiveSitesOpen, setIsLiveSitesOpen] = useState(false);
  const [isRfpOpen, setIsRfpOpen] = useState(false);
  const [isDeckOpen, setIsDeckOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [rfpInitialData, setRfpInitialData] = useState<any>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleRequestScope = (disciplineOrProject: string) => {
    setRfpInitialData({
      notes: `Inquiry regarding: ${disciplineOrProject}`
    });
    setIsRfpOpen(true);
  };

  const handleTransferEstimateToRfp = (estimateData: any) => {
    setRfpInitialData(estimateData);
    setIsRfpOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 relative font-sans ${
      isLight
        ? 'bg-[#F7F7F5] text-[#0E0E0E] selection:bg-[#0E0E0E] selection:text-[#FFFFFF]'
        : 'bg-[#0A0B0E] text-[#F5F5F3] selection:bg-[#FFFFFF] selection:text-[#0A0A0A]'
    }`}>
      {/* Precision Crosshair Cursor for Desktop */}
      <CustomCursor />

      {/* Global Sticky Navigation */}
      <Navbar
        onOpenLiveSites={() => setIsLiveSitesOpen(true)}
        onOpenRfp={() => {
          setRfpInitialData(null);
          setIsRfpOpen(true);
        }}
        onOpenDeck={() => setIsDeckOpen(true)}
      />

      {/* Main Structural Page Flow */}
      <main>
        {/* 1. Hero: Dramatic Minimalist Statement */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onExploreServices={() => scrollToSection('capabilities')}
          onOpenLiveSites={() => setIsLiveSitesOpen(true)}
        />

        {/* 2. Trust & Accreditations Ticker Strip */}
        <TrustTicker />

        {/* 3. Company Introduction & Manifesto ("01 — WHO WE ARE") */}
        <CompanyIntro
          onLearnMore={() => scrollToSection('capabilities')}
          onOpenDeck={() => setIsDeckOpen(true)}
        />

        {/* 4. Editorial Selected Projects Matrix ("02 — SELECTED PROJECTS") */}
        <ProjectsMatrix onSelectProject={(project) => setSelectedProject(project)} />

        {/* 5. Technical Visual Section / BIM Evolution Viewer ("03 — TECHNICAL RIGOR") */}
        <BimVisualizer />

        {/* 6. Capabilities & Services ("04 — CAPABILITIES") */}
        <CapabilitiesSection onRequestScope={handleRequestScope} />

        {/* 7. Numbers & Credibility Section ("05 — PERFORMANCE SPECS") */}
        <CredibilityMetrics />

        {/* 8. Flagship Case Study & Executive Quotes Spotlight ("06 — CASE STUDY SPOTLIGHT") */}
        <CaseStudySpotlight
          onOpenRfp={() => {
            setRfpInitialData({ notes: 'Inquiry regarding The Monolith Tower specifications' });
            setIsRfpOpen(true);
          }}
        />

        {/* 9. Construction Process & Rigor ("07 — OUR PROCESS") */}
        <ProcessSection />

        {/* 10. Operational Rigor & Fiduciary Guarantees ("08 — WHY KAVIAR") */}
        <OperationalRigor
          onOpenRfp={() => {
            setRfpInitialData(null);
            setIsRfpOpen(true);
          }}
        />

        {/* 11. Interactive Project Scope Calculator / Estimator ("09 — PRELIMINARY ESTIMATOR") */}
        <ProjectCalculator onTransferToRfp={handleTransferEstimateToRfp} />

        {/* 12. Big CTA & Minimalist Black Footer ("10 — START A PROJECT") */}
        <Footer
          onStartProject={() => {
            setRfpInitialData(null);
            setIsRfpOpen(true);
          }}
          onOpenDeck={() => setIsDeckOpen(true)}
          onOpenLiveSites={() => setIsLiveSitesOpen(true)}
        />
      </main>

      {/* Interactive Overlays & Modals */}
      <LiveSitesModal
        isOpen={isLiveSitesOpen}
        onClose={() => setIsLiveSitesOpen(false)}
      />

      <RfpModal
        isOpen={isRfpOpen}
        onClose={() => setIsRfpOpen(false)}
        initialData={rfpInitialData}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestScope={handleRequestScope}
      />

      <CapabilityDeckModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
      />
    </div>
  );
}
