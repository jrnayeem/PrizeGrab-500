import React, { useEffect } from 'react';
import { X, ShieldAlert, FileText, Mail } from 'lucide-react';
import { ModalType } from '../types';

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl border border-[#e5dfd3] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#eeeae2] bg-[#faf8f5]">
          <div className="flex items-center gap-2.5">
            {type === 'terms' && <FileText className="w-5 h-5 text-[#0d3b2e]" />}
            {type === 'privacy' && <ShieldAlert className="w-5 h-5 text-[#0d3b2e]" />}
            {type === 'contact' && <Mail className="w-5 h-5 text-[#0d3b2e]" />}
            <h3 className="text-lg font-bold text-[#0d3b2e]">
              {type === 'terms' && 'Terms & Conditions'}
              {type === 'privacy' && 'Privacy Policy'}
              {type === 'contact' && 'Contact Information'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#6b7280] hover:text-[#111827] hover:bg-[#eeeae2] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto text-sm text-[#374151] leading-relaxed space-y-4">
          {type === 'terms' && (
            <>
              <p className="font-semibold text-[#0d3b2e]">
                PrizeGrab – $500 Grocery Stimulus Promotional Terms
              </p>
              <p>
                Participation in the PrizeGrab $500 Grocery Stimulus promotion is subject to applicable eligibility guidelines and participation requirements. A prize is not guaranteed.
              </p>
              <p>
                Visitors who proceed to the participation page must review all applicable official rules, sponsor disclosures, and eligibility criteria outlined on that page. Completing preliminary steps does not ensure qualification or prize receipt.
              </p>
              <p>
                All trademarks, logos, and brand names are the property of their respective owners. Mention of grocery items does not imply sponsorship, endorsement, or affiliation.
              </p>
            </>
          )}

          {type === 'privacy' && (
            <>
              <p className="font-semibold text-[#0d3b2e]">
                Privacy & Data Attribution Policy
              </p>
              <p>
                This bridge page respects visitor privacy. We do not collect, store, or transmit personally identifiable information (PII) such as your name, email address, physical address, phone number, or payment information on this page.
              </p>
              <p>
                We use standard, non-sensitive campaign parameters (such as UTM parameters and non-identifying referral tokens) to measure traffic attribution and technical page performance.
              </p>
              <p>
                When you navigate to third-party participation or sponsor pages, your interactions on those platforms will be governed by their respective privacy policies.
              </p>
            </>
          )}

          {type === 'contact' && (
            <>
              <p className="font-semibold text-[#0d3b2e]">
                Promotional Inquiries & Support
              </p>
              <p>
                For questions regarding promotion rules, eligibility requirements, or partner opportunities, please refer to the official support channels and contact instructions available on the main participation destination page.
              </p>
              <p className="text-xs text-[#6b7280]">
                Note: Eligibility verification and prize distribution are administered in accordance with official promotion rules.
              </p>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-[#faf8f5] border-t border-[#eeeae2] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#0d3b2e] text-white font-semibold text-xs hover:bg-[#124b3b] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
