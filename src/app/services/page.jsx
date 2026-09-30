'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ScrollReveal from '../../components/ScrollReveal';
import SectionHeader from '../../components/SectionHeader';
import CTASection from '../../components/CTASection';
import { servicesData } from '../../data/siteData';
import { ArrowRight, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="bg-surface-warm">
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl">
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-3">
                PRACTICE & DISCIPLINES
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy-deep font-normal leading-[1.1] tracking-tight">
                Construction & Interior Solutions Designed Around You
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-ink-muted font-light leading-relaxed">
                We provide integrated architectural planning, licensed structural construction, and bespoke interior execution across specialized divisions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4 Large Service Categories */}
      <section className="py-20 lg:py-28 bg-surface-neutral/30 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {servicesData.map((svc, index) => {
              const isEven = index % 2 === 1;
              return (
                <ScrollReveal key={svc.id} animation="fade-up" duration={700}>
                  <div
                    className="bg-surface-white border border-surface-border overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-sm hover:border-blue-royal/50 transition-colors"
                  >
                  {/* Image Column */}
                  <div className={`lg:col-span-6 relative aspect-[16/10] lg:aspect-auto ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <Image
                      src={svc.heroImage}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-surface-white/90 backdrop-blur-sm text-[11px] font-semibold uppercase tracking-editorial text-blue-royal border border-surface-border/50">
                      Phase 0{index + 1}
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 p-8 sm:p-12 lg:p-14 flex flex-col justify-between ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-editorial text-blue-royal block mb-2">
                        {svc.eyebrow}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal mb-4">
                        {svc.title}
                      </h2>
                      <p className="text-base text-ink-muted font-light leading-relaxed mb-6">
                        {svc.overview}
                      </p>

                      <div className="space-y-2.5 mb-8">
                        {svc.deliverables.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-xs text-ink-main">
                            <CheckCircle2 className="w-4 h-4 text-blue-royal shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-surface-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <span className="text-xs text-ink-muted font-light">
                        Typical Timeline: <strong className="text-navy-deep font-medium">{svc.timeline}</strong>
                      </span>
                      <Link
                        href={svc.href}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-orange text-surface-white hover:bg-brand-orangeHover text-xs uppercase tracking-editorial font-medium transition-colors shadow-sm rounded-full sm:rounded-none"
                      >
                        <span>View Service Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Overview Table */}
      <section className="py-20 lg:py-28 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <SectionHeader
              eyebrow="COMPARATIVE DISCIPLINES"
              title="Cross-Disciplinary Standards"
              subtitle="Every division operates under unified civil standards, centralized material procurement, and a dedicated project director."
              centered={false}
            />

            <div className="overflow-x-auto border border-surface-border rounded-xl">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-surface-neutral/80 border-b border-surface-border text-xs uppercase tracking-editorial text-brand-orange">
                  <th className="p-4 sm:p-5 font-semibold">Service</th>
                  <th className="p-4 sm:p-5 font-semibold">Scope Coverage</th>
                  <th className="p-4 sm:p-5 font-semibold">Primary Materials</th>
                  <th className="p-4 sm:p-5 font-semibold">Warranty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border text-xs sm:text-sm text-ink-muted font-light">
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-navy-deep">Civil Construction</td>
                  <td className="p-4 sm:p-5">End-to-end structural works, seismic RCC framing & foundations</td>
                  <td className="p-4 sm:p-5">Fe 550D Steel, M25–M40 Concrete, AAC Blocks</td>
                  <td className="p-4 sm:p-5 text-brand-orange font-medium">10-Year Structural</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-navy-deep">Residential Construction</td>
                  <td className="p-4 sm:p-5">Soil-to-key turnkey villas, duplexes & estates</td>
                  <td className="p-4 sm:p-5">M40 Concrete, Honed Limestone, Low-E Glass</td>
                  <td className="p-4 sm:p-5 text-brand-orange font-medium">10-Year Structural</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-navy-deep">Commercial Construction</td>
                  <td className="p-4 sm:p-5">Corporate HQs, IT campuses & commercial hubs</td>
                  <td className="p-4 sm:p-5">High-Tensile Steel, Unitized Curtain Walls</td>
                  <td className="p-4 sm:p-5 text-brand-orange font-medium">10-Year Structural</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-navy-deep">Interior Design</td>
                  <td className="p-4 sm:p-5">Bespoke joinery, lighting scenes, marble islands</td>
                  <td className="p-4 sm:p-5">Travertine Marble, Fluted Oak, Brass Hardware</td>
                  <td className="p-4 sm:p-5 text-brand-orange font-medium">5-Year Comprehensive</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-medium text-navy-deep">Renovation & Remodeling</td>
                  <td className="p-4 sm:p-5">Structural retrofits, facade glass extensions</td>
                  <td className="p-4 sm:p-5">Preserved Fieldstone, Steel Beams, Basalt</td>
                  <td className="p-4 sm:p-5 text-brand-orange font-medium">7-Year Structural</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>

      {/* CTA */}
      <CTASection
        title={"Need Guidance on Your Project?"}
        subtitle="Our technical consulting team offers complimentary feasibility assessments and site zoning evaluations across Hyderabad and South India."
        buttonText="Schedule a Feasibility Call"
      />
    </div>
  );
}
