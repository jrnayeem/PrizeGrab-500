import React from 'react';
import { trackEvent, getCampaignParams } from '../lib/tracking';
import { ModalType } from '../types';

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  const currentYear = new Date().getFullYear();

  const handleTermsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const params = getCampaignParams();
    trackEvent('terms_click', {
      button_location: 'footer',
      utm_source: params.utm_source,
      utm_medium: params.utm_medium,
      utm_campaign: params.utm_campaign,
      utm_content: params.utm_content,
    });
    onOpenModal('terms');
  };

  const handlePrivacyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const params = getCampaignParams();
    trackEvent('privacy_click', {
      button_location: 'footer',
      utm_source: params.utm_source,
      utm_medium: params.utm_medium,
      utm_campaign: params.utm_campaign,
      utm_content: params.utm_content,
    });
    onOpenModal('privacy');
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onOpenModal('contact');
  };

  return (
    <footer className="w-full bg-[#09261e] text-[#93b3a3] border-t border-[#133d31] py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Brand and Title */}
          <div className="text-base sm:text-lg font-bold text-white tracking-tight">
            PrizeGrab – $500 Grocery Stimulus
          </div>

          {/* Compliance & Disclosure Statement */}
          <p className="text-xs sm:text-sm text-[#b8d4c6] max-w-xl leading-relaxed">
            Participation is subject to eligibility requirements and applicable terms. A prize is not guaranteed.
          </p>

          {/* Links */}
          <nav aria-label="Legal and Contact Links" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs font-medium text-[#cce2d6]">
            <button
              id="footer-terms-btn"
              type="button"
              onClick={handleTermsClick}
              className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Terms &amp; Conditions
            </button>
            <span className="text-[#1e4d3f]" aria-hidden="true">•</span>
            <button
              id="footer-privacy-btn"
              type="button"
              onClick={handlePrivacyClick}
              className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span className="text-[#1e4d3f]" aria-hidden="true">•</span>
            <button
              id="footer-contact-btn"
              type="button"
              onClick={handleContactClick}
              className="hover:text-white transition-colors cursor-pointer underline-offset-4 hover:underline"
            >
              Contact
            </button>
          </nav>

          {/* Bottom Copyright & Disclaimer */}
          <div className="pt-6 border-t border-[#12382c] w-full text-[11px] text-[#719584]">
            <p>
              &copy; {currentYear} PrizeGrab Promotion. All rights reserved. This page serves as an informational bridge for promotional opportunities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
