import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs: FaqItem[] = [
    {
      q: 'Is the $500 prize guaranteed?',
      a: 'No. Participation does not guarantee a prize. Eligibility and applicable participation requirements apply.',
    },
    {
      q: 'What do I need to do to participate?',
      a: 'Review the promotion information and complete the qualifying steps presented on the participation page. Specific requirements may vary according to the applicable promotion terms.',
    },
    {
      q: 'Does everyone qualify?',
      a: 'Not necessarily. Eligibility requirements apply and should be reviewed before participating.',
    },
    {
      q: 'Do I need to review the terms?',
      a: 'Yes. Always review the applicable terms and conditions before participating.',
    },
    {
      q: 'Where do I check the requirements?',
      a: 'Use the CHECK ELIGIBILITY button to continue to the applicable participation page and review the available requirements.',
    },
    {
      q: 'Will completing the steps guarantee a prize?',
      a: 'No. Completing participation steps does not guarantee a prize.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full py-16 sm:py-24 bg-white border-b border-[#ede8de]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f4f2ea] text-[#0d3b2e] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#b48c36]" aria-hidden="true" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d3b2e] tracking-tight font-serif sm:font-sans">
            Common Questions &amp; Answers
          </h2>
          <p className="text-base text-[#4b5563] mt-3 leading-relaxed">
            Essential facts about the PrizeGrab $500 Grocery Stimulus promotion and qualification guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#e5dfd3] bg-[#faf8f5] overflow-hidden transition-all duration-200"
              >
                <button
                  id={`faq-btn-${idx}`}
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#165a45] rounded-2xl"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className="text-base sm:text-lg font-bold text-[#111827] leading-snug">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-[#e2dcce] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0d3b2e]' : 'text-[#6b7280]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    role="region"
                    aria-labelledby={`faq-btn-${idx}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#374151] leading-relaxed border-t border-[#eeeae2]"
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
