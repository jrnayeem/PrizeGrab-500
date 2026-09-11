import React from 'react';
import { ShoppingBag } from 'lucide-react';
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

  const handleNavScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-[#08231b] text-[#93b3a3] border-t border-[#12382c] pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Multi-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#12382c]">
          {/* Column 1: Brand & Resource Description */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#144838] border border-[#21614c] flex items-center justify-center text-[#e8c56c]">
                <ShoppingBag className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                PRIZEGRAB
              </span>
            </div>
            <p className="text-sm text-[#a8cdb9] max-w-md leading-relaxed">
              Consumer information and promotional opportunity resources.
            </p>
            <p className="text-xs text-[#759a87] leading-relaxed max-w-md">
              Helping consumers navigate grocery savings, pantry budgeting, and verified promotional incentive opportunities.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#e8c56c]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavScroll(e, '#home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#grocery-tips"
                  onClick={(e) => handleNavScroll(e, '#grocery-tips')}
                  className="hover:text-white transition-colors"
                >
                  Grocery Tips
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleNavScroll(e, '#how-it-works')}
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleNavScroll(e, '#faq')}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Information */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#e8c56c]">
              Information
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  id="footer-terms-btn"
                  type="button"
                  onClick={handleTermsClick}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms &amp; Conditions
                </button>
              </li>
              <li>
                <button
                  id="footer-privacy-btn"
                  type="button"
                  onClick={handlePrivacyClick}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  id="footer-contact-btn"
                  type="button"
                  onClick={handleContactClick}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 text-center space-y-3 text-xs text-[#719584]">
          <p className="font-medium text-[#93b3a3] max-w-2xl mx-auto leading-relaxed">
            Prize is not guaranteed. Eligibility and participation requirements apply. Review applicable terms before participating.
          </p>
          <p className="text-[11px] text-[#5b7a6b]">
            &copy; {currentYear} PrizeGrab Promotion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
