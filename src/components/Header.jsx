import React, { useState } from 'react'
import { navLinks, profile } from '../data/portfolioData'

export default function Header({ activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    onNavigate(id)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/90 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="h-16 sm:h-20 w-full px-4 sm:px-margin lg:px-margin-desktop flex items-center justify-between gap-2 sm:gap-space-md">
        {/* Brand Identity */}
        <div className="flex items-center min-w-0">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, 'hero')}
            className="group flex flex-col focus:outline-none min-w-0"
          >
            <div className="flex items-center gap-1 sm:gap-space-xs min-w-0">
              <span className="text-primary-container text-xs sm:text-body-sm font-label-mono leading-none select-none shrink-0">
                ✦
              </span>
              <span className="font-headline-sm text-sm sm:text-headline-sm uppercase text-bone tracking-wider group-hover:text-primary-container transition-colors truncate">
                {profile.brandLabel}
              </span>
            </div>
            <span className="font-label-tag text-[8px] sm:text-label-tag text-bone/65 uppercase tracking-widest pl-3 truncate">
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
        <div className="flex items-center gap-2 sm:gap-space-md shrink-0">
          <div className="hidden md:flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container-low border border-white/[0.08]">
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
            className="hidden sm:inline-flex items-center justify-center px-3 sm:px-space-md py-2 rounded-lg bg-primary-container text-on-primary-container font-label-mono text-[11px] sm:text-label-mono uppercase tracking-wider shadow-[0_0_20px_rgba(229,9,20,0.35)] hover:bg-secondary-container hover:shadow-[0_0_28px_rgba(229,9,20,0.6)] transition-all"
          >
            GET IN TOUCH
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="xl:hidden w-10 h-10 rounded-lg bg-surface-container-low border border-white/15 flex items-center justify-center text-bone hover:border-primary-container transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/95 backdrop-blur-xl border-b border-white/10 px-4 sm:px-margin py-4 flex flex-col gap-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container-low border border-white/[0.08] mb-1">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container" />
            </span>
            <span className="font-label-tag text-[10px] uppercase text-bone/80 tracking-widest">
              {profile.availabilityBadge}
            </span>
          </div>

          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`px-4 py-3 min-h-[44px] rounded-lg font-label-mono text-xs uppercase tracking-wider flex items-center justify-between transition-all ${
                  isActive
                    ? 'bg-primary-container/15 text-bone border border-primary-container/50'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-bone border border-transparent'
                }`}
              >
                <span>{link.label}</span>
                <span className="material-symbols-outlined text-[16px] text-primary">
                  arrow_forward
                </span>
              </a>
            )
          })}

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="sm:hidden mt-2 w-full min-h-[44px] inline-flex items-center justify-center px-4 py-3 rounded-lg bg-primary-container text-on-primary-container font-label-mono text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(229,9,20,0.35)]"
          >
            GET IN TOUCH
          </a>
        </div>
      )}
    </header>
  )
}
