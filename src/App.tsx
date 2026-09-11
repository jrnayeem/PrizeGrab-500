/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustStrip } from './components/TrustStrip';
import { OfferCard } from './components/OfferCard';
import { HowItWorks } from './components/HowItWorks';
import { WhatYouNeedToDo } from './components/WhatYouNeedToDo';
import { GrocerySavingsArticle } from './components/GrocerySavingsArticle';
import { ShoppingHabitsArticle } from './components/ShoppingHabitsArticle';
import { UnderstandingPromotionsArticle } from './components/UnderstandingPromotionsArticle';
import { FeaturedPromoSection } from './components/FeaturedPromoSection';
import { FaqSection } from './components/FaqSection';
import { TransparencySection } from './components/TransparencySection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { ModalType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#19231f] selection:bg-[#cbe0d3] selection:text-[#0d3b2e] overflow-x-hidden">
      {/* Vercel Web Analytics Component (Preserved) */}
      <Analytics />

      {/* Sticky Navigation Header with Mobile Drawer */}
      <Header />

      <main id="main-content" className="flex-1 w-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Trust & Transparency Strip */}
        <TrustStrip />

        {/* Offer Overview: About the $500 Grocery Stimulus & Feature Card */}
        <OfferCard />

        {/* How It Works (01 Review, 02 Participate, 03 Eligibility) */}
        <HowItWorks />

        {/* What You Need to Do (Checklist) */}
        <WhatYouNeedToDo />

        {/* Editorial Article 1: Simple Ways to Make Your Grocery Budget Go Further */}
        <GrocerySavingsArticle />

        {/* Editorial Article 2: Smart Grocery Shopping: 7 Practical Habits */}
        <ShoppingHabitsArticle />

        {/* Editorial Article 3: Understanding Grocery Promotions */}
        <UnderstandingPromotionsArticle />

        {/* Featured Promotional Section */}
        <FeaturedPromoSection />

        {/* Accordion FAQ Section */}
        <FaqSection />

        {/* Transparency Information Section */}
        <TransparencySection />

        {/* Final CTA Section */}
        <FinalCta />
      </main>

      {/* Multi-Column Professional Footer */}
      <Footer onOpenModal={setActiveModal} />

      {/* Accessible Terms / Privacy / Contact Modal */}
      <LegalModal
        type={activeModal}
        onClose={() => setActiveModal(null)}
      />
    </div>
  );
}
