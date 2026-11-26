import React, { useState } from 'react'
import { navLinks, profile } from '../data/portfolioData'

export default function Header({ activeSection, onNavigate, onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    onNavigate(id)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/85 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="h-20 w-full px-margin lg:px-margin-desktop flex items-center justify-between gap-space-md">
        {/* Brand Identity */}
        <div className="flex items-center gap-space-md min-w-fit">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="group flex flex-col focus:outline-none"
          >
            <div className="flex items-center gap-space-xs">
              <span className="text-primary-container text-body-sm font-label-mono leading-none select-none">
                ✦
              </span>
              <span className="font-headline-sm text-headline-sm uppercase text-bone tracking-wider group-hover:text-primary-container transition-colors">
                {profile.brandLabel}
              </span>
            </div>
            <span className="font-label-tag text-label-tag text-bone/65 uppercase tracking-widest pl-3">
              {profile.brandSubtitle}
            </span>
          </a>
        </div>

        {/* Desktop Pill Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden xl:flex items-center gap-space-xs p-1 bg-surface-container-low/70 rounded-lg border border-white/[0.06]"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`px-space-md py-space-xs rounded-lg font-label-mono text-label-mono transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-primary-container/15 text-on-surface border border-primary-container/50 shadow-[0_0_12px_rgba(229,9,20,0.2)]'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high border border-transparent'
                }`}
              >
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-container inline-block" />
                )}
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right Controls */}
        <div className="flex items-center gap-space-sm sm:gap-space-md">
          <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container-low border border-white/[0.08]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
            </span>
            <span className="font-label-tag text-label-tag uppercase text-on-surface-variant">
              {profile.availabilityBadge}
            </span>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="inline-flex items-center justify-center px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container font-label-mono text-label-mono uppercase tracking-wider shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:bg-secondary-container hover:shadow-[0_0_28px_rgba(229,9,20,0.6)] transition-all"
          >
            GET IN TOUCH
          </a>

          <button
            type="button"
            onClick={onOpenInquiry}
            title="Send Quick OJT Interview Inquiry"
            className="w-8 h-8 rounded-full bg-bone text-ink flex items-center justify-center hover:ring-2 hover:ring-primary-container hover:scale-105 transition-all"
          >
            <span className="material-symbols-outlined text-ink text-[18px]">
              person
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="xl:hidden w-9 h-9 rounded-lg bg-surface-container-low border border-white/10 flex items-center justify-center text-on-surface hover:border-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-b border-white/10 px-margin py-space-md flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`px-space-md py-2.5 rounded-lg font-label-mono text-label-mono uppercase tracking-wider flex items-center justify-between transition-all ${
                  isActive
                    ? 'bg-primary-container/15 text-on-surface border border-primary-container/50'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface border border-transparent'
                }`}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-[16px] text-primary">
                  arrow_forward
                </span>
              </a>
            )
          })}
        </div>
      )}
    </header>
  )
}
