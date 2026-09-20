import React from 'react';
import { X, MapPin, Calendar, Building, ShieldCheck, Check, Layers, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestScope: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestScope
}) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className={`relative w-full max-w-4xl max-h-[92vh] border shadow-2xl flex flex-col overflow-hidden transition-colors ${
        isLight
          ? 'bg-[#FFFFFF] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#0E1017] border-[#252C3D] text-[#F7F7F6]'
      }`}>
        {/* Header */}
        <div className={`p-4 sm:p-6 border-b flex items-center justify-between ${
          isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
        }`}>
          <div className="flex items-center space-x-3">
            <span className={`text-xs font-technical px-2.5 py-1 border font-bold ${
              isLight
                ? 'bg-[#FFFFFF] text-[#0E0E0E] border-[#D0D0CA]'
                : 'bg-[#222838] text-[#FFFFFF] border-[#30384C]'
            }`}>
              {project.number}
            </span>
            <div className="text-xs sm:text-sm font-technical font-bold tracking-wider uppercase">
              PROJECT ARCHIVE DOSSIER // {project.title}
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
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-8">
          {/* Main Visual & Image */}
          <div className="relative aspect-[16/9] bg-black border border-[#262626] overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover grayscale contrast-125 brightness-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-2">
              <div>
                <div className="text-xs font-technical text-emerald-400 font-bold uppercase tracking-wider">
                  STATUS: {project.status.toUpperCase()}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white uppercase mt-1">
                  {project.title}
                </h3>
              </div>

              <div className="text-xs font-technical bg-black/90 px-3 py-1.5 border border-white/20 text-white">
                SCALE: {project.scale}
              </div>
            </div>
          </div>

          {/* Overview & Metadata */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border text-xs font-technical ${
            isLight
              ? 'bg-[#F7F7F5] border-[#E2E2DC]'
              : 'bg-[#141722] border-[#222838]'
          }`}>
            <div>
              <span className={`uppercase block text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                CLIENT / SPONSOR
              </span>
              <span className="font-bold mt-0.5 block">{project.client}</span>
            </div>
            <div>
              <span className={`uppercase block text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                LOCATION
              </span>
              <span className="font-bold mt-0.5 block">{project.location}</span>
            </div>
            <div>
              <span className={`uppercase block text-[10px] ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                COMPLETION YEAR
              </span>
              <span className="font-bold mt-0.5 block">{project.year}</span>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div>
            <h4 className={`text-xs font-technical uppercase tracking-wider mb-2 ${
              isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
            }`}>
              ARCHITECTURAL & STRUCTURAL OVERVIEW
            </h4>
            <p className={`text-sm sm:text-base font-light leading-relaxed ${
              isLight ? 'text-[#4A5162]' : 'text-[#C5CCDB]'
            }`}>
              {project.description}
            </p>
          </div>

          {/* Technical Specifications Matrix */}
          <div>
            <h4 className={`text-xs font-technical uppercase tracking-wider mb-3 ${
              isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
            }`}>
              AUDITED ENGINEERING SPECIFICATIONS
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-technical">
              <div className={`p-3 border ${
                isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
              }`}>
                <div className={`text-[10px] uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                  CONCRETE MIX GRADE
                </div>
                <div className="text-sm font-bold mt-1">{project.specifications.concreteGrade}</div>
              </div>
              <div className={`p-3 border ${
                isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
              }`}>
                <div className={`text-[10px] uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                  STRUCTURAL STEEL SPEC
                </div>
                <div className="text-sm font-bold mt-1">{project.specifications.structuralSteel}</div>
              </div>
              <div className={`p-3 border ${
                isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
              }`}>
                <div className={`text-[10px] uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                  SEISMIC CAPACITY
                </div>
                <div className="text-sm font-bold mt-1">{project.specifications.seismicZone}</div>
              </div>
              <div className={`p-3 border ${
                isLight ? 'bg-[#F7F7F5] border-[#E2E2DC]' : 'bg-[#141722] border-[#222838]'
              }`}>
                <div className={`text-[10px] uppercase ${isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'}`}>
                  ENVIRONMENTAL CERTIFICATION
                </div>
                <div className="text-sm font-bold text-emerald-500 mt-1">{project.specifications.certification}</div>
              </div>
            </div>
          </div>

          {/* Disciplines */}
          <div>
            <h4 className={`text-xs font-technical uppercase tracking-wider mb-2 ${
              isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
            }`}>
              DISCIPLINES UNDER KAVIAR CONTRACT
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.disciplines.map((d, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 border text-xs font-technical uppercase ${
                    isLight
                      ? 'bg-[#F2F2F0] border-[#E0E0DB] text-[#3E4554]'
                      : 'bg-[#181B26] border-[#252C3C] text-[#D0D6E2]'
                  }`}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
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
            CLOSE DOSSIER
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestScope(project.title);
            }}
            className={`px-6 py-3 font-bold text-xs font-technical tracking-[0.2em] uppercase transition-all cursor-pointer flex items-center space-x-2 shadow-md ${
              isLight
                ? 'bg-[#0E0E0E] text-[#FFFFFF] hover:bg-[#282B33]'
                : 'bg-[#FFFFFF] text-[#0A0B0E] hover:bg-[#E3D9CC]'
            }`}
          >
            <span>INQUIRE SIMILAR SPECIFICATION</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
