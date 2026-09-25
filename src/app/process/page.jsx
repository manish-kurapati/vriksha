'use client';

import React from 'react';
import Image from 'next/image';
import SectionHeader from '../../components/SectionHeader';
import CTASection from '../../components/CTASection';
import { processPhases, siteConfig } from '../../data/siteData';
import { CheckCircle2, ArrowRight, ShieldCheck, FileText, Wrench, Key } from 'lucide-react';

const phaseIcons = [FileText, Wrench, ShieldCheck, Key];

export default function ProcessPage() {
  return (
    <div className="bg-surface-white">
      {/* 1. HERO */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-3">
              METHODOLOGY & ASSURANCE
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy-deep font-normal leading-[1.1] tracking-tight">
              A Simple & Transparent Process
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-muted font-light leading-relaxed">
              From the initial dialogue to the ceremonial turning of the key, our 4-phase methodology guarantees structural excellence, transparent budgets, and disciplined milestones.
            </p>
          </div>

          {/* Desktop Horizontal Timeline / Mobile Vertical Timeline */}
          <div className="mt-14 pt-8 border-t border-surface-border">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Desktop Connecting Line */}
              <div className="hidden md:block absolute top-6 left-12 right-12 h-0.5 bg-blue-veryLight -z-0" />

              {processPhases.map((phase, idx) => {
                const IconComponent = phaseIcons[idx] || FileText;
                return (
                  <div key={phase.step} className="relative z-10">
                    <div className="w-12 h-12 rounded-none bg-surface-white border-2 border-blue-royal flex items-center justify-center text-blue-royal font-mono font-bold text-sm shadow-sm mb-4">
                      {phase.step}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-editorial text-blue-royal block mb-1">
                      Phase 0{idx + 1}
                    </span>
                    <h3 className="text-lg font-serif text-navy-deep font-normal">
                      {phase.title}
                    </h3>
                    <p className="text-xs text-ink-muted mt-1 font-light">
                      Estimated Duration: <strong className="text-navy-deep font-medium">{phase.duration}</strong>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 2. IN-DEPTH PHASE BREAKDOWNS WITH IMAGES */}
      <section className="py-20 lg:py-28 bg-surface-neutral/30 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {processPhases.map((phase, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={phase.step}
                  className="bg-surface-white border border-surface-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm"
                >
                  {/* Image */}
                  <div className={`lg:col-span-6 relative aspect-[16/10] lg:aspect-auto ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Image
                      src={phase.image}
                      alt={phase.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-surface-white/90 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-editorial text-blue-royal border border-surface-border/50">
                      Step {phase.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-editorial text-blue-royal block mb-2">
                        {phase.eyebrow}
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-navy-deep font-normal mb-4">
                        {phase.title}
                      </h2>
                      <p className="text-base text-ink-muted font-light leading-relaxed mb-6">
                        {phase.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        <h4 className="text-xs uppercase tracking-editorial font-semibold text-navy-deep">
                          Key Milestone Deliverables:
                        </h4>
                        {phase.details.map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-3 text-xs text-ink-main">
                            <CheckCircle2 className="w-4 h-4 text-blue-royal shrink-0 mt-0.5" />
                            <span className="font-light">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-surface-border/70 flex items-center justify-between text-xs">
                      <span className="text-ink-muted">
                        Phase Window: <strong className="text-navy-deep font-medium">{phase.duration}</strong>
                      </span>
                      <span className="text-blue-royal font-semibold uppercase tracking-editorial">
                        Transparent BOQ Monitored
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. TRANSPARENCY & QUALITY COMMITMENTS */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="CLIENT ASSURANCE"
            title="The Vriksha Transparency Charter"
            subtitle="How we eliminate common construction anxieties through contractual clarity and digital monitoring."
            centered={false}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-blue-ice/30 border border-blue-veryLight">
              <span className="text-2xl font-serif text-blue-royal block mb-3">01</span>
              <h3 className="text-lg font-serif text-navy-deep font-normal mb-2">
                Itemized BOQ with Zero Escalation
              </h3>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                Every cubic meter of concrete, kilogram of steel, and square foot of marble is explicitly costed before work begins. No unexpected variation invoices.
              </p>
            </div>

            <div className="p-8 bg-blue-ice/30 border border-blue-veryLight">
              <span className="text-2xl font-serif text-blue-royal block mb-3">02</span>
              <h3 className="text-lg font-serif text-navy-deep font-normal mb-2">
                Weekly Digital Drone & Photo Logs
              </h3>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                Track site progress from anywhere in the world. High-resolution photographic milestone records are uploaded weekly to your private client portal.
              </p>
            </div>

            <div className="p-8 bg-blue-ice/30 border border-blue-veryLight">
              <span className="text-2xl font-serif text-blue-royal block mb-3">03</span>
              <h3 className="text-lg font-serif text-navy-deep font-normal mb-2">
                180-Point Pre-Handover Audit
              </h3>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                Prior to keys handover, our senior quality directors perform laser alignment scans, thermal leak tests, and pressure checks across all building systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <CTASection
        title={"Start Step 01: Consultation & Feasibility"}
        subtitle="Bring your land documents, ideas, or architectural ambitions. We will prepare an initial zoning and feasibility roadmap."
        buttonText="Schedule Phase 01 Consultation"
      />
    </div>
  );
}
