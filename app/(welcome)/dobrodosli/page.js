import WelcomePage from "@/components/WelcomePage";
import { site } from "@/data/site";

export const metadata = {
  title: "Dobro došli",
  description:
    "Dobro došli u Pod fenjerom — jelovnik, Google recenzija, Instagram i sajt.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/dobrodosli",
  },
};

export default function DobrodosliPage() {
  return <WelcomePage brand={site} />;
}
