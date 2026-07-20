import RevealOnView from "@/components/RevealOnView";

export default function SloganBanner() {
  return (
    <section className="block-banner" aria-label="Anegdota">
      <div className="block-banner_inner">
        <p className="block-banner_kicker">Anegdota</p>
        <RevealOnView type="slide-x" as="p" className="block-banner_text">
          Nekoliko puta ovdje je ručao prvi čovjek “formule jedan” Berni Eklston
          kada je dolazio u posjetu porodici svoje supruge, a jednom prilikom na
          njegov zahtjev ispekli smo jagnje i poslali mu u Englesku. Kada smo sve
          pripremili, njegovi prijatelji su pečenje odvezli do Zagreba, gdje je
          privatni avion gospodina Eklstona čekao da specijalitet iz naše kuće
          krene put Engleske.
        </RevealOnView>
      </div>
    </section>
  );
}
