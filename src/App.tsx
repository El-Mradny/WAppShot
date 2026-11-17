/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { LanguageProvider } from './i18n/LanguageContext';
import { ThemeProvider } from './theme/ThemeContext';
import { Navbar } from './components/Navbar';
import { SeoHead } from './components/SeoHead';
import { HeroSection } from './components/HeroSection';
import { WhatIsApiSection } from './components/WhatIsApiSection';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { FeatureSpotlight } from './components/FeatureSpotlight';
import { ComparisonSection } from './components/ComparisonSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Testimonials } from './components/Testimonials';
import { KeyMetrics } from './components/KeyMetrics';
import { ImplementationRoadmap } from './components/ImplementationRoadmap';
import { ProofAndCtaSection } from './components/ProofAndCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsAppBubble } from './components/FloatingWhatsAppBubble';
import { PrivacyPolicy } from './components/PrivacyPolicy';

export default function App() {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#privacy-policy') {
      setPrivacyOpen(true);
    }

    function handleHashChange() {
      if (window.location.hash === '#privacy-policy') {
        setPrivacyOpen(true);
      }
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  function handleOpenPrivacy() {
    setPrivacyOpen(true);
  }

  function handleClosePrivacy() {
    setPrivacyOpen(false);
    if (window.location.hash === '#privacy-policy') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }

  return (
    <ThemeProvider>
      <LanguageProvider>
        <MotionConfig reducedMotion="user">
          <SeoHead />
          <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] dark:bg-slate-950 dark:text-slate-100 transition-colors duration-150">
            <Navbar />
            <main>
              <HeroSection />
              <WhatIsApiSection />
              <CapabilitiesSection />
              <FeatureSpotlight />
              <ComparisonSection />
              <PricingSection />
              <FaqSection />
              <Testimonials />
              <KeyMetrics />
              <ImplementationRoadmap />
              <ProofAndCtaSection />
            </main>
            <Footer onOpenPrivacy={handleOpenPrivacy} />
            <FloatingWhatsAppBubble />
            <PrivacyPolicy isOpen={privacyOpen} onClose={handleClosePrivacy} />
          </div>
        </MotionConfig>
      </LanguageProvider>
    </ThemeProvider>
  );
}
