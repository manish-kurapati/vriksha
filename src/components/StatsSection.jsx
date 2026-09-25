import React from 'react';
import { siteConfig } from '../data/siteData';

export default function StatsSection({ borderTop = true, borderBottom = true }) {
  const stats = [
    { value: siteConfig.projectsCompleted, label: "Projects Completed", note: "Residential & Commercial" },
    { value: siteConfig.happyClients, label: "Happy Clients", note: "Across South India" },
    { value: siteConfig.experienceYears, label: "Years of Experience", note: "Architectural Excellence" },
    { value: siteConfig.squareFeetDelivered, label: "Delivered Space", note: "Precision Construction" },
  ];

  return (
    <section
      className={`bg-surface-neutral/60 ${borderTop ? 'border-t border-surface-border' : ''} ${
        borderBottom ? 'border-b border-surface-border' : ''
      } py-12 lg:py-16`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-relaxed text-blue-royal">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-ink-muted font-light">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
