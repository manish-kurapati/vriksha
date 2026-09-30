'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function FormworkShutteringRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/services/civil-construction');
  }, [router]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center bg-surface-white">
      <h2 className="text-xl font-serif text-navy-deep mb-2">Redirecting to Civil Construction...</h2>
      <p className="text-sm text-ink-muted mb-4 font-light">
        If you are not redirected automatically, please click below.
      </p>
      <Link
        href="/services/civil-construction"
        className="px-6 py-2.5 bg-brand-orange text-white text-xs font-semibold rounded-full hover:bg-brand-orangeHover transition-colors"
      >
        Go to Civil Construction
      </Link>
    </div>
  );
}
