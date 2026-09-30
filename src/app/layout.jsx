import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import QuoteModal from '../components/QuoteModal';
import { QuoteModalProvider } from '../components/QuoteModalContext';
import { siteConfig } from '../data/siteData';

export const metadata = {
  title: {
    default: `${siteConfig.name} | Architecture & Interiors`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: `${siteConfig.tagline} Bespoke residential construction, commercial landmarks, luxury interior design, and architectural renovation in Hyderabad. Contact: ${siteConfig.phoneFormatted}.`,
  keywords: [
    "Vriksha Constructions",
    "Interior Designers Hyderabad",
    "Residential Construction Jubilee Hills",
    "Luxury Villa Architects",
    "Commercial Construction Hyderabad",
    "Architectural Renovation Remodeling",
    "Modern Architecture Studio"
  ],
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL('https://vrikshaconstructions.com'),
  openGraph: {
    title: `${siteConfig.name} | Architecture & Interiors`,
    description: siteConfig.tagline,
    url: 'https://vrikshaconstructions.com',
    siteName: siteConfig.name,
    images: [
      {
        url: '/images/hero_modern_villa.jpg',
        width: 1200,
        height: 630,
        alt: 'Vriksha Modern Villa Architecture',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/vriksha_logo.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-surface-warm text-ink-main selection:bg-brand-orange selection:text-surface-white antialiased">
        <QuoteModalProvider>
          <Navbar />
          <main className="flex-grow pt-[60px] sm:pt-[76px]">
            {children}
          </main>
          <Footer />
          <QuoteModal />
        </QuoteModalProvider>
      </body>
    </html>
  );
}
