import WelcomePage from "@/components/WelcomePage";
import { site } from "@/data/site";

export const metadata = {
  title: "Dobro došli",
  description: "Brza mobilna stranica za goste — Pod fenjerom.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  // Utility NFC page — point equity to the main site, not this route
  alternates: {
    canonical: "/",
  },
};

export default function DobrodosliPage() {
  return <WelcomePage brand={site} />;
}
