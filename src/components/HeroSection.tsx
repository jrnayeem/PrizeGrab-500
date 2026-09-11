import React from 'react';
import { ArrowRight, Sparkles, AlertCircle, ShoppingBasket } from 'lucide-react';
import { handleEligibilityCtaClick } from '../lib/tracking';
import heroLifestyleImage from '../assets/images/grocery_lifestyle_hero_1789106104959.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative w-full bg-[#faf8f5] pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 overflow-hidden border-b border-[#ece6d9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Main Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8f1ec] text-[#0d3b2e] border border-[#cbe0d3] text-xs font-bold uppercase tracking-wider mb-5 self-start shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#b48c36]" aria-hidden="true" />
              <span>GROCERY SAVINGS &amp; PROMOTIONAL OPPORTUNITY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#0d3b2e] tracking-tight leading-[1.12] mb-5 font-serif sm:font-sans">
              Explore Your Opportunity to Qualify for $500 Toward Groceries
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#374151] max-w-2xl leading-relaxed mb-7 font-normal">
              PrizeGrab provides eligible participants with an opportunity to participate in a $500 grocery stimulus promotion. Review the participation requirements and applicable terms before continuing.
            </p>

            {/* Primary CTA Block */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <button
                id="hero-check-eligibility-btn"
                type="button"
                onClick={() => handleEligibilityCtaClick('hero_section')}
                className="w-full sm:w-auto min-w-[280px] sm:min-w-[300px] px-8 py-4 bg-[#0d3b2e] hover:bg-[#145340] active:bg-[#08281f] text-white font-extrabold text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>CHECK ELIGIBILITY</span>
                <ArrowRight className="w-5 h-5 text-[#e8c56c] transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#165a45] bg-[#eef5f1] px-3.5 py-2.5 rounded-xl border border-[#d2e5da]">
                <ShoppingBasket className="w-4 h-4 text-[#0d3b2e] shrink-0" aria-hidden="true" />
                <span>PrizeGrab Grocery Stimulus</span>
              </div>
            </div>

            {/* Secondary Text */}
            <div className="flex items-center gap-2 text-xs text-[#526359]">
              <AlertCircle className="w-3.5 h-3.5 text-[#b48c36] shrink-0" aria-hidden="true" />
              <p className="font-medium">
                Eligibility and participation requirements apply.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Lifestyle Imagery */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <div className="relative aspect-4/3 sm:aspect-16/11 w-full overflow-hidden bg-[#e5dfd3]">
                <img
                  src={heroLifestyleImage}
                  alt="Shopper carefully selecting fresh organic produce in an upscale supermarket grocery aisle"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
                  <div className="inline-block bg-[#0d3b2e]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/20">
                    Smart Household Budgeting &amp; Grocery Opportunity
                  </div>
                </div>
              </div>

              {/* Editorial Caption Bar */}
              <div className="p-4 bg-white border-t border-[#f0ece1] flex items-center justify-between text-xs text-[#526359]">
                <span className="font-medium">PrizeGrab Consumer Resource</span>
                <span className="text-[#0d3b2e] font-semibold">Promotion Overview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
