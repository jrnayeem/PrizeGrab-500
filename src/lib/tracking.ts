import { track } from '@vercel/analytics';
import { CTA_URLS, ALLOWED_CAMPAIGN_KEYS } from '../config';
import { UtmParams, TrackEventName, TrackingEventData } from '../types';

/**
 * Extracts non-sensitive campaign parameters from current window URL
 */
export function getCampaignParams(): UtmParams {
  if (typeof window === 'undefined') return {};
  try {
    const searchParams = new URLSearchParams(window.location.search);
    const params: UtmParams = {};
    ALLOWED_CAMPAIGN_KEYS.forEach((key) => {
      const val = searchParams.get(key);
      if (val) {
        params[key] = val;
      }
    });
    return params;
  } catch {
    return {};
  }
}

/**
 * Appends preserved UTM parameters to the destination URL
 */
export function buildOfferUrlWithParams(baseUrl: string): string {
  const destination = baseUrl;

  const params = getCampaignParams();
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, val]) => {
    if (val) query.set(key, val);
  });

  const queryString = query.toString();
  if (!queryString) return destination;

  try {
    // If valid URL with protocol
    const url = new URL(destination, window.location.origin);
    Object.entries(params).forEach(([key, val]) => {
      if (val) url.searchParams.set(key, val);
    });
    return url.toString();
  } catch {
    return destination.includes('?')
      ? `${destination}&${queryString}`
      : `${destination}?${queryString}`;
  }
}

/**
 * Dispatches Vercel Analytics events with non-sensitive campaign data
 */
export function trackEvent(name: TrackEventName, data?: TrackingEventData): void {
  try {
    const payload: Record<string, string | number | boolean | null> = {};
    if (data?.button_location) payload.button_location = data.button_location;
    if (data?.utm_source) payload.utm_source = data.utm_source;
    if (data?.utm_medium) payload.utm_medium = data.utm_medium;
    if (data?.utm_campaign) payload.utm_campaign = data.utm_campaign;
    if (data?.utm_content) payload.utm_content = data.utm_content;

    track(name, payload);
  } catch (err) {
    // Safe fall-through: Analytics failure must never break UX or navigation
    console.debug('Analytics dispatch notice:', err);
  }
}

/**
 * Standard CTA click handler: tracks events and navigates to that CTA's URL
 */
export function handleEligibilityCtaClick(location: string): void {
  const params = getCampaignParams();

  // 1. Record analytics event(s)
  trackEvent('check_eligibility_click', {
    button_location: location,
    utm_source: params.utm_source,
    utm_medium: params.utm_medium,
    utm_campaign: params.utm_campaign,
    utm_content: params.utm_content,
  });

  trackEvent('offer_cta_click', {
    button_location: location,
    utm_source: params.utm_source,
    utm_medium: params.utm_medium,
    utm_campaign: params.utm_campaign,
    utm_content: params.utm_content,
  });

  // All responsive header variants share one logical Header CTA link.
  const ctaKey = location.startsWith('header_') ? 'header_cta' : location;
  const ctaUrl = CTA_URLS[ctaKey];

  if (!ctaUrl) {
    console.warn(`No CTA URL configured for: ${ctaKey}`);
    return;
  }

  // 2. Preserve campaign parameters and navigate to this CTA's assigned URL
  const destination = buildOfferUrlWithParams(ctaUrl);
  window.location.href = destination;
}
