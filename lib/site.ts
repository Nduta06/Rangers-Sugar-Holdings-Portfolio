import type { Metadata } from "next";

// Production URL: set NEXT_PUBLIC_SITE_URL once a custom domain is live.
// On Vercel, VERCEL_PROJECT_PRODUCTION_URL is provided automatically at build time.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelUrl ? `https://${vercelUrl}` : "https://example.com")
).replace(/\/$/, "");

export const company = {
  name: "Ranges Sugar Holdings",
  legalName: "Ranges Sugar Holding Limited",
  slogan: "Sweet taste in every crystal",
  email: "hello@example.com",
  phones: [
    { display: "Phone withheld · portfolio demo", tel: "" },
  ],
  address: {
    building: "Sample office",
    street: "Address withheld",
    locality: "Miharati",
    region: "Nyandarua County",
    country: "Kenya",
    countryCode: "KE",
    poBox: "",
    postal: "Postal address withheld",
  },
  mapUrl: "#location-placeholder",
  mapName: "Ranges Sugar Holdings Ltd",
  mapEmbedUrl: "",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About us" },
  { href: "/sugar-beet/", label: "Why sugar beet" },
  { href: "/team/", label: "Our people" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/contact/", label: "Contact" },
];

export const OG_IMAGE = {
  url: "/media/og-image.svg",
  width: 1200,
  height: 630,
  alt: "Illustrative placeholder: Ranges Sugar Holdings sugar beet factory in Miharati, Nyandarua, Kenya",
};

export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: company.name,
      locale: "en_KE",
      url: path,
      title: title ? `${title} | ${company.name}` : undefined,
      description,
      images: [OG_IMAGE],
    },
  };
}

