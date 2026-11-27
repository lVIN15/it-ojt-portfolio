import React, { useEffect, useState } from 'react'

function ModalShell({
  title,
  eyebrow,
  onClose,
  children,
  maxWidth = 'max-w-3xl',
  tone = 'bone',
}) {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  const isBone = tone === 'bone'

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/75 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full ${maxWidth} max-h-[92vh] overflow-y-auto rounded-xl border flex flex-col shadow-[0_24px_70px_rgba(0,0,0,0.65)] ${
          isBone
            ? 'bg-bone text-ink border-bone-border'
            : 'bg-[#1A1A22] text-on-surface border-white/15'
        }`}
      >
        {/* Sleek Obsidian Top Frame Header */}
        <div className="sticky top-0 z-10 bg-ink text-bone px-4 sm:px-6 py-3.5 sm:py-4 border-b border-primary-container/40 flex items-center justify-between gap-3">
          <div className="min-w-0">
            {eyebrow && (
              <span className="font-label-tag text-[9px] sm:text-[10px] text-primary uppercase tracking-widest block truncate">
                {eyebrow}
              </span>
            )}
            <h3 className="font-headline-sm text-base sm:text-lg uppercase text-bone break-words">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 sm:w-8 sm:h-8 shrink-0 rounded-lg bg-surface-container-low border border-bone/20 flex items-center justify-center text-bone/80 hover:text-white hover:border-primary-container hover:bg-primary-container transition-colors"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </div>
  )
}

export function ProjectDossierModal({ project, initialTab = 'preview', onClose }) {
  const [tab, setTab] = useState(
    initialTab === 'architecture' ? 'architecture' : 'preview'
  )

  if (!project) return null

  return (
    <ModalShell
      eyebrow={project.categoryLabel}
      title={project.title}
      onClose={onClose}
      maxWidth="max-w-4xl"
      tone="bone"
    >
      <div className="space-y-5">
        {/* Top Highlights Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {project.highlights.map((item) => (
            <div
              key={item.label}
              className="bg-bone-light p-3.5 rounded-lg border border-bone-border shadow-[0_4px_14px_rgba(19,19,21,0.04)]"
            >
              <span className="font-label-tag text-[9px] text-ink-muted uppercase tracking-widest block">
                {item.label}
              </span>
              <span className="font-headline-md text-lg sm:text-xl text-primary-container font-bold">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        {/* Modal View Switcher + Direct External Link */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-bone-border pb-3">
          <div className="flex items-center gap-2">
            {[
              { id: 'preview', label: 'Overview & Visual' },
              { id: 'architecture', label: 'Architecture & Stack' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`px-3.5 py-1.5 rounded font-label-mono text-xs uppercase tracking-wider transition-all ${
                  tab === item.id
                    ? 'bg-ink text-bone font-bold shadow-sm'
                    : 'bg-bone-light text-ink-muted hover:text-ink border border-bone-border'
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
                className="px-3.5 py-1.5 rounded bg-primary-container text-white font-label-mono text-xs uppercase tracking-wider hover:bg-ink hover:text-bone transition-colors inline-flex items-center gap-1 shadow-sm"
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
                className="px-3.5 py-1.5 rounded bg-ink text-bone hover:bg-primary-container hover:text-white font-label-mono text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-1 shadow-sm"
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
            <div className="bg-white rounded-lg overflow-hidden border border-bone-border p-6 h-44 sm:h-52 flex items-center justify-center shadow-sm">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="max-h-full max-w-full w-auto h-auto object-contain select-none"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-label-tag text-[10px] bg-primary-container text-white px-2.5 py-1 rounded uppercase">
                {project.roleTag}
              </span>
              <span className="font-label-tag text-[10px] bg-ink text-bone px-2.5 py-1 rounded font-bold uppercase">
                {project.typeTag}
              </span>
            </div>

            <div className="bg-bone-light p-4 sm:p-5 rounded-xl border border-bone-border space-y-2.5 text-body-sm text-ink-muted leading-relaxed">
              <p>
                <strong className="text-ink">Overview:</strong>{' '}
                {project.overview}
              </p>
              <p>
                <strong className="text-ink">Role &amp; Focus:</strong>{' '}
                {project.responsibilities}
              </p>
              <p>
                <strong className="text-ink">Key Contributions:</strong>{' '}
                {project.contributions}
              </p>
            </div>
          </div>
        )}

        {tab === 'architecture' && (
          <div className="space-y-4">
            <h4 className="font-label-mono text-xs uppercase text-primary-container tracking-widest font-bold">
              ✦ SYSTEM DESIGN &amp; IMPLEMENTATION BREAKDOWN
            </h4>
            <ul className="space-y-3">
              {project.architecture.map((point, idx) => (
                <li
                  key={idx}
                  className="bg-bone-light p-4 rounded-lg border border-bone-border flex items-start gap-3 shadow-[0_2px_10px_rgba(19,19,21,0.03)]"
                >
                  <span className="font-label-mono text-xs text-primary-container font-bold shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="font-body-sm text-ink-muted leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-label-mono text-xs text-bone bg-ink px-2.5 py-1 rounded border border-ink"
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

export function CertificationModal({ certification, onClose }) {
  if (!certification) return null

  return (
    <ModalShell
      eyebrow="VERIFIED TRAINING & CERTIFICATION"
      title={certification.title}
      onClose={onClose}
      maxWidth="max-w-4xl"
      tone="bone"
    >
      <div className="space-y-4">
        {/* Display-Only Metadata Header (No Download or Direct Source File Links) */}
        <div className="flex flex-wrap items-center justify-between gap-2 bg-ink text-bone px-4 py-3 rounded-lg border border-ink font-label-mono text-xs">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span>
              <span className="text-bone/60">ISSUER:</span>{' '}
              <strong className="text-bone">{certification.issuer}</strong>
            </span>
            <span>
              <span className="text-bone/60">STATUS:</span>{' '}
              <strong className="text-primary">{certification.status}</strong>
            </span>
            <span>
              <span className="text-bone/60">DATE:</span>{' '}
              <strong className="text-bone">{certification.issuedDate}</strong>
            </span>
          </div>
          <span className="font-label-tag text-[9px] text-bone/70 uppercase tracking-widest">
            DISPLAY PREVIEW ONLY
          </span>
        </div>

        {/* Optimized Display-Only Certificate Image */}
        {certification.certificateUrl && (
          <div className="w-full bg-white rounded-xl border border-bone-border overflow-hidden shadow-sm p-2.5 sm:p-4 flex items-center justify-center">
            <img
              src={certification.certificateUrl}
              alt={`${certification.title} display preview`}
              draggable={false}
              className="max-h-[68vh] max-w-full w-auto h-auto object-contain rounded select-none"
            />
          </div>
        )}

        <p className="font-body-sm text-ink-muted leading-relaxed">
          {certification.subtitle}
        </p>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 min-h-[40px] rounded bg-ink text-bone font-label-mono text-xs uppercase tracking-wider hover:bg-primary-container hover:text-white transition-colors"
          >
            CLOSE PREVIEW
          </button>
        </div>
      </div>
    </ModalShell>
  )
}
