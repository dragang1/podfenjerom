import Image from "next/image";

export default function Hero() {
  return (
    <section className="block-hero" aria-label="Početna">
      <div className="block-hero_media" aria-hidden="true">
        <Image
          src="/lamb.avif"
          alt=""
          fill
          priority
          sizes="100vw"
          className="block-hero_photo"
        />
        <div className="block-hero_scrim" />
      </div>

      <div className="block-hero_content">
        <p className="block-hero_eyebrow">Nova Topola · od 1971</p>
        <h1 className="block-hero_title">
          <span className="block-hero_title-main">Pod fenjerom</span>
        </h1>
        <p className="block-hero_line">
          Jagnjetina s ražnja. Stol koji se pamti.
        </p>
        <div className="block-hero_actions">
          <a href="#meni" className="block-hero_cta">
            Jelovnik
          </a>
          <a href="#lokacija" className="block-hero_cta block-hero_cta--ghost">
            Lokacija
          </a>
        </div>
      </div>
    </section>
  );
}
