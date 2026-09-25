import React from 'react';
import { siteConfig } from '../../data/siteData';

export const metadata = {
  title: 'Terms & Conditions | Vriksha',
  description: 'Terms and Conditions of Vriksha Constructions & Interior Designers.',
};

export default function TermsPage() {
  return (
    <div className="bg-surface-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-3">
          LEGAL & COMPLIANCE
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-tight mb-8">
          Terms & Conditions
        </h1>

        <div className="space-y-6 text-sm text-ink-muted font-light leading-relaxed">
          <p>
            Welcome to the official digital portfolio of {siteConfig.name}. By accessing and browsing this website, you agree to comply with the following architectural and intellectual property terms.
          </p>

          <h2 className="text-xl font-serif text-navy-deep font-normal pt-4">1. Architectural Copyright</h2>
          <p>
            All drawings, structural renderings, photographs, text, and brand elements featured on this website are the intellectual property of Vriksha Constructions & Interior Designers or its licensed patrons. Unauthorized reproduction, scraping, or commercial duplication is strictly prohibited.
          </p>

          <h2 className="text-xl font-serif text-navy-deep font-normal pt-4">2. Conceptual Representation</h2>
          <p>
            Photographs and 3D architectural schematics represent executed or conceptual portfolio works. Final construction specifications, materials, and structural details for individual commissions are governed strictly by the written contractual agreements executed between Vriksha and each client.
          </p>

          <h2 className="text-xl font-serif text-navy-deep font-normal pt-4">3. Consultations & Inquiries</h2>
          <p>
            Submission of an inquiry form through this website constitutes a request for architectural consultation and does not in itself establish a binding contractor-client agreement until formal engineering contracts are signed.
          </p>

          <h2 className="text-xl font-serif text-navy-deep font-normal pt-4">4. Governing Law</h2>
          <p>
            These terms are governed by the laws of India, with exclusive jurisdiction in the civil courts of Hyderabad, Telangana.
          </p>
        </div>
      </div>
    </div>
  );
}
