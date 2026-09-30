import React, { useState } from 'react';
import { engineerAvatar, personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeTab: 'home' | 'experience-education' | 'projects' | 'case-study' | 'contact';
  setActiveTab: (tab: 'home' | 'experience-education' | 'projects' | 'case-study' | 'contact') => void;
  onOpenQuickInquiry: () => void;
  onOpenCV: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuickInquiry,
  onOpenCV,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: 'home' | 'experience-education' | 'projects' | 'case-study' | 'contact'; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'experience-education', label: 'Experience & Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'case-study', label: 'Case Study' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: 'home' | 'experience-education' | 'projects' | 'case-study' | 'contact') => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#131313]/90 backdrop-blur-md border-b border-[#444748]/40">
      <div className="h-16 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between gap-4">
        {/* Monogram Brand Mark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 shrink-0 text-left group transition-opacity hover:opacity-90"
        >
          {/* Stylized Monogram */}
          <div className="w-8 h-8 rounded bg-white text-[#131313] font-bold text-xs flex items-center justify-center tracking-tighter font-mono shadow-sm group-hover:scale-105 transition-transform">
            AN
          </div>
          <div className="flex flex-col">
            <span className="text-base font-semibold text-white tracking-tight leading-none font-sans">
              NASHAAT
            </span>
            <span className="text-[10px] text-[#8e9192] uppercase tracking-wider font-mono mt-1">
              Studio / ARCH
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm transition-colors py-1 cursor-pointer font-sans whitespace-nowrap ${
                  isActive
                    ? 'text-white border-b-2 border-white pb-0.5 font-medium'
                    : 'text-[#c4c7c8] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Status Indicator & Profile & Quick Actions */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Availability Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-[#1c1b1b] border border-[#444748]/50">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#c4c7c8]">
              Available for Q2/Q3 Projects
            </span>
          </div>

          {/* CV Action */}
          <button
            onClick={onOpenCV}
            className="hidden md:inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-[#c4c7c8] hover:text-white px-2.5 py-1 rounded bg-[#201f1f] hover:bg-[#2a2a2a] border border-[#444748]/40 transition-colors"
            title="View Curriculum Vitae"
          >
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3 text-[#8e9192]" />
          </button>

          {/* Profile Avatar */}
          <div className="flex items-center pl-2 border-l border-[#444748]/40">
            <img
              src={engineerAvatar}
              alt={personalInfo.name}
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#444748]/60"
            />
          </div>

          {/* Quick Inquiry CTA on header */}
          <button
            onClick={onOpenQuickInquiry}
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white px-3 py-1.5 rounded bg-[#201f1f] border border-[#444748] hover:border-[#8e9192] hover:bg-[#2a2a2a] transition-colors"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            Quick Inquiry
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-[#c4c7c8] hover:text-white hover:bg-[#201f1f] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#444748]/60 bg-[#131313] px-6 py-5 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center gap-2 pb-3 border-b border-[#444748]/40">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="text-xs font-mono text-[#c4c7c8] uppercase">
              Available for Q2/Q3 Engagements
            </span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-left text-sm py-2 px-3 rounded transition-colors ${
                activeTab === item.id
                  ? 'bg-[#201f1f] text-white font-medium'
                  : 'text-[#c4c7c8] hover:bg-[#1c1b1b] hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 flex flex-col gap-2 border-t border-[#444748]/40">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full text-center py-2.5 rounded bg-[#201f1f] hover:bg-[#2a2a2a] text-xs font-mono uppercase tracking-wider text-white border border-[#444748]/60 transition-colors"
            >
              View Curriculum Vitae
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuickInquiry();
              }}
              className="w-full text-center py-2.5 rounded bg-white hover:bg-neutral-200 text-xs font-mono uppercase tracking-wider text-[#131313] font-medium transition-colors"
            >
              Quick Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
