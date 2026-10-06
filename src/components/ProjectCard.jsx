import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, priority = false }) {
  return (
    <Link
      href={project.href}
      className="group block bg-surface-white border border-surface-border/80 rounded-2xl transition-all duration-300 hover:shadow-[0_12px_32px_rgba(16,47,87,0.08)] overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-neutral select-none">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none select-none"
        />
      </div>

      <div className="p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4">
        <div>
          <h3 className="text-sm sm:text-base font-semibold text-navy-deep group-hover:text-brand-orange transition-colors line-clamp-1">
            {project.title}
          </h3>
          <p className="mt-0.5 text-xs text-ink-muted font-light">
            {project.category} | {project.location}
          </p>
        </div>
        <div className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border border-surface-border text-navy-deep group-hover:border-brand-orange group-hover:bg-brand-orange group-hover:text-surface-white transition-all duration-300">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
