import React, { useState } from 'react';
import { X, Radio, Wind, Thermometer, Users, ShieldAlert, CheckCircle, Video, RefreshCw } from 'lucide-react';
import { LIVE_SITES_DATA } from '../data/mockData';
import { LiveSite } from '../types';
import { useTheme } from '../context/ThemeContext';

interface LiveSitesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LiveSitesModal: React.FC<LiveSitesModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [selectedSiteId, setSelectedSiteId] = useState<string>(LIVE_SITES_DATA[0].id);

  if (!isOpen) return null;

  const currentSite = LIVE_SITES_DATA.find((s) => s.id === selectedSiteId) || LIVE_SITES_DATA[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-5xl max-h-[90vh] border shadow-2xl flex flex-col overflow-hidden transition-colors ${
        isLight
          ? 'bg-[#FFFFFF] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#0E1017] border-[#252C3D] text-[#F7F7F6]'
      }`}>
        {/* Header */}
        <div className={`p-4 sm:p-6 border-b flex items-center justify-between ${
          isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
        }`}>
          <div className="flex items-center space-x-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <div className="text-xs sm:text-sm font-technical font-bold tracking-wider uppercase">
              ACTIVE SITE TELEMETRY STREAM // 4 METRO SITES CASTING
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

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-grow">
          {/* Site Selector Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            {LIVE_SITES_DATA.map((site) => {
              const isSelected = site.id === selectedSiteId;
              return (
                <button
                  key={site.id}
                  onClick={() => setSelectedSiteId(site.id)}
                  className={`p-3 text-left border transition-all cursor-pointer ${
                    isSelected
                      ? isLight
                        ? 'bg-[#FFFFFF] border-[#0E0E0E] shadow-sm'
                        : 'bg-[#1D2230] border-[#FFFFFF]'
                      : isLight
                      ? 'bg-[#F7F7F5] border-[#E0E0DA] hover:border-[#0E0E0E]'
                      : 'bg-[#131620] border-[#222838] hover:border-[#4B5565]'
                  }`}
                >
                  <div className={`flex items-center justify-between text-[10px] font-technical mb-1 ${
                    isLight ? 'text-[#777E90]' : 'text-[#7D8597]'
                  }`}>
                    <span>{site.code}</span>
                    <span className="text-emerald-500 font-bold">{site.progressPercentage}%</span>
                  </div>
                  <div className={`text-xs font-bold truncate font-heading uppercase ${
                    isSelected
                      ? isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
                      : isLight ? 'text-[#4A5162]' : 'text-[#A0A8BC]'
                  }`}>
                    {site.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Site Deep-Dive Grid */}
          <div className="grid grid-cols-12 gap-6 items-start">
            {/* Camera Viewport Simulation */}
            <div className="col-span-12 lg:col-span-7">
              <div className="relative aspect-[16/10] bg-black border border-[#262626] overflow-hidden">
                <img
                  src={currentSite.cameraFeedUrl}
                  alt={currentSite.name}
                  className="w-full h-full object-cover grayscale contrast-125 brightness-90"
                />

                {/* Surveillance OSD */}
                <div className="absolute top-3 left-3 flex items-center space-x-2 bg-black/80 px-2.5 py-1 text-[10px] font-technical text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>CAM-01 [LIVE STREAM FEED]</span>
                </div>

                <div className="absolute top-3 right-3 text-[10px] font-technical text-white bg-black/80 px-2.5 py-1 border border-white/20">
                  {currentSite.coordinates}
                </div>

                <div className="absolute bottom-3 left-3 text-[10px] font-technical text-white bg-black/80 px-2.5 py-1 border border-white/20">
                  STAGE: {currentSite.stage}
                </div>

                <div className="absolute bottom-3 right-3 text-[10px] font-technical text-gray-400 bg-black/80 px-2 py-1">
                  CRANE: {currentSite.craneStatus}
                </div>
              </div>
            </div>

            {/* Live Metrics & Telemetry Feed */}
            <div className="col-span-12 lg:col-span-5 space-y-4 text-xs font-technical">
              <div className={`p-4 border ${
                isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
              }`}>
                <div className={`uppercase text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                  CURRENT STRUCTURAL MILESTONE
                </div>
                <div className="text-sm font-bold mt-1">{currentSite.stage}</div>
                <div className="mt-3 flex items-center justify-between text-[11px]">
                  <span className={isLight ? 'text-[#666F80]' : 'text-[#8A92A6]'}>SCHEDULE PROGRESS</span>
                  <span className="font-bold">{currentSite.progressPercentage}% COMPLETE</span>
                </div>
                <div className={`w-full h-1.5 mt-1 overflow-hidden ${
                  isLight ? 'bg-[#DCDCD6]' : 'bg-[#2A3142]'
                }`}>
                  <div
                    className={`h-full ${isLight ? 'bg-[#0E0E0E]' : 'bg-[#FFFFFF]'}`}
                    style={{ width: `${currentSite.progressPercentage}%` }}
                  />
                </div>
              </div>

              {/* Environmental & Workforce Sensors */}
              <div className="grid grid-cols-2 gap-3">
                <div className={`p-3 border ${
                  isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
                }`}>
                  <div className={`flex items-center space-x-1.5 text-[10px] uppercase ${
                    isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
                  }`}>
                    <Thermometer className="w-3.5 h-3.5" />
                    <span>TEMPERATURE</span>
                  </div>
                  <div className="text-base font-bold mt-1">{currentSite.temperature}</div>
                </div>

                <div className={`p-3 border ${
                  isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
                }`}>
                  <div className={`flex items-center space-x-1.5 text-[10px] uppercase ${
                    isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
                  }`}>
                    <Wind className="w-3.5 h-3.5" />
                    <span>WIND SPEED</span>
                  </div>
                  <div className="text-base font-bold mt-1">{currentSite.windSpeed}</div>
                </div>

                <div className={`p-3 border ${
                  isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
                }`}>
                  <div className={`flex items-center space-x-1.5 text-[10px] uppercase ${
                    isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
                  }`}>
                    <Users className="w-3.5 h-3.5" />
                    <span>HEADCOUNT ON-SITE</span>
                  </div>
                  <div className="text-base font-bold mt-1">{currentSite.workersOnSite} OPERATIVES</div>
                </div>

                <div className={`p-3 border ${
                  isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
                }`}>
                  <div className={`flex items-center space-x-1.5 text-[10px] uppercase ${
                    isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
                  }`}>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                    <span>SAFETY STATUS</span>
                  </div>
                  <div className="text-[11px] font-bold text-emerald-500 mt-1">{currentSite.safetyScore}</div>
                </div>
              </div>

              {/* Material Volume */}
              <div className={`p-3 border ${
                isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
              }`}>
                <div className={`uppercase text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                  CUMULATIVE CONCRETE POURED
                </div>
                <div className="text-sm font-bold mt-0.5">{currentSite.concreteVolumePoured}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`p-4 border-t flex items-center justify-between text-xs font-technical ${
          isLight ? 'bg-[#F7F7F5] border-[#E2E2DC] text-[#777E90]' : 'bg-[#11141E] border-[#222838] text-[#8A92A6]'
        }`}>
          <span>TELEMETRY UPDATE FREQUENCY: 60 SECONDS</span>
          <button
            onClick={onClose}
            className={`px-4 py-2 border transition-colors cursor-pointer ${
              isLight
                ? 'border-[#D0D0CA] bg-[#FFFFFF] text-[#0E0E0E] hover:border-[#0E0E0E]'
                : 'border-[#262E3E] bg-[#1B202D] text-[#FFFFFF] hover:border-[#FFFFFF]'
            }`}
          >
            DISMISS VIEWER
          </button>
        </div>
      </div>
    </div>
  );
};
