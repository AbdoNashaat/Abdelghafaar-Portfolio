import React, { useState } from 'react';
import { ProjectItem } from '../types/portfolio';
import { projects } from '../data/portfolioData';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Terminal,
  Maximize2,
  Minimize2,
  CheckCircle2,
  AlertTriangle,
  Cpu,
  Monitor,
  Calendar,
  Grid,
} from 'lucide-react';

interface CaseStudyViewProps {
  currentProject: ProjectItem;
  onSelectProject: (project: ProjectItem) => void;
  onNavigateHome: () => void;
  onContactClick: () => void;
}

export const CaseStudyView: React.FC<CaseStudyViewProps> = ({
  currentProject,
  onSelectProject,
  onNavigateHome,
  onContactClick,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [cliInput, setCliInput] = useState('');
  const [cliOutput, setCliOutput] = useState<string | null>(null);

  const currentIndex = projects.findIndex((p) => p.id === currentProject.id);
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % currentProject.images.length);
  };

  const handleExecuteCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;
    
    if (trimmed.includes('isolate') || trimmed.includes('query')) {
      setCliOutput('✓ 3 clustered volatility anomalies detected. High-gamma liquidity block spotted at $890.');
    } else if (trimmed.includes('rls') || trimmed.includes('security')) {
      setCliOutput('✓ Security Definer audit passed. 10/10 tables enforce tenant isolation policies. Search path locked.');
    } else if (trimmed.includes('vector') || trimmed.includes('embed')) {
      setCliOutput('✓ 1024-dim cosine distance matched in 1.4ms. Similarity score: 0.948 (Rank 1/500).');
    } else if (trimmed.includes('status') || trimmed.includes('docker')) {
      setCliOutput('✓ 4 container replicas healthy. Memory footprint: 142MB. CPU utilization: 2.1%.');
    } else {
      setCliOutput(`✓ Query dispatched: "${trimmed}". Executed in 1.8ms with zero packet loss.`);
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Header & Breadcrumbs Section */}
      <section className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-16 pt-8 pb-10">
        <div className="flex flex-col gap-6">
          {/* Breadcrumb + Status pill */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono">
              <button
                onClick={onNavigateHome}
                className="text-[#8e9192] hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
              >
                Archive
              </button>
              <span className="text-[#444748]">/</span>
              <button
                onClick={onNavigateHome}
                className="text-[#8e9192] hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
              >
                Projects
              </button>
              <span className="text-[#444748]">/</span>
              <span className="text-white uppercase tracking-wider font-semibold">
                Case Study: {currentProject.code}
              </span>
            </nav>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2a2a2a] text-[#e5e2e1] text-xs font-mono uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span>Production Live</span>
              </span>

              {/* Project selector dropdown */}
              <div className="relative inline-block">
                <select
                  value={currentProject.id}
                  onChange={(e) => {
                    const found = projects.find((p) => p.id === e.target.value);
                    if (found) {
                      onSelectProject(found);
                      setActiveSlide(0);
                    }
                  }}
                  className="bg-[#201f1f] text-xs font-mono text-white py-1 px-3 rounded border border-[#444748] hover:border-[#8e9192] cursor-pointer outline-none"
                >
                  {projects.map((p) => (
                    <option key={p.id} value={p.id} className="bg-[#1c1b1b] text-white">
                      {p.code}: {p.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Headline and Client metadata card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#8e9192] uppercase tracking-widest">
                  0{currentIndex + 1} // 0{projects.length}
                </span>
                <span className="h-px w-8 bg-[#353534]"></span>
                <span className="text-xs font-mono text-[#c4c7c8] uppercase tracking-wider">
                  {currentProject.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight font-sans">
                {currentProject.title}: {currentProject.subtitle}
              </h1>

              <p className="text-base sm:text-lg text-[#c4c7c8] max-w-3xl leading-relaxed mt-1 font-sans">
                {currentProject.overview}
              </p>
            </div>

            {/* Right Meta Card */}
            <div className="lg:col-span-4 flex flex-col gap-4 bg-[#1c1b1b] p-6 rounded-lg border border-[#444748]/50 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] font-mono text-[#8e9192] uppercase tracking-wider block">
                    Client
                  </span>
                  <span className="text-lg font-medium text-white font-sans mt-0.5 block">
                    {currentProject.client}
                  </span>
                </div>
                <div>
                  <span className="text-[11px] font-mono text-[#8e9192] uppercase tracking-wider block">
                    Timeline
                  </span>
                  <span className="text-lg font-medium text-white font-sans mt-0.5 block">
                    {currentProject.timeline}
                  </span>
                </div>
                <div className="col-span-2 pt-2 border-t border-[#444748]/30">
                  <span className="text-[11px] font-mono text-[#8e9192] uppercase tracking-wider block">
                    Core Mandate
                  </span>
                  <span className="text-sm text-[#e5e2e1] font-sans mt-0.5 block">
                    {currentProject.mandate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Preview Canvas / Carousel */}
      <section className="w-full bg-[#0e0e0e] py-8 border-y border-[#444748]/30" id="interactive-preview">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-4">
            {/* Carousel Control Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-1">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-[#201f1f] px-3 py-1.5 rounded border border-[#444748]/40">
                  <Layers className="w-4 h-4 text-white" />
                  <span className="text-xs font-mono uppercase tracking-wider text-white">
                    {currentProject.images[activeSlide]?.title || '01 / Workstation Canvas'}
                  </span>
                </div>
                <span className="text-xs font-mono text-[#8e9192] hidden sm:inline">
                  Resolution: 3840 x 2160 UHD Master
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevSlide}
                  aria-label="Previous Slide"
                  className="w-9 h-9 rounded bg-[#201f1f] hover:bg-[#353534] text-white flex items-center justify-center transition-colors cursor-pointer border border-[#444748]/40"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-1.5 px-3">
                  {currentProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveSlide(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === activeSlide ? 'w-5 bg-white' : 'w-2 bg-[#353534] hover:bg-[#444748]'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={handleNextSlide}
                  aria-label="Next Slide"
                  className="w-9 h-9 rounded bg-[#201f1f] hover:bg-[#353534] text-white flex items-center justify-center transition-colors cursor-pointer border border-[#444748]/40"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="ml-2 w-9 h-9 rounded bg-[#201f1f] hover:bg-[#353534] text-white flex items-center justify-center transition-colors cursor-pointer border border-[#444748]/40"
                  title="Toggle Zoom Inspection"
                >
                  {isZoomed ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Main Stage Image */}
            <div
              className={`relative w-full rounded-xl overflow-hidden shadow-2xl flex items-center justify-center group bg-[#1c1b1b] border border-[#444748]/50 transition-all ${
                isZoomed ? 'aspect-[21/9] max-h-[850px]' : 'aspect-[16/9] max-h-[640px]'
              }`}
            >
              <img
                src={currentProject.images[activeSlide]?.imageUrl}
                alt={currentProject.images[activeSlide]?.title}
                className="w-full h-full object-cover object-top transition-transform duration-300"
              />

              {/* Gradient Bottom Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/85 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Micro Banner */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
                <div className="bg-[#131313]/90 backdrop-blur-md px-4 py-2 rounded shadow-md pointer-events-auto border border-[#444748]/40">
                  <p className="text-xs font-mono text-white uppercase tracking-wider">
                    {currentProject.images[activeSlide]?.caption}
                  </p>
                </div>
              </div>

              {/* Top Right Live OK Badge */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#0e0e0e]/90 backdrop-blur-md px-3 py-1.5 rounded border border-[#444748]/40 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#e5e2e1]">
                  Live Datafeed: OK
                </span>
              </div>
            </div>

            {/* 3 Thumbnail Selector Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {currentProject.images.map((slide, idx) => {
                const isActive = idx === activeSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlide(idx)}
                    className={`flex items-center gap-3 p-3 rounded transition-all text-left cursor-pointer border ${
                      isActive
                        ? 'bg-[#1c1b1b] border-white/60 shadow-sm opacity-100'
                        : 'bg-[#1c1b1b]/50 hover:bg-[#201f1f] border-[#444748]/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <span className="text-xs font-mono text-white font-semibold">
                      0{idx + 1}
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-medium text-white truncate font-sans">
                        {slide.title.replace(/^\d+\s*\/\s*/, '')}
                      </span>
                      <span className="text-[11px] font-sans text-[#8e9192] truncate">
                        {slide.subtitle}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specification Breakdown Matrix */}
      <section className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-mono text-[#8e9192] uppercase tracking-wider">
              Specifications & Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white font-sans">
              Technical Specification Breakdown
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Platforms */}
            <div className="flex flex-col gap-4 bg-[#201f1f] p-6 rounded-lg hover:bg-[#2a2a2a] transition-colors border border-[#444748]/40 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#353534] flex items-center justify-center text-white">
                <Monitor className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-[#8e9192] uppercase tracking-wider">
                  Platforms
                </span>
                <h3 className="text-lg font-medium text-white font-sans">
                  {currentProject.platforms}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#c4c7c8] leading-relaxed">
                Deployed across responsive web, dedicated Electron wrappers, and high-DPI desktop viewports with zero layout shift.
              </p>
              <div className="pt-2 mt-auto">
                <span className="inline-block px-2.5 py-1 rounded bg-[#353534] text-[11px] font-mono text-[#c7c6c6]">
                  Production Standard
                </span>
              </div>
            </div>

            {/* Card 2: Tech Stack */}
            <div className="flex flex-col gap-4 bg-[#201f1f] p-6 rounded-lg hover:bg-[#2a2a2a] transition-colors border border-[#444748]/40 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#353534] flex items-center justify-center text-white">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-[#8e9192] uppercase tracking-wider">
                  Tech Stack
                </span>
                <h3 className="text-lg font-medium text-white font-sans">
                  {currentProject.technologies.slice(0, 3).join(', ')}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#c4c7c8] leading-relaxed">
                {currentProject.techStackSummary}
              </p>
              <div className="pt-2 mt-auto">
                <span className="inline-block px-2.5 py-1 rounded bg-[#353534] text-[11px] font-mono text-[#c7c6c6]">
                  Zero-lag WebSockets
                </span>
              </div>
            </div>

            {/* Card 3: My Role */}
            <div className="flex flex-col gap-4 bg-[#201f1f] p-6 rounded-lg hover:bg-[#2a2a2a] transition-colors border border-[#444748]/40 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#353534] flex items-center justify-center text-white">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-[#8e9192] uppercase tracking-wider">
                  My Role
                </span>
                <h3 className="text-lg font-medium text-white font-sans">
                  {currentProject.mandate}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#c4c7c8] leading-relaxed">
                System topology research, database schema indexing, low-latency API contracts, and high-fidelity code implementation.
              </p>
              <div className="pt-2 mt-auto">
                <span className="inline-block px-2.5 py-1 rounded bg-[#353534] text-[11px] font-mono text-[#c7c6c6]">
                  Design-to-Engine
                </span>
              </div>
            </div>

            {/* Card 4: Outcome & Impact */}
            <div className="flex flex-col gap-4 bg-[#201f1f] p-6 rounded-lg hover:bg-[#2a2a2a] transition-colors border border-[#444748]/40 shadow-sm">
              <div className="w-10 h-10 rounded bg-[#353534] flex items-center justify-center text-white">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-[#8e9192] uppercase tracking-wider">
                  Outcome & Impact
                </span>
                <h3 className="text-lg font-medium text-white font-sans">
                  {currentProject.outcome}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#c4c7c8] leading-relaxed">
                {currentProject.outcomeDetail}
              </p>
              <div className="pt-2 mt-auto">
                <span className="inline-block px-2.5 py-1 rounded bg-[#353534] text-[11px] font-mono text-[#c7c6c6]">
                  Verified Metrics
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview & Deep-Dive Methodology */}
      <section className="w-full bg-[#1c1b1b] py-16 border-t border-[#444748]/40">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sticky Left Column */}
            <div className="lg:col-span-4 flex flex-col gap-8">
              <div className="lg:sticky lg:top-24 flex flex-col gap-6">
                <span className="text-xs font-mono text-[#8e9192] uppercase tracking-wider">
                  Methodology
                </span>
                <h2 className="text-3xl font-semibold text-white tracking-tight font-sans">
                  Project Overview & Process
                </h2>
                <p className="text-sm text-[#c4c7c8] leading-relaxed">
                  Enterprise workflows operate under heavy concurrent demand. A naive UI or non-indexed relational architecture causes dropped frames, blocking threads, and user frustration. Our process refactored legacy models into high-throughput systems engineered for pure velocity.
                </p>

                {/* Performance Benchmarks Card */}
                <div className="p-5 bg-[#201f1f] rounded-lg flex flex-col gap-4 border border-[#444748]/40 shadow-sm">
                  <span className="text-xs font-mono text-white uppercase tracking-wider">
                    Performance Benchmarks
                  </span>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-[#c4c7c8]">Rendering Latency</span>
                      <span className="text-white">16ms (60 FPS Locked)</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#353534] rounded-full overflow-hidden">
                      <div className="h-full bg-white w-[95%]"></div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-[#c4c7c8]">Cognitive Screen Switch Time</span>
                      <span className="text-white">-72% Reduction</span>
                    </div>
                    <div className="w-full h-1.5 bg-[#353534] rounded-full overflow-hidden">
                      <div className="h-full bg-[#c7c6c6] w-[82%]"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono">
                  <span className="text-[#8e9192] uppercase">Audited By:</span>
                  <span className="text-white">QuantSys Labs & ISO-9241</span>
                </div>
              </div>
            </div>

            {/* Right Column: 3 Deep-Dive Blocks */}
            <div className="lg:col-span-8 flex flex-col gap-12">
              {/* BLOCK 1: Problem Space */}
              <div className="flex flex-col gap-4 bg-[#131313] p-8 rounded-xl border border-[#444748]/50 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8e9192] uppercase tracking-wider">
                    01 // Problem Space
                  </span>
                  <AlertTriangle className="w-5 h-5 text-[#8e9192]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white font-sans">
                  {currentProject.problemSpace.title}
                </h3>

                <p className="text-sm text-[#c4c7c8] leading-relaxed">
                  {currentProject.problemSpace.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  <div className="p-4 bg-[#1c1b1b] rounded border border-[#444748]/30">
                    <span className="text-xl sm:text-2xl font-semibold text-white font-sans block">
                      {currentProject.problemSpace.metric1.val}
                    </span>
                    <span className="text-xs text-[#8e9192] font-sans mt-0.5 block">
                      {currentProject.problemSpace.metric1.label}
                    </span>
                  </div>

                  <div className="p-4 bg-[#1c1b1b] rounded border border-[#444748]/30">
                    <span className="text-xl sm:text-2xl font-semibold text-white font-sans block">
                      {currentProject.problemSpace.metric2.val}
                    </span>
                    <span className="text-xs text-[#8e9192] font-sans mt-0.5 block">
                      {currentProject.problemSpace.metric2.label}
                    </span>
                  </div>
                </div>
              </div>

              {/* BLOCK 2: Architectural Design System */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8e9192] uppercase tracking-wider">
                    02 // Architectural Design System
                  </span>
                  <Grid className="w-5 h-5 text-[#8e9192]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white font-sans">
                  {currentProject.designSystem.title}
                </h3>

                <p className="text-sm text-[#c4c7c8] leading-relaxed">
                  {currentProject.designSystem.description}
                </p>

                {/* Architecture detail photo */}
                <div className="w-full rounded-xl overflow-hidden shadow-lg bg-[#353534] border border-[#444748]/50 max-h-72">
                  <img
                    src={currentProject.images[1]?.imageUrl || currentProject.images[0]?.imageUrl}
                    alt="System Architecture Detail"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentProject.designSystem.pillars.map((pillar, idx) => (
                    <div key={idx} className="p-4 bg-[#201f1f] rounded border border-[#444748]/40">
                      <span className="text-xs font-mono text-white uppercase block mb-1 font-semibold">
                        {pillar.title}
                      </span>
                      <p className="text-xs text-[#c4c7c8] leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* BLOCK 3: The Solution + Interactive Command Terminal */}
              <div className="flex flex-col gap-6 bg-[#131313] p-8 rounded-xl border border-[#444748]/50 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#8e9192] uppercase tracking-wider">
                    03 // The Solution
                  </span>
                  <Terminal className="w-5 h-5 text-[#8e9192]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-white font-sans">
                  {currentProject.solution.title}
                </h3>

                <p className="text-sm text-[#c4c7c8] leading-relaxed">
                  {currentProject.solution.description}
                </p>

                {/* Interactive Terminal Emulator */}
                <div className="p-4 bg-[#0e0e0e] rounded-lg font-mono text-[#c4c7c8] flex flex-col gap-2.5 border border-[#444748]/40 shadow-inner">
                  <div className="flex items-center justify-between text-[#8e9192] text-[11px] pb-1 border-b border-[#444748]/30">
                    <span className="uppercase">
                      {currentProject.solution.commandExample.flow}
                    </span>
                    <span>LATENCY: {currentProject.solution.commandExample.latency}</span>
                  </div>

                  {/* Terminal Command Input Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleExecuteCommand(cliInput || currentProject.solution.commandExample.command);
                    }}
                    className="flex items-center gap-2 text-white text-xs sm:text-sm"
                  >
                    <span className="text-[#8e9192] select-none">&gt;</span>
                    <input
                      type="text"
                      value={cliInput}
                      onChange={(e) => setCliInput(e.target.value)}
                      placeholder={currentProject.solution.commandExample.command}
                      className="bg-transparent border-none outline-none text-white w-full placeholder-[#444748] font-mono text-xs"
                    />
                    <button
                      type="submit"
                      className="text-[10px] uppercase tracking-wider bg-[#201f1f] hover:bg-[#2a2a2a] text-[#e5e2e1] px-2 py-1 rounded border border-[#444748] shrink-0 cursor-pointer"
                    >
                      Run
                    </button>
                  </form>

                  {/* Terminal Execution Result */}
                  <div className="text-xs text-[#c7c6c6] bg-[#1c1b1b]/60 p-2.5 rounded border border-[#444748]/30">
                    {cliOutput || currentProject.solution.commandExample.output}
                  </div>
                </div>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  {currentProject.solution.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-white font-sans">
                          {h.title}
                        </span>
                        <span className="text-xs text-[#c4c7c8] mt-0.5 leading-relaxed">
                          {h.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next Project Switcher Strip */}
      <section className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="flex items-center justify-between py-6 border-y border-[#444748]/40">
          <button
            onClick={() => {
              onSelectProject(prevProject);
              setActiveSlide(0);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-4 max-w-sm text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded bg-[#201f1f] group-hover:bg-[#353534] flex items-center justify-center text-[#c4c7c8] group-hover:text-white transition-colors shrink-0 border border-[#444748]/40">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-mono text-[#8e9192] uppercase tracking-wider">
                Previous Project
              </span>
              <span className="text-base font-semibold text-white group-hover:text-[#c7c6c6] transition-colors truncate font-sans">
                {prevProject.title}
              </span>
            </div>
          </button>

          <button
            onClick={onNavigateHome}
            className="hidden md:flex flex-col items-center gap-1 group cursor-pointer"
          >
            <Grid className="w-5 h-5 text-[#8e9192] group-hover:text-white transition-colors" />
            <span className="text-[11px] font-mono text-[#8e9192] uppercase tracking-widest group-hover:text-white transition-colors">
              All Work
            </span>
          </button>

          <button
            onClick={() => {
              onSelectProject(nextProject);
              setActiveSlide(0);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex items-center gap-4 max-w-sm text-right justify-end cursor-pointer"
          >
            <div className="flex flex-col min-w-0">
              <span className="text-[11px] font-mono text-[#8e9192] uppercase tracking-wider">
                Next Project
              </span>
              <span className="text-base font-semibold text-white group-hover:text-[#c7c6c6] transition-colors truncate font-sans">
                {nextProject.title}
              </span>
            </div>
            <div className="w-10 h-10 rounded bg-[#201f1f] group-hover:bg-[#353534] flex items-center justify-center text-[#c4c7c8] group-hover:text-white transition-colors shrink-0 border border-[#444748]/40">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      </section>

      {/* Strategic Collaboration Callout Banner */}
      <section className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-16 pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-[#2a2a2a] p-8 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl border border-[#444748]/50">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col gap-3 max-w-2xl relative z-10">
            <span className="text-xs font-mono text-[#8e9192] uppercase tracking-widest">
              Available For Strategic Collaborations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight font-sans">
              Ready to build your next breakthrough product?
            </h2>
            <p className="text-sm sm:text-base text-[#c4c7c8] leading-relaxed">
              Partner with a senior full stack architect to solve complex distributed pipelines, database bottlenecks, and mission-critical enterprise experiences.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 relative z-10 w-full sm:w-auto">
            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-white text-[#131313] font-medium text-sm hover:bg-neutral-200 transition-opacity cursor-pointer shadow-md"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#201f1f] hover:bg-[#353534] text-white font-medium text-sm transition-colors border border-[#444748] cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-white" />
              <span>Book 30-min Intro</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
