import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { handleEligibilityCtaClick } from '../lib/tracking';

export const WhatYouNeedToDo: React.FC = () => {
  const checklistItems = [
    'Review the promotion details',
    'Confirm that you meet the applicable requirements',
    'Complete the required participation steps',
    'Follow the instructions provided',
    'Review the applicable terms and conditions',
  ];

  return (
    <section className="w-full py-10 sm:py-14 bg-[#faf8f5]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e5dfd3] shadow-xs">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d3b2e] tracking-tight mb-3">
            What You Need to Do
          </h2>

          {/* Text */}
          <p className="text-sm sm:text-base text-[#374151] leading-relaxed mb-6">
            To participate, review the promotion requirements and complete the qualifying steps presented after selecting the button below.
          </p>

          {/* Checklist */}
          <div className="space-y-3 mb-8">
            {checklistItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-3 rounded-xl bg-[#f7f5f0] border border-[#ebe6dc] transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#14532d] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Check className="w-3.5 h-3.5 stroke-[3]" aria-hidden="true" />
                </div>
                <span className="text-sm sm:text-base text-[#1f2937] font-medium leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA within section */}
          <div className="flex flex-col items-center gap-2">
            <button
              id="what-you-need-to-do-cta"
              type="button"
              onClick={() => handleEligibilityCtaClick('what_you_need_to_do')}
              className="w-full sm:w-auto min-w-[260px] py-3.5 px-6 bg-[#0d3b2e] hover:bg-[#124b3b] active:bg-[#092b21] text-white font-bold text-base rounded-xl transition-all duration-150 flex items-center justify-center gap-2 shadow-xs cursor-pointer group"
            >
              <span>CONTINUE TO PARTICIPATION</span>
              <ArrowRight className="w-4 h-4 text-[#e8c56c] transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
            <span className="text-xs text-[#6b7280] text-center">
              Eligibility and participation requirements apply.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
