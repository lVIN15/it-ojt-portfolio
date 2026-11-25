import React, { useEffect, useState } from 'react'
import { profile } from '../data/portfolioData'

export default function ContactSection({ onCopyText, onOpenInquiry }) {
  const { contact } = profile
  const [localTime, setLocalTime] = useState('')

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Manila',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date())
        setLocalTime(formatted)
      } catch {
        setLocalTime('GMT+8')
      }
    }
    updateClock()
    const timer = setInterval(updateClock, 30000)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <section
        id="contact"
        className="w-full px-margin lg:px-margin-desktop py-space-xl bg-surface-container-lowest border-t border-white/[0.08] scroll-mt-20"
      >
        <div className="max-w-[1520px] mx-auto flex flex-col gap-space-lg">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md border-b border-white/10 pb-space-md">
            <div>
              <span className="font-label-tag text-label-tag text-primary uppercase tracking-widest block mb-space-xs">
                05 // DIRECT CONTACT &amp; TRANSMISSION
              </span>
              <h2 className="font-headline-xl text-[44px] leading-[46px] md:text-headline-xl uppercase text-on-surface">
                GET IN TOUCH
              </h2>
            </div>
            <div className="flex flex-col md:items-end gap-2">
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md md:text-right">
                Available for Software QA, Testing, Full-Stack, and Scrum OJT
                interviews and immediate placement.
              </p>
              <button
                type="button"
                onClick={onOpenInquiry}
                className="font-label-mono text-xs text-primary hover:text-white uppercase tracking-wider inline-flex items-center gap-1 transition-colors"
              >
                <span>✦ SCHEDULE OJT INTERVIEW</span>
                <span className="material-symbols-outlined text-[15px]">
                  arrow_outward
                </span>
              </button>
            </div>
          </div>

          {/* Consolidated 4-Card Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Email Card */}
            <button
              type="button"
              onClick={() => onCopyText(contact.email, 'EMAIL')}
              className="text-left flex flex-col justify-between p-space-md bg-surface-container-low rounded-xl border border-white/[0.08] hover:border-primary-container transition-all group"
            >
              <div className="flex items-center justify-between pb-space-sm w-full">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    mail
                  </span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-white text-[18px]">
                  content_copy
                </span>
              </div>
              <div className="w-full">
                <span className="font-label-tag text-[10px] text-on-surface-variant uppercase tracking-widest block">
                  EMAIL DISPATCH (CLICK TO COPY)
                </span>
                <span className="font-headline-sm text-sm text-on-surface truncate block font-bold pt-1">
                  {contact.email}
                </span>
              </div>
            </button>

            {/* Phone Card */}
            <button
              type="button"
              onClick={() => onCopyText(contact.phone, 'PHONE')}
              className="text-left flex flex-col justify-between p-space-md bg-surface-container-low rounded-xl border border-white/[0.08] hover:border-primary-container transition-all group"
            >
              <div className="flex items-center justify-between pb-space-sm w-full">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    call
                  </span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-white text-[18px]">
                  content_copy
                </span>
              </div>
              <div className="w-full">
                <span className="font-label-tag text-[10px] text-on-surface-variant uppercase tracking-widest block">
                  MOBILE / DIRECT LINE
                </span>
                <span className="font-headline-sm text-sm text-on-surface truncate block font-bold pt-1">
                  {contact.phone}
                </span>
              </div>
            </button>

            {/* GitHub Card */}
            <a
              href={contact.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-between p-space-md bg-surface-container-low rounded-xl border border-white/[0.08] hover:border-primary-container transition-all group"
            >
              <div className="flex items-center justify-between pb-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">
                    terminal
                  </span>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-white text-[18px]">
                  arrow_outward
                </span>
              </div>
              <div>
                <span className="font-label-tag text-[10px] text-on-surface-variant uppercase tracking-widest block">
                  CODEBASE REPOSITORY
                </span>
                <span className="font-headline-sm text-sm text-on-surface truncate block font-bold pt-1">
                  {contact.githubLabel}
                </span>
              </div>
            </a>

            {/* Location / Timezone Card */}
            <div className="flex flex-col justify-between p-space-md bg-surface-container-low rounded-xl border border-white/[0.08]">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    location_on
                  </span>
                </div>
                <span className="font-label-tag text-[9px] text-primary uppercase bg-primary-container/20 px-2 py-0.5 rounded">
                  {contact.workMode}
                </span>
              </div>
              <div>
                <span className="font-label-tag text-[10px] text-on-surface-variant uppercase tracking-widest block">
                  LOCATION &amp; LOCAL TIME ({localTime || 'GMT+8'})
                </span>
                <span className="font-headline-sm text-sm text-on-surface truncate block font-bold pt-1">
                  {contact.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-surface-container-lowest border-t border-white/[0.08] py-space-lg">
        <div className="w-full px-margin lg:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs">
              <span className="text-primary-container text-body-sm font-label-mono leading-none">
                ✦
              </span>
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-wider">
                {profile.brandLabel}
              </span>
            </div>
            <p className="font-label-tag text-label-tag text-on-surface-variant uppercase tracking-widest">
              SOFTWARE QUALITY ASSURANCE • FULL-STACK • AGILE SCRUM
            </p>
          </div>
          <div className="flex items-center gap-space-lg">
            <span className="font-label-mono text-label-mono text-on-surface-variant">
              © {profile.copyrightYear} {profile.formalFullName.toUpperCase()}
            </span>
            <span className="font-label-tag text-label-tag uppercase text-on-surface-variant bg-surface-container-low px-2 py-1 rounded border border-white/[0.08] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
              OPEN FOR OJT
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
