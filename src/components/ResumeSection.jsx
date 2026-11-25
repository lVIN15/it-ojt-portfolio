import React from 'react'
import { profile } from '../data/portfolioData'

export default function ResumeSection({ onOpenResume }) {
  const { resume } = profile

  return (
    <section
      id="resume"
      className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-low scroll-mt-20"
    >
      <div className="max-w-[1520px] mx-auto bg-surface-container-lowest rounded-2xl border border-white/10 p-space-lg lg:p-space-xl relative overflow-hidden shadow-2xl">
        {/* Subtle Crimson Underglow */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center relative z-10">
          <div className="lg:col-span-8 space-y-space-sm">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary-container/20 text-primary border border-primary-container/40">
              <span className="material-symbols-outlined text-[16px]">
                file_open
              </span>
              <span className="font-label-mono text-label-mono uppercase tracking-widest">
                OFFICIAL CREDENTIAL FILE
              </span>
            </div>

            <h3 className="font-headline-xl text-[42px] leading-[44px] md:text-headline-xl text-on-surface uppercase">
              CURRICULUM VITAE &amp; RESUME
            </h3>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Download or preview the comprehensive PDF dossier containing
              detailed coursework breakdowns, project Git repositories,
              references, academic awards, and targeted OJT availability
              timelines.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs font-label-mono text-xs">
              <div className="bg-surface-container p-2.5 rounded border border-white/[0.06]">
                <span className="text-on-surface-variant block text-[10px]">
                  FORMAT
                </span>
                <span className="text-on-surface font-bold">
                  {resume.format}
                </span>
              </div>
              <div className="bg-surface-container p-2.5 rounded border border-white/[0.06]">
                <span className="text-on-surface-variant block text-[10px]">
                  FILE SIZE
                </span>
                <span className="text-on-surface font-bold">
                  {resume.fileSize}
                </span>
              </div>
              <div className="bg-surface-container p-2.5 rounded border border-white/[0.06]">
                <span className="text-on-surface-variant block text-[10px]">
                  LAST UPDATED
                </span>
                <span className="text-on-surface font-bold">
                  {resume.lastUpdated}
                </span>
              </div>
              <div className="bg-surface-container p-2.5 rounded border border-white/[0.06]">
                <span className="text-on-surface-variant block text-[10px]">
                  TARGET ROLES
                </span>
                <span className="text-primary font-bold">
                  {resume.targetRoles}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-space-sm items-start lg:items-end justify-center">
            <button
              type="button"
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-space-sm px-space-xl py-4 rounded-lg bg-primary-container text-on-primary-container font-label-mono text-label-mono uppercase tracking-widest shadow-[0_0_30px_rgba(229,9,20,0.4)] hover:bg-secondary-container hover:shadow-[0_0_40px_rgba(229,9,20,0.6)] transition-all"
            >
              <span className="material-symbols-outlined text-[20px]">
                download
              </span>
              <span>Download Official Résumé [PDF]</span>
            </button>
            <span className="font-label-tag text-label-tag text-on-surface-variant tracking-wider uppercase">
              ✦ Direct File: {resume.directLinkLabel}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
