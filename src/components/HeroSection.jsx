import React, { useState } from 'react'
import { floatingBadges, marqueeItems, profile } from '../data/portfolioData'

function BadgeIcon({ badge }) {
  if (badge.iconType === 'openai') {
    return (
      <svg
        className="w-3.5 h-3.5 text-on-surface group-hover:text-primary transition-colors"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M22.28 9.37a5.53 5.53 0 0 0-.44-4.22 5.64 5.64 0 0 0-4.83-2.85c-.4 0-.8.04-1.18.13a5.56 5.56 0 0 0-4.1-1.85 5.64 5.64 0 0 0-5.3 3.7A5.55 5.55 0 0 0 2.2 6.8a5.64 5.64 0 0 0 .54 5.62 5.54 5.54 0 0 0 .44 4.21 5.65 5.65 0 0 0 4.83 2.86c.4 0 .79-.04 1.18-.13a5.57 5.57 0 0 0 4.1 1.86 5.64 5.64 0 0 0 5.3-3.71 5.55 5.55 0 0 0 4.23-2.52 5.64 5.64 0 0 0-.54-5.62zm-8.8 11.23a4.13 4.13 0 0 1-2.48-.82l.14-.08 4.13-2.39a.76.76 0 0 0 .38-.66v-5.83l1.75 1.01a.07.07 0 0 1 .04.05v4.79a4.14 4.14 0 0 1-3.96 3.93zm-8.67-4.14a4.12 4.12 0 0 1-.53-2.56c0-.44.07-.88.2-1.3l.14.09 4.13 2.38a.77.77 0 0 0 .77 0l5.05-2.92v2.02a.08.08 0 0 1-.03.06l-4.15 2.4a4.15 4.15 0 0 1-5.58-.17zm-1.19-8.4a4.13 4.13 0 0 1 1.95-1.75l-.01.16v4.77a.76.76 0 0 0 .38.66l5.05 2.92-1.75 1.01a.08.08 0 0 1-.07 0l-4.15-2.4a4.15 4.15 0 0 1-1.4-5.37zm13.79 3.01l-5.05-2.92 1.75-1.01a.08.08 0 0 1 .07 0l4.15 2.4a4.15 4.15 0 0 1-.92 7.12v-4.93a.76.76 0 0 0-.38-.66zm2.34-2.82a4.15 4.15 0 0 1-1.42 5.38l-.14-.08-4.13-2.39a.77.77 0 0 0-.77 0l-5.05 2.92v-2.02a.08.08 0 0 1 .03-.06l4.15-2.4a4.15 4.15 0 0 1 7.33-.35zm-9.08 1.15l2.25 1.3-2.25 1.3-2.25-1.3z" />
      </svg>
    )
  }
  if (badge.iconType === 'claude') {
    return (
      <svg className="w-3.5 h-3.5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
      </svg>
    )
  }
  if (badge.iconType === 'github') {
    return (
      <svg className="w-3.5 h-3.5 text-on-surface" fill="currentColor" viewBox="0 0 24 24">
        <path
          clipRule="evenodd"
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        />
      </svg>
    )
  }
  return (
    <span
      className={`material-symbols-outlined text-[15px] ${badge.iconClass || 'text-on-surface'}`}
      style={badge.filled ? { fontVariationSettings: '"FILL" 1' } : undefined}
    >
      {badge.icon}
    </span>
  )
}

