'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useQuoteModal } from '../components/QuoteModalContext';
import ProjectCard from '../components/ProjectCard';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import ScrollReveal from '../components/ScrollReveal';
import BrandsSection from '../components/BrandsSection';
import { 
  projectsData, 
  servicesData, 
  processPhases, 
  testimonialsData 
} from '../data/siteData';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Compass, 
  Users, 
  ShieldCheck,
  Quote,
  Clock
} from 'lucide-react';

const heroSlides = [
  {
    image: '/images/hero_modern_villa.jpg',
    title: 'The Modern Villa • Jubilee Hills',
  },
  {
    image: '/images/hero_hillside_infinity_villa.jpg',
    title: 'The Hillside Infinity Villa • Jubilee Hills',
  },
  {
    image: '/images/project_contemporary_residence.jpg',
    title: 'The Courtyard Villa • Banjara Hills',
  }
];

export default function HomePage() {
  const { openModal } = useQuoteModal();
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0); // slide 1: 01/03
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Auto-rotate hero images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-surface-white">
      {/* ============================================================ */}
      {/* 1. FULL SCREEN HERO BANNER WITH AUTO-ROTATING IMAGES        */}
      {/* ============================================================ */}
      <section className="relative w-full min-h-[calc(100svh-60px)] sm:min-h-[calc(100svh-76px)] lg:min-h-[calc(100vh-76px)] overflow-hidden flex items-center border-b border-surface-border bg-navy-dark">
        {/* Full-Screen Background Images with Smooth Crossfade */}
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.image}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentHeroSlide ? 'opacity-100 z-[1]' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          ))}
          {/* Deep Left Gradient Overlay so Left Text Pops with Ultra Clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#081824]/95 via-[#0C2436]/75 to-transparent sm:via-[#0C2436]/55 z-[2] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#081824]/80 via-transparent to-[#081824]/30 z-[2] pointer-events-none" />
        </div>

        {/* Content Container (Left Overlay) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10 sm:py-12 lg:py-14 flex flex-col justify-between min-h-[calc(100svh-60px)] sm:min-h-[calc(100svh-76px)] lg:min-h-[calc(100vh-76px)]">
          {/* Main Headline & Actions */}
          <div className="max-w-xl text-left my-auto pt-4 sm:pt-6">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange text-surface-white text-[10px] sm:text-[11px] font-semibold tracking-editorial uppercase rounded-full mb-4 sm:mb-6 shadow-sm">
              CONSTRUCTION • ARCHITECTURE • INTERIORS
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl font-serif text-surface-white font-normal leading-[1.08] tracking-tight drop-shadow-md">
              Spaces<br />
              That Feel<br />
              Like Home
            </h1>

            {/* Subtitle */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-blue-veryLight/90 font-light leading-relaxed max-w-lg drop-shadow-xs">
              Thoughtful construction and interior design solutions that blend aesthetics, functionality, and lasting quality. We also specialize in green, sustainable construction engineered for eco-friendly, energy-efficient living.
            </p>

            {/* Action Buttons */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-orange text-white hover:bg-brand-orangeHover text-xs font-semibold rounded-full transition-all shadow-xl active:scale-95"
              >
                <span>Get a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2.5 px-4 py-3 text-xs font-semibold text-surface-white hover:text-blue-soft transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-surface-white shadow-sm">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Our Work</span>
              </Link>
            </div>
          </div>

          {/* Integrated Stats Bar at Bottom Left */}
          <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 pb-4 sm:pb-6 border-t border-white/20 grid grid-cols-3 gap-3 sm:gap-6 text-left max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-serif text-surface-white font-normal drop-shadow-sm">50+</div>
              <div className="text-[11px] text-blue-veryLight/80 mt-0.5 font-light">Projects Completed</div>
            </div>
            <div className="border-l border-white/20 pl-3 sm:pl-5">
              <div className="text-2xl sm:text-3xl font-serif text-surface-white font-normal drop-shadow-sm">100+</div>
              <div className="text-[11px] text-blue-veryLight/80 mt-0.5 font-light">Happy Clients</div>
            </div>
            <div className="border-l border-white/20 pl-3 sm:pl-5">
              <div className="text-2xl sm:text-3xl font-serif text-surface-white font-normal drop-shadow-sm">5+</div>
              <div className="text-[11px] text-blue-veryLight/80 mt-0.5 font-light">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. ABOUT VRIKSHA                                             */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Text (6 cols) */}
            <div className="lg:col-span-6">
              <ScrollReveal animation="fade-up" duration={700}>
                <span className="text-[11px] font-semibold tracking-editorial text-ink-muted uppercase block mb-3">
                  ABOUT VRIKSHA
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-[1.15] tracking-tight">
                  Designing Spaces<br />
                  for a Better Tomorrow
                </h2>
                <p className="mt-5 text-sm sm:text-base text-ink-muted font-light leading-relaxed">
                  At Vriksha, we create spaces that inspire, with a perfect balance of aesthetics, functionality and long-lasting quality. From homes to offices, we bring your vision to life with thoughtful design and expert execution.
                </p>

                <div className="mt-8">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-surface-white border border-surface-border hover:bg-surface-neutral text-navy-deep text-xs font-semibold rounded-full transition-all shadow-xs"
                  >
                    <span>Know More about Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* 3 Icons Features Row */}
                <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-surface-border grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-surface-border flex items-center justify-center text-navy-deep shrink-0">
                      <Compass className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-navy-deep">
                      Quality Craftsmanship
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-surface-border flex items-center justify-center text-navy-deep shrink-0">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-navy-deep">
                      Client-Centric Approach
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-surface-border flex items-center justify-center text-navy-deep shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-navy-deep">
                      End-to-End Solutions
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Image (6 cols) */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal animation="zoom-in" duration={800}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl bg-surface-neutral">
                  <Image
                    src="/images/service_interior_design.jpg"
                    alt="Warm Living Room Interior by Vriksha"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 right-4 p-4 bg-surface-white/95 backdrop-blur-md rounded-xl border border-surface-border shadow-lg max-w-[240px]">
                    <p className="text-xs text-navy-deep font-medium leading-snug">
                      Spaces designed for people, not just structures.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. FEATURED PROJECTS                                         */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-surface-white border-b border-surface-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
              <div>
                <span className="text-[11px] font-semibold tracking-editorial text-ink-muted uppercase block mb-2">
                  SELECTED PROJECTS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-tight">
                  Featured Projects
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end gap-6 max-w-lg">
                <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                  Every project tells a story. Explore a few of our recent spaces crafted with care, precision and a deep understanding of modern living.
                </p>
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-deep hover:text-blue-royal whitespace-nowrap transition-colors"
                  >
                    <span>View All Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* Mobile Sideways Arrow Buttons */}
                  <div className="flex md:hidden items-center gap-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('projects-slider');
                        if (el) el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
                      }}
                      className="w-8 h-8 rounded-full border border-surface-border bg-surface-white flex items-center justify-center text-navy-deep shadow-xs active:scale-95 transition-all"
                      aria-label="Previous project"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        const el = document.getElementById('projects-slider');
                        if (el) el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
                      }}
                      className="w-8 h-8 rounded-full border border-surface-border bg-surface-white flex items-center justify-center text-navy-deep shadow-xs active:scale-95 transition-all"
                      aria-label="Next project"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile Sideways 1-Card Snap Scroll / Tablet & Desktop Grid */}
          <div
            id="projects-slider"
            className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar touch-pan-x w-full"
          >
            {projectsData.slice(0, 3).map((project, idx) => (
              <div key={project.id} className="w-full min-w-full md:min-w-0 md:w-full shrink-0 md:shrink snap-center">
                <ScrollReveal animation="fade-up" delay={idx * 120} duration={600}>
                  <ProjectCard project={project} priority={idx === 0} />
                </ScrollReveal>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Dot Indicators */}
          <div className="flex md:hidden justify-center items-center gap-1.5 mt-4">
            {projectsData.slice(0, 3).map((p, i) => (
              <span key={p.id} className="w-2 h-2 rounded-full bg-navy-deep/20 transition-all" />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. OUR SERVICES                                              */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-surface-warm border-b border-surface-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
              <div>
                <span className="text-[11px] font-semibold tracking-editorial text-ink-muted uppercase block mb-2">
                  OUR SERVICES
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-tight">
                  Complete Solutions<br />
                  Under One Roof
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-end gap-6 max-w-lg">
                <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                  From concept to completion, we offer end-to-end construction and interior design solutions tailored to your lifestyle and business needs.
                </p>
                <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-deep hover:text-blue-royal whitespace-nowrap transition-colors"
                  >
                    <span>View All Services</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* Mobile Sideways Arrow Buttons */}
                  <div className="flex sm:hidden items-center gap-2">
                    <button
                      onClick={() => {
                        const el = document.getElementById('services-slider');
                        if (el) el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
                      }}
                      className="w-8 h-8 rounded-full border border-surface-border bg-surface-white flex items-center justify-center text-navy-deep shadow-xs active:scale-95 transition-all"
                      aria-label="Previous service"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        const el = document.getElementById('services-slider');
                        if (el) el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
                      }}
                      className="w-8 h-8 rounded-full border border-surface-border bg-surface-white flex items-center justify-center text-navy-deep shadow-xs active:scale-95 transition-all"
                      aria-label="Next service"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile Sideways 1-Card Snap Scroll / Desktop Grid */}
          <div
            id="services-slider"
            className="flex md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar touch-pan-x w-full"
          >
            {servicesData.map((service, index) => (
              <div key={service.id} className="w-full min-w-full md:min-w-0 md:w-full shrink-0 md:shrink snap-center">
                <ScrollReveal animation="fade-up" delay={index * 100} duration={600}>
                  <ServiceCard service={service} index={index} />
                </ScrollReveal>
              </div>
            ))}
          </div>

          {/* Mobile Swipe Dot Indicators */}
          <div className="flex md:hidden justify-center items-center gap-1.5 mt-4">
            {servicesData.map((s) => (
              <span key={s.id} className="w-2 h-2 rounded-full bg-navy-deep/20 transition-all" />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. MATERIALS & SOURCING — BRANDS                             */}
      {/* ============================================================ */}
      <BrandsSection />

      {/* ============================================================ */}
      {/* 6. CLIENT TESTIMONIALS / REVIEWS                             */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-surface-white border-b border-surface-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-up">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-[11px] font-semibold tracking-editorial text-ink-muted uppercase block mb-2">
                  CLIENT TESTIMONIALS
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-tight">
                  What Our Clients Say
                </h2>
              </div>
              {/* Sideways Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('testimonials-slider');
                    if (el) el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
                  }}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-surface-border flex items-center justify-center text-navy-deep hover:bg-surface-neutral active:scale-95 transition-all shadow-xs"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('testimonials-slider');
                    if (el) el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
                  }}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-surface-border flex items-center justify-center text-navy-deep hover:bg-surface-neutral active:scale-95 transition-all shadow-xs"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile Sideways 1-Card Snap Scroll / Desktop Grid */}
          <div
            id="testimonials-slider"
            className="flex md:grid md:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory no-scrollbar touch-pan-x w-full"
          >
            {testimonialsData.map((item, idx) => (
              <div key={item.id} className="w-full min-w-full md:min-w-0 md:w-full shrink-0 md:shrink snap-center flex">
                <ScrollReveal animation="fade-up" delay={idx * 120} duration={600} className="w-full flex">
                  <div className="bg-surface-white p-7 sm:p-8 rounded-2xl border border-surface-border/80 shadow-xs flex flex-col justify-between h-full w-full">
                    <div>
                      <span className="text-3xl font-serif text-blue-royal block mb-3 leading-none">
                        “
                      </span>
                      <p className="text-xs sm:text-sm text-ink-muted font-light leading-relaxed">
                        {item.quote}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-surface-border/60 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden relative bg-surface-neutral shrink-0">
                        <Image
                          src={item.avatar || '/images/hero_modern_villa.jpg'}
                          alt={item.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-navy-deep">
                          {item.author}
                        </h4>
                        <p className="text-xs text-ink-muted font-light">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. CTA BANNER                                                */}
      {/* ============================================================ */}
      <CTASection
        title={"Your Vision.\nOur Expertise."}
        subtitle="Ready to discuss your project? Get in touch with our team for a personalized consultation."
        buttonText="Get a Consultation"
      />
    </div>
  );
}
