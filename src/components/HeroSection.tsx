import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowDown, FileText, CheckCircle2 } from 'lucide-react';

interface HeroSectionProps {
  onExploreProjects: () => void;
  onOpenCV: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreProjects,
  onOpenCV,
}) => {
  return (
    <section className="flex flex-col gap-10 md:gap-14 relative pt-4 pb-6">
      {/* Ambient subtle glow */}
      <div className="absolute -top-12 -left-12 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Overline + Availability Pill Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-[#8e9192]">
          <span className="text-[#8e9192] tracking-widest uppercase">SYS // ARCH 001</span>
          <span className="text-[#444748]">/</span>
          <span className="text-[#c4c7c8] uppercase tracking-wider">
            Full Stack Systems Engineer & Architect
          </span>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c1b1b] border border-[#444748]/60 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
          <span className="text-xs font-mono uppercase tracking-wider text-[#e5e2e1]">
            Available for select engagements (Q2/Q3)
          </span>
        </div>
      </div>

      {/* Main Monumental Heading */}
      <div className="flex flex-col gap-6 max-w-5xl">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.08] font-sans">
          Crafting digital experiences at the intersection of design systems, AI interfaces, and engineering fidelity.
        </h1>
        <p className="text-base sm:text-lg text-[#c4c7c8] max-w-3xl leading-relaxed">
          Operating as a senior full stack software engineer and systems architect based in Cairo. Over 3+ years spent building secure, scalable web platforms, high-throughput RESTful APIs, responsive microservices, and high-fidelity enterprise applications.
        </p>
      </div>

      {/* Action Row & Quick KPI Stat Strip */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pt-2">
        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onExploreProjects}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#131313] bg-white px-6 py-3.5 rounded-lg hover:bg-neutral-200 transition-all shadow-md cursor-pointer"
          >
            <span>Explore Selected Works</span>
            <ArrowDown className="w-4 h-4" />
          </button>
          
          <button
            onClick={onOpenCV}
            className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#201f1f] hover:bg-[#2a2a2a] px-6 py-3.5 rounded-lg border border-[#444748]/60 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-[#8e9192]" />
            <span>Download Curriculum Vitae</span>
          </button>
        </div>

        {/* Inline Sparkline / Micro Data Visualization */}
        <div className="flex items-center gap-6 sm:gap-8 bg-[#1c1b1b] px-6 py-3 rounded-lg border border-[#444748]/40 self-start lg:self-auto">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono text-[#8e9192] uppercase tracking-wider">
              Latency Target
            </span>
            <span className="text-xl sm:text-2xl font-semibold text-white font-sans tabular-nums">
              &lt; 350ms
            </span>
            <span className="text-[11px] text-[#c4c7c8] font-mono">
              Vector & API Sync
            </span>
          </div>

          <div className="w-px h-10 bg-[#444748]/60" />

          {/* Sparkline SVG */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-[10px] font-mono text-[#8e9192] uppercase tracking-wider">
              <span>Velocity '25–'26</span>
              <span className="text-[#10b981] ml-2">99.8% CSAT</span>
            </div>
            <svg
              className="w-32 h-8 text-white"
              fill="none"
              viewBox="0 0 100 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20L18 16L35 18L52 10L68 14L84 4L100 8"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
              <path
                d="M0 20L18 16L35 18L52 10L68 14L84 4L100 8V24H0V20Z"
                fill="currentColor"
                fillOpacity="0.12"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
