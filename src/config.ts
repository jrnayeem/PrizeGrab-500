/**
 * Centralized Application Configuration
 *
 * All primary CTAs MUST route through OFFER_URL.
 * Update OFFER_URL here or provide VITE_OFFER_URL in your environment.
 */

// Replace this with your actual destination URL or configure via VITE_OFFER_URL
export const OFFER_URL =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_OFFER_URL) ||
  'https://www.prizegrab.com/grocery-stimulus-offer';

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
