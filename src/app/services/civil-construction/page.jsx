'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { servicesData, projectsData } from '../../../data/siteData';
import { useQuoteModal } from '../../../components/QuoteModalContext';
import ProjectCard from '../../../components/ProjectCard';
import CTASection from '../../../components/CTASection';
import ScrollReveal from '../../../components/ScrollReveal';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  HardHat, 
  Building2, 
  ShieldCheck, 
  Ruler, 
  Box, 
  Sparkles, 
  Layers, 
  Leaf, 
  Factory, 
  Home, 
  Scale,
  Award,
  ChevronRight
} from 'lucide-react';

const constructionTypes = [
  {
    id: 'rcc-framed',
    name: 'RCC Framed Structure Construction',
    badge: 'Most Popular • High Durability',
    category: 'STRUCTURAL CONCRETE',
    icon: Building2,
    image: '/images/service_formwork_shuttering.jpg',
    summary: 'The benchmark construction method for luxury villas, apartments, and commercial complexes, engineered through an interconnected skeletal frame of reinforced concrete columns, beams, and slabs.',
    description: 'In RCC Framed construction, structural loads are transferred seamlessly through reinforced concrete columns and beams down to deep foundations, completely freeing internal walls from load-bearing duties. At Vriksha, we execute all RCC framing using our owned heavy-gauge steel systems with high-tensile tie-rods—ensuring zero column bulging, millimeter vertical plumbness, and verified M25 to M40 concrete design strength.',
    highlights: [
      'Engineered with Fe 550D high-tensile TMT rebar & laboratory-tested concrete',
      'Heavy-gauge in-house steel framing guaranteeing true 90° corners & plumb alignment',
      'Total freedom for flexible open-plan layouts and expansive floor-to-ceiling fenestration',
      'High seismic & lateral wind load resistance designed for 50+ year longevity'
    ],
    idealFor: 'Bespoke Luxury Villas, Independent Residences, Multi-Storey Commercial Hubs',
    finishType: 'Structural Fair-Faced Concrete',
    timelineRating: 'Standard (8–14 Months)'
  },
  {
    id: 'monolithic-concrete',
    name: 'Monolithic Concrete Construction',
    badge: 'Seamless & Plasterless',
    category: 'ADVANCED CASTING',
    icon: Box,
    image: '/images/service_pvc_shuttering.jpg',
    summary: 'Advanced unified structural casting where walls, columns, and slabs are cast simultaneously into a single, continuous reinforced concrete envelope.',
    description: 'Monolithic construction eliminates conventional masonry joints, creating an impermeable, joint-free structural shell with exceptional shear strength and crack resistance. Utilizing high-density composite polymer panels, we achieve mirror-smooth fair-faced concrete surfaces that eliminate thick sand-cement plaster coats, dramatically reducing dead load and finishing time.',
    highlights: [
      'Jointless monolithic structural shell with zero risk of moisture seepage pathways',
      'Mirror-smooth plasterless surface finish ready for direct primer and microcement',
      'Superior structural stiffness with uniform load dissipation during seismic events',
      'Faster casting cycle times with lightweight, water-resistant panel technology'
    ],
    idealFor: 'Minimalist Contemporary Villas, Architectural Fair-Faced Walls, Multi-Storey Residential Towers',
    finishType: 'Mirror-Smooth Plasterless',
    timelineRating: 'Fast-Track (6–10 Months)'
  },
  {
    id: 'steel-frame-peb',
    name: 'Structural Steel & PEB Construction',
    badge: 'Clear-Span & Fast-Track',
    category: 'STEEL & COMPOSITE',
    icon: Factory,
    image: '/images/service_commercial_facade.jpg',
    summary: 'High-tensile structural steel framing with composite concrete deck slabs, engineered for expansive column-free spans and rapid on-site assembly.',
    description: 'Combining heavy structural steel I-beams, hollow structural sections, and profiled steel decking with high-strength concrete topping. This modern method allows massive column-free interior spans up to 25+ meters, substantially reducing the building’s dead weight and cutting overall construction duration by up to 40% compared to traditional masonry.',
    highlights: [
      'Expansive column-free open interior layouts ideal for modern living and corporate spaces',
      'Up to 40% faster on-site assembly with pre-fabricated precision steel members',
      'High strength-to-weight ratio reducing foundation dimensions and excavation volume',
      'Protected with zinc-chromate primers and fire-retardant intumescent coatings'
    ],
    idealFor: 'Commercial Complexes, Corporate HQs, Rooftop Extensions, Modern Glass Pavilions',
    finishType: 'High-Tolerance Architectural Steel',
    timelineRating: 'Rapid (4–8 Months)'
  },
  {
    id: 'load-bearing-masonry',
    name: 'Load-Bearing & Thermal Masonry Construction',
    badge: 'Thermal Comfort • Traditional',
    category: 'MASONRY & STONE',
    icon: Home,
    image: '/images/service_residential.jpg',
    summary: 'Time-tested structural construction where thick masonry walls directly support roof and floor slabs, offering superior acoustic privacy and natural climate regulation.',
    description: 'A classic, durable construction methodology utilizing high-density wire-cut kiln bricks, engineered solid concrete blocks, or natural dressed stone. Reinforced with cast-in-place concrete plinth beams and lintel bands, load-bearing construction provides high thermal inertia—naturally keeping interiors cool in summer and warm in winter while lowering material overheads.',
    highlights: [
      'Thick masonry mass delivering natural acoustic insulation and thermal temperature damping',
      'Reinforced continuous lintel tie-bands ensuring structural stability and crack resistance',
      'Cost-effective construction methodology suited for low-rise bespoke architecture',
      'Authentic aesthetic options for exposed brick, wire-cut masonry, or stone cladding'
    ],
    idealFor: 'Farmhouses, G+1 Independent Homes, Weekend Retreats, Heritage-Inspired Villas',
    finishType: 'Exposed Brick / Natural Sand Plaster',
    timelineRating: 'Economical (6–10 Months)'
  },
  {
    id: 'sustainable-green',
    name: 'Sustainable & Green Civil Construction',
    badge: 'Eco-Friendly • Energy Saving',
    category: 'GREEN ENGINEERING',
    icon: Leaf,
    image: '/images/process_construction.jpg',
    summary: 'Climate-responsive civil engineering utilizing lightweight AAC blocks, low-carbon cements, passive cooling orientations, and integrated water conservation sumps.',
    description: 'Engineered specifically for ecologically conscious clients who value reduced lifecycle energy costs and low environmental footprint. We utilize Autoclaved Aerated Concrete (AAC) blocks that provide 3x superior thermal insulation over traditional red bricks, solar-ready reinforced roof slabs, and subterranean rainwater harvesting sumps integrated directly into the structural substructure.',
    highlights: [
      'High thermal resistance AAC blocks reducing interior air-conditioning load by up to 25%',
      'Eco-certified fly-ash blended cements with automated low-water curing protocols',
      'Integrated underground rainwater harvesting sumps and percolation recharging pits',
      'Optimized passive shading angles and solar-panel-ready structural roof framing'
    ],
    idealFor: 'Green-Rated Luxury Villas, Sustainable Communities, Net-Zero Energy Homes',
    finishType: 'Breathable Eco-Lime Plaster',
    timelineRating: 'Standard (8–12 Months)'
  }
];

