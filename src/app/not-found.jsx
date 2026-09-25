import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-surface-white">
      <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
        404 • PAGE NOT FOUND
      </span>
      <h1 className="text-3xl sm:text-5xl font-serif text-navy-deep font-normal mb-4">
        Architectural Void
      </h1>
      <p className="text-sm text-ink-muted max-w-md mb-8 font-light">
        The page you are looking for has been moved or does not exist in our architectural directory.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-brand-orange text-surface-white hover:bg-[#c45a1b] text-xs font-semibold rounded-full transition-colors shadow-md"
      >
        Return to Home
      </Link>
    </div>
  );
}
