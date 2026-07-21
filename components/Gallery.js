import Image from "next/image";
import { site } from "@/data/site";

export default function Gallery() {
  return (
    <section className="block-gallery" id="galerija">
      <div className="block-gallery_head">
        <div>
          <p className="block-kicker">Galerija</p>
          <h2>
            Bez namještanja.
            <br />
            <em>Kako jeste.</em>
          </h2>
        </div>
      </div>

      <div className="block-gallery_grid">
        {site.gallery.map((item, index) => (
          <figure
            key={item.src}
            className={`block-gallery_frame block-gallery_frame--${index + 1}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className="block-gallery_photo"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
