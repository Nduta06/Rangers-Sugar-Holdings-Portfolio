import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactFloat } from "@/components/contact-float";
import LenisScroll from "@/components/lenis-scroll";
import { MotionProvider } from "@/components/motion";
import { company, OG_IMAGE, SITE_URL } from "@/lib/site";
import "./globals.css";


export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ranges Sugar Holdings | Sugar Beet Factory in Nyandarua, Kenya",
    template: "%s | Ranges Sugar Holdings",
  },
  description:
    "Ranges Sugar Holdings processes sugar beet into sugar at Sample office, Miharati, Nyandarua County, Kenya.",
  applicationName: company.name,
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_KE",
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: false, follow: false },
  icons: { icon: "/media/logo.svg", apple: "/media/logo.svg" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:z-100 focus:top-4 focus:left-4 focus:bg-brand-red focus:text-white focus:px-5 focus:py-3 focus:rounded-full focus:text-sm"
        >
          Skip to content
        </a>
        <MotionProvider>
          <LenisScroll />
          <Navbar />
          <main id="main" className="flex-1"><p className="fixed bottom-0 left-0 z-50 bg-zinc-950 text-white text-xs px-4 py-2 rounded-tr-xl">Portfolio demo · sample media and contact details</p>{children}</main>
          <ContactFloat />
          <Footer />
        </MotionProvider>

      </body>
    </html>
  );
}

