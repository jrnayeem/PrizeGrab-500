import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { handleEligibilityCtaClick } from '../lib/tracking';

export const FeaturedPromoSection: React.FC = () => {
  return (
    <section className="w-full py-14 sm:py-20 bg-gradient-to-b from-[#faf8f5] to-[#f2ede4] border-b border-[#e5dfd3]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#ded7c8] shadow-md relative overflow-hidden">
          {/* Subtle Top Accent Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eaf4ef] text-[#0d3b2e] border border-[#c4e3d3] text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#b48c36]" aria-hidden="true" />
            <span>PrizeGrab $500 Opportunity</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0d3b2e] tracking-tight mb-4 font-serif sm:font-sans">
            Interested in the PrizeGrab Opportunity?
          </h2>

          <p className="text-base sm:text-lg text-[#374151] max-w-xl mx-auto leading-relaxed mb-8">
            If you would like to review the participation requirements, continue below to the applicable participation page.
          </p>

          <div className="flex flex-col items-center gap-3">
            <button
              id="featured-promo-check-eligibility-btn"
              type="button"
              onClick={() => handleEligibilityCtaClick('featured_promo')}
              className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] px-8 py-4 bg-[#0d3b2e] hover:bg-[#145340] active:bg-[#08281f] text-white font-extrabold text-base sm:text-lg rounded-xl shadow-md hover:shadow-lg transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>CHECK ELIGIBILITY</span>
              <ArrowRight className="w-5 h-5 text-[#e8c56c] transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2 text-xs text-[#526359] mt-2">
              <ShieldCheck className="w-4 h-4 text-[#165a45]" aria-hidden="true" />
              <span>Prize is not guaranteed. Eligibility and participation requirements apply.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
