import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenQuickInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuickInquiry }) => {
  return (
    <footer className="w-full bg-[#0e0e0e] border-t border-[#444748]/40 py-10 mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright & craft philosophy */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <span className="text-xs font-mono text-[#c4c7c8] uppercase tracking-wider">
            © 2026 {personalInfo.name}. All rights reserved.
          </span>
          <span className="text-xs text-[#8e9192] font-sans">
            Crafted with disciplined typography & geometric restraint. Cairo, Egypt.
          </span>
        </div>

        {/* Center: Social & Registry Links */}
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#c4c7c8] hover:text-white uppercase tracking-wider transition-colors"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#c4c7c8] hover:text-white uppercase tracking-wider transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://read.cv"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#c4c7c8] hover:text-white uppercase tracking-wider transition-colors"
          >
            Read.cv
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-[#c4c7c8] hover:text-white uppercase tracking-wider transition-colors"
          >
            Twitter/X
          </a>
        </div>

        {/* Right: Quick Inquiry Button */}
        <div className="flex items-center">
          <button
            onClick={onOpenQuickInquiry}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-white uppercase tracking-wider px-4 py-2 rounded bg-[#201f1f] border border-[#444748] hover:border-[#8e9192] hover:bg-[#2a2a2a] transition-colors cursor-pointer"
          >
            <ArrowUpRight className="w-3.5 h-3.5" />
            Quick Inquiry
          </button>
        </div>
      </div>
    </footer>
  );
};
