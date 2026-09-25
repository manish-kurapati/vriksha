'use client';

import React, { useState } from 'react';
import SectionHeader from '../../components/SectionHeader';
import ProjectCard from '../../components/ProjectCard';
import CTASection from '../../components/CTASection';
import { projectsData } from '../../data/siteData';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Residential', value: 'residential' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Interior Design', value: 'interior-design' },
    { label: 'Renovation', value: 'renovation' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categorySlug === activeCategory);

  return (
    <div className="bg-surface-white">
      {/* Hero */}
      <section className="pt-12 pb-16 lg:pt-20 lg:pb-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-3">
              ARCHITECTURAL PORTFOLIO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-navy-deep font-normal leading-[1.1] tracking-tight">
              Selected Projects
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-ink-muted font-light leading-relaxed">
              An editorial survey of bespoke residences, corporate headquarters, and contemplative interiors crafted across South India.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (2 per row on mobile, flex on desktop) */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2.5 sm:gap-3 border-b border-surface-border pb-4">
            {categories.map((cat, index) => {
              const isActive = activeCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`w-full sm:w-auto text-center flex items-center justify-center px-3 sm:px-5 py-2.5 sm:py-2 text-[11px] sm:text-xs uppercase tracking-editorial font-medium rounded-lg sm:rounded-none transition-all ${
                    isActive
                      ? 'bg-navy-deep text-surface-white shadow-sm'
                      : 'bg-surface-neutral text-ink-muted hover:text-navy-deep hover:bg-blue-ice border border-surface-border/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-surface-neutral/30 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} priority={idx < 3} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-surface-white border border-surface-border">
              <p className="text-base text-ink-muted font-light">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title={"Discuss a Custom Commission"}
        subtitle="Our studio welcomes private commissions for landmark residences and progressive commercial architecture."
        buttonText="Commission a Project"
      />
    </div>
  );
}
