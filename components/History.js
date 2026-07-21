import Image from "next/image";
import RevealOnView from "@/components/RevealOnView";

export default function History() {
  return (
    <section className="block-history" id="istorija">
      <RevealOnView type="wipe" className="block-history_photo">
        <Image
          src="/interior.jpg"
          alt="Unutrašnjost restorana Pod fenjerom"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="block-history_img"
        />
      </RevealOnView>

      <div className="block-history_copy">
        <RevealOnView type="slide-x-right">
          <p className="block-kicker">1974—danas</p>
          <h2>Tradicija</h2>
        </RevealOnView>

        <div className="block-history_columns">
          <RevealOnView type="slide-x" delay={80}>
            <p>
              Smilja i Vukašin Stanišljević otvorili su restoran 1971. godine.
              Mali porodični posao u Novoj Topoli ubrzo je postao mjesto zbog
              kojeg se skretalo s puta.
            </p>
          </RevealOnView>
          <RevealOnView type="slide-x-right" delay={140}>
            <p>
              Danas restoran vode njihov sin Predrag i supruga Divna.
              Promijenile su se godine, ali ne i pravilo gost se dočekuje kao na
              slavu.
            </p>
          </RevealOnView>
        </div>

        <RevealOnView
          type="line-mask"
          className="block-history_oath"
          delay={180}
          as="p"
        >
          Tradicija i kvalitet su naša glavna vrijednost.
        </RevealOnView>
      </div>
    </section>
  );
}
