"use client";

import { useState } from "react";
import { site } from "@/data/site";

/** Koliko kategorija se vidi dok je jelovnik zatvoren */
const PREVIEW_COUNT = 4;

export default function Menu() {
  const [open, setOpen] = useState(false);
  const categories = open ? site.menu : site.menu.slice(0, PREVIEW_COUNT);
  const canToggle = site.menu.length > PREVIEW_COUNT;

  function toggle() {
    if (open) {
      setOpen(false);
      const el = document.getElementById("meni");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }
    setOpen(true);
  }

  return (
    <section className="block-menu" id="meni">
      <div className="block-menu_inner">
        <header className="block-menu_head">
          <p className="block-menu_kicker">Od 1974</p>
          <h2 className="block-menu_title">Jelovnik</h2>
          <span className="block-menu_rule" aria-hidden="true" />
        </header>

        <div className="block-menu_chapters">
          {categories.map((category) => (
            <div key={category.title} className="block-menu_chapter">
              <h3>{category.title}</h3>
              {category.note ? (
                <p className="block-menu_note">{category.note}</p>
              ) : null}
              <ul>
                {category.items.map((item) => (
                  <li key={item.name} className="block-menu_row">
                    <span className="block-menu_name">{item.name}</span>
                    <span className="block-menu_price">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {canToggle ? (
          <div className="block-menu_toggle-wrap">
            <button
              type="button"
              className="block-menu_toggle"
              aria-expanded={open}
              onClick={toggle}
            >
              {open ? "Zatvori jelovnik" : "Pogledaj cijeli jelovnik"}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
