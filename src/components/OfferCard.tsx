import React from 'react';
import { Tag, CheckCircle2, ChevronRight } from 'lucide-react';
import { handleEligibilityCtaClick } from '../lib/tracking';

export const OfferCard: React.FC = () => {
  return (
    <section className="w-full py-8 sm:py-12 bg-[#faf8f5]">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        {/* Premium Highlighted Card */}
        <div className="relative bg-white rounded-2xl border-2 border-[#165a45] shadow-sm overflow-hidden p-6 sm:p-8 text-center transition-all hover:shadow-md">
          {/* Subtle Top Accent Banner */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eaf4ef] text-[#0d3b2e] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#c4e3d3]">
            <Tag className="w-3.5 h-3.5 text-[#b48c36]" aria-hidden="true" />
            <span>Promotional Spotlight</span>
          </div>

          {/* Prominent $500 display */}
          <div className="mb-2">
            <span className="text-5xl sm:text-6xl font-black text-[#0d3b2e] tracking-tight block">
              $500
            </span>
          </div>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#14532d] mb-3">
            GROCERY STIMULUS
          </h2>

          {/* Exact Text */}
          <p className="text-base text-[#374151] max-w-md mx-auto leading-relaxed mb-6 font-medium">
            An opportunity to qualify for a promotional grocery-related prize.
          </p>

          {/* Action CTA */}
          <div className="mb-5">
            <button
              id="offer-card-cta-btn"
              type="button"
              onClick={() => handleEligibilityCtaClick('offer_card')}
              className="w-full py-3.5 px-6 bg-[#0d3b2e] hover:bg-[#124b3b] active:bg-[#092b21] text-white font-bold text-base rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-xs cursor-pointer group"
            >
              <span>CHECK ELIGIBILITY NOW</span>
              <ChevronRight className="w-4 h-4 text-[#e8c56c] transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
          </div>

          {/* Exact Disclaimer */}
          <div className="pt-4 border-t border-[#f0ece1] flex items-center justify-center gap-2 text-xs text-[#526359]">
            <CheckCircle2 className="w-4 h-4 text-[#0d3b2e] shrink-0" aria-hidden="true" />
            <p className="leading-snug text-center">
              Participation does not guarantee a prize. Eligibility and applicable requirements apply.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
