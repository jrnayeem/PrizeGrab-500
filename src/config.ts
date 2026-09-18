/**
 * Centralized Application Configuration
 *
 * Each CTA can use its own destination URL.
 * Change only the URLs below when you want to update a button destination.
 */

export const CTA_URLS: Record<string, string> = {
  // Header CHECK ELIGIBILITY button (desktop and mobile versions use this same link)
  header_cta: 'https://linkthem.net/aff_c?offer_id=4837&aff_id=201949&source=TM01',

  // Main hero CHECK ELIGIBILITY button
  hero_section: 'https://linkthem.net/aff_c?offer_id=4837&aff_id=201949&source=TM02',

  // Featured promotion CHECK ELIGIBILITY button
  featured_promo: 'https://linkthem.net/aff_c?offer_id=4837&aff_id=201949&source=TM03',

  // Offer card CHECK ELIGIBILITY button
  offer_card: 'https://linkthem.net/aff_c?offer_id=4837&aff_id=201949&source=social',

  // What You Need To Do CHECK ELIGIBILITY button
  what_you_need_checklist: 'https://linkthem.net/aff_c?offer_id=4837&aff_id=201949&source=social',

  // Final CHECK ELIGIBILITY button
  final_cta: 'https://linkthem.net/aff_c?offer_id=4837&aff_id=201949&source=social',
};

/**
 * List of non-sensitive campaign parameter keys to capture and pass forward
 */
export const ALLOWED_CAMPAIGN_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'ref',
  'subid',
  'clickid',
] as const;
