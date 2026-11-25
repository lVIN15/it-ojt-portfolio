import React, { useState } from 'react'
import { technicalMatrix } from '../data/portfolioData'

const domainTabs = [
  { id: 'all', label: 'All Domains' },
  { id: 'dev', label: 'Dev' },
  { id: 'qa', label: 'QA' },
  { id: 'infra', label: 'Infra' },
  { id: 'pm', label: 'PM' },
]

export default function TechnicalMatrixSection({
  activeDomain,
  onSelectDomain,
}) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSkill, setSelectedSkill] = useState(null)

  const filteredCategories = technicalMatrix
    .filter((cat) => activeDomain === 'all' || cat.domain === activeDomain)
    .map((cat) => {
      if (!searchQuery.trim()) return cat
      const q = searchQuery.toLowerCase()
      const matchedSkills = cat.skills.filter(
        (s) =>
          s.name.toLowerCase().includes(q) || s.note.toLowerCase().includes(q)
      )
      return {
        ...cat,
        skills: matchedSkills,
      }
    })
    .filter((cat) => cat.skills.length > 0)

  const gridColsClass =
    filteredCategories.length === 1
      ? 'grid-cols-1 max-w-2xl'
      : filteredCategories.length === 2
        ? 'grid-cols-1 md:grid-cols-2'
        : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'

  return (
    <section
      id="skills"
      className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low scroll-mt-20"
    >
      <div className="max-w-[1520px] mx-auto flex flex-col gap-space-lg">
        {/* Section Title & Dynamic Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-white/10 pb-space-md">
          <div>
            <span className="font-label-tag text-label-tag text-primary uppercase tracking-widest block mb-space-xs">
              03 // RUNTIME &amp; ECOSYSTEM
            </span>
            <h2 className="font-headline-xl text-[44px] leading-[46px] md:text-headline-xl uppercase text-on-surface">
              TECHNICAL MATRIX
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Search Input */}
            <div className="relative">
              <span className="material-symbols-outlined text-[15px] text-on-surface-variant absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter skill..."
                className="pl-8 pr-3 py-1 rounded bg-surface-container-lowest border border-white/10 focus:border-primary-container focus:outline-none font-label-mono text-xs text-on-surface placeholder:text-on-surface-variant/60 w-36 sm:w-44 transition-colors"
              />
            </div>

            {domainTabs.map((tab) => {
              const isActive = activeDomain === tab.id
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => onSelectDomain(tab.id)}
                  className={`px-space-sm py-1 rounded font-label-mono text-label-mono uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-primary-container text-on-primary-container shadow-[0_0_15px_rgba(229,9,20,0.4)]'
                      : 'bg-surface-container-high text-on-surface-variant hover:text-on-surface border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Skill Detail Callout */}
        {selectedSkill && (
          <div className="bg-surface-container-lowest px-4 py-3 rounded-lg border border-primary-container/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-[0_0_20px_rgba(229,9,20,0.15)]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-primary-container shrink-0" />
              <div>
                <span className="font-label-mono text-xs text-primary uppercase font-bold">
                  {selectedSkill.name}
                </span>
                <span className="mx-2 text-white/20">|</span>
                <span className="font-body-sm text-on-surface-variant">
                  {selectedSkill.note}
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSelectedSkill(null)}
              className="self-end sm:self-auto text-on-surface-variant hover:text-white font-label-tag text-[10px] uppercase tracking-wider"
            >
              DISMISS [✕]
            </button>
          </div>
        )}

        {/* Matrix Panels */}
        {filteredCategories.length === 0 ? (
          <div className="bg-surface-container p-space-xl rounded-xl border border-white/10 text-center space-y-2">
            <p className="font-headline-sm uppercase text-on-surface">
              No skills matching "{searchQuery}"
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('')
                onSelectDomain('all')
              }}
              className="font-label-mono text-xs text-primary hover:underline uppercase"
            >
              Reset Technical Matrix Filters
            </button>
          </div>
        ) : (
          <div className={`grid ${gridColsClass} gap-space-md`}>
            {filteredCategories.map((category) => (
              <div
                key={category.id}
                className="bg-surface-container p-space-md rounded-xl border border-white/[0.08] hover:border-primary-container/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-space-sm border-b border-white/10 mb-space-sm">
                    <span className="font-headline-sm text-[17px] uppercase text-on-surface">
                      {category.title}
                    </span>
                    <span className="material-symbols-outlined text-primary text-[20px]">
                      {category.icon}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const isChosen = selectedSkill?.name === skill.name
                      return (
                        <button
                          key={skill.name}
                          type="button"
                          onClick={() =>
                            setSelectedSkill((prev) =>
                              prev?.name === skill.name ? null : skill
                            )
                          }
                          className={`px-2.5 py-1 rounded-sm text-label-mono font-label-mono border flex items-center gap-1.5 transition-all cursor-pointer ${
                            isChosen
                              ? 'bg-primary-container/20 text-white border-primary-container shadow-[0_0_12px_rgba(229,9,20,0.3)]'
                              : 'bg-surface-container-lowest text-on-surface border-white/10 hover:border-primary-container/60'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
                          {skill.name}
                        </button>
                      )
                    })}
                  </div>
                </div>
                <div className="pt-space-md mt-space-md border-t border-white/[0.06] flex items-center justify-between">
                  <span className="font-label-tag text-[10px] text-on-surface-variant uppercase">
                    Proficiency
                  </span>
                  <span className="font-label-mono text-xs text-primary font-bold">
                    {category.proficiency}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
