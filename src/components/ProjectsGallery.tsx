import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ProjectItem } from '../types/portfolio';
import { ArrowRight, Layers, Sparkles, ShoppingBag } from 'lucide-react';

interface ProjectsGalleryProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({ onSelectProject }) => {
  const [filter, setFilter] = useState<'All' | 'Enterprise' | 'AI & Microservices'>('All');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Enterprise') return project.category === 'Enterprise';
    if (filter === 'AI & Microservices') return project.category === 'AI & Microservices';
    return true;
  });

  return (
    <section className="flex flex-col gap-10 md:gap-12 pt-8" id="projects-grid">
      {/* Section Header with Category Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#8e9192] uppercase tracking-widest">
              03 // SELECTED WORKS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight font-sans">
            Projects Grid
          </h2>
        </div>

        {/* Interactive Category Switcher (Functional Tabs) */}
        <div className="flex items-center gap-1 p-1 bg-[#1c1b1b] border border-[#444748]/50 rounded-lg self-start md:self-auto">
          <button
            onClick={() => setFilter('All')}
            className={`px-4 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
              filter === 'All'
                ? 'bg-[#353534] text-white font-medium shadow-sm'
                : 'text-[#c4c7c8] hover:text-white'
            }`}
          >
            All Projects (0{projects.length})
          </button>
          <button
            onClick={() => setFilter('Enterprise')}
            className={`px-4 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
              filter === 'Enterprise'
                ? 'bg-[#353534] text-white font-medium shadow-sm'
                : 'text-[#c4c7c8] hover:text-white'
            }`}
          >
            Enterprise ERP (01)
          </button>
          <button
            onClick={() => setFilter('AI & Microservices')}
            className={`px-4 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
              filter === 'AI & Microservices'
                ? 'bg-[#353534] text-white font-medium shadow-sm'
                : 'text-[#c4c7c8] hover:text-white'
            }`}
          >
            AI & Marketplace (02)
          </button>
        </div>
      </div>

      {/* 3-Column Architectural Project Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group flex flex-col bg-[#1c1b1b] border border-[#444748]/50 rounded-lg overflow-hidden hover:border-[#8e9192] hover:bg-[#201f1f] transition-all duration-200 cursor-pointer shadow-sm"
          >
            {/* Image Preview Container */}
            <div className="relative w-full h-56 bg-[#2a2a2a] overflow-hidden">
              <img
                src={project.images[0]?.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              {/* Category Tag Overlay */}
              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#131313]/85 backdrop-blur-md border border-[#444748]/40 text-[11px] font-mono text-[#e5e2e1] uppercase tracking-wider">
                {project.category}
              </div>
              {/* Stat/KPI Badge Overlay */}
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#131313]/85 backdrop-blur-md border border-[#444748]/40 text-[11px] font-mono text-white">
                {project.kpi}
              </div>
            </div>

            {/* Content Details */}
            <div className="flex flex-col p-6 flex-1 justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#8e9192]">
                    CASE {project.code.replace('ARCH-', '')} // {project.subtitle.split(' ')[0].toUpperCase()}
                  </span>
                  <span className="text-[#c4c7c8]">{project.year}</span>
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-white transition-colors font-sans">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#c4c7c8] line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Stack summary & View Case Study trigger */}
              <div className="pt-3 border-t border-[#444748]/30 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#c7c6c6] truncate max-w-[60%]">
                  <span>{project.technologies[0]}</span>
                  <span>•</span>
                  <span>{project.technologies[1] || 'PostgreSQL'}</span>
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-white group-hover:translate-x-0.5 transition-transform">
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
