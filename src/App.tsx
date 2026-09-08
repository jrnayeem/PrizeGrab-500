/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OfferCard } from './components/OfferCard';
import { HowItWorks } from './components/HowItWorks';
import { WhatYouNeedToDo } from './components/WhatYouNeedToDo';
import { TransparencySection } from './components/TransparencySection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ModalType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#19231f] selection:bg-[#cbe0d3] selection:text-[#0d3b2e] overflow-x-hidden">
      {/* Vercel Web Analytics Component */}
      <Analytics />

      {/* Semantic Main Content */}
      <Header />

      <main id="main-content" className="flex-1 w-full">
        {/* Section 2: Hero Section */}
        <HeroSection />

        {/* Section 3: $500 Offer Card */}
        <OfferCard />

        {/* Section 4: How It Works */}
        <HowItWorks />

        {/* Section 5: What You Need To Do */}
        <WhatYouNeedToDo />

        {/* Section 6: Transparency Section */}
        <TransparencySection />

        {/* Section 7: Final CTA */}
        <FinalCta />
      </main>

      {/* Section 15: Footer */}
      <Footer onOpenModal={setActiveModal} />

      {/* Legal & Policy Accessible Dialog */}
      <LegalModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
