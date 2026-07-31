import Image from "next/image";
import RevealOnView from "@/components/RevealOnView";

export default function Specialty() {
  return (
    <section className="block-specialty" id="specijalitet">
      <div className="block-specialty_stage">
        <Image
          src="/gal-razanj.jpg"
          alt="Jagnjetina na ražnju"
          fill
          sizes="100vw"
          className="block-specialty_photo"
        />

        <RevealOnView type="slide-x" className="block-specialty_panel">
          <h2>
            Vatra.
            <br />
            Vrijeme.
            <br />
            <em>Strpljenje.</em>
          </h2>
          <p>
            Nema tajne smjese i nema prečice. Samo dobro meso, žar od drveta i
            ruka koja zna kada je dosta.
          </p>
        </RevealOnView>
      </div>

      <div className="block-specialty_plate">
        <Image
          src="/gal-hrana-njeguski.jpg"
          alt="Njeguški stek sa kajmakom"
          fill
          sizes="100vw"
          className="block-specialty_plate-img"
        />
      </div>
    </section>
  );
}
