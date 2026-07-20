"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

const NAV_LINKS = [
  { href: "#meni", label: "Jelovnik" },
  { href: "#istorija", label: "Istorija" },
  { href: "#lokacija", label: "Lokacija" },
  {
    href: site.instagram,
    label: "Instagram",
    external: true,
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("nav-open", open);
    return () => {
      document.documentElement.classList.remove("nav-open");
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function closeMenu() {
    setOpen(false);
  }

  function goHome(e) {
    closeMenu();
    const atHome =
      window.location.pathname === "/" || window.location.pathname === "";
    if (!atHome) return;

    e.preventDefault();
    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <header
      className={`site-header${open ? " is-open" : ""}${scrolled ? " is-scrolled" : ""}`}
    >
      <div className="header-bar">
        <div className="header-brand-row">
          <Link
            href="/"
            className="brandmark"
            aria-label="Pod fenjerom — početna"
            onClick={goHome}
          >
            <Image
              src="/fenjerlogo.png"
              alt=""
              width={280}
              height={280}
              className="brandmark-logo"
              priority
            />
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Zatvori meni" : "Otvori meni"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`menu-toggle-icon${open ? " open" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>

        <nav className="nav-desktop" aria-label="Glavna navigacija">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav
          id="mobile-nav"
          className={`nav-mobile${open ? " open" : ""}`}
          aria-label="Mobilna navigacija"
          aria-hidden={!open}
        >
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div
        className={`nav-backdrop${open ? " open" : ""}`}
        onClick={closeMenu}
        aria-hidden={!open}
      />
    </header>
  );
}