const civilExecutionStandards = [
  {
    title: 'In-House Precision Steel Systems',
    subtitle: 'Zero Bulging & True 90° Plumb',
    description: 'We use 100% owned heavy-gauge MS box sections with high-tensile tie-rods for columns and plinth beams, preventing slurry leakage and ensuring millimeter-level plumbness.',
    icon: Box
  },
  {
    title: 'Mirror-Smooth Polymer Paneling',
    subtitle: 'Plasterless Surface Quality',
    description: 'Composite polymer panels for ceilings and fair-faced slabs eliminate water absorption from the concrete mix, creating dense, glass-smooth surfaces that reduce plastering costs.',
    icon: Sparkles
  },
  {
    title: 'Laser-Guided Survey & Total Stations',
    subtitle: 'Sub-Millimeter Grid Accuracy',
    description: 'Digital total stations and laser levels establish column centerlines within ±1.5mm tolerance, allowing seamless glass, stone, and joinery fit-outs downstream.',
    icon: Ruler
  },
  {
    title: 'Certified Concrete Cube Testing',
    subtitle: 'M25 to M40 Lab Verification',
    description: 'Standard concrete test cubes are cast on site for every pour and tested at 7 and 28 days in accredited laboratories to verify compressive strength before de-shuttering.',
    icon: Award
  }
];

