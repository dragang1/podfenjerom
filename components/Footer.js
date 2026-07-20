import Image from "next/image";
import { site } from "@/data/site";

function InstagramIcon() {
  return (
    <svg
      className="site-footer_icon"
      viewBox="0 0 24 24"
      width="15"
      height="15"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.25" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const phoneHref = site.phone
    ? `tel:${site.phone.replace(/\s/g, "")}`
    : null;

  return (
    <footer className="site-footer" id="lokacija">
      <div className="site-footer_map">
        <iframe
          title="Lokacija — Pod fenjerom, Nova Topola"
          src={site.mapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a
          href={site.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer_map-link"
        >
          Otvori kartu ↗
        </a>
      </div>

      <div className="site-footer_panel">
        <div className="site-footer_brand">
          <Image
            src="/fenjerlogo.png"
            alt=""
            width={96}
            height={96}
            className="site-footer_logo"
          />
          <div>
            <p className="site-footer_name">{site.name}</p>
            <p className="site-footer_tag">Restoran · Nova Topola · od 1971</p>
          </div>
        </div>

        <div className="site-footer_grid">
          <div className="site-footer_col">
            <p className="site-footer_label">Kontakt</p>
            <p>{site.location}</p>
            {site.phone ? (
              <p>
                <a href={phoneHref}>{site.phone}</a>
              </p>
            ) : null}
          </div>

          <div className="site-footer_col">
            <p className="site-footer_label">Radno vrijeme</p>
            <p>{site.hours}</p>
          </div>
        </div>

        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="site-footer_social-link"
        >
          <InstagramIcon />
          <span>Instagram</span>
        </a>
      </div>

      <p className="site-footer_copy">
        © {year} {site.name}
      </p>
    </footer>
  );
}
