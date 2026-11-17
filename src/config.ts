// Pilot facts used across the page. Change them here, not in components.

/** Pilot flow: landing → Stripe payment link → Youform onboarding. */
export const CHECKOUT_URL = '#'; // TODO: Stripe payment link

export const PILOT = {
  price: '€19',
  priceNote: 'per couple, paid once',
  seats: 'Only 15 couples',
  firstLetter: 'First letter on 20 January',
  edition: 'The first edition',
  season: 'Winter 2027',
} as const;
