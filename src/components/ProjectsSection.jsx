import React, { useState } from 'react'
import { projects } from '../data/portfolioData'

const filterOptions = [
  { id: 'all', label: 'All Projects' },
  { id: 'Full-Stack & Mobile', label: 'Full-Stack & Mobile' },
  { id: 'QA & Web Systems', label: 'QA & Web' },
  { id: 'Agile & Scrum', label: 'Agile & Scrum' },
]

export default function ProjectsSection({ onOpenProject }) {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const visibleProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.categoryFilter === selectedCategory)

  return (
    <section
      id="projects"
      className="w-full px-4 sm:px-margin lg:px-margin-desktop py-12 sm:py-space-xl bg-surface-container-low scroll-mt-16 sm:scroll-mt-20"
    >
      <div className="max-w-[1520px] mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-bone/15 pb-space-md">
          <div>
            <span className="font-label-tag text-label-tag text-primary uppercase tracking-widest block mb-space-xs">
              01 // EVIDENCE OF WORK
            </span>
            <h2 className="font-headline-xl text-[36px] leading-[38px] sm:text-[44px] sm:leading-[46px] md:text-headline-xl uppercase text-bone">
              FEATURED PROJECTS
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <p className="font-body-sm sm:font-body-md sm:text-body-md text-bone/75 max-w-md md:text-right">
              Academic capstone, cross-platform revenue tracking, Django web
              platforms, and Agile Scrum deliveries with live deployments and
              verified GitHub repositories.
            </p>
            {/* Interactive Project Category Filter */}
            <div className="flex flex-wrap items-center gap-1.5">
              {filterOptions.map((opt) => {
                const active = selectedCategory === opt.id
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedCategory(opt.id)}
                    className={`px-3 py-1.5 min-h-[36px] rounded font-label-mono text-[11px] uppercase tracking-wider transition-all ${
                      active
                        ? 'bg-bone text-ink font-bold shadow-[0_0_14px_rgba(237,230,216,0.22)]'
                        : 'bg-surface-container-high text-bone/70 hover:text-bone border border-bone/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid — Bone White (#F5F5DC) Cards for Crisp Contrast & Compact Balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {visibleProjects.map((project, idx) => {
            const isFeaturedCapstone =
              selectedCategory === 'all' && idx === 0

            return (
              <article
                key={project.id}
                className={`bg-bone text-ink rounded-xl border border-bone-border hover:border-primary-container hover:shadow-[0_14px_38px_-10px_rgba(229,9,20,0.32)] transition-all overflow-hidden flex flex-col ${
                  isFeaturedCapstone ? 'md:col-span-2 lg:flex-row' : ''
                } group shadow-[0_12px_32px_rgba(0,0,0,0.32)]`}
              >
                {/* Official Project Logo Showcase Stage */}
                <div
                  onClick={() => onOpenProject(project, 'preview')}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      onOpenProject(project, 'preview')
                    }
                  }}
                  aria-label={`Inspect ${project.title} details`}
                  className={`relative bg-white flex items-center justify-center p-4 pt-11 sm:p-5 sm:pt-12 border-b ${
                    isFeaturedCapstone
                      ? 'h-48 sm:h-52 lg:h-auto lg:min-h-[200px] lg:w-[30%] shrink-0 lg:border-b-0 lg:border-r border-bone-border'
                      : 'h-48 sm:h-52 w-full border-bone-border'
                  } overflow-hidden cursor-pointer`}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className={`object-contain group-hover:scale-105 transition-transform duration-300 select-none ${
                      project.id === 'cebu-fitness-hub'
                        ? 'max-h-[78%] max-w-[78%] w-auto h-auto'
                        : 'max-h-full max-w-full w-auto h-auto'
                    }`}
                  />
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <div className="bg-ink/90 backdrop-blur-md px-2.5 py-1 rounded text-bone font-headline-sm text-[10px] sm:text-xs tracking-wider border border-white/10 min-w-0 truncate">
                      <span className="text-primary-container">
                        {project.categoryLabel.split(' // ')[0]} //
                      </span>{' '}
                      {project.categoryLabel.split(' // ')[1]}
                    </div>
                    <div className="shrink-0 opacity-95 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity bg-primary-container text-on-primary-container px-2 py-1 rounded font-label-tag text-[9px] uppercase tracking-widest flex items-center gap-1 shadow-sm">
                      <span>DETAILS</span>
                      <span className="material-symbols-outlined text-[13px]">
                        open_in_full
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body — Compact, Well-Aligned Bone White Presentation */}
                <div
                  className={`flex-1 flex flex-col justify-between min-w-0 ${
                    isFeaturedCapstone
                      ? 'p-5 sm:p-6 gap-4'
                      : 'p-5 sm:p-6 gap-4'
                  }`}
                >
                  <div className="space-y-2.5">
                    <h3
                      className={`font-headline-sm uppercase text-ink group-hover:text-primary-container transition-colors break-words font-bold ${
                        isFeaturedCapstone
                          ? 'text-lg sm:text-[22px] leading-snug'
                          : 'text-base sm:text-[18px] leading-snug'
                      }`}
                    >
                      {project.title}
                    </h3>
                    <div
                      className={`font-body-sm text-ink-muted leading-relaxed ${
                        isFeaturedCapstone
                          ? 'text-[14.5px] sm:text-[15.5px] space-y-2'
                          : 'text-[13.5px] space-y-1.5'
                      }`}
                    >
                      <p>
                        <strong className="text-ink">Overview:</strong>{' '}
                        {project.overview}
                      </p>
                      <p>
                        <strong className="text-ink">Role:</strong>{' '}
                        {project.responsibilities}
                      </p>
                      <p>
                        <strong className="text-ink">Contributions:</strong>{' '}
                        {project.contributions}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="font-label-tag text-[10px] text-primary-container uppercase tracking-wider bg-primary-container/10 border border-primary-container/25 px-2 py-0.5 rounded font-bold">
                        {project.roleTag}
                      </span>
                      <span className="font-label-tag text-[10px] text-ink uppercase tracking-wider bg-bone-dim border border-bone-border px-2 py-0.5 rounded font-semibold">
                        {project.typeTag}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-label-mono text-[11px] text-ink bg-bone-light px-2 py-0.5 rounded border border-bone-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Real Links + Dossier Inspector Footer */}
                  <div className="pt-3 border-t border-bone-border flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-4 flex-wrap">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 py-1 min-h-[36px] font-label-mono text-xs text-primary-container hover:text-ink font-bold transition-colors"
                        >
                          <span>[LIVE SITE]</span>
                          <span className="material-symbols-outlined text-[16px]">
                            arrow_outward
                          </span>
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 py-1 min-h-[36px] font-label-mono text-xs text-primary-container hover:text-ink font-bold transition-colors"
                        >
                          <span>[GITHUB REPO]</span>
                          <span className="material-symbols-outlined text-[16px]">
                            arrow_outward
                          </span>
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => onOpenProject(project, 'architecture')}
                      className="inline-flex items-center gap-1 py-1 min-h-[36px] font-label-mono text-xs text-ink/75 hover:text-ink font-semibold transition-colors"
                    >
                      <span>[ARCHITECTURE]</span>
                      <span className="material-symbols-outlined text-[16px]">
                        description
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
