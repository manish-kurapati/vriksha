import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Home, Building2, Armchair, Wrench } from 'lucide-react';

const serviceIcons = {
  'residential-construction': Home,
  'commercial-construction': Building2,
  'interior-design': Armchair,
  'renovation-remodeling': Wrench,
};

export default function ServiceCard({ service, index = 0 }) {
  const IconComponent = serviceIcons[service.id] || Home;

  return (
    <Link
      href={service.href}
      className="group block bg-surface-white border border-surface-border/80 rounded-2xl transition-all duration-300 hover:shadow-[0_12px_32px_rgba(16,47,87,0.08)] overflow-hidden flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-neutral">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="w-10 h-10 -mt-11 mb-4 relative z-10 bg-surface-white border border-surface-border shadow-md rounded-full flex items-center justify-center text-navy-deep group-hover:bg-navy-deep group-hover:text-surface-white transition-all">
            <IconComponent className="w-4 h-4" />
          </div>
          
          <h3 className="text-lg font-semibold text-navy-deep group-hover:text-blue-royal transition-colors">
            {service.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed">
            {service.summary}
          </p>
        </div>

        <div className="pt-5 mt-5 flex items-center gap-1.5 text-xs font-medium text-navy-deep group-hover:text-blue-royal transition-colors">
          <span>Learn More</span>
          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
