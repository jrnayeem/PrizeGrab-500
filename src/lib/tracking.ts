import { track } from '@vercel/analytics';
import { OFFER_URL, ALLOWED_CAMPAIGN_KEYS } from '../config';
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
export function buildOfferUrlWithParams(baseUrl: string = OFFER_URL): string {
  const destination = baseUrl && baseUrl !== 'YOUR_OFFER_URL_HERE'
    ? baseUrl
    : 'https://linkthem.net/aff_c?offer_id=4837&aff_id=201949&source=social';

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
 * Standard CTA click handler: tracks events and navigates immediately to OFFER_URL
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

  // 2. Preserve campaign parameters and navigate to OFFER_URL immediately
  const destination = buildOfferUrlWithParams(OFFER_URL);
  window.location.href = destination;
}
