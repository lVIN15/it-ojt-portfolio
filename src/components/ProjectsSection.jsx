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
      className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low scroll-mt-20"
    >
      <div className="max-w-[1520px] mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-white/10 pb-space-md">
          <div>
            <span className="font-label-tag text-label-tag text-primary uppercase tracking-widest block mb-space-xs">
              01 // EVIDENCE OF WORK
            </span>
            <h2 className="font-headline-xl text-[44px] leading-[46px] md:text-headline-xl uppercase text-on-surface">
              FEATURED PROJECTS
            </h2>
          </div>

          <div className="flex flex-col md:items-end gap-3">
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md md:text-right">
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
                    className={`px-2.5 py-1 rounded font-label-mono text-[11px] uppercase tracking-wider transition-all ${
                      active
                        ? 'bg-primary-container text-on-primary-container shadow-[0_0_14px_rgba(229,9,20,0.35)]'
                        : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface border border-white/10'
                    }`}
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Projects Grid — Capstone Featured Full-Width when All selected + symmetrical 2x2 grid below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {visibleProjects.map((project, idx) => {
            const isFeaturedCapstone =
              selectedCategory === 'all' && idx === 0

            return (
              <article
                key={project.id}
                className={`bg-surface-container rounded-xl border border-white/[0.08] hover:border-primary-container hover:shadow-[0_0_40px_-10px_rgba(229,9,20,0.3)] transition-all overflow-hidden flex flex-col ${
                  isFeaturedCapstone ? 'md:col-span-2 lg:flex-row' : ''
                } group shadow-lg`}
              >
                {/* Card Image Header */}
                <div
                  onClick={() => onOpenProject(project, 'preview')}
                  className={`relative bg-surface-container-high overflow-hidden cursor-pointer ${
                    isFeaturedCapstone
                      ? 'h-64 lg:h-auto lg:w-5/12 shrink-0'
                      : 'h-60 w-full'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/85 backdrop-blur-md px-3 py-1 rounded text-primary-container font-headline-sm text-sm border border-white/10">
                    {project.categoryLabel}
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-primary-container text-on-primary-container px-2.5 py-1 rounded font-label-tag text-[9px] uppercase tracking-widest flex items-center gap-1">
                    <span>DETAILS</span>
                    <span className="material-symbols-outlined text-[13px]">
                      open_in_full
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-space-lg flex-1 flex flex-col justify-between space-y-space-md">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-2 leading-relaxed">
                      <strong className="text-on-surface">Overview:</strong>{' '}
                      {project.overview}
                      <br />
                      <strong className="text-on-surface">Role:</strong>{' '}
                      {project.responsibilities}
                      <br />
                      <strong className="text-on-surface">
                        Contributions:
                      </strong>{' '}
                      {project.contributions}
                    </p>
                  </div>

                  <div className="space-y-space-sm pt-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-label-tag text-[10px] text-primary-fixed uppercase tracking-wider bg-surface-container-highest px-2 py-0.5 rounded">
                        {project.roleTag}
                      </span>
                      <span className="font-label-tag text-[10px] text-on-surface-variant uppercase tracking-wider bg-surface-container-highest px-2 py-0.5 rounded">
                        {project.typeTag}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-label-mono text-xs text-on-surface bg-surface-container-lowest px-2 py-1 rounded border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Real Links + Dossier Inspector Footer */}
                  <div className="pt-space-md border-t border-white/[0.08] flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-label-mono text-label-mono text-primary hover:text-white transition-colors"
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
                          className="inline-flex items-center gap-1 font-label-mono text-label-mono text-primary hover:text-white transition-colors"
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
                      className="inline-flex items-center gap-1 font-label-mono text-label-mono text-on-surface-variant hover:text-white transition-colors"
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
