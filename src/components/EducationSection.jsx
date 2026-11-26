import React from 'react'
import { certifications, educationTimeline } from '../data/portfolioData'

export default function EducationSection({ onInspectCertification }) {
  return (
    <section
      id="education"
      className="w-full px-margin lg:px-margin-desktop py-space-xl bg-bone text-ink scroll-mt-20 border-y border-bone-border"
    >
      <div className="max-w-[1520px] mx-auto flex flex-col gap-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-bone-border pb-space-md">
          <div>
            <span className="font-label-tag text-label-tag text-primary-container uppercase tracking-widest block mb-space-xs">
              04 // ACADEMICS &amp; CREDENTIALS
            </span>
            <h2 className="font-headline-xl text-[44px] leading-[46px] md:text-headline-xl uppercase text-ink">
              EDUCATION &amp; CERTIFICATIONS
            </h2>
          </div>
          <p className="font-body-md text-body-md text-ink-muted max-w-md">
            Formal BSIT academic honors paired with verified Java, IBM AI, and
            AWS Academy credentials.
          </p>
        </div>

        {/* 2-Column Split on Crisp Bone Paper Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
          {/* Column 1: Academic Background (6 cols) */}
          <div className="lg:col-span-6 bg-bone-light p-space-lg rounded-xl border border-bone-border flex flex-col justify-between shadow-[0_8px_30px_rgba(19,19,21,0.05)]">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-bone-border">
                <span className="font-headline-sm text-headline-sm uppercase text-ink flex items-center gap-2">
                  <span className="text-primary-container">✦</span> Academic
                  Timeline &amp; Honors
                </span>
                <span className="material-symbols-outlined text-primary-container">
                  school
                </span>
              </div>

              <div className="space-y-space-lg border-l border-bone-border pl-space-md mt-space-md">
                {educationTimeline.map((edu) => (
                  <div key={edu.degree} className="relative">
                    <span
                      className={`absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-bone-light ${
                        edu.current ? 'bg-primary-container' : 'bg-ink/45'
                      }`}
                    />
                    <span
                      className={`font-label-mono text-xs font-bold ${
                        edu.current ? 'text-primary-container' : 'text-ink-muted'
                      }`}
                    >
                      [{edu.period}]
                    </span>
                    <h3 className="font-headline-sm text-lg uppercase text-ink mt-1">
                      {edu.degree}
                    </h3>
                    <p className="font-body-md text-body-md text-ink font-medium">
                      {edu.institution}
                    </p>
                    <p className="font-label-tag text-[10px] text-primary-container uppercase tracking-wider mt-1">
                      {edu.honorsBadge}
                    </p>
                    <p className="font-body-sm text-body-sm text-ink-muted pt-2 leading-relaxed">
                      {edu.focusAreas}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-space-md mt-space-md border-t border-bone-border flex items-center justify-between font-label-mono text-xs">
              <span className="text-ink-muted">Recognition:</span>
              <span className="text-primary-container font-bold">
                Dean&apos;s List • With High Honors
              </span>
            </div>
          </div>

          {/* Column 2: Professional Certifications (6 cols) */}
          <div className="lg:col-span-6 bg-bone-light p-space-lg rounded-xl border border-bone-border flex flex-col justify-between shadow-[0_8px_30px_rgba(19,19,21,0.05)]">
            <div className="space-y-space-md">
              <div className="flex items-center justify-between pb-space-xs border-b border-bone-border">
                <span className="font-headline-sm text-headline-sm uppercase text-ink flex items-center gap-2">
                  <span className="text-primary-container">✦</span> Trainings
                  &amp; Certifications
                </span>
                <span className="material-symbols-outlined text-primary-container">
                  verified
                </span>
              </div>

              <div className="space-y-4 border-l border-bone-border pl-space-md mt-space-md">
                {certifications.map((cert) => (
                  <div key={cert.id} className="relative group">
                    <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary-container ring-4 ring-bone-light" />
                    <span className="font-label-mono text-xs text-primary-container font-bold">
                      [{cert.status}]
                    </span>
                    <h4 className="font-headline-sm text-sm uppercase text-ink mt-0.5 group-hover:text-primary-container transition-colors">
                      {cert.title}
                    </h4>
                    <div className="mt-0.5 flex items-center gap-3 flex-wrap">
                      <span className="font-body-sm text-xs text-ink-muted">
                        {cert.issuer}
                      </span>
                      <button
                        type="button"
                        onClick={() => onInspectCertification(cert)}
                        className="font-label-tag text-[10px] text-ink hover:text-primary-container uppercase tracking-wider underline underline-offset-4 transition-colors font-bold"
                      >
                        [DETAILS]
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-space-md mt-space-md border-t border-bone-border flex items-center justify-between font-label-mono text-xs">
              <span className="text-ink-muted">Verification:</span>
              <span className="text-ink font-bold">
                5 Verified Certificates &amp; Badges
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
