import { site } from "@/data/site";

export default function Menu() {
  return (
    <section className="block-menu" id="meni">
      <div className="block-menu_inner">
        <header className="block-menu_head">
          <p className="block-menu_kicker">Od 1971</p>
          <h2 className="block-menu_title">Jelovnik</h2>
          <span className="block-menu_rule" aria-hidden="true" />
        </header>

        <div className="block-menu_chapters">
          {site.menu.map((category) => (
            <div key={category.title} className="block-menu_chapter">
              <h3>{category.title}</h3>
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
      </div>
    </section>
  );
}
