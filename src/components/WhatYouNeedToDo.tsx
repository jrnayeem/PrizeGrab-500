import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { handleEligibilityCtaClick } from '../lib/tracking';

export const WhatYouNeedToDo: React.FC = () => {
  const checklistItems = [
    'Review the promotion information',
    'Check the applicable eligibility requirements',
    'Follow the participation instructions',
    'Complete any required qualifying steps',
    'Review the applicable terms before participating',
  ];

  return (
    <section className="w-full py-12 sm:py-16 bg-[#faf8f5]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#e5dfd3] shadow-sm">
          {/* Heading */}
          <div className="text-center sm:text-left mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#b48c36] block mb-1.5">
              Action Plan
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b2e] tracking-tight">
              What You Need to Do
            </h2>
          </div>

          {/* Checklist */}
          <div className="space-y-3.5 mb-8">
            {checklistItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-[#f7f5f0] border border-[#ebe6dc] transition-colors hover:border-[#cbd8ce]"
              >
                <div className="w-6 h-6 rounded-full bg-[#14532d] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" aria-hidden="true" />
                </div>
                <span className="text-sm sm:text-base text-[#1f2937] font-semibold leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Action CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#f0ece1]">
            <p className="text-xs text-[#526359] leading-relaxed max-w-sm">
              Prize is not guaranteed. Review the official partner details on the following page.
            </p>

            <button
              id="what-you-need-cta-btn"
              type="button"
              onClick={() => handleEligibilityCtaClick('what_you_need_checklist')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#0d3b2e] hover:bg-[#124b3b] text-white font-bold text-sm rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-xs cursor-pointer group shrink-0"
            >
              <span>CHECK ELIGIBILITY</span>
              <ArrowRight className="w-4 h-4 text-[#e8c56c] transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
