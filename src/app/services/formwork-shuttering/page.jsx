'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData, projectsData } from '../../../data/siteData';
import { useQuoteModal } from '../../../components/QuoteModalContext';
import ProjectCard from '../../../components/ProjectCard';
import CTASection from '../../../components/CTASection';
import { CheckCircle2, ArrowRight, Layers, Wrench, ShieldCheck, BadgeCheck, XCircle } from 'lucide-react';

const shutterings = [
  {
    name: 'MS Box Shuttering',
    offered: true,
    icon: <Layers className="w-7 h-7" />,
    description:
      'Fabricated from mild steel box sections, this is our primary shuttering system. Delivers high rigidity, exceptional load-bearing capacity, and excellent concrete surface finish. Suitable for columns, beams, slabs, and walls in both residential and commercial projects. Highly reusable — up to 200+ cycles.',
    pros: ['High rigidity & strength', '200+ reuse cycles', 'Superior surface finish', 'Ideal for any structure type'],
  },
  {
    name: 'PVC Shuttering',
    offered: true,
    icon: <Wrench className="w-7 h-7" />,
    description:
      'Lightweight and corrosion-resistant PVC panels are easy to handle, transport, and clean. Produces a smooth concrete surface that requires minimal plastering, reducing finishing cost and time. Highly cost-effective for repetitive slab and wall casting in residential projects.',
    pros: ['Lightweight & easy to handle', 'Corrosion-free', 'Smooth concrete output', 'Cost-effective for repetition'],
  },
  {
    name: 'Mivan (Aluminium) Shuttering',
    offered: false,
    icon: <ShieldCheck className="w-7 h-7" />,
    description:
      'An industrial-grade aluminium formwork system primarily used in large-scale high-rise and mass-housing projects for simultaneous casting of walls, slabs, and staircases. While Vriksha does not operate Mivan in-house, we support and co-ordinate Mivan-based projects with certified specialist partners.',
    pros: ['Simultaneous wall & slab casting', 'Very fast cycle times', 'Used in high-rises & mass housing'],
  },
];

export default function FormworkShutteringPage() {
  const service = servicesData.find(s => s.id === 'formwork-shuttering');
  const relatedProjects = projectsData.filter(p => p.categorySlug === 'residential');
  const { openModal } = useQuoteModal();

  return (
    <div className="bg-surface-warm">
      {/* 1. HERO */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-3">
              SERVICE DIVISION • 05
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy-deep font-normal leading-[1.1] tracking-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-muted font-light leading-relaxed">
              Precision formwork and shuttering systems that shape every column, beam, slab, and wall — ensuring dimensional accuracy, faster cycles, and a superior concrete finish on every project.
            </p>
          </div>

          <div className="mt-12 relative aspect-[21/9] sm:aspect-[16/7] overflow-hidden border border-surface-border shadow-lg bg-surface-neutral">
            <Image
              src="/images/service_formwork_shuttering.jpg"
              alt="MS Box and PVC Shuttering Construction"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 right-4 px-3.5 py-1.5 bg-navy-dark/85 backdrop-blur-md text-surface-white text-xs tracking-relaxed font-light border border-white/10">
              MS Box & PVC Shuttering • Hyderabad
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & DELIVERABLES */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                The Backbone of Every Concrete Structure
              </h2>
              <p className="mt-5 text-base text-ink-muted font-light leading-relaxed">
                {service.overview}
              </p>
              <div className="mt-8 pt-6 border-t border-surface-border">
                <div className="text-xs uppercase tracking-editorial text-blue-royal font-semibold mb-2">
                  TIMELINE
                </div>
                <div className="text-2xl font-serif text-navy-deep">{service.timeline}</div>
                <div className="text-xs text-ink-muted mt-1 font-light">Scales with project size and scope</div>
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
                        Executed with precision-engineered systems for consistent, high-quality concrete output.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHUTTERING TYPES COMPARISON */}
      <section className="py-20 lg:py-24 bg-blue-ice/30 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
              SHUTTERING SYSTEMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
              Types of Shuttering in the Market
            </h2>
            <p className="mt-3 text-sm text-ink-muted font-light">
              Understanding which shuttering system is right for your project. Vriksha specialises in MS Box and PVC shuttering — the most versatile and cost-effective systems for residential and commercial construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shutterings.map((s, idx) => (
              <div
                key={idx}
                className={`relative bg-surface-white border p-7 flex flex-col gap-4 ${
                  s.offered ? 'border-blue-royal shadow-md' : 'border-surface-border opacity-80'
                }`}
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded-full ${
                  s.offered
                    ? 'bg-blue-royal/10 text-blue-royal'
                    : 'bg-surface-neutral text-ink-muted'
                }`}>
                  {s.offered ? (
                    <><BadgeCheck className="w-3.5 h-3.5" /> We Offer</>
                  ) : (
                    <><XCircle className="w-3.5 h-3.5" /> Not In-House</>
                  )}
                </div>

                <div className={s.offered ? 'text-blue-royal' : 'text-ink-muted'}>
                  {s.icon}
                </div>

                <h3 className="text-xl font-serif text-navy-deep font-normal leading-tight">
                  {s.name}
                </h3>

                <p className="text-xs text-ink-muted font-light leading-relaxed">
                  {s.description}
                </p>

                <ul className="space-y-1.5 mt-auto pt-4 border-t border-surface-border">
                  {s.pros.map((pro, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-navy-deep font-light">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${s.offered ? 'text-blue-royal' : 'text-ink-muted'}`} />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
              OUR EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
              Shuttering System Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="border-l-2 border-blue-royal pl-6 py-2">
                <span className="text-[10px] font-semibold uppercase tracking-editorial text-blue-royal">
                  System 0{idx + 1}
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

      {/* 5. RELATED PROJECTS */}
      <section className="py-20 lg:py-24 bg-surface-neutral/40 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                SELECTED PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                Projects Featuring Our Shuttering
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
            {relatedProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        title={"Need Shuttering for Your Project?"}
        subtitle="Talk to our team about MS Box or PVC shuttering requirements — we handle design, supply, erection, and stripping for projects of all sizes."
        buttonText="Inquire for Formwork & Shuttering"
      />
    </div>
  );
}
