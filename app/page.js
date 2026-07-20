import Header from "@/components/Header";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Specialty from "@/components/Specialty";
import Menu from "@/components/Menu";
import SloganBanner from "@/components/SloganBanner";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <History />
      <Specialty />
      <Menu />
      <SloganBanner />
      <Gallery />
      <Footer />
    </main>
  );
}
