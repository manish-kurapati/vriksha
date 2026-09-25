'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData, projectsData } from '../../../data/siteData';
import { useQuoteModal } from '../../../components/QuoteModalContext';
import ProjectCard from '../../../components/ProjectCard';
import CTASection from '../../../components/CTASection';
import { CheckCircle2, ArrowRight, ShieldCheck, Sun, Compass, Ruler } from 'lucide-react';

export default function ResidentialConstructionPage() {
  const service = servicesData.find(s => s.id === 'residential-construction');
  const residentialProjects = projectsData.filter(p => p.categorySlug === 'residential');
  const { openModal } = useQuoteModal();

  return (
    <div className="bg-surface-white">
      {/* 1. HERO */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-3">
              SERVICE DIVISION • 01
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy-deep font-normal leading-[1.1] tracking-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-muted font-light leading-relaxed">
              Crafting bespoke modern residences, architectural villas, and private estates where structural permanence meets understated tranquility.
            </p>
          </div>

          <div className="mt-12 relative aspect-[21/9] sm:aspect-[16/7] overflow-hidden border border-surface-border shadow-lg bg-surface-neutral">
            <Image
              src="/images/hero_modern_villa.jpg"
              alt="Bespoke Residential Villa Architecture"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-navy-dark/85 backdrop-blur-md text-surface-white text-xs tracking-relaxed font-light border border-white/10">
              The Azure Villa • Jubilee Hills
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & PHILOSOPHY */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                Homes Sculpted for Generations
              </h2>
              <p className="mt-5 text-base text-ink-muted font-light leading-relaxed">
                {service.overview}
              </p>
              <div className="mt-8 pt-6 border-t border-surface-border">
                <div className="text-xs uppercase tracking-editorial text-blue-royal font-semibold mb-2">
                  STANDARD TIMELINE
                </div>
                <div className="text-2xl font-serif text-navy-deep">{service.timeline}</div>
                <div className="text-xs text-ink-muted mt-1 font-light">From excavation to key handover</div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface-neutral/50 p-8 sm:p-10 border border-surface-border">
              <h3 className="text-xl font-serif text-navy-deep font-normal mb-6">
                What We Deliver
              </h3>
              <div className="space-y-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-royal shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-medium text-navy-deep">{item}</span>
                      <p className="text-xs text-ink-muted mt-0.5 font-light">
                        Engineered to municipal structural standards with independent laboratory aggregate testing.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR APPROACH (ENGINEERING RIGOR) */}
      <section className="py-20 lg:py-24 bg-blue-ice/30 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
              METHOD & EXECUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
              Our Residential Approach
            </h2>
            <p className="mt-3 text-sm text-ink-muted font-light">
              How we translate architectural vision into concrete reality without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-white border border-surface-border p-7">
              <Sun className="w-8 h-8 text-blue-royal mb-4" />
              <h3 className="text-lg font-serif text-navy-deep font-normal mb-2">
                Bioclimatic Solar Studies
              </h3>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                Before laying the foundation, we perform micro-climate solar path studies to determine optimal cantilever depths and cross-ventilation breezes for South Indian thermal loads.
              </p>
            </div>
            <div className="bg-surface-white border border-surface-border p-7">
              <Ruler className="w-8 h-8 text-blue-royal mb-4" />
              <h3 className="text-lg font-serif text-navy-deep font-normal mb-2">
                Monolithic Laser Alignment
              </h3>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                We employ robotic total stations and laser levels to ensure formwork alignment within ±1.5mm, enabling floor-to-ceiling glass to sit flush with zero unsightly trims.
              </p>
            </div>
            <div className="bg-surface-white border border-surface-border p-7">
              <ShieldCheck className="w-8 h-8 text-blue-royal mb-4" />
              <h3 className="text-lg font-serif text-navy-deep font-normal mb-2">
                10-Year Structural Guarantee
              </h3>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                Our residential concrete structures come backed by an insured 10-year warranty, complete waterproofing warranties, and a dedicated post-handover maintenance concierge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
              ARCHITECTURAL INTEGRITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
              Signature Residential Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="border-l-2 border-blue-royal pl-6 py-2">
                <span className="text-[10px] font-semibold uppercase tracking-editorial text-blue-royal">
                  Feature 0{idx + 1}
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

      {/* 5. FEATURED RESIDENTIAL PROJECTS */}
      <section className="py-20 lg:py-24 bg-surface-neutral/40 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                SELECTED PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                Featured Residential Work
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
            {residentialProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        title={"Ready to Build Your Signature Residence?"}
        subtitle="Speak directly with our principal civil architect to discuss plot feasibility, setback calculations, and spatial concept sketches."
        buttonText="Inquire for Residential Construction"
      />
    </div>
  );
}
