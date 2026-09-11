import React from 'react';
import { ShieldCheck, CheckCircle, FileText, AlertCircle, HelpCircle } from 'lucide-react';

export const UnderstandingPromotionsArticle: React.FC = () => {
  const points = [
    {
      title: 'Promotional offers can have eligibility requirements',
      desc: 'Consumer promotions and sweepstakes typically establish specific qualification thresholds based on residency, age, and valid contact capabilities. Confirming your geographic eligibility prevents time spent on promotions intended for different jurisdictions.',
      icon: ShieldCheck,
    },
    {
      title: 'Different promotions can have different participation rules',
      desc: 'No two promotional campaigns operate identically. Some require preliminary questionnaire responses, while others necessitate promotional task engagements, mobile app downloads, or partner sponsor reviews. Always verify the distinct steps required by the sponsor.',
      icon: CheckCircle,
    },
    {
      title: 'Terms and conditions should be reviewed before participation',
      desc: 'Official rules define entry limits, start and end dates, selection methodologies, and verification requirements. Spending a minute reviewing the fine print ensures complete clarity regarding your expectations and responsibilities.',
      icon: FileText,
    },
    {
      title: 'A promotional opportunity should not be interpreted as a guaranteed reward',
      desc: 'Promotions, stimulus draws, and sweepstakes are opportunities to qualify or participate in drawings. They must never be conflated with guaranteed payments, wages, direct entitlements, or immediate cash disbursements.',
      icon: AlertCircle,
    },
    {
      title: 'Users should understand what actions are required before participating',
      desc: 'Before clicking through to external participation funnels, understand whether subsequent steps involve surveys, partner registrations, or identity confirmation. Knowing what lies ahead enables an informed decision.',
      icon: HelpCircle,
    },
  ];

  return (
    <article className="w-full py-16 sm:py-20 bg-white border-b border-[#ede8de]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-[#b48c36] block mb-2">
            CONSUMER EDUCATION &amp; TRANSPARENCY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d3b2e] tracking-tight font-serif sm:font-sans leading-[1.15]">
            Understanding Grocery Promotions
          </h2>
          <p className="text-base sm:text-lg text-[#4b5563] mt-3 leading-relaxed max-w-2xl">
            A neutral, educational guide to how promotional campaigns, stimulus sweepstakes, and consumer reward programs operate.
          </p>
        </header>

        {/* 5 Educational Principles */}
        <div className="space-y-5">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#faf8f5] border border-[#e5dfd3] flex flex-col sm:flex-row items-start gap-4 transition-all hover:border-[#c5d8ce]"
              >
                <div className="w-10 h-10 rounded-xl bg-white text-[#165a45] border border-[#e2dcce] flex items-center justify-center shrink-0 shadow-2xs">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <div className="space-y-1.5 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-[#111827] leading-snug">
                    {pt.title}
                  </h3>
                  <p className="text-sm text-[#4b5563] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
};
