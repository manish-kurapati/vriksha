'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData, projectsData } from '../../../data/siteData';
import { useQuoteModal } from '../../../components/QuoteModalContext';
import ProjectCard from '../../../components/ProjectCard';
import CTASection from '../../../components/CTASection';
import { CheckCircle2, Building, Zap, Shield, Clock, Layers, ArrowRight } from 'lucide-react';

export default function CommercialConstructionPage() {
  const service = servicesData.find(s => s.id === 'commercial-construction');
  const commercialProjects = projectsData.filter(p => p.categorySlug === 'commercial');
  const { openModal } = useQuoteModal();

  return (
    <div className="bg-surface-white">
      {/* 1. HERO */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-3">
              SERVICE DIVISION • 02
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy-deep font-normal leading-[1.1] tracking-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-muted font-light leading-relaxed">
              Engineering corporate headquarters, tech parks, and commercial landmarks that assert institutional stature and promote organizational vitality.
            </p>
          </div>

          <div className="mt-12 relative aspect-[21/9] sm:aspect-[16/7] overflow-hidden border border-surface-border shadow-lg bg-surface-neutral">
            <Image
              src="/images/service_commercial_facade.jpg"
              alt="Commercial Architecture & Steel Exoskeleton"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-navy-dark/85 backdrop-blur-md text-surface-white text-xs tracking-relaxed font-light border border-white/10">
              Nova Tech Corporate Headquarters • Financial District
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & METRICS BANNER */}
      <section className="py-16 bg-navy-deep text-surface-white border-b border-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-light text-blue-soft">35,000+</div>
              <div className="text-xs uppercase tracking-editorial text-surface-white mt-1">Sq. Ft. Single Span Capable</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-light text-blue-soft">STC 48</div>
              <div className="text-xs uppercase tracking-editorial text-surface-white mt-1">Acoustic Curtain Glazing</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-light text-blue-soft">LEED / IGBC</div>
              <div className="text-xs uppercase tracking-editorial text-surface-white mt-1">Green Building Compliance</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-light text-blue-soft">Zero-Delay</div>
              <div className="text-xs uppercase tracking-editorial text-surface-white mt-1">Phased Tenant Handover</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE DELIVERABLES & DETAILED BREAKDOWN */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                CIVIL PRECISION
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                Corporate Architecture Built for Velocity
              </h2>
              <p className="mt-5 text-base text-ink-muted font-light leading-relaxed">
                {service.overview}
              </p>
              <div className="mt-8 p-6 bg-surface-neutral border border-surface-border">
                <span className="text-xs uppercase tracking-editorial text-blue-royal font-semibold block mb-2">
                  STRUCTURAL SPECIFICATION
                </span>
                <p className="text-xs text-ink-muted leading-relaxed font-light">
                  High-tensile structural steel fabrication with certified radiographic weld testing, coupled with unitized aluminum curtain walling engineered to withstand wind gust speeds up to 180 km/h.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <h3 className="text-xl font-serif text-navy-deep font-normal mb-6">
                What We Deliver
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="p-5 bg-surface-white border border-surface-border hover:border-blue-royal/50 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-blue-royal mb-2.5" />
                    <h4 className="text-sm font-medium text-navy-deep">{item}</h4>
                    <p className="text-xs text-ink-muted mt-1 font-light">
                      Fully integrated with municipal fire, MEP, and elevator compliance.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY COMMERCIAL FEATURES */}
      <section className="py-20 lg:py-24 bg-surface-neutral/40 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
              ENGINEERING ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
              Commercial Engineering Framework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="bg-surface-white p-7 border border-surface-border shadow-sm">
                <div className="w-8 h-8 bg-blue-ice border border-blue-veryLight flex items-center justify-center text-blue-royal font-mono text-xs font-semibold mb-4">
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

      {/* 5. FEATURED COMMERCIAL PROJECTS */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                PORTFOLIO SHOWCASE
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                Commercial Landmark Case Studies
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial text-blue-royal font-semibold hover:text-navy-deep transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        title={"Commence Your Corporate Landmark"}
        subtitle="Request our commercial capabilities prospectus, turnkey project timelines, and structural steel engineering specifications."
        buttonText="Inquire for Commercial Project"
      />
    </div>
  );
}
