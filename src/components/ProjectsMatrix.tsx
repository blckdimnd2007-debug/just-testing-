import React, { useState } from 'react';
import { ArrowUpRight, Filter, Layers, X, Calendar, MapPin, Building, ShieldCheck, Check } from 'lucide-react';
import { Project } from '../types';
import { PROJECTS_DATA } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

interface ProjectsMatrixProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsMatrix: React.FC<ProjectsMatrixProps> = ({ onSelectProject }) => {
  const { theme } = useTheme();
  const isLight = theme === 'light';

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeScale, setActiveScale] = useState<string>('All');

  const categories = ['All', 'Commercial', 'Residential', 'Industrial', 'Infrastructure'];
  const scaleFilters = ['All', '< 50k', '50k-200k', '200k+'];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchCat = activeCategory === 'All' || project.category === activeCategory;
    const matchScale = activeScale === 'All' || project.scaleCategory === activeScale;
    return matchCat && matchScale;
  });

  return (
    <section
      id="projects"
      className={`py-24 md:py-32 border-b transition-colors duration-300 relative ${
        isLight
          ? 'bg-[#FFFFFF] border-[#E2E2DC] text-[#0E0E0E]'
          : 'bg-[#090A0E] border-[#1C202B] text-[#F7F7F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between border-b pb-6 mb-12 gap-4 ${
          isLight ? 'border-[#E2E2DC]' : 'border-[#1E2330]'
        }`}>
          <div>
            <div className="text-xs md:text-sm font-technical tracking-[0.25em] uppercase flex items-center space-x-3 mb-2">
              <span className={`font-bold ${isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'}`}>02</span>
              <span className={isLight ? 'text-[#A0A6B5]' : 'text-[#505769]'}>—</span>
              <span className={isLight ? 'text-[#666F82]' : 'text-[#9AA2B5]'}>PORTFOLIO MATRIX</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-[-0.03em] font-heading uppercase">
              SELECTED PROJECTS
            </h2>
          </div>

          <div className="flex items-center space-x-4">
            <span className={`text-xs font-technical ${isLight ? 'text-[#777E90]' : 'text-[#7D8597]'}`}>
              SHOWING {filteredProjects.length} OF {PROJECTS_DATA.length} MONUMENTAL WORKS
            </span>
          </div>
        </div>

        {/* Filter Controls: Sector and Scale */}
        <div className={`mb-12 flex flex-wrap items-center justify-between gap-4 p-4 border transition-colors ${
          isLight
            ? 'bg-[#F7F7F5] border-[#E2E2DC]'
            : 'bg-[#11131A] border-[#222838]'
        }`}>
          {/* Category filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-[11px] font-technical uppercase mr-2 flex items-center ${
              isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
            }`}>
              <Filter className="w-3 h-3 mr-1" /> SECTOR:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-technical px-3 py-1.5 transition-all cursor-pointer ${
                  activeCategory === cat
                    ? isLight
                      ? 'bg-[#0E0E0E] text-[#FFFFFF] font-bold shadow-xs'
                      : 'bg-[#FFFFFF] text-[#0A0B0E] font-bold shadow-xs'
                    : isLight
                    ? 'text-[#666F80] hover:text-[#0E0E0E] hover:bg-[#EAEAE8]'
                    : 'text-[#8A92A6] hover:text-[#FFFFFF] hover:bg-[#1A1E29]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Scale filter */}
          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-[11px] font-technical uppercase mr-2 ${
              isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
            }`}>
              SCALE:
            </span>
            {scaleFilters.map((scale) => (
              <button
                key={scale}
                onClick={() => setActiveScale(scale)}
                className={`text-xs font-technical px-2.5 py-1.5 transition-all cursor-pointer ${
                  activeScale === scale
                    ? isLight
                      ? 'bg-[#0E0E0E] text-[#FFFFFF] font-bold'
                      : 'bg-[#FFFFFF] text-[#0A0B0E] font-bold'
                    : isLight
                    ? 'text-[#666F80] hover:text-[#0E0E0E] hover:bg-[#EAEAE8]'
                    : 'text-[#8A92A6] hover:text-[#FFFFFF] hover:bg-[#1A1E29]'
                }`}
              >
                {scale === 'All' ? 'ALL SCALES' : `${scale} SQ.FT`}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className={`py-20 text-center border ${
            isLight ? 'border-[#E2E2DC] bg-[#F7F7F5]' : 'border-[#222838] bg-[#11131A]'
          }`}>
            <p className="text-sm font-technical text-[#777777]">
              NO ARCHITECTURAL PROJECTS MATCH THIS CRITERIA FILTER.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setActiveScale('All');
              }}
              className="mt-4 text-xs font-technical underline cursor-pointer"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-6 lg:gap-8">
            {filteredProjects.map((project, idx) => {
              let colSpan = 'col-span-12 lg:col-span-6';
              if (idx % 4 === 0) colSpan = 'col-span-12 lg:col-span-8';
              else if (idx % 4 === 1) colSpan = 'col-span-12 lg:col-span-4';
              else if (idx % 4 === 2) colSpan = 'col-span-12 lg:col-span-4';
              else if (idx % 4 === 3) colSpan = 'col-span-12 lg:col-span-8';

              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`${colSpan} group cursor-pointer border overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                    isLight
                      ? 'border-[#E2E2DC] bg-[#FFFFFF] hover:border-[#0E0E0E] hover:shadow-xl'
                      : 'border-[#222838] bg-[#11131C] hover:border-[#E3D9CC] hover:shadow-2xl'
                  }`}
                >
                  {/* Image Container with Reveal and Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale contrast-125 brightness-95 transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-30 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="text-xs font-technical bg-black/80 text-white px-2.5 py-1 border border-white/20 backdrop-blur-sm">
                        {project.number}
                      </span>
                      <span className="text-[10px] font-technical bg-black/80 text-white px-2.5 py-1 border border-white/20 backdrop-blur-sm">
                        {project.scale}
                      </span>
                    </div>

                    {/* Hover Reveal: VIEW SPECS */}
                    <div className="absolute bottom-4 right-4 z-10 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <div className="inline-flex items-center space-x-2 text-xs font-technical px-3.5 py-2 bg-white text-black font-bold shadow-lg">
                        <span>VIEW SPECS</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Metadata and Title Area */}
                  <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className={`flex items-center justify-between text-xs font-technical mb-3 ${
                        isLight ? 'text-[#777E90]' : 'text-[#8A92A6]'
                      }`}>
                        <span className="flex items-center space-x-1">
                          <MapPin className="w-3 h-3 opacity-60" />
                          <span>{project.location}</span>
                        </span>
                        <span>{project.year}</span>
                      </div>

                      {/* Project Title */}
                      <h3 className={`text-xl md:text-2xl font-bold font-heading tracking-tight transition-transform duration-300 group-hover:translate-x-1 uppercase ${
                        isLight ? 'text-[#0E0E0E]' : 'text-[#FFFFFF]'
                      }`}>
                        {project.title}
                      </h3>

                      <p className={`mt-3 text-xs md:text-sm line-clamp-2 leading-relaxed ${
                        isLight ? 'text-[#586072]' : 'text-[#9DA6B8]'
                      }`}>
                        {project.description}
                      </p>
                    </div>

                    {/* Disciplines tags */}
                    <div className={`mt-6 pt-4 border-t flex flex-wrap items-center justify-between gap-2 ${
                      isLight ? 'border-[#EAEAE8]' : 'border-[#1C202C]'
                    }`}>
                      <div className="flex flex-wrap gap-1.5">
                        {project.disciplines.map((d, i) => (
                          <span
                            key={i}
                            className={`text-[9px] font-technical uppercase tracking-wider px-2 py-0.5 border ${
                              isLight
                                ? 'bg-[#F2F2F0] border-[#E0E0DB] text-[#4F5768]'
                                : 'bg-[#181B24] border-[#252C3C] text-[#8C95A7]'
                            }`}
                          >
                            {d}
                          </span>
                        ))}
                      </div>

                      <span className={`text-[10px] font-technical uppercase ${
                        isLight ? 'text-[#777E90]' : 'text-[#7D8597]'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
