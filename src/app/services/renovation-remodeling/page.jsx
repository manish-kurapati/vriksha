'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData, projectsData } from '../../../data/siteData';
import ProjectCard from '../../../components/ProjectCard';
import CTASection from '../../../components/CTASection';
import BeforeAfterSlider from '../../../components/BeforeAfterSlider';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function RenovationRemodelingPage() {
  const service = servicesData.find(s => s.id === 'renovation-remodeling');
  const renovationProjects = projectsData.filter(p => p.categorySlug === 'renovation');

  return (
    <div className="bg-surface-white">
      {/* 1. HERO */}
      <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-20 lg:pb-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-editorial text-brand-orange uppercase block mb-2 sm:mb-3">
              SERVICE DIVISION • 04
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-navy-deep font-normal leading-[1.1] tracking-tight">
              {service.title}
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-ink-muted font-light leading-relaxed">
              Elevating existing structures through precision structural retrofits, contemporary glass extensions, and respectful material restoration.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 relative aspect-[16/10] sm:aspect-[16/7] lg:aspect-[21/9] overflow-hidden border border-surface-border shadow-lg bg-surface-neutral rounded-sm">
            <Image
              src="/images/service_renovation.jpg"
              alt="Architectural Renovation of Stone Masonry and Glass Extension"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 px-3 py-1.5 sm:px-3.5 sm:py-1.5 bg-navy-dark/85 backdrop-blur-md text-surface-white text-[10px] sm:text-xs tracking-relaxed font-light border border-white/10">
              The Stone &amp; Glass Pavilion • Gachibowli
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & TRANSFORMATION PHILOSOPHY */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                RESTORATION EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                Honoring the Past, Engineering the Future
              </h2>
              <p className="mt-5 text-base text-ink-muted font-light leading-relaxed">
                {service.overview}
              </p>
              <div className="mt-8 p-6 bg-blue-ice/50 border border-blue-veryLight">
                <span className="text-xs uppercase tracking-editorial text-blue-royal font-semibold block mb-1">
                  STRUCTURAL ASSESSMENT FIRST
                </span>
                <p className="text-xs text-ink-muted font-light leading-relaxed">
                  Every renovation begins with non-destructive ultrasonic concrete testing and core drill analysis to ensure absolute structural safety prior to wall modifications.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface-neutral/50 p-8 sm:p-10 border border-surface-border">
              <h3 className="text-xl font-serif text-navy-deep font-normal mb-6">
                Scope of Deliverables
              </h3>
              <div className="space-y-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-royal shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-navy-deep">{item}</span>
                      <p className="text-xs text-ink-muted mt-0.5 font-light">
                        Carried out under licensed structural engineer supervision with complete statutory compliance.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE BEFORE / AFTER SLIDER */}
      <section className="py-20 lg:py-24 bg-surface-neutral/30 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider
            beforeImage="/images/service_renovation.jpg"
            afterImage="/images/project_contemporary_residence.jpg"
            beforeLabel="Before: Historic Stone Enclosure"
            afterLabel="After: Modern Cantilevered Residence"
            title="Interactive Renovation Showcase"
            subtitle="Explore how our structural engineering team integrates contemporary low-E glass pavilions into heritage stone masonry."
          />
        </div>
      </section>

      {/* 4. TRANSFORMATION PROTOCOLS */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
              REMODELING PROTOCOLS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
              Our Renovation Engineering
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="bg-surface-neutral/40 p-7 border border-surface-border shadow-sm">
                <div className="w-8 h-8 rounded-none border border-blue-royal/40 bg-blue-ice flex items-center justify-center text-blue-royal font-semibold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-serif text-navy-deep font-normal mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED RENOVATION PROJECTS */}
      <section className="py-20 lg:py-24 bg-surface-neutral/40 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                Featured Renovation Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial text-blue-royal font-semibold hover:text-navy-deep transition-colors"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {renovationProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        title={"Unlock the Latent Potential of Your Property"}
        subtitle="Schedule an on-site structural audit and feasibility review with our renovation engineering directors."
        buttonText="Book an On-Site Audit"
      />
    </div>
  );
}
