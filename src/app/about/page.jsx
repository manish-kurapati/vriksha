'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useQuoteModal } from '../../components/QuoteModalContext';
import StatsSection from '../../components/StatsSection';
import CTASection from '../../components/CTASection';
import ScrollReveal from '../../components/ScrollReveal';
import { siteConfig } from '../../data/siteData';
import { 
  ShieldCheck, 
  Compass, 
  Eye, 
  Clock, 
  Award, 
  ArrowRight, 
  ArrowUpRight,
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  Building2, 
  Home, 
  Palette, 
  Hammer,
  Users,
  Lightbulb,
  Phone
} from 'lucide-react';

export default function AboutPage() {
  const { openModal } = useQuoteModal();
  const [activeTab, setActiveTab] = useState('philosophy');
  const [openFaq, setOpenFaq] = useState(0);

  const pillars = [
    {
      id: 'structural',
      title: 'Structural Permanence',
      tagline: 'Built to stand strong for generations',
      icon: ShieldCheck,
      image: '/images/process_construction.jpg',
      desc: 'We engineer every foundation with zero-compromise structural calculations, high-grade M40 reinforced concrete, and advanced seismic safety parameters.',
      points: [
        'Seismic-engineered RCC framing with automated water curing',
        'Precision soil testing & deep foundation piling',
        'Anti-termite and monolithic multi-layer waterproofing',
        'Zero structural deviation tolerances with laser levelers'
      ]
    },
    {
      id: 'bioclimatic',
      title: 'Bioclimatic Light & Flow',
      tagline: 'Harmonizing nature with modern living',
      icon: Compass,
      image: '/images/hero_hillside_infinity_villa.jpg',
      desc: 'Our architectural blueprints leverage natural sun paths, prevailing cross-breezes, and calculated roof overhangs to reduce energy consumption and maximize natural illumination.',
      points: [
        'Solar path optimization for year-round thermal comfort',
        'Strategic cross-ventilation breeze corridors',
        'Double-glazed low-E acoustic fenestrations',
        'Seamless indoor-outdoor courtyard transitions'
      ]
    },
    {
      id: 'craftsmanship',
      title: 'Tactile Material Honesty',
      tagline: 'Timeless textures that age gracefully',
      icon: Award,
      image: '/images/materials_details.jpg',
      desc: 'We select authentic materials that celebrate natural character—honed Deccan limestone, architectural exposed concrete, rich fluted oak, and brushed metal accents.',
      points: [
        'Locally sourced natural stones & honed granites',
        'Hand-finished acoustic fluted oak and teak woodwork',
        'Zero-VOC eco-conscious paints and breathable sealants',
        'Custom concealed architectural shadow-line trims'
      ]
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'The Inception',
      desc: 'Founded in Hyderabad with a mission to bridge the gap between creative architectural design and disciplined civil construction execution.'
    },
    {
      year: '2021',
      title: 'Turnkey Commercial Expansion',
      desc: 'Successfully delivered landmark commercial headquarters in Hitec City, establishing our expertise in high-load steel framing and glass facades.'
    },
    {
      year: '2023',
      title: 'Bespoke Luxury Interiors',
      desc: 'Expanded into luxury interior design, offering end-to-end bespoke joinery, curated lighting schemes, and turnkey lifestyle spaces.'
    },
    {
      year: 'Today',
      title: '50+ Landmarks & Growing',
      desc: 'Over 240,000 sq. ft. of residential and commercial spaces completed with a 99.2% on-time handover rate across South India.'
    }
  ];

  const disciplines = [
    {
      title: 'Architectural Design',
      desc: 'Site-specific spatial masterplans, bioclimatic layouts, and 3D photorealistic visualization.',
      icon: Compass,
      stat: '50+ Blueprints'
    },
    {
      title: 'Civil & Structural Engineering',
      desc: 'High-tensile concrete, steel framework, seismic stabilization, and turnkey construction management.',
      icon: Building2,
      stat: '99.2% On-Time'
    },
    {
      title: 'Interior Architecture',
      desc: 'Bespoke cabinetry, tactile stone finishes, ambient lighting schemes, and luxury furniture curation.',
      icon: Palette,
      stat: '100% Custom'
    },
    {
      title: 'Renovation & Adaptive Reuse',
      desc: 'Structural reinforcements, modern spatial overhauls, and energy-efficient retrofits for existing villas.',
      icon: Hammer,
      stat: 'Zero Friction'
    }
  ];

  const faqs = [
    {
      q: 'How does Vriksha guarantee zero cost escalations?',
      a: 'We provide a 100% transparent, itemized Bill of Quantities (BOQ) with locked material specifications before ground is broken. Every cubic foot of concrete and tile grade is documented, ensuring you never face unexpected budget spikes.'
    },
    {
      q: 'Do you handle both construction and interior design under one contract?',
      a: 'Yes. That is our defining strength. By integrating civil construction and interior styling under a single unified studio, we eliminate contractor conflicts, reduce overall timeline by up to 25%, and guarantee flawless execution.'
    },
    {
      q: 'How do I monitor project progress if I live outside Hyderabad or abroad?',
      a: 'Clients receive a dedicated Project Director, weekly milestone photo/video logs, drone progress updates, and a transparent digital dashboard tracking stage-by-stage civil and interior progress in real-time.'
    },
    {
      q: 'What warranties and quality assurances are included?',
      a: 'We provide a comprehensive structural warranty along with post-handover maintenance checks to ensure complete peace of mind and long-lasting structural performance.'
    }
  ];

  return (
    <div className="bg-surface-white">
      {/* ============================================================ */}
      {/* 1. CINEMATIC HERO                                            */}
      {/* ============================================================ */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-surface-border overflow-hidden bg-gradient-to-b from-blue-ice/30 to-surface-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal animation="fade-up">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-editorial">
                  <Sparkles className="w-3.5 h-3.5" />
                  About Vriksha Studio
                </span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy-deep font-normal leading-[1.12] tracking-tight mt-4">
                  We don&apos;t just construct buildings. We shape how life unfolds within them.
                </h1>

                <p className="text-base sm:text-lg text-ink-muted font-light leading-relaxed pt-2">
                  At Vriksha, we unite visionary architectural design, disciplined civil engineering, and bespoke interior aesthetics into one seamless, stress-free experience for families and businesses.
                </p>

                {/* Quick Trust Badges */}
                <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-navy-deep font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Fixed-Price BOQ Contracts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>Single-Point Turnkey Handover</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>99.2% On-Time Delivery</span>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => openModal()}
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-orange text-white text-xs uppercase tracking-editorial font-semibold rounded-full shadow-lg hover:bg-[#c45a1b] active:scale-95 transition-all"
                  >
                    <span>Request Studio Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface-neutral hover:bg-blue-ice text-navy-deep text-xs uppercase tracking-editorial font-semibold rounded-full border border-surface-border transition-all"
                  >
                    <span>Explore Our Work</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual Composition */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal animation="fade-up" duration={700}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-surface-border aspect-[4/5] bg-surface-neutral">
                  <Image
                    src="/images/about_architecture_studio.jpg"
                    alt="Vriksha Architecture & Interior Design Studio"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
                  
                  {/* Floating Quote Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-5 bg-surface-white/95 backdrop-blur-md rounded-2xl border border-surface-border shadow-xl">
                    <p className="text-xs sm:text-sm font-serif italic text-navy-deep leading-snug">
                      &ldquo;In construction, we don&apos;t just work with concrete and steel, but with hope and dreams.&rdquo;
                    </p>
                    <span className="text-[11px] font-semibold text-brand-orange block mt-2 uppercase tracking-editorial">
                      — The Vriksha Creed
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. LIVE NUMBERS & CREDIBILITY                                */}
      {/* ============================================================ */}
      <StatsSection borderTop={false} borderBottom={true} />

      {/* ============================================================ */}
      {/* 3. THE 3 PILLARS OF OUR CRAFT (INTERACTIVE PHILOSOPHY)       */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-[#F9FBFC] border-b border-surface-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-semibold tracking-editorial text-ink-muted uppercase block mb-2">
                OUR CORE DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-tight">
                The Anatomy of a Vriksha Project
              </h2>
              <p className="mt-4 text-sm sm:text-base text-ink-muted font-light leading-relaxed">
                Every landmark we build is anchored on three non-negotiable fundamentals of architectural permanence and spatial harmony.
              </p>
            </div>
          </ScrollReveal>

          {/* 3 Interactive Pillar Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-surface-white rounded-3xl border border-surface-border/80 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface-neutral">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-surface-white/90 backdrop-blur-md flex items-center justify-center text-navy-deep shadow-md">
                      <Icon className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-navy-deep/80 backdrop-blur-md rounded-full text-white text-[10px] font-semibold tracking-widest uppercase">
                      Pillar 0{idx + 1}
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-serif text-navy-deep font-semibold">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-brand-orange font-medium mt-1">
                        {pillar.tagline}
                      </p>
                      <p className="mt-4 text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                        {pillar.desc}
                      </p>

                      <div className="mt-6 pt-6 border-t border-surface-border/60 space-y-2.5">
                        {pillar.points.map((pt, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-ink-main font-light leading-snug">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. INTEGRATED DISCIPLINES                                    */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="fade-up">
                <span className="text-[11px] font-semibold tracking-editorial text-ink-muted uppercase block mb-2">
                  OUR CAPABILITIES
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-tight">
                  One Unified Studio.<br />
                  Zero Disconnects.
                </h2>
                <p className="mt-5 text-sm sm:text-base text-ink-muted font-light leading-relaxed">
                  Traditional construction involves hiring separate architects, civil contractors, and interior teams—often leading to blame-games and cost escalations.
                </p>
                <p className="mt-3 text-sm sm:text-base text-ink-muted font-light leading-relaxed">
                  At Vriksha, our multidisciplinary team handles the complete lifecycle from architectural drawings to final key handover under one accountable roof.
                </p>

                <div className="mt-8 p-6 bg-blue-ice rounded-2xl border border-surface-border">
                  <h4 className="text-xs uppercase tracking-editorial text-navy-deep font-semibold mb-2">
                    Direct Client Assurance
                  </h4>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Every project is managed directly by a Senior Civil Project Director who oversees day-to-day site execution, material quality inspections, and milestone handovers.
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Discipline Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {disciplines.map((d, idx) => {
                const Icon = d.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 rounded-2xl bg-surface-neutral/50 border border-surface-border/80 hover:border-brand-orange/40 hover:bg-surface-white transition-all shadow-2xs group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-surface-white border border-surface-border shadow-xs flex items-center justify-center text-navy-deep group-hover:text-brand-orange group-hover:bg-brand-orange/10 transition-colors mb-5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-semibold text-navy-deep mb-2">
                      {d.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed mb-4">
                      {d.desc}
                    </p>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-ice text-navy-deep text-[11px] font-semibold">
                      {d.stat}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. EVOLUTION TIMELINE                                        */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-[#0B2545] text-surface-white border-b border-navy-deep/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[11px] font-semibold tracking-editorial text-brand-orange uppercase block mb-2">
                OUR EVOLUTION
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight">
                Our Journey of Growth
              </h2>
              <p className="mt-4 text-sm sm:text-base text-blue-veryLight/80 font-light leading-relaxed">
                From our foundational residential projects in Hyderabad to landmark campuses across South India.
              </p>
            </div>
          </ScrollReveal>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-orange/60 transition-all backdrop-blur-sm relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-serif text-brand-orange font-semibold mb-2">
                    {m.year}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-veryLight/80 font-light leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 text-[10px] uppercase tracking-widest text-blue-veryLight/60">
                  Milestone 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. INTERACTIVE FAQ ACCORDION                                 */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-surface-white border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-[11px] font-semibold tracking-editorial text-ink-muted uppercase block mb-2">
                TRANSPARENCY FIRST
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-ink-muted font-light">
                Everything you need to know about partnering with Vriksha for your construction or interior project.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-surface-border overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 bg-surface-white hover:bg-surface-neutral/40 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-navy-deep">
                      {faq.q}
                    </span>
                    <div className={`w-7 h-7 rounded-full border border-surface-border flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-navy-deep text-white border-navy-deep' : 'text-navy-deep'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-ink-muted font-light leading-relaxed border-t border-surface-border/50 bg-[#FBFDFF]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CTA BANNER                                                */}
      {/* ============================================================ */}
      <CTASection
        title={"Ready to Build Something Extraordinary?"}
        subtitle="Schedule a consultation with our principal architects and project engineers to bring your vision to life."
        buttonText="Get a Consultation & Quote"
      />
    </div>
  );
}
