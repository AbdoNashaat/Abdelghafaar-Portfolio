import React from 'react';
import { experiences, educations } from '../data/portfolioData';
import { Terminal, GraduationCap } from 'lucide-react';

export const DualTimelines: React.FC = () => {
  return (
    <section className="flex flex-col gap-10 md:gap-14 pt-8" id="experience-education-section">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#8e9192] uppercase tracking-widest">
              02 // TRACK RECORD
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight font-sans">
            Dual Timelines
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-sans text-[#c4c7c8] max-w-md">
          A continuous record of delivery across enterprise platforms, foundational database systems, and specialized academic honors.
        </p>
      </div>

      {/* Split Layout: Experience (Left) & Education (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* COLUMN A: Industry Experience */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#444748]/60">
            <div className="flex items-center gap-2.5">
              <Terminal className="w-5 h-5 text-white" />
              <h3 className="text-xl font-semibold text-white font-sans">Industry Experience</h3>
            </div>
            <span className="text-xs font-mono text-[#8e9192] uppercase tracking-wider">
              {experiences.length} Positions
            </span>
          </div>

          <div className="flex flex-col gap-8 relative pl-6 sm:pl-7 border-l border-[#444748]/50 ml-2">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="flex flex-col gap-2 relative group">
                {/* Pin node */}
                <div
                  className={`absolute -left-[1.85rem] sm:-left-[2.1rem] top-1.5 w-3 h-3 rounded-full ring-4 ring-[#131313] transition-colors ${
                    idx === 0
                      ? 'bg-white'
                      : 'bg-[#444748] group-hover:bg-white'
                  }`}
                />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-[#c4c7c8] uppercase tracking-wider font-medium">
                    {exp.period}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                      idx === 0
                        ? 'bg-[#2a2a2a] text-white border-[#444748]'
                        : 'bg-[#1c1b1b] text-[#c4c7c8] border-[#444748]/40'
                    }`}
                  >
                    {exp.type}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-white font-sans mt-0.5">
                  {exp.role}
                </h4>
                <div className="text-xs font-mono text-[#c7c6c6] font-medium">
                  {exp.company} • {exp.division} ({exp.location})
                </div>

                <ul className="flex flex-col gap-1.5 text-[#c4c7c8] text-xs sm:text-sm mt-1 list-disc list-inside leading-relaxed">
                  {exp.achievements.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#201f1f] text-[#c4c7c8] border border-[#444748]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN B: Education & Accreditations */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-3 border-b border-[#444748]/60">
            <div className="flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-white" />
              <h3 className="text-xl font-semibold text-white font-sans">
                Education & Certifications
              </h3>
            </div>
            <span className="text-xs font-mono text-[#8e9192] uppercase tracking-wider">
              Academic Record
            </span>
          </div>

          <div className="flex flex-col gap-8 relative pl-6 sm:pl-7 border-l border-[#444748]/50 ml-2">
            {educations.map((edu, idx) => (
              <div key={edu.id} className="flex flex-col gap-2 relative group">
                <div
                  className={`absolute -left-[1.85rem] sm:-left-[2.1rem] top-1.5 w-3 h-3 rounded-full ring-4 ring-[#131313] transition-colors ${
                    idx === 0
                      ? 'bg-white'
                      : 'bg-[#444748] group-hover:bg-white'
                  }`}
                />

                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-[#c4c7c8] uppercase tracking-wider font-medium">
                    {edu.period}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${
                      idx === 0
                        ? 'bg-[#2a2a2a] text-white border-[#444748]'
                        : 'bg-[#1c1b1b] text-[#c4c7c8] border-[#444748]/40'
                    }`}
                  >
                    {edu.honor}
                  </span>
                </div>

                <h4 className="text-lg font-semibold text-white font-sans mt-0.5">
                  {edu.degree}
                </h4>
                <div className="text-xs font-mono text-[#c7c6c6] font-medium">
                  {edu.institution} • {edu.location}
                </div>

                <p className="text-xs sm:text-sm text-[#c4c7c8] mt-1 leading-relaxed">
                  {edu.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#201f1f] text-[#c4c7c8] border border-[#444748]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
