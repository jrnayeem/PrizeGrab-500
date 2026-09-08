/**
 * Types for campaign tracking and compliance analytics
 */

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  ref?: string;
  subid?: string;
  clickid?: string;
  [key: string]: string | undefined;
}

export type TrackEventName =
  | 'check_eligibility_click'
  | 'offer_cta_click'
  | 'terms_click'
  | 'privacy_click';

export interface TrackingEventData {
  button_location?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
}

export type ModalType = 'terms' | 'privacy' | 'contact' | null;
