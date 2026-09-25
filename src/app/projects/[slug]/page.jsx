import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projectsData } from '../../../data/siteData';
import ProjectCard from '../../../components/ProjectCard';
import CTASection from '../../../components/CTASection';
import { ArrowLeft, CheckCircle2, MapPin, Calendar, Layers, Maximize2, User } from 'lucide-react';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.title} | ${project.category} Portfolio`,
    description: project.summary,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="bg-surface-white">
      {/* 1. PROJECT HEADER */}
      <section className="pt-10 pb-12 lg:pt-16 lg:pb-16 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial text-blue-royal hover:text-navy-deep font-semibold transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                {project.category} ARCHITECTURE
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy-deep font-normal leading-[1.1] tracking-tight">
                {project.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-ink-muted font-light leading-relaxed max-w-2xl">
                {project.summary}
              </p>
            </div>

            {/* Project Quick Meta Box */}
            <div className="lg:col-span-4 bg-surface-neutral/60 border border-surface-border p-6 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-surface-border/60 pb-2">
                <span className="text-ink-muted uppercase tracking-wider">Location:</span>
                <span className="font-medium text-navy-deep">{project.location}</span>
              </div>
              <div className="flex items-center justify-between border-b border-surface-border/60 pb-2">
                <span className="text-ink-muted uppercase tracking-wider">Year Completed:</span>
                <span className="font-medium text-navy-deep">{project.year}</span>
              </div>
              <div className="flex items-center justify-between border-b border-surface-border/60 pb-2">
                <span className="text-ink-muted uppercase tracking-wider">Built Area:</span>
                <span className="font-medium text-navy-deep">{project.area}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-ink-muted uppercase tracking-wider">Commission:</span>
                <span className="font-medium text-navy-deep">{project.client}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FULL-WIDTH HERO PHOTOGRAPHY */}
      <section className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] w-full overflow-hidden bg-surface-neutral border-b border-surface-border">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent pointer-events-none" />
      </section>

      {/* 3. PROJECT OVERVIEW & DESIGN CONCEPT */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                PROJECT OVERVIEW
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                Architectural Intent & Spatial Form
              </h2>
              <p className="text-base text-ink-muted font-light leading-relaxed">
                {project.overview}
              </p>
              <div className="p-6 bg-blue-ice/40 border border-blue-veryLight">
                <span className="text-xs uppercase tracking-editorial text-blue-royal font-semibold block mb-2">
                  SPATIAL PHILOSOPHY
                </span>
                <p className="text-sm font-serif italic text-navy-deep leading-relaxed">
                  &ldquo;A disciplined dialogue between light, material integrity, and structural restraint.&rdquo;
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                DESIGN CONCEPT
              </span>
              <h3 className="text-2xl font-serif text-navy-deep font-normal">
                Concept & Bioclimatic Execution
              </h3>
              <p className="text-base text-ink-muted font-light leading-relaxed">
                {project.concept}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GALLERY PERSPECTIVES */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-20 lg:py-24 bg-surface-neutral/40 border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                VISUAL RECORD
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                Project Gallery & Perspectives
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] overflow-hidden border border-surface-border bg-surface-neutral group"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} Detail Perspective 0${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-navy-dark/80 backdrop-blur-sm text-surface-white text-[10px] tracking-wider uppercase font-light">
                    Perspective 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. MATERIALS & KEY FEATURES */}
      <section className="py-20 lg:py-24 bg-surface-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Materials (6 cols) */}
            <div className="lg:col-span-5">
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                MATERIALITY
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-navy-deep font-normal mb-6">
                Material Specifications
              </h3>
              <div className="space-y-3">
                {project.materials.map((mat, idx) => (
                  <div key={idx} className="p-4 bg-surface-neutral/60 border border-surface-border flex items-center justify-between">
                    <span className="text-sm font-medium text-navy-deep">{mat}</span>
                    <span className="text-xs text-blue-royal font-mono">0{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Architectural Features (7 cols) */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                KEY ARCHITECTURAL HIGHLIGHTS
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-navy-deep font-normal mb-6">
                Engineering & Spatial Features
              </h3>
              <div className="space-y-4">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-4 bg-surface-white border border-surface-border">
                    <CheckCircle2 className="w-5 h-5 text-blue-royal shrink-0 mt-0.5" />
                    <p className="text-sm text-ink-muted font-light leading-relaxed">
                      {feat}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. RELATED PROJECTS */}
      <section className="py-20 lg:py-24 bg-surface-neutral/30 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
                MORE FROM PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal leading-tight">
                Related Architectural Works
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-editorial text-blue-royal font-semibold hover:text-navy-deep transition-colors"
            >
              <span>View All Projects</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <CTASection
        title={"Commission a Work of Similar Caliber"}
        subtitle={`Reach out to Vriksha's studio to discuss site zoning, structural scope, and spatial concepts for your prospective project.`}
        buttonText="Inquire About This Style"
      />
    </div>
  );
}
