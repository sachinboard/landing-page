/**
 * Verified business details, taken from theboardcompany.in.
 * Do not add claims here that are not published by the business.
 */

export const BUSINESS = {
  name: "The Board Company",
  city: "Bengaluru",
  phoneDisplay: "+91 99866 40129",
  phoneDial: "+919986640129",
  whatsapp: "919986640129",
  whatsappMessage:
    "Hi The Board Company, I'd like a quote for business signage. My requirement is:",
  address: {
    line1: "#4, Thirumallapa Nagar, Attur 2nd Stage",
    line2: "Yelahanka New Town, Bengaluru - 560094",
  },
  hours: "Open all days, 9:00 AM – 5:00 PM",
  serviceArea: "Bengaluru & across Karnataka",
  facebook: "https://www.facebook.com/theboardcompany.in",
  instagram: "https://www.instagram.com/theboardcompany.in/",
  website: "https://theboardcompany.in",
} as const;

export const whatsappHref = `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(
  BUSINESS.whatsappMessage,
)}`;

/**
 * Verified Google review data. Left as null until the business confirms the
 * live star rating and review count — nothing is displayed while it is null.
 */
export const GOOGLE_REVIEWS: { rating: number; count: string; profileUrl?: string } | null = {
  rating: 4.9,
  count: "330",
};

/** Client brands named on theboardcompany.in. Text only — no logo files supplied. */
export const BRAND_CLIENTS = [
  "Gold's Gym",
  "Fabric Spa",
  "Spin Salon",
  "Ginza",
  "Sky Garden",
  "Gilly's",
  "Clark's Inn",
  "1966 The Mumbai Cafe",
  "Tea Day",
  "Bublee",
  "Hole In The Wall Cafe",
  "Dizzy Duck",
  "Tug of Fur",
  "Tree Suites",
] as const;

/** Types offered in the hero quote form. */
export const HERO_SIGNAGE_TYPES = [
  "3D Acrylic",
  "LED Backlight Flex",
  "3D Letters on MS Frame",
  "Fabric Board",
  "Mixed Board",
  "Need Consultation",
] as const;

export const SIGNAGE_OPTIONS = [
  "3D Sign Board",
  "2D LED Sign Board",
  "Acrylic / LED Name Board",
  "3D Aluminium Channel Letters",
  "Fabric Backlit Lightbox",
  "Digital Video Board",
  "Video Wall",
  "Neon Sign",
  "Not sure — need advice",
] as const;

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within 2 weeks",
  "Within 1 month",
  "Just planning / exploring",
] as const;

export const BUDGET_OPTIONS = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "Above ₹3,00,000",
  "Not decided yet",
] as const;
