'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData, projectsData } from '../../../data/siteData';
import ProjectCard from '../../../components/ProjectCard';
import CTASection from '../../../components/CTASection';
import { ArrowRight } from 'lucide-react';

export default function InteriorDesignPage() {
  const service = servicesData.find(s => s.id === 'interior-design');
  const interiorProjects = projectsData.filter(p => p.categorySlug === 'interior-design');

  return (
    <div className="bg-surface-white">
      {/* 1. HERO */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-3">
              SERVICE DIVISION • 03
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy-deep font-normal leading-[1.1] tracking-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-muted font-light leading-relaxed">
              Quiet luxury, custom fluted millwork, and tactile stone monoliths orchestrated for spatial serenity and acoustic calm.
            </p>
          </div>

          <div className="mt-12 relative aspect-[21/9] sm:aspect-[16/7] overflow-hidden border border-surface-border shadow-lg bg-surface-neutral">
            <Image
              src="/images/service_interior_design.jpg"
              alt="Minimalist Luxury Interior Architecture"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-navy-dark/85 backdrop-blur-md text-surface-white text-xs tracking-relaxed font-light border border-white/10">
              Double-Height Residence • Fluted Oak & Concrete
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW: THE ART OF TACTILE CALM */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                PHILOSOPHY OF CALM
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-tight">
                Quiet Spaces that Breathe
              </h2>
              <p className="text-base text-ink-muted font-light leading-relaxed">
                {service.overview}
              </p>
              <p className="text-base text-ink-muted font-light leading-relaxed">
                Rather than treating interiors as decorative surface dressings, we treat them as architectural extensions of the building itself. Shadow gaps replace generic baseboards; concealed flush-mounted doors maintain continuous wall planes; and lighting is indirect, eliminating harsh ceiling glare.
              </p>
              <div className="pt-4 flex items-center gap-8">
                <div>
                  <div className="text-2xl font-serif text-navy-deep">{service.timeline}</div>
                  <div className="text-xs text-ink-muted uppercase tracking-relaxed">Typical Execution Duration</div>
                </div>
                <div className="h-8 w-px bg-surface-border" />
                <div>
                  <div className="text-2xl font-serif text-blue-royal">5-Year</div>
                  <div className="text-xs text-ink-muted uppercase tracking-relaxed">Comprehensive Joinery Warranty</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] overflow-hidden border border-surface-border bg-surface-neutral shadow-md">
                <Image
                  src="/images/project_boutique_interior.jpg"
                  alt="Monolithic Dark Blue Veined Marble Centerpiece"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:block p-5 bg-surface-white border border-surface-border shadow-lg max-w-xs">
                <span className="text-[10px] font-semibold uppercase tracking-editorial text-blue-royal block mb-1">
                  SIGNATURE DETAIL
                </span>
                <p className="text-xs text-ink-muted font-light leading-relaxed">
                  Solid marble islands with continuous grain wrap and integrated undermount zero-radius basins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DELIVERABLES & INTERIOR DISCIPLINES */}
      <section className="py-20 lg:py-24 bg-surface-neutral/40 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
              DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
              What We Deliver
            </h2>
            <p className="mt-3 text-sm text-ink-muted font-light">
              From bespoke millwork engineering to micro-acoustic plaster conditioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.deliverables.map((item, idx) => (
              <div key={idx} className="bg-surface-white p-7 border border-surface-border shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-none border border-blue-royal/30 bg-blue-ice flex items-center justify-center text-blue-royal text-xs font-semibold mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-serif text-navy-deep font-normal mb-2">
                    {item}
                  </h3>
                  <p className="text-xs text-ink-muted font-light leading-relaxed">
                    Designed in-house with full fabrication drawings and executed by our specialized cabinetmakers.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES (LIGHTING & MATERIALS) */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
              MATERIAL PURITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
              Tactile Precision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="p-7 bg-blue-ice/20 border border-blue-veryLight">
                <span className="text-[10px] font-semibold uppercase tracking-editorial text-blue-royal">
                  Discipline 0{idx + 1}
                </span>
                <h3 className="text-xl font-serif text-navy-deep font-normal mt-1 mb-2">
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

      {/* 5. FEATURED INTERIOR PROJECTS */}
      <section className="py-20 lg:py-24 bg-surface-neutral/40 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                Featured Interior Architecture
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
            {interiorProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        title={"Transform Your Interior Environment"}
        subtitle="Schedule an in-studio materials review with our interior architectural team to explore tactile finishes, fluted woodwork, and lighting scenes."
        buttonText="Inquire for Interior Design"
      />
    </div>
  );
}
