import React from 'react';
import { Tag, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { handleEligibilityCtaClick } from '../lib/tracking';
import groceryBasketImg from '../assets/images/grocery_hero_basket_1788904690301.jpg';

export const OfferCard: React.FC = () => {
  return (
    <section className="w-full py-12 sm:py-16 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Editorial Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#eaf4ef] text-[#0d3b2e] text-xs font-semibold uppercase tracking-wider border border-[#c4e3d3]">
              <Tag className="w-3.5 h-3.5 text-[#b48c36]" aria-hidden="true" />
              <span>Program Summary</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0d3b2e] tracking-tight">
              About the $500 Grocery Stimulus
            </h2>

            <p className="text-base sm:text-lg text-[#374151] leading-relaxed">
              The PrizeGrab $500 Grocery Stimulus is presented as a promotional opportunity for eligible participants. Participation may require completing specified steps and meeting applicable eligibility requirements.
            </p>

            {/* Prominent Editorial Notice */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#fffbeb] border border-[#fde68a] flex items-start gap-3.5">
              <AlertCircle className="w-5 h-5 text-[#b45309] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-[#92400e]">
                  Important:
                </p>
                <p className="text-sm text-[#78350f] mt-0.5 leading-relaxed">
                  Participation does not guarantee receipt of a prize.
                </p>
              </div>
            </div>

            {/* Editorial Basket Preview & Caption */}
            <div className="rounded-xl overflow-hidden border border-[#e2dcce] bg-white p-3 shadow-2xs flex flex-col sm:flex-row items-center gap-4">
              <div className="w-full sm:w-36 h-24 rounded-lg overflow-hidden shrink-0 bg-[#eee]">
                <img
                  src={groceryBasketImg}
                  alt="Fresh groceries in a market basket"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs text-[#526359] leading-relaxed">
                <span className="font-bold text-[#111827] block mb-1">
                  Targeted Toward Everyday Essentials
                </span>
                This stimulus promotion is designed around household grocery needs—from seasonal fruits and vegetables to pantry staples.
              </div>
            </div>
          </div>

          {/* Right: Visually Attractive $500 Feature Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-white rounded-2xl border-2 border-[#165a45] shadow-lg overflow-hidden p-6 sm:p-8 text-center transition-all hover:shadow-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f2ea] text-[#0d3b2e] text-xs font-bold uppercase tracking-wider mb-4 border border-[#ddd6c8]">
                <span>Promotional Opportunity</span>
              </div>

              {/* Prominent $500 Display */}
              <div className="mb-2">
                <span className="text-6xl sm:text-7xl font-black text-[#0d3b2e] tracking-tight block">
                  $500
                </span>
              </div>

              {/* Card Subheading */}
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[#14532d] mb-4">
                GROCERY STIMULUS
              </h3>

              {/* Card Text */}
              <div className="space-y-2 mb-6">
                <p className="text-sm font-semibold text-[#111827]">
                  Promotional opportunity
                </p>
                <p className="text-xs text-[#4b5563] leading-relaxed max-w-xs mx-auto">
                  Eligibility and participation requirements apply.
                </p>
              </div>

              {/* Action Button */}
              <div className="mb-5">
                <button
                  id="offer-card-cta-btn"
                  type="button"
                  onClick={() => handleEligibilityCtaClick('offer_card')}
                  className="w-full py-4 px-6 bg-[#0d3b2e] hover:bg-[#124b3b] active:bg-[#092b21] text-white font-bold text-base rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-sm cursor-pointer group"
                >
                  <span>CHECK ELIGIBILITY</span>
                  <ArrowRight className="w-4 h-4 text-[#e8c56c] transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </div>

              {/* Compliance Guarantee Footer */}
              <div className="pt-4 border-t border-[#f0ece1] flex items-center justify-center gap-2 text-xs text-[#526359]">
                <CheckCircle2 className="w-4 h-4 text-[#0d3b2e] shrink-0" aria-hidden="true" />
                <span className="leading-snug text-center">
                  Subject to official sponsor terms &amp; conditions.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
