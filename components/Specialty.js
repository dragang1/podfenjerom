import Image from "next/image";
import RevealOnView from "@/components/RevealOnView";

export default function Specialty() {
  return (
    <section className="block-specialty" id="specijalitet">
      <div className="block-specialty_layout">
        <div className="block-specialty_stage">
          <Image
            src="/razanj.webp"
            alt="Jagnjetina na ražnju nad vatrom"
            fill
            sizes="(max-width: 900px) 100vw, 65vw"
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

        <div className="block-specialty_aside">
          <Image
            src="/jagnjetina.png"
            alt="Jagnjetina servirana na stolu"
            fill
            sizes="(max-width: 900px) 100vw, 35vw"
            className="block-specialty_aside-img"
          />
        </div>
      </div>
    </section>
  );
}
