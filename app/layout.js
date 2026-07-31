import { Bricolage_Grotesque, Fraunces, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Boot from "@/components/Boot";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const sans = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://podfenjerom.com";

const title = "Pod fenjerom — Restoran Nova Topola, Gradiška";
/** Meta description — zadržava SEO fraze za pretragu */
const description =
  "Restoran Pod fenjerom u Novoj Topoli kod Gradiške. Jagnjetina sa ražnja od 1974. Restoran Gradiška, jagnjetina Gradiška, restoran Nova Topola.";
/** Preview dijeljenja (OG / Twitter) — čitljiv, bez keyword liste */
const shareDescription =
  "Jagnjetina sa ražnja od 1974. Restoran Pod fenjerom, Nova Topola kod Gradiške.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Pod fenjerom",
  },
  description,
  keywords: [
    "restoran Gradiška",
    "jagnjetina Gradiška",
    "restoran Nova Topola",
    "jagnjetina Nova Topola",
    "Pod fenjerom",
    "restoran Pod fenjerom",
    "jagnjetina sa ražnja",
    "jagnjetina na ražnju",
    "ražanj Gradiška",
    "restoran Republika Srpska",
    "gdje jesti Gradiška",
    "domaća kuhinja Nova Topola",
  ],
  authors: [{ name: "Pod fenjerom" }],
  creator: "Pod fenjerom",
  publisher: "Pod fenjerom",
  category: "restaurant",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "/",
    siteName: "Pod fenjerom",
    title,
    description: shareDescription,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pod fenjerom — restoran Nova Topola, Gradiška",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: shareDescription,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Pod fenjerom",
  description,
  image: [`${siteUrl}/fenjerlogo.png`, `${siteUrl}/og.png`],
  url: siteUrl,
  telephone: "+38765224429",
  servesCuisine: ["Balkan", "Domaća kuhinja"],
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Banjalučki put",
    addressLocality: "Nova Topola",
    addressRegion: "Gradiška",
    addressCountry: "BA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.0548117,
    longitude: 17.3084218,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:00",
    closes: "23:00",
  },
  sameAs: ["https://www.instagram.com/pod_fenjerom/"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="sr"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Boot>{children}</Boot>
        <Analytics />
      </body>
    </html>
  );
}
