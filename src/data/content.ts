const BASE = import.meta.env.BASE_URL;
const RESORT_IMAGES = `${BASE}WhatsApp_Unknown_2026-10-24_at_01.24.30`;
const POOL_IMAGES = `${BASE}WhatsApp_Unknown_2026-10-24_at_01.24.26`;

export const IMAGES = {
  heroPool: `${POOL_IMAGES}/WhatsApp_Image_2026-10-24_at_01.22.06.jpeg`,
  heroPoolAlt: `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.02_(3).jpeg`,
  mistHills: `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.20.16.jpeg`,
  mistHillsAlt: `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.02_(2).jpeg`,
  roomBed: `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.01.jpeg`,
  roomInterior: `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.00_(2).jpeg`,
  roomBath: `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.02_(1).jpeg`,
  poolSunset: `${POOL_IMAGES}/WhatsApp_Image_2026-10-24_at_01.22.10.jpeg`,
  poolNight: `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.02_(3).jpeg`,
  bonfire: `${POOL_IMAGES}/WhatsApp_Image_2026-10-24_at_01.22.10_(1).jpeg`,
  bonfireClose: `${POOL_IMAGES}/WhatsApp_Image_2026-10-24_at_01.22.11.jpeg`,
  diningBuffet: `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.01_(2).jpeg`,
  diningSpread: `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.02_(2).jpeg`,
  eventLawn: `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.20.16.jpeg`,
  eventGarden: `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.01_(1).jpeg`,
  eventHeart: `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.02.jpeg`,
  gallery: [
    `${POOL_IMAGES}/WhatsApp_Image_2026-10-24_at_01.22.06.jpeg`,
    `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.01_(1).jpeg`,
    `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.01.jpeg`,
    `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.02_(3).jpeg`,
    `${POOL_IMAGES}/WhatsApp_Image_2026-10-24_at_01.22.10_(1).jpeg`,
    `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.02_(1).jpeg`,
    `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.02.jpeg`,
    `${RESORT_IMAGES}/WhatsApp_Image_2026-10-24_at_01.21.00.jpeg`,
  ],
};

export const NAV_LINKS = [
  { label: 'Stay', href: '#rooms' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Dining', href: '#dining' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
];

export const VISIT_TYPES = [
  {
    title: 'Overnight stay',
    description: 'Air-conditioned rooms with personal sit-outs — a quiet spot for morning tea and evening rain.',
    image: IMAGES.roomBed,
    icon: 'BedDouble',
  },
  {
    title: 'Day visit',
    description: 'Pool, games and a relaxed meal, no overnight needed. Perfect for a slow afternoon.',
    image: IMAGES.poolSunset,
    icon: 'Sun',
  },
  {
    title: 'Dining',
    description: 'Buffet meals from separate veg and non-veg kitchens, so every guest eats with confidence.',
    image: IMAGES.diningBuffet,
    icon: 'UtensilsCrossed',
  },
  {
    title: 'Events & groups',
    description: 'Weddings, birthdays, pre-wedding shoots and corporate meets under open sky.',
    image: IMAGES.eventLawn,
    icon: 'PartyPopper',
  },
] as const;

export const EXPERIENCES = [
  { title: 'Swimming pool', description: 'Long afternoons in the water as the sun sinks behind the hills.', image: IMAGES.poolSunset },
  { title: 'Rain dance & foam party', description: 'Music, water and foam — an instant celebration for the whole group.', image: IMAGES.poolNight },
  { title: 'Bonfire evenings', description: 'Gather around the crackling fire after dark, with stories and starlight.', image: IMAGES.bonfire },
  { title: 'Indoor & outdoor games', description: 'Easy fun for kids and grown-ups alike — ask us about timings.', image: IMAGES.eventHeart },
  { title: 'Karaoke & movie nights', description: 'Sing along, then a film on the projector under the open sky.', image: IMAGES.bonfireClose },
  { title: 'Garden walks', description: 'Stone paths winding past the cottages into the green.', image: IMAGES.mistHillsAlt },
] as const;

export const FAQS = [
  {
    q: 'Is an enquiry a confirmed booking?',
    a: 'No — we will reply to confirm availability and rates before anything is booked.',
  },
  {
    q: 'Can I check availability before booking?',
    a: 'Yes — send an enquiry or call, and we will share what is available on your date.',
  },
  {
    q: 'What are the check-in and check-out times?',
    a: 'We will confirm check-in and check-out times with your booking.',
  },
  {
    q: 'How do I find the resort?',
    a: 'Use the Google Maps link, or call us and we will guide you in.',
  },
];
