import {
  BUSINESS,
  CATEGORIES,
  FAQS,
  FINANCING,
  PRIMARY_NAV,
  RENOVATION_CATEGORIES,
  SERVICES,
  WHY_CHOOSE_US,
  servicesByCategory,
} from "@/lib/business";

/**
 * Every visible English string, in one shape that es.ts must match exactly.
 * The service catalogue, FAQ, financing and "why us" copy still live in
 * business.ts with their sourcing notes; this file only points at them.
 *
 * `client` is the part sent to the browser, so it stays small and holds plain
 * data only. Everything else is read by Server Components and never ships.
 */
export const en = {
  licenseLabel: BUSINESS.licenseLabel as string,
  tagline: BUSINESS.tagline as string,
  license: "License",
  googleReviews: "Google reviews",
  requestQuote: "Request a quote",
  home_: "Home",
  services: SERVICES,
  categories: CATEGORIES,
  faqs: FAQS,
  financing: FINANCING,
  whyChooseUs: WHY_CHOOSE_US,
  meta: {
    ogLocale: "en_US",
    title: `${BUSINESS.name} | Impact Windows, Kitchens & Outdoor Living`,
    description:
      "Licensed general contractor serving Miami-Dade and Broward. Hurricane-rated impact windows and doors, kitchens, bathrooms, full remodels, pools, turf and outdoor living. Rated 5.0 from 44 Google reviews. License CGC1529180.",
    ogDescription:
      "Licensed general contractor in North Miami Beach. Rated 5.0 from 44 Google reviews. License CGC1529180.",
    twitterDescription:
      "Licensed general contractor in North Miami Beach. Rated 5.0 from 44 Google reviews.",
    ogAlt:
      "Florida Green Improvements — licensed general contractor, North Miami Beach, Florida. License CGC1529180. Rated 5.0 from 44 Google reviews.",
    catalogName: "Home improvement services",
    aboutTitle: "About — Licensed General Contractor in North Miami Beach",
    aboutDescription:
      "Florida Green Improvements is a licensed general contractor (CGC1529180) serving Miami-Dade and Broward, rated 5.0 from 44 Google reviews. One team, one permit, one point of contact.",
    contactTitle: "Contact & Free Estimates",
    contactDescription:
      "Request a free estimate from Florida Green Improvements. Licensed Florida general contractor CGC1529180 serving Miami-Dade and Broward. Call (786) 238-1213.",
  },
  skipLink: "Skip to content",
  home: {
    heroLede:
      "Impact windows, kitchens and full remodels for South Florida homes that have to survive the season and still look like this.",
    licensedInsured: "Licensed & insured",
    area: "Miami-Dade & Broward",
    aboutEyebrow: "About",
    aboutHeading: "One contractor for the whole job.",
    aboutBody:
      "Florida Green Improvements is a licensed general contractor working across hurricane-rated impact windows and doors, kitchen and bathroom remodeling, and outdoor renovation. One permit, one schedule, one point of contact — from the first drawing to the final inspection.",
    aboutCta: "About the company",
    servicesHeading: "Services",
    processHeading: "How it works",
    process: [
      {
        title: "Plan",
        body: "Permits, construction approval and material scheduling are handled before anyone starts work — so the timeline you are given is the timeline you get.",
      },
      {
        title: "Design",
        body: "We work through layout, materials, fixtures and finishes with you, with visual aids so you can see the room before it is built. At no additional cost.",
      },
      {
        title: "Build",
        body: "One licensed general contractor carries the permit, the schedule and the responsibility from demolition through final inspection.",
      },
    ],
    freeConsultation: "Free Consultation",
    freeEstimates: "Free estimates",
    ctaHeading: "Ready to transform your living space?",
    ctaBody:
      "Tell us what you are planning. We will come out, look at it properly, and give you a number you can rely on.",
  },
  about: {
    nav: "About",
    eyebrow: "Since 2016",
    heading: "Built by people who answer the phone",
    whoWeAre: "Who we are",
    lead: "Florida Green Improvements offers high-quality home construction and improvement services at an affordable price. As a team of experts, we deliver exceptional craftsmanship, using our knowledge and experience to transform your home.",
    body: "We are a licensed Florida general contractor, which means one company carries the permit, the schedule and the responsibility for the whole job — hurricane-rated impact windows and doors, full interior renovation and everything outside the walls. You are not managing five trades. You are calling one number.",
    onRecord: "On the record",
    trades: "Trades under one contract",
    ctaHeading: "Ready to transform your living space?",
  },
  contactPage: {
    nav: "Contact",
    eyebrow: "Free estimates · No obligation",
    heading: "Tell us what you are planning",
  },
  service: {
    overview: "Overview",
    detail: "Detail",
    freeEstimate: "Free estimate",
    cta: (name: string) => `Talk to us about your ${name} project`,
    also: "Also from Florida Green",
  },
  notFound: {
    heading: "This page is not here",
    body: "The link may be out of date. Everything we do is on the homepage, or call us and we will point you at it.",
    back: "Back to home",
  },
  footer: {
    blurb:
      "A licensed Florida general contractor working across hurricane-rated impact windows and doors, kitchen and bathroom remodeling and outdoor renovation in Miami-Dade and Broward.",
    services: "Services",
    contact: "Contact",
    onInstagram: "Florida Green Improvements on Instagram",
    onFacebook: "Florida Green Improvements on Facebook",
    financing: "Financing & $0 down",
    faq: "FAQ",
    siteBy: "Site by",
  },
  reviews: {
    eyebrow: "Reviews",
    heading: "What our customers say on Google",
    stars: (n: number) => `${n} out of 5 stars`,
    readFull: "Read the full review on Google",
    verified: "Verified Google review",
    readAll: (n: number) => `Read all ${n} reviews`,
    note: "Reviews are shown as written by the customer on Google.",
  },
  why: {
    eyebrow: "Why choose us",
    heading: "Why homeowners choose Florida Green",
    body: "Our commitment is to provide the best service to homeowners like you — work that holds up in the Florida climate, at a price that works with your budget.",
    cta: "Get a free estimate",
  },
  financingUi: {
    heading: "Financing available",
    subheading: "$0 down options",
    cta: "Check your options",
  },
  faqUi: {
    eyebrow: "FAQ",
    heading: "Got a question?",
    body: "If you have a question for us, see if we have answered it below — these are the ones people ask us about the most.",
    cta: "Ask us something else",
  },
  client: {
    locale: "en" as "en" | "es",
    nav: {
      primary: PRIMARY_NAV,
      categories: CATEGORIES.map((c) => ({
        id: c.id,
        label: c.label,
        anchor: c.anchor,
        services: servicesByCategory(c.id).map((s) => ({ slug: s.slug, name: s.name })),
      })),
      homeLabel: "Florida Green Improvements — home",
      freeConsultation: "Free Consultation",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      menu: "Menu",
      call: "Call",
      requestQuote: "Request a quote",
      language: "Language",
    },
    consent: {
      label: "Cookie preferences",
      body: "We use Google Analytics to see how people find this site. Nothing is stored on your device unless you accept.",
      accept: "Accept",
      decline: "Decline",
    },
    form: {
      /** `value` is what the API validates and the client reads in the lead email: always English. */
      serviceOptions: SERVICES.map((s) => ({ value: s.name, label: s.name })),
      genericError: "Something went wrong. Please try again.",
      networkError: "We could not reach the server. Please check your connection and try again.",
      received: "Request received",
      thanks: "Thank you — we have it.",
      followUp: "We will be in touch shortly to arrange a time to come and look at the work properly.",
      name: "Name",
      namePlaceholder: "Your full name",
      phone: "Phone",
      email: "Email",
      emailPlaceholder: "you@example.com",
      need: "What do you need?",
      selectService: "Select a service",
      somethingElse: "Something else",
      about: "About the project",
      aboutPlaceholder: "Roughly what are you planning, and where is the property?",
      help: "A sentence or two is plenty — we will follow up with the detail.",
      sending: "Sending…",
      send: "Send request",
    },
    popup: {
      offer: "Free estimate · No obligation",
      heading: "Renovate your home",
      lede: "Tell us which part of the home you are planning and we will come out, look at it properly, and give you a number you can rely on.",
      question: "What are you renovating?",
      categories: RENOVATION_CATEGORIES.map((c) => ({ label: c.label, service: c.service })),
      cta: "Request a free quote",
      close: "Close",
    },
    contact: {
      showcase: ["Kitchens", "Bathrooms", "Remodeling", "Pools", "Outdoor living"],
      offer: "Free estimate · No obligation",
      heading: "Tell us what you are planning",
      body: "We will come out, look at the work properly, and give you a number you can rely on.",
      requestQuote: "Request a quote",
      callUs: "Call us",
      hours: "Monday to Friday, 9am–5pm",
      office: "Office",
      reviews: "reviews",
      previous: "Previous image",
      next: "Next image",
    },
  },
};

export type Dictionary = typeof en;
export type ClientDictionary = Dictionary["client"];