export default function HeroSection({ onNavigate, onOpenResume, onSelectDomain }) {
  const [selectedBadge, setSelectedBadge] = useState(null)

  return (
    <section
      id="hero"
      className="relative w-full min-h-[860px] lg:min-h-[900px] flex flex-col justify-between overflow-hidden bg-surface-container-lowest px-margin lg:px-margin-desktop pt-4 lg:pt-6 pb-16"
    >
      {/* LAYER 1 (z-10): Giant Edge-to-Edge Tall Condensed PORTFOLIO Headline — Clean Gradient, No Glow */}
      <div
        aria-hidden="true"
        className="absolute top-3 sm:top-5 lg:top-6 left-0 right-0 w-full px-margin lg:px-margin-desktop flex justify-center pointer-events-none select-none z-10"
      >
        <div className="w-full max-w-[1520px] flex justify-center">
          <span className="portfolio-backdrop-word uppercase text-center whitespace-nowrap block">
            PORTFOLIO
          </span>
        </div>
      </div>

      {/* MAIN HERO STAGE: Multi-plane depth (Text z-30 over lower PORTFOLIO, Transparent Portrait z-20 overlapping F O L I O) */}
      <div className="relative w-full max-w-[1520px] mx-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter-desktop items-start">
        {/* LAYER 3 (z-30): Left Hero Editorial Column — Sits directly over the fading lower half of PORTFOLIO */}
        <div className="lg:col-span-7 flex flex-col gap-space-md z-30 pt-36 sm:pt-48 lg:pt-[220px] xl:pt-[255px]">
          {/* Live Status Pill */}
          <div className="flex items-center gap-space-sm flex-wrap">
            <span className="font-label-tag text-label-tag px-space-sm py-1 rounded-sm bg-surface-container-lowest/85 text-primary border border-primary-container/40 uppercase tracking-widest flex items-center gap-1.5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
              ✦ {profile.heroStatusPill}
            </span>
            <span className="font-label-mono text-label-mono text-on-surface-variant tracking-wider">
              {profile.heroTermTag}
            </span>
          </div>

          <div className="space-y-1">
            <p className="font-body-lg text-body-lg text-bone/90 italic font-serif drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              {profile.greeting}
            </p>
            <h1 className="font-headline-xl text-[54px] leading-[54px] md:text-[84px] md:leading-[82px] text-bone uppercase tracking-tight font-normal drop-shadow-[0_6px_24px_rgba(0,0,0,0.85)]">
              {profile.fullName}
            </h1>
            <div className="inline-block pt-1">
              <span className="font-label-mono text-label-mono uppercase tracking-widest bg-bone text-ink px-space-sm py-1.5 rounded-sm border border-bone-border inline-block font-bold">
                {profile.professionalTitle}{' '}
                <span className="text-primary-container">✦</span>{' '}
                {profile.secondaryTitle}
              </span>
            </div>
          </div>

          {/* Professional Narrative Intro */}
          <p className="font-body-md text-body-md text-bone/80 max-w-2xl leading-relaxed pt-space-xs">
            {profile.introduction}
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-wrap items-center gap-space-md pt-space-sm">
            <button
              type="button"
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-primary-container text-on-primary-container font-label-mono text-label-mono uppercase tracking-widest shadow-[0_0_24px_rgba(229,9,20,0.35)] hover:bg-secondary-container hover:shadow-[0_0_32px_rgba(229,9,20,0.55)] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              <span>VIEW PROJECTS</span>
            </button>
            <button
              type="button"
              onClick={onOpenResume}
              className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded-lg bg-bone text-ink font-label-mono text-label-mono uppercase tracking-wider border border-bone-border hover:bg-bone-light hover:border-primary-container transition-all shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
            >
              <span className="material-symbols-outlined text-[18px] text-primary-container">download</span>
              <span>PREVIEW RÉSUMÉ [PDF]</span>
            </button>
          </div>

          {/* Academic & Capabilities Proof Strip */}
          <div className="grid grid-cols-2 gap-space-sm sm:gap-space-md pt-space-sm max-w-md">
            {profile.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-surface-container-low/90 p-space-sm rounded-lg border border-bone/15 backdrop-blur-sm hover:border-bone/40 transition-colors"
              >
                <span
                  className={`font-headline-md text-headline-md font-bold block ${
                    stat.highlight ? 'text-bone' : 'text-primary'
                  }`}
                >
                  {stat.value}
                </span>
                <span className="font-label-tag text-label-tag text-bone/65 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* LAYER 2 (z-20): Transparent PNG Cutout of Elvin's Formal Portrait overlapping F O L I O */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-start z-20 lg:pt-12 xl:pt-16">
          <div className="relative w-full max-w-[520px] h-[480px] sm:h-[560px] lg:h-[640px] flex items-end justify-center pointer-events-none">
            <img
              src="/images/hero-portrait-cutout.png"
              alt="Formal portrait of Elvin Opalla Lagamo Jr."
              className="w-full h-full object-contain object-bottom select-none cutout-bottom-fade drop-shadow-[0_18px_36px_rgba(0,0,0,0.75)]"
            />
          </div>
        </div>
      </div>

      {/* CLEAN LOWER TOOL ECOSYSTEM BAR */}
      <div className="relative z-30 w-full max-w-[1520px] mx-auto pt-6 pb-4 border-t border-white/[0.06]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="flex items-center gap-2 shrink-0">
            <span className="font-label-tag text-[10px] text-primary uppercase tracking-widest">
              ✦ ACTIVE TOOLCHAIN
            </span>
            <span className="text-white/15">|</span>
            <span className="font-label-tag text-[9px] text-on-surface-variant/75 uppercase tracking-wider">
              CLICK ANY TOOL TO INSPECT
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {floatingBadges.map((badge) => {
              const isSelected = selectedBadge?.id === badge.id
              return (
                <button
                  key={badge.id}
                  type="button"
                  onClick={() =>
                    setSelectedBadge((prev) =>
                      prev?.id === badge.id ? null : badge
                    )
                  }
                  className={`group flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-container-low/90 border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-primary-container bg-primary-container/15 shadow-[0_0_16px_rgba(229,9,20,0.35)]'
                      : 'border-white/10 hover:border-primary-container/60'
                  }`}
                >
                  <BadgeIcon badge={badge} />
                  <span className="font-label-mono text-[11px] text-on-surface font-semibold">
                    {badge.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Interactive Inspector Drawer */}
        {selectedBadge && (
          <div className="mt-3 px-4 py-2.5 rounded-lg bg-surface-container border border-primary-container/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[0_0_24px_rgba(229,9,20,0.18)]">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="w-2 h-2 rounded-full bg-primary-container shrink-0" />
              <div className="min-w-0">
                <span className="font-label-tag text-[10px] text-primary uppercase tracking-widest mr-2">
                  {selectedBadge.label}
                </span>
                <span className="font-body-sm text-xs text-on-surface-variant">
                  {selectedBadge.note}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => {
                  onSelectDomain(selectedBadge.domain)
                  onNavigate('skills')
                }}
                className="px-2.5 py-1 rounded bg-primary-container/20 border border-primary-container/40 font-label-tag text-[9px] text-primary uppercase hover:bg-primary-container hover:text-white transition-colors"
              >
                VIEW IN MATRIX
              </button>
              <button
                type="button"
                onClick={() => setSelectedBadge(null)}
                className="px-2 py-1 font-label-tag text-[9px] text-on-surface-variant hover:text-white uppercase"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Editorial Bone White Index Marquee Strip — Dramatic Transition Band */}
      <div className="absolute bottom-0 left-0 right-0 py-2.5 border-y border-bone-border bg-bone overflow-hidden whitespace-nowrap select-none z-30">
        <div className="animate-marquee font-label-mono text-[11px] text-ink font-bold uppercase tracking-[0.25em]">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <span key={idx} className="mx-6 inline-flex items-center gap-2">
              <span className="text-primary-container">✦</span>
              <span>{item.replace(/^✦\s*/, '')}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
