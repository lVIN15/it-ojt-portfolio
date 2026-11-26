import React from 'react'
import { competencies, profile } from '../data/portfolioData'

export default function AboutSection({ onSelectDomain, onNavigate }) {
  const { academicFoundation, workExperience, leadership } = profile

  return (
    <section
      id="about"
      className="w-full px-margin lg:px-margin-desktop py-space-xl bg-bone text-ink relative scroll-mt-20 border-y border-bone-border"
    >
      <div className="max-w-[1520px] mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-bone-border pb-space-md">
          <div>
            <span className="font-label-tag text-label-tag text-primary-container uppercase tracking-widest block mb-space-xs">
              02 // ABOUT &amp; EXPERIENCE
            </span>
            <h2 className="font-headline-xl text-[44px] leading-[46px] md:text-headline-xl uppercase text-ink">
              ADAPTABILITY SPECTRUM
            </h2>
          </div>
          <p className="font-body-md text-body-md text-ink-muted max-w-md">
            Grounded in Software Quality Assurance, formal SRS/SDD
            documentation, Agile Scrum facilitation, and full-stack software
            delivery.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-stretch">
          {/* Left: Candidate Foundation & Inset Obsidian Work Experience (5 cols) */}
          <div className="lg:col-span-5 bg-bone-light p-space-lg rounded-xl border border-bone-border flex flex-col justify-between gap-space-md shadow-[0_8px_30px_rgba(19,19,21,0.06)]">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-tag text-label-tag text-primary-container uppercase tracking-widest">
                  CANDIDATE FOUNDATION
                </span>
                <span className="material-symbols-outlined text-primary-container">
                  school
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm uppercase text-ink">
                {academicFoundation.degree}
              </h3>
              <p className="font-body-md text-body-md text-ink font-semibold">
                {academicFoundation.university}
              </p>
              <p className="font-body-sm text-body-sm text-ink-muted leading-relaxed">
                {academicFoundation.honors}
              </p>

              {/* Dramatic Inset Obsidian Work Experience Block */}
              <div className="bg-ink text-bone p-4 rounded-lg border border-ink space-y-1.5 shadow-md">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="font-label-tag text-[10px] text-primary-container uppercase tracking-widest">
                    ✦ WORK EXPERIENCE
                  </span>
                  <span className="font-label-mono text-[11px] text-bone/70">
                    {workExperience.period}
                  </span>
                </div>
                <div className="font-headline-sm text-sm text-bone uppercase">
                  {workExperience.role} — {workExperience.company}
                </div>
                <p className="font-body-sm text-xs text-bone/75 leading-relaxed">
                  {workExperience.highlights[0]}
                </p>
              </div>
            </div>

            <div className="pt-space-md border-t border-bone-border space-y-2">
              <div className="flex items-center justify-between text-body-sm gap-2">
                <span className="text-ink-muted font-label-mono">
                  Academic Standing:
                </span>
                <span className="text-primary-container font-label-mono font-bold">
                  Dean&apos;s List (2025–2026)
                </span>
              </div>
              <div className="flex items-center justify-between text-body-sm gap-2">
                <span className="text-ink-muted font-label-mono">
                  Leadership:
                </span>
                <span className="text-ink font-label-mono font-bold">
                  {leadership.role} ({leadership.period})
                </span>
              </div>
              <div className="flex items-center justify-between text-body-sm gap-2">
                <span className="text-ink-muted font-label-mono">
                  OJT Status:
                </span>
                <span className="text-ink font-label-mono font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
                  {academicFoundation.status}
                </span>
              </div>
            </div>
          </div>

          {/* Right: The 4 IT Competencies Grid on Crisp Bone Paper (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {competencies.map((comp) => (
              <button
                key={comp.id}
                type="button"
                onClick={() => {
                  onSelectDomain(comp.domain)
                  onNavigate('skills')
                }}
                className="text-left bg-bone-light p-space-md rounded-xl border border-bone-border hover:border-primary-container hover:shadow-[0_12px_32px_-12px_rgba(229,9,20,0.22)] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5 w-full">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded bg-ink text-bone flex items-center justify-center group-hover:bg-primary-container group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-[20px]">
                        {comp.icon}
                      </span>
                    </div>
                    <span className="font-label-tag text-[9px] text-primary-container bg-primary-container/10 border border-primary-container/25 px-2 py-0.5 rounded uppercase tracking-widest">
                      {comp.badge}
                    </span>
                  </div>

                  <h4 className="font-headline-sm text-base text-ink uppercase pt-1 group-hover:text-primary-container transition-colors">
                    {comp.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-ink-muted">
                    {comp.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-bone-border/80 mt-4 w-full flex items-center justify-between">
                  <span className="font-label-tag text-[9px] text-ink-muted uppercase tracking-wider">
                    {comp.tags}
                  </span>
                  <span className="material-symbols-outlined text-[15px] text-primary-container opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
