"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";

/** Koliko slika se vidi dok je galerija zatvorena */
const PREVIEW_COUNT = 6;

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const items = open ? site.gallery : site.gallery.slice(0, PREVIEW_COUNT);
  const canToggle = site.gallery.length > PREVIEW_COUNT;

  function toggle() {
    if (open) {
      setOpen(false);
      const el = document.getElementById("galerija");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    setOpen(true);
  }

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
        {items.map((item, index) => (
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

      {canToggle ? (
        <div className="block-gallery_toggle-wrap">
          <button
            type="button"
            className="block-gallery_toggle"
            aria-expanded={open}
            onClick={toggle}
          >
            {open ? "Prikaži manje" : "Vidi više"}
          </button>
        </div>
      ) : null}
    </section>
  );
}
