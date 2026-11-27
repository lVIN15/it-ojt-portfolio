import React, { useEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import TechnicalMatrixSection from './components/TechnicalMatrixSection'
import EducationSection from './components/EducationSection'
import ContactSection from './components/ContactSection'
import {
  CertificationModal,
  ProjectDossierModal,
} from './components/Modals'

const sectionIds = ['hero', 'projects', 'about', 'skills', 'education', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [activeMatrixDomain, setActiveMatrixDomain] = useState('all')
  const [selectedProjectState, setSelectedProjectState] = useState(null)
  const [selectedCert, setSelectedCert] = useState(null)
  const [toastMessage, setToastMessage] = useState('')

  const showToast = (msg) => {
    setToastMessage(msg)
  }

  useEffect(() => {
    if (!toastMessage) return
    const t = setTimeout(() => setToastMessage(''), 3200)
    return () => clearTimeout(t)
  }, [toastMessage])

  // Scroll-spy for active navigation highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigate = (sectionId) => {
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(sectionId)
    }
  }

  const handleCopyText = async (value, label) => {
    try {
      await navigator.clipboard.writeText(value)
      showToast(`COPIED ${label}: ${value}`)
    } catch {
      if (label === 'EMAIL') {
        window.location.href = `mailto:${value}`
      }
      showToast(`${label}: ${value}`)
    }
  }

  return (
    <div className="min-h-screen bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="w-full pt-16 sm:pt-20 bg-background min-h-screen overflow-x-clip">
        <HeroSection
          onNavigate={handleNavigate}
          onSelectDomain={setActiveMatrixDomain}
        />

        <ProjectsSection
          onOpenProject={(project, initialTab) =>
            setSelectedProjectState({ project, initialTab })
          }
        />

        <AboutSection
          onSelectDomain={setActiveMatrixDomain}
          onNavigate={handleNavigate}
        />

        <TechnicalMatrixSection
          activeDomain={activeMatrixDomain}
          onSelectDomain={setActiveMatrixDomain}
        />

        <EducationSection
          onInspectCertification={(cert) => setSelectedCert(cert)}
        />

        <ContactSection
          onCopyText={handleCopyText}
        />
      </main>

      {/* Modals */}
      <ProjectDossierModal
        key={
          selectedProjectState
            ? `${selectedProjectState.project.id}-${selectedProjectState.initialTab}`
            : 'closed'
        }
        project={selectedProjectState?.project}
        initialTab={selectedProjectState?.initialTab || 'preview'}
        onClose={() => setSelectedProjectState(null)}
      />

      <CertificationModal
        certification={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      {/* Obsidian Crimson Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[120] px-4 py-3 rounded-lg bg-[#1A1A22] border border-primary-container/70 shadow-[0_0_28px_rgba(229,9,20,0.4)] flex items-center gap-2.5 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
          <span className="font-label-mono text-xs text-on-surface uppercase tracking-wider">
            {toastMessage}
          </span>
        </div>
      )}

      <Analytics />
    </div>
  )
}
