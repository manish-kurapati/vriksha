'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center bg-surface-warm">
      <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-2">
        ERROR
      </span>
      <h1 className="text-3xl sm:text-4xl font-serif text-navy-deep font-normal mb-4">
        Something went wrong
      </h1>
      <p className="text-sm text-ink-muted max-w-md mb-8 font-light">
        An unexpected error occurred. Please try again or return to the studio homepage.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-brand-orange text-surface-white hover:bg-brand-orangeHover text-xs font-semibold rounded-full transition-colors shadow-md"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 bg-surface-white border border-surface-border text-navy-deep hover:bg-surface-neutral text-xs font-semibold rounded-full transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
