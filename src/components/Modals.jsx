import React, { useEffect, useState } from 'react'
import {
  certifications,
  educationTimeline,
  profile,
  projects,
  technicalMatrix,
} from '../data/portfolioData'

function ModalShell({ title, eyebrow, onClose, children, maxWidth = 'max-w-3xl' }) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full ${maxWidth} max-h-[90vh] overflow-y-auto bg-[#1A1A22] rounded-xl border border-white/15 shadow-[0_0_50px_rgba(229,9,20,0.22)] flex flex-col`}
      >
        <div className="sticky top-0 z-10 bg-[#1A1A22]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between gap-4">
          <div>
            {eyebrow && (
              <span className="font-label-tag text-[10px] text-primary uppercase tracking-widest block">
                {eyebrow}
              </span>
            )}
            <h3 className="font-headline-sm text-lg uppercase text-on-surface">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-surface-container-lowest border border-white/10 flex items-center justify-center text-on-surface-variant hover:text-white hover:border-primary-container transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

export function ProjectDossierModal({ project, initialTab = 'preview', onClose }) {
  const [tab, setTab] = useState(initialTab === 'architecture' ? 'architecture' : 'preview')

  if (!project) return null

  return (
    <ModalShell
      eyebrow={project.categoryLabel}
      title={project.title}
      onClose={onClose}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-6">
        {/* Top Highlights Strip */}
        <div className="grid grid-cols-3 gap-3">
          {project.highlights.map((item) => (
            <div
              key={item.label}
              className="bg-surface-container-lowest p-3 rounded-lg border border-white/[0.08]"
            >
              <span className="font-label-tag text-[9px] text-on-surface-variant uppercase tracking-widest block">
                {item.label}
              </span>
              <span className="font-headline-md text-lg sm:text-xl text-primary font-bold">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Modal View Switcher + Direct External Link */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            {[
              { id: 'preview', label: 'Overview & Visual' },
              { id: 'architecture', label: 'Architecture & Stack' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`px-3 py-1.5 rounded font-label-mono text-xs uppercase tracking-wider transition-all ${
                  tab === item.id
                    ? 'bg-primary-container text-on-primary-container'
                    : 'bg-surface-container-lowest text-on-surface-variant hover:text-white border border-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-primary-container text-white font-label-mono text-xs uppercase tracking-wider hover:bg-secondary-container transition-colors inline-flex items-center gap-1"
              >
                <span>OPEN LIVE SITE</span>
                <span className="material-symbols-outlined text-[15px]">
                  arrow_outward
                </span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded bg-surface-container-lowest border border-primary-container/50 text-primary hover:bg-primary-container hover:text-white font-label-mono text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1"
              >
                <span>VIEW GITHUB REPO</span>
                <span className="material-symbols-outlined text-[15px]">
                  arrow_outward
                </span>
              </a>
            )}
          </div>
        </div>

        {tab === 'preview' && (
          <div className="space-y-4">
            <div className="relative h-64 rounded-lg overflow-hidden border border-white/10">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2 flex-wrap">
                <span className="font-label-tag text-[10px] bg-primary-container text-white px-2 py-0.5 rounded uppercase">
                  {project.roleTag}
                </span>
                <span className="font-label-tag text-[10px] bg-surface-container-lowest/90 text-on-surface px-2 py-0.5 rounded border border-white/10 uppercase">
                  {project.typeTag}
                </span>
              </div>
            </div>
            <div className="space-y-2 text-body-sm text-on-surface-variant leading-relaxed">
              <p>
                <strong className="text-on-surface">Overview:</strong>{' '}
                {project.overview}
              </p>
              <p>
                <strong className="text-on-surface">Role &amp; Focus:</strong>{' '}
                {project.responsibilities}
              </p>
              <p>
                <strong className="text-on-surface">Key Contributions:</strong>{' '}
                {project.contributions}
              </p>
            </div>
          </div>
        )}

        {tab === 'architecture' && (
          <div className="space-y-4">
            <h4 className="font-label-mono text-xs uppercase text-primary tracking-widest">
              ✦ SYSTEM DESIGN &amp; IMPLEMENTATION BREAKDOWN
            </h4>
            <ul className="space-y-3">
              {project.architecture.map((point, idx) => (
                <li
                  key={idx}
                  className="bg-surface-container-lowest p-3.5 rounded-lg border border-white/[0.08] flex items-start gap-3"
                >
                  <span className="font-label-mono text-xs text-primary font-bold">
                    0{idx + 1}
                  </span>
                  <span className="font-body-sm text-on-surface-variant">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-label-mono text-xs text-on-surface bg-surface-container-lowest px-2.5 py-1 rounded border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </ModalShell>
  )
}

export function ResumeModal({ open, onClose, onDownloadToast }) {
  if (!open) return null

  const handleDownloadText = () => {
    const lines = [
      profile.formalFullName.toUpperCase(),
      `${profile.contact.location} | ${profile.contact.phone} | ${profile.contact.email} | ${profile.contact.githubUrl}`,
      '',
      'PROFESSIONAL SUMMARY',
      profile.introduction,
      '',
      'EDUCATION',
      ...educationTimeline.map(
        (e) => `- ${e.institution} — ${e.degree} (${e.period}) | ${e.honorsBadge}`
      ),
      '',
      'WORK EXPERIENCE',
      `- ${profile.workExperience.company} — ${profile.workExperience.role} (${profile.workExperience.period})`,
      ...profile.workExperience.highlights.map((h) => `  * ${h}`),
      '',
      'PROJECT EXPERIENCE',
      ...projects.map(
        (p) =>
          `- ${p.title} (${p.roleTag})\n  ${p.overview}\n  Stack: ${p.stack.join(', ')}\n  Link: ${p.liveUrl || p.repoUrl}`
      ),
      '',
      'TECHNICAL SKILLS',
      ...technicalMatrix.map(
        (c) => `- ${c.title}: ${c.skills.map((s) => s.name).join(', ')}`
      ),
      '',
      'TRAININGS & CERTIFICATIONS',
      ...certifications.map((c) => `- ${c.title} — ${c.issuer} (${c.issuedDate})`),
      '',
      'LEADERSHIP EXPERIENCE',
      `- ${profile.leadership.organization} — ${profile.leadership.role} (${profile.leadership.period})`,
      '',
      'REFERENCE',
      'Professional reference (Osorio Rivera Del Rosario Law Offices) available upon request.',
    ].join('\n')

    const blob = new Blob([lines], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = profile.resume.directLinkLabel
    a.click()
    URL.revokeObjectURL(url)
    onDownloadToast('ATS Résumé file downloaded!')
  }

  return (
    <ModalShell
      eyebrow="OFFICIAL CREDENTIAL FILE"
      title="CURRICULUM VITAE & RÉSUMÉ PREVIEW"
      onClose={onClose}
      maxWidth="max-w-4xl"
    >
      <div className="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 bg-surface-container-lowest p-3 rounded-lg border border-white/10">
          <span className="font-label-mono text-xs text-on-surface-variant">
            {profile.formalFullName} • {profile.resume.format}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                window.print()
                onDownloadToast('Opened Print / Save as PDF dialog')
              }}
              className="px-3 py-1.5 rounded bg-primary-container text-white font-label-mono text-xs uppercase tracking-wider hover:bg-secondary-container transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">
                print
              </span>
              Print / Save PDF
            </button>
            <button
              type="button"
              onClick={handleDownloadText}
              className="px-3 py-1.5 rounded bg-surface-container-high text-on-surface border border-white/15 font-label-mono text-xs uppercase tracking-wider hover:border-primary-container transition-colors flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[16px]">
                download
              </span>
              Export ATS .TXT
            </button>
          </div>
        </div>

        {/* Printable Bone White Paper ATS Dossier Preview */}
        <div
          id="printable-resume"
          className="bg-bone text-ink p-6 rounded-xl border border-bone-border space-y-5 shadow-inner"
        >
          <div className="border-b border-bone-border pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="font-headline-lg text-3xl uppercase text-ink">
                {profile.formalFullName}
              </h2>
              <p className="font-label-mono text-xs text-primary-container uppercase tracking-wider font-bold">
                {profile.professionalTitle} • {profile.secondaryTitle}
              </p>
            </div>
            <div className="font-body-sm text-xs text-ink-muted sm:text-right">
              <div className="font-semibold text-ink">{profile.contact.email}</div>
              <div>
                {profile.contact.phone} • {profile.contact.location}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-label-mono text-xs text-primary-container uppercase tracking-widest mb-1.5 font-bold">
              Professional Summary
            </h4>
            <p className="font-body-sm text-ink-muted leading-relaxed">
              {profile.introduction}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bone-light p-4 rounded-lg border border-bone-border">
              <h4 className="font-label-mono text-xs text-primary-container uppercase tracking-widest mb-2 font-bold">
                Education
              </h4>
              <p className="font-headline-sm text-sm text-ink uppercase">
                {educationTimeline[0].degree}
              </p>
              <p className="font-body-sm text-xs text-ink-muted">
                {educationTimeline[0].institution} ({educationTimeline[0].period})
              </p>
              <p className="font-label-mono text-xs text-primary-container mt-1 font-bold">
                {educationTimeline[0].honorsBadge}
              </p>
            </div>
            <div className="bg-bone-light p-4 rounded-lg border border-bone-border">
              <h4 className="font-label-mono text-xs text-primary-container uppercase tracking-widest mb-2 font-bold">
                Work Experience
              </h4>
              <p className="font-headline-sm text-sm text-ink uppercase">
                {profile.workExperience.role}
              </p>
              <p className="font-body-sm text-xs text-ink-muted">
                {profile.workExperience.company} ({profile.workExperience.period})
              </p>
              <p className="font-body-sm text-xs text-ink-muted mt-1">
                Sensitive file processing &amp; administrative coordination.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-label-mono text-xs text-primary-container uppercase tracking-widest mb-2 font-bold">
              Project Experience
            </h4>
            <div className="space-y-2.5">
              {projects.map((p) => (
                <div
                  key={p.id}
                  className="border-l-2 border-primary-container pl-3"
                >
                  <div className="font-headline-sm text-sm text-ink">
                    {p.title}
                  </div>
                  <div className="font-body-sm text-xs text-ink-muted">
                    {p.contributions}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-bone-border font-body-sm text-xs text-ink-muted">
            <strong className="text-ink">Professional Reference:</strong>{' '}
            Available upon request (Supervisor at Osorio Rivera Del Rosario Law
            Offices).
          </div>
        </div>
      </div>
    </ModalShell>
  )
}

export function CertificationModal({ certification, onClose }) {
  if (!certification) return null

  return (
    <ModalShell
      eyebrow="TRAINING & CERTIFICATION RECORD"
      title={certification.title}
      onClose={onClose}
      maxWidth="max-w-xl"
    >
      <div className="space-y-4">
        <div className="bg-surface-container-lowest p-4 rounded-lg border border-white/10 space-y-2 font-label-mono text-xs">
          <div className="flex justify-between gap-2">
            <span className="text-on-surface-variant">ISSUER:</span>
            <span className="text-on-surface font-bold text-right">
              {certification.issuer}
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-on-surface-variant">STATUS:</span>
            <span className="text-primary font-bold text-right">
              {certification.status}
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-on-surface-variant">ISSUED:</span>
            <span className="text-on-surface font-bold text-right">
              {certification.issuedDate}
            </span>
          </div>
        </div>
        <p className="font-body-sm text-on-surface-variant leading-relaxed">
          {certification.subtitle}
        </p>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-primary-container text-white font-label-mono text-xs uppercase tracking-wider hover:bg-secondary-container transition-colors"
          >
            CLOSE RECORD
          </button>
        </div>
      </div>
    </ModalShell>
  )
}

export function InquiryModal({ open, onClose, onSubmitSuccess }) {
  const [form, setForm] = useState({
    name: '',
    company: '',
    role: 'Software QA & Testing OJT',
    message: '',
  })

  if (!open) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `OJT Inquiry — ${form.role} (${form.company})`
    )
    const body = encodeURIComponent(
      `Hi Elvin,\n\nName: ${form.name}\nCompany: ${form.company}\nTarget Track: ${form.role}\n\n${form.message}`
    )
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`
    onSubmitSuccess(`Prepared email inquiry for ${form.company}!`)
    setForm({
      name: '',
      company: '',
      role: 'Software QA & Testing OJT',
      message: '',
    })
    onClose()
  }

  return (
    <ModalShell
      eyebrow="DIRECT DISPATCH // OJT PLACEMENT"
      title="SCHEDULE INTERVIEW OR TECHNICAL TRIAL"
      onClose={onClose}
      maxWidth="max-w-xl"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="font-label-tag text-[10px] text-on-surface-variant uppercase tracking-widest block mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. HR / Engineering Lead"
              className="w-full px-3 py-2 rounded bg-[#0E0E12] border border-[#27272E] focus:border-primary-container focus:outline-none text-sm text-white"
            />
          </div>
          <div>
            <label className="font-label-tag text-[10px] text-on-surface-variant uppercase tracking-widest block mb-1">
              Company / Team
            </label>
            <input
              type="text"
              required
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              placeholder="e.g. Tech Solutions Cebu"
              className="w-full px-3 py-2 rounded bg-[#0E0E12] border border-[#27272E] focus:border-primary-container focus:outline-none text-sm text-white"
            />
          </div>
        </div>

        <div>
          <label className="font-label-tag text-[10px] text-on-surface-variant uppercase tracking-widest block mb-1">
            Target OJT Track
          </label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="w-full px-3 py-2 rounded bg-[#0E0E12] border border-[#27272E] focus:border-primary-container focus:outline-none text-sm text-white"
          >
            <option>Software QA &amp; Testing OJT</option>
            <option>Full-Stack Web Development OJT</option>
            <option>Android / Mobile Development OJT</option>
            <option>Agile / Scrum Coordination OJT</option>
          </select>
        </div>

        <div>
          <label className="font-label-tag text-[10px] text-on-surface-variant uppercase tracking-widest block mb-1">
            Notes / Interview Availability
          </label>
          <textarea
            rows={3}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Share proposed interview slots or role details..."
            className="w-full px-3 py-2 rounded bg-[#0E0E12] border border-[#27272E] focus:border-primary-container focus:outline-none text-sm text-white resize-none"
          />
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-surface-container-lowest border border-white/10 font-label-mono text-xs text-on-surface-variant hover:text-white uppercase"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-5 py-2 rounded bg-primary-container text-white font-label-mono text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(229,9,20,0.4)] hover:bg-secondary-container transition-all"
          >
            Open Email Dispatch ✦
          </button>
        </div>
      </form>
    </ModalShell>
  )
}
