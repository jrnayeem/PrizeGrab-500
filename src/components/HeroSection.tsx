import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { handleEligibilityCtaClick } from '../lib/tracking';
import heroGroceryBasket from '../assets/images/grocery_hero_basket_1788904690301.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full pt-6 pb-10 sm:pt-10 sm:pb-14 bg-gradient-to-b from-[#f5f2eb] via-[#faf8f5] to-[#faf8f5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          {/* Subtle Category Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f1ec] text-[#0d3b2e] border border-[#cbe0d3] text-xs font-semibold mb-5 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#b48c36]" aria-hidden="true" />
            <span>Official Promotional Giveaway Opportunity</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0d3b2e] tracking-tight max-w-2xl leading-[1.15] mb-4 sm:mb-5">
            Enter for a Chance to Receive $500 Toward Groceries
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#374151] max-w-xl leading-relaxed mb-6 sm:mb-8 font-normal">
            PrizeGrab provides eligible participants with an opportunity to participate in a $500 grocery stimulus promotion. Eligibility and participation requirements apply.
          </p>

          {/* Primary CTA Area */}
          <div className="w-full sm:w-auto flex flex-col items-center gap-2.5 mb-8 sm:mb-10">
            <button
              id="hero-check-eligibility-btn"
              onClick={() => handleEligibilityCtaClick('hero_section')}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] px-8 py-4 bg-[#0d3b2e] hover:bg-[#124b3b] active:bg-[#092b21] text-white font-bold text-base sm:text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer group"
              type="button"
            >
              <span>CHECK ELIGIBILITY</span>
              <ArrowRight className="w-5 h-5 text-[#e8c56c] transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
            </button>

            {/* Small disclaimer directly below CTA */}
            <p className="text-xs text-[#526359] max-w-md text-center leading-snug">
              Prize is not guaranteed. Eligibility restrictions and participation requirements apply.
            </p>
          </div>

          {/* Tasteful Grocery Visual */}
          <div className="w-full max-w-2xl rounded-2xl overflow-hidden border border-[#e2dcce] shadow-sm bg-white p-2">
            <div className="relative aspect-16/9 sm:aspect-16/9 w-full rounded-xl overflow-hidden bg-[#e8e4dc]">
              <img
                src={heroGroceryBasket}
                alt="Wholesome fresh groceries in a shopping basket featuring crisp produce and pantry essentials"
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-left pointer-events-none">
                <span className="inline-block text-[11px] sm:text-xs font-medium text-white/95 bg-[#0d3b2e]/85 backdrop-blur-xs px-2.5 py-1 rounded-md border border-white/20">
                  Wholesome Grocery Essentials
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
