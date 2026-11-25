import React from 'react'
import { certifications, educationTimeline } from '../data/portfolioData'

export default function EducationSection({ onInspectCertification }) {
  return (
    <section
      id="education"
      className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-lowest scroll-mt-20"
    >
      <div className="max-w-[1520px] mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-white/10 pb-space-md">
          <div>
            <span className="font-label-tag text-label-tag text-primary uppercase tracking-widest block mb-space-xs">
              04 // ACADEMICS &amp; CREDENTIALS
            </span>
            <h2 className="font-headline-xl text-[44px] leading-[46px] md:text-headline-xl uppercase text-on-surface">
              EDUCATION &amp; CERTIFICATIONS
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Formal BSIT academic honors paired with verified Java, IBM AI, and
            AWS Academy credentials.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/* Column 1: Academic Background (6 cols) */}
          <div className="lg:col-span-6 bg-surface-container-low p-space-lg rounded-xl border border-white/[0.08] flex flex-col justify-between">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-white/10">
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface flex items-center gap-2">
                  <span className="text-primary-container">✦</span> Academic
                  Timeline &amp; Honors
                </span>
                <span className="material-symbols-outlined text-primary-container">
                  school
                </span>
              </div>

              <div className="space-y-space-lg border-l border-white/15 pl-space-md mt-space-md">
                {educationTimeline.map((edu) => (
                  <div key={edu.degree} className="relative">
                    <span
                      className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-surface-container-low ${
                        edu.current ? 'bg-primary-container' : 'bg-white/40'
                      }`}
                    />
                    <span
                      className={`font-label-mono text-xs font-bold ${
                        edu.current ? 'text-primary' : 'text-on-surface-variant'
                      }`}
                    >
                      [{edu.period}]
                    </span>
                    <h3 className="font-headline-sm text-lg uppercase text-on-surface mt-1">
                      {edu.degree}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {edu.institution}
                    </p>
                    <p className="font-label-tag text-[10px] text-primary-fixed uppercase tracking-wider mt-1">
                      {edu.honorsBadge}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant pt-2 leading-relaxed">
                      {edu.focusAreas}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-space-md mt-space-md border-t border-white/[0.06] flex items-center justify-between font-label-mono text-xs">
              <span className="text-on-surface-variant">Recognition:</span>
              <span className="text-primary font-bold">
                Dean&apos;s List • With High Honors
              </span>
            </div>
          </div>

          {/* Column 2: Professional Certifications (6 cols) */}
          <div className="lg:col-span-6 bg-surface-container-low p-space-lg rounded-xl border border-white/[0.08] flex flex-col justify-between">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-white/10">
                <span className="font-headline-sm text-headline-sm uppercase text-on-surface flex items-center gap-2">
                  <span className="text-primary-container">✦</span> Trainings
                  &amp; Certifications
                </span>
                <span className="material-symbols-outlined text-primary">
                  verified
                </span>
              </div>

              <div className="space-y-4 border-l border-white/15 pl-space-md mt-space-md">
                {certifications.map((cert) => (
                  <div key={cert.id} className="relative group">
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary-container ring-4 ring-surface-container-low" />
                    <span className="font-label-mono text-xs text-primary font-bold">
                      [{cert.status}]
                    </span>
                    <h4 className="font-headline-sm text-sm uppercase text-on-surface mt-0.5 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h4>
                    <div className="mt-0.5 flex items-center gap-3 flex-wrap">
                      <span className="font-body-sm text-xs text-on-surface-variant">
                        {cert.issuer}
                      </span>
                      <button
                        type="button"
                        onClick={() => onInspectCertification(cert)}
                        className="font-label-tag text-[10px] text-primary hover:text-white uppercase tracking-wider underline underline-offset-4 transition-colors"
                      >
                        [DETAILS]
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-space-md mt-space-md border-t border-white/[0.06] flex items-center justify-between font-label-mono text-xs">
              <span className="text-on-surface-variant">Verification:</span>
              <span className="text-on-surface font-bold">
                5 Verified Certificates &amp; Badges
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
