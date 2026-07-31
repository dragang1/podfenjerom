import Image from "next/image";
import RevealOnView from "@/components/RevealOnView";

export default function History() {
  return (
    <section className="block-history" id="istorija">
      <div className="block-history_band">
        <RevealOnView type="wipe" className="block-history_photo">
          <Image
            src="/gal-interior.jpg"
            alt="Stari enterijer restorana Pod fenjerom"
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
          <RevealOnView
            type="slide-x"
            delay={80}
            as="p"
            className="block-history_lead"
          >
            Smilja i Vukašin Stanišljević otvorili su restoran 1974. godine. Mali
            porodični posao u Novoj Topoli ubrzo je postao mjesto zbog kojeg se
            skretalo s puta.
          </RevealOnView>
        </div>
      </div>

      <div className="block-history_band block-history_band--flip">
        <RevealOnView type="wipe" className="block-history_photo" delay={60}>
          <Image
            src="/gal-interior-bar.jpg"
            alt="Šank i prostor za goste"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="block-history_img"
          />
        </RevealOnView>

        <div className="block-history_copy">
          <RevealOnView
            type="slide-x-right"
            delay={100}
            as="p"
            className="block-history_lead"
          >
            Tradicija se nastavila. Promijenile su se godine, ali ne i pravilo —
            gost se dočekuje kao na slavu.
          </RevealOnView>
          <RevealOnView
            type="line-mask"
            className="block-history_oath"
            delay={160}
            as="p"
          >
            Tradicija i kvalitet su naša glavna vrijednost.
          </RevealOnView>
        </div>
      </div>
    </section>
  );
}