export default function CivilConstructionPage() {
  const service = servicesData.find(s => s.id === 'civil-construction') || servicesData[0];
  const relatedProjects = projectsData.slice(0, 2);
  const { openModal } = useQuoteModal();
  const [selectedType, setSelectedType] = useState('rcc-framed');

  const activeConstruction = constructionTypes.find(t => t.id === selectedType) || constructionTypes[0];
  const ActiveIcon = activeConstruction.icon;

  return (
    <div className="bg-surface-white">
      {/* 1. HERO */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-surface-border bg-surface-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-editorial text-brand-orange uppercase block mb-3">
              SERVICE DIVISION • CIVIL ENGINEERING &amp; CONSTRUCTION
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy-deep font-normal leading-[1.1] tracking-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-muted font-light leading-relaxed">
              Engineering enduring structures with precision RCC framing, robust seismic foundations, and advanced execution methodologies built to last generations.
            </p>
          </div>

          <div className="mt-12 relative aspect-[21/9] sm:aspect-[16/7] overflow-hidden rounded-2xl border border-surface-border shadow-xl bg-surface-neutral">
            <Image
              src="/images/service_formwork_shuttering.jpg"
              alt="Civil Construction by Vriksha"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 px-4 py-2 bg-surface-white/95 backdrop-blur-md rounded-lg text-navy-deep text-xs sm:text-sm font-semibold shadow-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>In-House Civil Execution • Hyderabad &amp; Telangana</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & DELIVERABLES */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-semibold tracking-editorial text-brand-orange uppercase block mb-2">
                OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                The Foundation of Every Great Structure
              </h2>
              <p className="mt-5 text-base text-ink-muted font-light leading-relaxed">
                {service.overview}
              </p>
              
              <div className="mt-8 pt-6 border-t border-surface-border grid grid-cols-2 gap-6">
                <div>
                  <div className="text-xs uppercase tracking-editorial text-brand-orange font-semibold mb-1">
                    EXECUTION TIMELINE
                  </div>
                  <div className="text-2xl font-serif text-navy-deep">{service.timeline}</div>
                  <div className="text-xs text-ink-muted mt-0.5 font-light">From excavation to handover</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-editorial text-brand-orange font-semibold mb-1">
                    WARRANTY
                  </div>
                  <div className="text-2xl font-serif text-navy-deep">10 Years</div>
                  <div className="text-xs text-ink-muted mt-0.5 font-light">Insured structural coverage</div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => openModal('Civil Construction')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-orange text-white hover:bg-brand-orangeHover text-xs font-semibold rounded-full transition-all shadow-md active:scale-95"
                >
                  <span>Get Civil Estimate &amp; Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface-warm p-8 sm:p-10 rounded-2xl border border-surface-border">
              <h3 className="text-xl font-serif text-navy-deep font-normal mb-6">
                What We Deliver
              </h3>
              <div className="space-y-4">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-navy-deep">{item}</span>
                      <p className="text-xs text-ink-muted mt-0.5 font-light">
                        Supervised on-site by dedicated civil engineers with rigorous stage-wise quality certifications.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. TYPES OF CONSTRUCTIONS                                     */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-surface-neutral/40 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl mb-12">
              <span className="text-[11px] font-semibold tracking-editorial text-brand-orange uppercase block mb-2">
                STRUCTURAL ENGINEERING DISCIPLINES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-tight">
                Types of Constructions
              </h2>
              <p className="mt-4 text-sm sm:text-base text-ink-muted font-light leading-relaxed">
                Every project has unique architectural parameters, soil characteristics, and structural requirements. Explore the primary types of constructions we engineer and execute with in-house equipment and rigorous quality standards.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Navigation Tabs for Construction Types */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {constructionTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shadow-xs ${
                    isSelected
                      ? 'bg-navy-deep text-surface-white shadow-md'
                      : 'bg-surface-white text-navy-deep border border-surface-border hover:border-brand-orange/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-brand-orange' : 'text-ink-muted'}`} />
                  <span>{type.name}</span>
                </button>
              );
            })}
          </div>

          {/* Featured Active Construction Type Card */}
          <div className="bg-surface-white border border-surface-border rounded-2xl overflow-hidden shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Details Column (7 cols) */}
              <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-[10px] font-semibold tracking-editorial uppercase">
                      {activeConstruction.category}
                    </span>
                    <span className="px-3 py-1 bg-navy-deep/5 text-navy-deep rounded-full text-[10px] font-semibold tracking-editorial uppercase">
                      {activeConstruction.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif text-navy-deep font-normal leading-snug">
                    {activeConstruction.name}
                  </h3>

                  <p className="mt-4 text-sm text-ink-muted font-light leading-relaxed">
                    {activeConstruction.description}
                  </p>

                  {/* Highlights List */}
                  <div className="mt-8 pt-6 border-t border-surface-border/70 space-y-3">
                    <h4 className="text-xs uppercase tracking-editorial text-brand-orange font-semibold">
                      Key Engineering Advantages:
                    </h4>
                    {activeConstruction.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-navy-deep/90 font-light leading-relaxed">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Meta Pill & CTA */}
                <div className="mt-8 pt-6 border-t border-surface-border/70 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div>
                    <span className="text-[10px] text-ink-muted uppercase tracking-editorial block">
                      Recommended Applications
                    </span>
                    <span className="text-xs font-semibold text-navy-deep block mt-0.5">
                      {activeConstruction.idealFor}
                    </span>
                  </div>
                  <div className="sm:text-right">
                    <button
                      onClick={() => openModal(`Civil - ${activeConstruction.name}`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-deep hover:bg-brand-orange text-surface-white text-xs font-semibold rounded-full transition-colors shadow-sm"
                    >
                      <span>Consult on This Type</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Visual Image Column (5 cols) */}
              <div className="lg:col-span-5 relative aspect-[16/10] lg:aspect-auto min-h-[300px] lg:min-h-[460px] bg-surface-neutral">
                <Image
                  src={activeConstruction.image}
                  alt={activeConstruction.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent lg:hidden" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-surface-white/95 backdrop-blur-md rounded-xl border border-surface-border shadow-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-ink-muted">Finish Standard:</span>
                    <span className="font-semibold text-navy-deep">{activeConstruction.finishType}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs mt-1.5 pt-1.5 border-t border-surface-border/60">
                    <span className="text-ink-muted">Typical Cycle:</span>
                    <span className="font-semibold text-brand-orange">{activeConstruction.timelineRating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Grid View of All 5 Construction Types */}
          <div className="mt-14">
            <h4 className="text-xs uppercase tracking-editorial text-ink-muted font-semibold mb-6">
              Browse All Construction Methodologies:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {constructionTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedType === type.id;
                return (
                  <div
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-5 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-surface-white border-brand-orange shadow-md ring-1 ring-brand-orange'
                        : 'bg-surface-white border-surface-border/80 hover:border-brand-orange/40 hover:shadow-xs'
                    }`}
                  >
                    <div>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                        isSelected ? 'bg-brand-orange text-white' : 'bg-surface-neutral text-navy-deep'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h5 className="text-sm font-semibold text-navy-deep leading-snug">
                        {type.name}
                      </h5>
                      <p className="text-xs text-ink-muted mt-2 font-light line-clamp-3">
                        {type.summary}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-surface-border/60 flex items-center justify-between text-[11px] font-semibold text-brand-orange">
                      <span>{isSelected ? 'Currently Viewing' : 'View Specs'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. OUR IN-HOUSE CIVIL EXECUTION STANDARDS                    */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] font-semibold tracking-editorial text-brand-orange uppercase block mb-2">
              EXECUTION RIGOR
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
              In-House Equipment &amp; Engineering Quality
            </h2>
            <p className="mt-3 text-sm text-ink-muted font-light leading-relaxed">
              We do not outsource our primary civil execution. By deploying 100% owned heavy steel shuttering inventory, digital total stations, and strict testing protocols, we guarantee structural precision without contractor delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {civilExecutionStandards.map((std, idx) => {
              const Icon = std.icon;
              return (
                <div
                  key={idx}
                  className="bg-surface-warm border border-surface-border/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-surface-white border border-surface-border shadow-xs flex items-center justify-center text-brand-orange mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-editorial text-brand-orange block mb-1">
                      {std.subtitle}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif text-navy-deep font-normal mb-2.5">
                      {std.title}
                    </h3>
                    <p className="text-xs text-ink-muted font-light leading-relaxed">
                      {std.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center gap-1.5 text-[11px] font-semibold text-navy-deep">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Quality Inspected</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. COMPARATIVE SPECIFICATIONS TABLE                         */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-surface-neutral/30 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-[11px] font-semibold tracking-editorial text-brand-orange uppercase block mb-2">
              TECHNICAL COMPARISON
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
              Selecting the Right Construction Type
            </h2>
            <p className="mt-3 text-sm text-ink-muted font-light">
              A side-by-side comparison to help you understand which civil methodology suits your site, architectural vision, and investment goals.
            </p>
          </div>

          <div className="overflow-x-auto border border-surface-border rounded-2xl bg-surface-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-surface-neutral/80 border-b border-surface-border text-xs uppercase tracking-editorial text-brand-orange">
                  <th className="p-4 sm:p-5 font-semibold">Construction Type</th>
                  <th className="p-4 sm:p-5 font-semibold">Primary Materials</th>
                  <th className="p-4 sm:p-5 font-semibold">Seismic &amp; Durability</th>
                  <th className="p-4 sm:p-5 font-semibold">Best Suited For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-border text-xs sm:text-sm text-ink-muted font-light">
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-navy-deep">RCC Framed Structure</td>
                  <td className="p-4 sm:p-5">Fe 550D TMT, M25–M40 Concrete, Precision Steel Forms</td>
                  <td className="p-4 sm:p-5 text-navy-deep font-medium">Zone II/III Compliant • 50+ Years</td>
                  <td className="p-4 sm:p-5">Luxury villas, multi-storey duplexes, offices</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-navy-deep">Monolithic Concrete</td>
                  <td className="p-4 sm:p-5">Reinforced Concrete, Composite Polymer Panels</td>
                  <td className="p-4 sm:p-5 text-navy-deep font-medium">Ultra-High Shear Resistance • 60+ Years</td>
                  <td className="p-4 sm:p-5">Architectural homes, plasterless walls, high-rises</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-navy-deep">Steel Frame &amp; PEB</td>
                  <td className="p-4 sm:p-5">Structural Steel I-Beams, Decking Sheet, Concrete</td>
                  <td className="p-4 sm:p-5 text-navy-deep font-medium">Ductile &amp; Earthquake Resilient • 40+ Years</td>
                  <td className="p-4 sm:p-5">Commercial pavilions, rooftop villas, clear-spans</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-navy-deep">Load-Bearing Masonry</td>
                  <td className="p-4 sm:p-5">Wire-Cut Kiln Bricks, Reinforced Lintel Bands</td>
                  <td className="p-4 sm:p-5 text-navy-deep font-medium">Solid Ground Stability • 40+ Years</td>
                  <td className="p-4 sm:p-5">Farmhouses, single-family cottages, retreats</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-semibold text-navy-deep">Sustainable &amp; Green Civil</td>
                  <td className="p-4 sm:p-5">AAC Blocks, Fly-Ash Cement, Rainwater Aquifers</td>
                  <td className="p-4 sm:p-5 text-navy-deep font-medium">Thermal Efficient &amp; Non-Degrading</td>
                  <td className="p-4 sm:p-5">Eco-villas, low-energy homes, green campuses</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. RELATED PROJECTS                                          */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold tracking-editorial text-brand-orange uppercase block mb-2">
                PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                Projects Featuring Our Civil Works
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial text-navy-deep font-semibold hover:text-brand-orange transition-colors"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CTA BANNER                                                */}
      {/* ============================================================ */}
      <CTASection
        title={"Ready to Build on Solid Foundations?"}
        subtitle="Speak with our chief structural engineers for soil feasibility assessments, structural framing consults, and transparent BOQ estimations."
        buttonText="Book a Civil Engineering Consultation"
      />
    </div>
  );
}
