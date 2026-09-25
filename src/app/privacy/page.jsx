import React from 'react';
import { siteConfig } from '../../data/siteData';

export const metadata = {
  title: 'Privacy Policy | Vriksha',
  description: 'Privacy Policy of Vriksha Constructions & Interior Designers.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-surface-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-[11px] font-semibold tracking-editorial text-blue-royal uppercase block mb-3">
          LEGAL & COMPLIANCE
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy-deep font-normal leading-tight mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm text-ink-muted font-light leading-relaxed">
          <p>
            At {siteConfig.name}, we hold the privacy and confidentiality of our clients, partners, and site visitors with the highest architectural standard of care.
          </p>

          <h2 className="text-xl font-serif text-navy-deep font-normal pt-4">1. Collection of Information</h2>
          <p>
            When you submit an architectural brief or consultation inquiry through our website, we may collect your name, phone number, email address, property location, and project parameters solely for the purpose of scheduling consultations and providing structural estimates.
          </p>

          <h2 className="text-xl font-serif text-navy-deep font-normal pt-4">2. Non-Disclosure & Confidentiality</h2>
          <p>
            We do not sell, rent, or trade your personal or project data with third parties. All architectural blueprints, budgetary figures, and site locations remain strictly confidential between you and the Vriksha engineering team.
          </p>

          <h2 className="text-xl font-serif text-navy-deep font-normal pt-4">3. Direct Communication</h2>
          <p>
            We use your provided phone number and email solely to provide project updates, architectural documentation, and direct consultations requested by you.
          </p>

          <h2 className="text-xl font-serif text-navy-deep font-normal pt-4">4. Contacting Our Legal Officer</h2>
          <p>
            If you have questions regarding this policy or wish to delete your inquiry records from our studio system, please reach us directly at <a href={`mailto:${siteConfig.email}`} className="text-blue-royal underline">{siteConfig.email}</a> or call {siteConfig.phoneFormatted}.
          </p>
        </div>
      </div>
    </div>
  );
}
