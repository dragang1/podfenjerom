import Image from "next/image";
import Link from "next/link";

function resolveActionHref(action, brand) {
  if (action.href) return action.href;
  if (!action.hrefKey) return "";
  return brand[action.hrefKey] || "";
}

export default function WelcomePage({ brand }) {
  const welcome = brand.welcome;
  const actions = (welcome?.actions || [])
    .map((action) => ({
      ...action,
      href: resolveActionHref(action, brand),
    }))
    .filter((action) => Boolean(action.href));

  return (
    <main className="welcome">
      <div className="welcome_inner">
        <header className="welcome_brand">
          <h1 className="welcome_headline">{welcome.headline}</h1>
          <Image
            src={brand.logo || "/fenjerlogo.png"}
            alt=""
            width={160}
            height={160}
            className="welcome_logo"
            priority
          />
          <p className="welcome_name">{brand.name}</p>
          <p className="welcome_location">{welcome.locationLine}</p>
        </header>

        <nav className="welcome_actions" aria-label="Brze akcije">
          {actions.map((action, index) => {
            const style = { "--welcome-delay": `${80 + index * 50}ms` };

            if (action.external) {
              return (
                <a
                  key={action.id}
                  href={action.href}
                  className="welcome_btn"
                  style={style}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {action.label}
                </a>
              );
            }

            return (
              <Link
                key={action.id}
                href={action.href}
                className="welcome_btn"
                style={style}
              >
                {action.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </main>
  );
}
