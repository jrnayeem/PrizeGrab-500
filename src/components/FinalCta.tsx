import React from 'react';
import { ArrowRight, ShoppingBasket } from 'lucide-react';
import { handleEligibilityCtaClick } from '../lib/tracking';

export const FinalCta: React.FC = () => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#0d3b2e] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#16503e] border border-[#276e56] flex items-center justify-center text-[#e8c56c] shadow-md">
          <ShoppingBasket className="w-7 h-7" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-serif sm:font-sans">
          Ready to Review the Opportunity?
        </h2>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg text-[#c8ded3] max-w-xl mx-auto mb-9 font-normal leading-relaxed">
          Check the applicable requirements and participation details before continuing.
        </p>

        {/* Primary CTA Button */}
        <div className="flex flex-col items-center gap-3.5">
          <button
            id="final-check-eligibility-btn"
            type="button"
            onClick={() => handleEligibilityCtaClick('final_cta')}
            className="w-full sm:w-auto min-w-[280px] sm:min-w-[340px] px-8 py-4.5 bg-[#e8c56c] hover:bg-[#deb656] active:bg-[#cf9e3c] text-[#0d3b2e] font-black text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>CHECK ELIGIBILITY</span>
            <ArrowRight className="w-5 h-5 text-[#0d3b2e] transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
          </button>

          {/* Small Disclaimer */}
          <p className="text-xs text-[#a0c5b3] max-w-md text-center leading-snug">
            Prize is not guaranteed. Eligibility and participation requirements apply.
          </p>
        </div>
      </div>
    </section>
  );
};
