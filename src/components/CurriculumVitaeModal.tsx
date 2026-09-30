import React from 'react';
import { personalInfo, technicalSkills, experiences, educations, projects } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, ExternalLink } from 'lucide-react';

interface CurriculumVitaeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CurriculumVitaeModal: React.FC<CurriculumVitaeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#1c1b1b] border border-[#444748] rounded-xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto animate-in zoom-in-95 duration-150">
        {/* Top Modal Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#444748]/60 bg-[#131313]/90">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
            <span className="text-xs font-mono text-[#c4c7c8] uppercase tracking-wider">
              Verified Curriculum Vitae // Nashaat
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#201f1f] hover:bg-[#2a2a2a] text-xs font-mono text-white border border-[#444748] transition-colors cursor-pointer"
              title="Print CV or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-[#201f1f] text-[#8e9192] hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Document Content */}
        <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#131313] text-[#e5e2e1] print:bg-white print:text-black">
          {/* Header */}
          <div className="flex flex-col items-center text-center pb-6 border-b border-[#444748]/40">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white uppercase font-sans">
              {personalInfo.name}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs font-mono text-[#c4c7c8] mt-3">
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#8e9192]" />
                {personalInfo.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-[#8e9192]" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                linkedin.com/in/abdelghafaar-nashaat
              </a>
              <span>•</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                github.com/AbdoNashaat
              </a>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#8e9192]" />
                {personalInfo.location}
              </span>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#8e9192] font-semibold">
              SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-[#c7c6c6] leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#8e9192] font-semibold pb-1 border-b border-[#444748]/40">
              EDUCATION
            </h2>
            <div className="space-y-4">
              {educations.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold text-white">
                    <span>{edu.institution}</span>
                    <span className="font-mono text-xs text-[#8e9192]">{edu.location}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-xs text-[#c4c7c8]">
                    <span className="italic">{edu.degree} ({edu.honor})</span>
                    <span className="font-mono text-[11px] text-[#8e9192]">{edu.period}</span>
                  </div>
                  <p className="text-xs text-[#c7c6c6] mt-1 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#8e9192] font-semibold pb-1 border-b border-[#444748]/40">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 gap-2 text-xs">
              <div>
                <span className="font-semibold text-white">Languages: </span>
                <span className="text-[#c4c7c8] font-mono">{technicalSkills.languages.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold text-white">Frontend: </span>
                <span className="text-[#c4c7c8] font-mono">{technicalSkills.frontend.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold text-white">Backend: </span>
                <span className="text-[#c4c7c8] font-mono">{technicalSkills.backend.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold text-white">Databases & Caching: </span>
                <span className="text-[#c4c7c8] font-mono">{technicalSkills.databases.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold text-white">Cloud & DevOps: </span>
                <span className="text-[#c4c7c8] font-mono">{technicalSkills.devops.join(', ')}</span>
              </div>
              <div>
                <span className="font-semibold text-white">Concepts & Architecture: </span>
                <span className="text-[#c4c7c8] font-mono">{technicalSkills.architecture.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#8e9192] font-semibold pb-1 border-b border-[#444748]/40">
              EXPERIENCE
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold text-white">
                    <span>{exp.role}</span>
                    <span className="font-mono text-xs text-[#8e9192]">{exp.period}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-xs text-[#c4c7c8] italic">
                    <span>{exp.company}</span>
                    <span className="font-mono text-[11px] not-italic text-[#8e9192]">{exp.location}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-[#c7c6c6] leading-relaxed">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-[#8e9192] font-semibold pb-1 border-b border-[#444748]/40">
              FEATURED PROJECTS
            </h2>
            <div className="space-y-6">
              {projects.slice(0, 3).map((prj) => (
                <div key={prj.id} className="space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm font-semibold text-white">
                    <span>{prj.title} – {prj.subtitle}</span>
                    <span className="font-mono text-xs text-[#8e9192]">{prj.timeline}</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#8e9192]">
                    Technologies: {prj.technologies.join(', ')}
                  </div>
                  <p className="text-xs text-[#c7c6c6] leading-relaxed">
                    {prj.overview}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Bar */}
        <div className="p-4 bg-[#131313] border-t border-[#444748]/60 flex items-center justify-between">
          <span className="text-xs font-mono text-[#8e9192]">
            Target Role: Senior Full Stack Engineer / Systems Architect
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-white text-[#131313] hover:bg-neutral-200 text-xs font-mono font-medium transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
