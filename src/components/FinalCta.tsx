import React from 'react';
import { ArrowRight, ShoppingBasket } from 'lucide-react';
import { handleEligibilityCtaClick } from '../lib/tracking';

export const FinalCta: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-[#0d3b2e] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-[#175240] border border-[#2b725c] flex items-center justify-center text-[#e8c56c]">
          <ShoppingBasket className="w-6 h-6" aria-hidden="true" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
          Ready to Check Your Eligibility?
        </h2>

        {/* Supporting text */}
        <p className="text-base sm:text-lg text-[#c8ded3] max-w-md mx-auto mb-8 font-normal leading-relaxed">
          Review the requirements and continue to the participation page.
        </p>

        {/* Primary Button */}
        <div className="flex flex-col items-center gap-3">
          <button
            id="final-check-eligibility-btn"
            type="button"
            onClick={() => handleEligibilityCtaClick('final_cta')}
            className="w-full sm:w-auto min-w-[280px] sm:min-w-[320px] px-8 py-4 bg-[#e8c56c] hover:bg-[#dfba5c] active:bg-[#d0ab4d] text-[#0d3b2e] font-extrabold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>CHECK ELIGIBILITY</span>
            <ArrowRight className="w-5 h-5 text-[#0d3b2e] transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
          </button>

          {/* Below button disclaimer */}
          <p className="text-xs text-[#a0c5b3] max-w-md text-center leading-snug">
            Prize is not guaranteed. Eligibility and participation requirements apply.
          </p>
        </div>
      </div>
    </section>
  );
};
