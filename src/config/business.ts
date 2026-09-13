/**
 * AXIOM BUSINESS TEMPLATE — Scout packet for Irish Ink Tattoo Studio.
 * Paste this file over src/config/business.ts in a clone of axiom-business-template.
 *
 * Verdict: prime · Appointment-based booking business with high review rating (4.9 stars), no evidence of AI reception system. Casey is responsive to online consultations and booking inquiries. Strong local presence and reputation. Perfect fit for appointment booking automation via AI receptionist.
 * Source: irishinktattoos.com
 * Hours as published: By appointment only (no walk-ins)
 *
 * Photos: drop shop/service images into public/business/ using the names below.
 * Do not commit scraped photos as if you own them — retake or generate.
 */
export type Weekday = "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";

export type Service = {
  id: string;
  name: string;
  tag: string;
  price: number;
  durationMin: number;
  image: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  tag: string;
  price: number;
  image: string;
  description: string;
};

export type HourBlock = {
  days: Weekday[];
  open: string;
  close: string;
};

export type Business = {
  name: string;
  kind: string;
  location: string;
  timezone: string;
  tagline: string;
  story: string;
  heroImage: string;
  phone: string;
  email: string;
  bookingIntervalMin: number;
  hours: HourBlock[];
  afterHoursLabel: string;
  afterHoursNote: string;
  walkins: string;
  policies: string[];
  services: Service[];
  products: Product[];
  prompts: string[];
  axiomName: string;
  axiomVoice: string;
};


// hero.jpg  <-  Irish Ink Tattoo Studio storefront and artwork  https://static.wixstatic.com/media/f05325_1bfbcd00e421e97b40f21db52505805b.jpg/v1/fit/w_2500,h_1330,al_c/f05325_1bfbcd00e421e97b40f21db52505805b.jpg
// service-custom-tattoo-design.jpg  <-  Custom Tattoo Design  https://static.wixstatic.com/media/f05325_2c85e024071df939ef31c4800d51857d.jpg/v1/fill/w_600,h_405,al_c,q_80,enc_avif,quality_auto/f05325_2c85e024071df939ef31c4800d51857d.jpg
// service-color-tattoos.jpg  <-  Color Tattoos  https://static.wixstatic.com/media/f05325_5c59b746bfb481c659fea6109b3edba5.jpg/v1/fill/w_300,h_450,al_c,q_80,enc_avif,quality_auto/f05325_5c59b746bfb481c659fea6109b3edba5.jpg
// service-black-and-grey-tattoos.jpg  <-  Black and Grey Tattoos  https://static.wixstatic.com/media/f05325_193b44f70afffd5c2bc78f3a83a072d7.jpg/v1/fill/w_600,h_408,al_c,q_80,enc_avif,quality_auto/f05325_193b44f70afffd5c2bc78f3a83a072d7.jpg

export const business: Business = {
  name: "Irish Ink Tattoo Studio",
  kind: "Tattoo / piercing",
  location: "408 SE G St, Suite A, Grants Pass, OR 97526",
  timezone: "America/Los_Angeles",
  tagline: "Professional Tattoo and Body Piercing Services",
  story: "Irish Ink Tattoo Studio is located in beautiful downtown Grants Pass, OR. This tattoo establishment has been in business since 2008. The location has a 2-story building with downstairs and upstairs tattoo facilities. We are a licensed facility with 2 fully licensed tattoo artists. We comply with all rules and regulations set forth by the Oregon Health Licensing Agency.",
  heroImage: "/business/hero.jpg",
  phone: "(541) 476-6654",
  email: "",
  bookingIntervalMin: 30,
  hours: [
    {
      days: [
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
      ],
      open: "10:00",
      close: "14:00"
    }
  ],
  afterHoursLabel: "After hours",
  afterHoursNote: "Published hours: By appointment only (no walk-ins). The desk still answers when the shop is closed.",
  walkins: "appointment_only",
  policies: [
    "No walk-in consultations or tattoo appointments. No body piercing available as of 2020.",
    "Confirm prices on the chair if a number was not published."
  ],
  services: [
    {
      id: "custom-tattoo-design",
      name: "Custom Tattoo Design",
      tag: "Custom",
      price: 0,
      durationMin: 90,
      image: "/business/service-custom-tattoo-design.jpg",
      description: "Professional custom tattoo services"
    },
    {
      id: "color-tattoos",
      name: "Color Tattoos",
      tag: "Color",
      price: 0,
      durationMin: 90,
      image: "/business/service-color-tattoos.jpg",
      description: "Color tattoo artwork"
    },
    {
      id: "black-and-grey-tattoos",
      name: "Black and Grey Tattoos",
      tag: "Black",
      price: 0,
      durationMin: 90,
      image: "/business/service-black-and-grey-tattoos.jpg",
      description: "Black and grey tattoo artwork"
    }
  ],
  products: [],
  prompts: [
    "Do you take walk-ins?",
    "What do you charge?",
    "Are you open Saturday?"
  ],
  axiomName: "Axiom",
  axiomVoice: "You are the desk at this shop. Short, warm, exact. Never invent a price, hour, or policy that is not listed. If they want a chair, point them to Book now."
};
