import { Bricolage_Grotesque, Fraunces, IBM_Plex_Mono } from "next/font/google";
import Boot from "@/components/Boot";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const sans = Bricolage_Grotesque({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Pod fenjerom — Nova Topola, Gradiška",
  description: "Nadaleko poznata jagnjetina od 1971. Nova Topola, kod Gradiške.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="sr"
      className={`is-loading ${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <Boot>{children}</Boot>
      </body>
    </html>
  );
}
