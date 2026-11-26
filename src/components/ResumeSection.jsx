import React from 'react'
import { profile } from '../data/portfolioData'

export default function ResumeSection({ onOpenResume }) {
  const { resume } = profile

  return (
    <section
      id="resume"
      className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-lowest scroll-mt-20"
    >
      {/* Luxury Bone White Executive Dossier Floating on Obsidian */}
      <div className="max-w-[1520px] mx-auto bg-bone text-ink rounded-2xl border border-bone-border p-space-lg lg:p-space-xl relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
        {/* Subtle Architectural Crimson Corner Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-container via-primary-container/60 to-transparent" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center relative z-10">
          <div className="lg:col-span-8 space-y-space-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-ink text-bone border border-ink">
              <span className="material-symbols-outlined text-[16px] text-primary-container">
                file_open
              </span>
              <span className="font-label-mono text-label-mono uppercase tracking-widest">
                OFFICIAL CREDENTIAL FILE
              </span>
            </div>

            <h3 className="font-headline-xl text-[42px] leading-[44px] md:text-headline-xl text-ink uppercase">
              CURRICULUM VITAE &amp; RESUME
            </h3>

            <p className="font-body-md text-body-md text-ink-muted max-w-2xl">
              Preview, print to PDF, or export the ATS-formatted résumé dossier
              covering CIT-U BSIT honors, Software QA &amp; Scrum leadership,
              work experience, and verified project links.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs font-label-mono text-xs">
              <div className="bg-bone-light p-2.5 rounded border border-bone-border">
                <span className="text-ink-muted block text-[10px]">
                  FORMAT
                </span>
                <span className="text-ink font-bold">{resume.format}</span>
              </div>
              <div className="bg-bone-light p-2.5 rounded border border-bone-border">
                <span className="text-ink-muted block text-[10px]">
                  EXPORT
                </span>
                <span className="text-ink font-bold">{resume.fileSize}</span>
              </div>
              <div className="bg-bone-light p-2.5 rounded border border-bone-border">
                <span className="text-ink-muted block text-[10px]">
                  LAST UPDATED
                </span>
                <span className="text-ink font-bold">{resume.lastUpdated}</span>
              </div>
              <div className="bg-bone-light p-2.5 rounded border border-bone-border">
                <span className="text-ink-muted block text-[10px]">
                  TARGET ROLES
                </span>
                <span className="text-primary-container font-bold">
                  {resume.targetRoles}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-sm items-start lg:items-end justify-center">
            <button
              type="button"
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-4 rounded-lg bg-primary-container text-on-primary-container font-label-mono text-label-mono uppercase tracking-widest shadow-[0_12px_30px_rgba(229,9,20,0.35)] hover:bg-ink hover:text-bone transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">
                download
              </span>
              <span>Preview &amp; Download Résumé</span>
            </button>
            <span className="font-label-tag text-label-tag text-ink-muted tracking-wider uppercase">
              ✦ File: {resume.directLinkLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
