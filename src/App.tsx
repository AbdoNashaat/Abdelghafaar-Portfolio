import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { DualTimelines } from './components/DualTimelines';
import { ProjectsGallery } from './components/ProjectsGallery';
import { CaseStudyView } from './components/CaseStudyView';
import { ContactView } from './components/ContactView';
import { CurriculumVitaeModal } from './components/CurriculumVitaeModal';
import { QuickInquiryModal } from './components/QuickInquiryModal';
import { Footer } from './components/Footer';
import { projects, personalInfo } from './data/portfolioData';
import { ProjectItem } from './types/portfolio';
import { ArrowUpRight, Mail } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'experience-education' | 'projects' | 'case-study' | 'contact'>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem>(projects[0]);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [isQuickInquiryOpen, setIsQuickInquiryOpen] = useState(false);

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
    setActiveTab('case-study');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreProjects = () => {
    const el = document.getElementById('projects-grid');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('projects');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#131313] text-[#e5e2e1] antialiased">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuickInquiry={() => setIsQuickInquiryOpen(true)}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Main Content Area with padding for fixed header */}
      <main className="w-full pt-16 flex-1">
        {activeTab === 'home' && (
          <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16 flex flex-col gap-16 md:gap-24">
            {/* 01. Hero Section */}
            <HeroSection
              onExploreProjects={handleExploreProjects}
              onOpenCV={() => setIsCVModalOpen(true)}
            />

            {/* Section Divider */}
            <div className="w-full h-px bg-[#444748]/40" />

            {/* 02. Track Record: Dual Timelines */}
            <DualTimelines />

            {/* Section Divider */}
            <div className="w-full h-px bg-[#444748]/40" />

            {/* 03. Selected Works: Projects Grid */}
            <ProjectsGallery onSelectProject={handleSelectProject} />

            {/* Section Divider */}
            <div className="w-full h-px bg-[#444748]/40" />

            {/* 04. Quick Connect: Pre-footer Banner */}
            <section className="w-full bg-[#1c1b1b] border border-[#444748]/60 rounded-xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#8e9192]">
                      Initiate Direct Dialogue
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight font-sans">
                    Ready to architect your next digital venture?
                  </h2>
                  <p className="text-sm text-[#c4c7c8] leading-relaxed">
                    Accepting principal design engineering contracts, distributed database buildouts, and selective full-system architectures for visionary product teams.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                  <button
                    onClick={() => {
                      setActiveTab('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center justify-center gap-2 text-sm font-medium text-[#131313] bg-white hover:bg-neutral-200 px-6 py-3.5 rounded-lg transition-all shadow-md cursor-pointer"
                  >
                    <span>Let's Talk</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center justify-center gap-2 text-xs font-mono text-white bg-[#201f1f] hover:bg-[#2a2a2a] border border-[#444748]/70 px-5 py-3.5 rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#8e9192]" />
                    <span>{personalInfo.email}</span>
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'experience-education' && (
          <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16 flex flex-col gap-12">
            <div className="flex flex-col gap-2 max-w-3xl">
              <span className="text-xs font-mono uppercase text-[#8e9192] tracking-wider">
                Full Spectrum Career History
              </span>
              <h1 className="text-3xl sm:text-5xl font-semibold text-white font-sans tracking-tight">
                Experience, Systems & Academic Pedigree
              </h1>
              <p className="text-sm sm:text-base text-[#c4c7c8] leading-relaxed">
                Detailed commercial roles across high-concurrency enterprise applications, multi-site warehouse logistics, and honors-graduated computer engineering research.
              </p>
            </div>

            <DualTimelines />

            <div className="flex justify-center pt-6">
              <button
                onClick={() => setIsCVModalOpen(true)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-[#131313] font-medium text-sm hover:bg-neutral-200 transition-colors shadow-md cursor-pointer"
              >
                <span>Open Full Curriculum Vitae</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16 flex flex-col gap-12">
            <ProjectsGallery onSelectProject={handleSelectProject} />
          </div>
        )}

        {activeTab === 'case-study' && (
          <CaseStudyView
            currentProject={selectedProject}
            onSelectProject={setSelectedProject}
            onNavigateHome={() => {
              setActiveTab('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onContactClick={() => {
              setActiveTab('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'contact' && (
          <ContactView onOpenQuickInquiry={() => setIsQuickInquiryOpen(true)} />
        )}
      </main>

      {/* Curriculum Vitae Modal */}
      <CurriculumVitaeModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* Quick Inquiry Modal */}
      <QuickInquiryModal
        isOpen={isQuickInquiryOpen}
        onClose={() => setIsQuickInquiryOpen(false)}
      />

      {/* Footer */}
      <Footer onOpenQuickInquiry={() => setIsQuickInquiryOpen(true)} />
    </div>
  );
}
