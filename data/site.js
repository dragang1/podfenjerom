export const site = {
  name: "Pod fenjerom",
  phone: "+387 65 224 429",
  hours: "Svakim danom 7–23",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=45.0548117,17.3084218&z=16&hl=sr&output=embed",
  mapLink: "https://www.google.com/maps?cid=13201239050278637299",
  instagram: "https://www.instagram.com/pod_fenjerom/",
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJ0a4sJt73XUcR847fGvk4NLc",
  logo: "/fenjerlogo.png",
  welcome: {
    headline: "Dobro došli",
    locationLine: "Nova Topola",
    actions: [
      {
        id: "menu",
        label: "🍽 Pogledajte jelovnik",
        href: "/#meni",
        external: false,
      },
      {
        id: "review",
        label: "⭐ Ostavite Google recenziju",
        hrefKey: "googleReviewUrl",
        external: true,
      },
      {
        id: "instagram",
        label: "📸 Zapratite nas na Instagramu",
        hrefKey: "instagram",
        external: true,
      },
      {
        id: "site",
        label: "🌐 Posjetite naš sajt",
        href: "/",
        external: false,
      },
    ],
  },
  gallery: [
    { src: "/gal-hrana-pecenje.jpg", alt: "Pečenje servirano na plati" },
    { src: "/gal-hrana-pecenje-2.jpg", alt: "Pečenje na srebrnom pladnju" },
    { src: "/gal-hrana-mjesano.jpg", alt: "Miješano meso sa roštilja" },
    { src: "/gal-hrana-rostilj.jpg", alt: "Roštilj specijalitet na plati" },
    { src: "/gal-hrana-fenjer.jpg", alt: "Fenjer plata — roštilj specijalitet" },
    { src: "/gal-hrana-karadjordjeva.jpg", alt: "Karađorđeva šnicla" },
    { src: "/gal-hrana-njeguski.jpg", alt: "Njeguški stek sa kajmakom" },
    { src: "/gal-hrana-porcija.jpg", alt: "Porcija sa roštilja" },
    { src: "/gal-razanj.jpg", alt: "Jagnjetina na ražnju" },
    { src: "/gal-interior.jpg", alt: "Unutrašnjost restorana Pod fenjerom" },
    { src: "/gal-interior-novo.jpg", alt: "Trpezarija restorana Pod fenjerom" },
    { src: "/gal-interior-sala.jpg", alt: "Sala restorana Pod fenjerom" },
    { src: "/gal-interior-bar.jpg", alt: "Šank i prostor za goste" },
    { src: "/gal-interior-banquet.jpg", alt: "Sala za proslave" },
    { src: "/gal-restoran_fasada.jpg", alt: "Restoran Pod fenjerom" },
  ],
  menu: [
    {
      title: "Doručak",
      note: "Doručak se poslužuje do 12:00",
      items: [
        { name: "2 jaja, 2 kranjske kobasice (sir, kajmak)", price: "10 KM" },
        {
          name: "2 jaja, 2 kom hamburška slanina (sir, kajmak)",
          price: "10 KM",
        },
        { name: "Kajgana 3 jaja", price: "6 KM" },
        { name: "Omlet — šunka", price: "9 KM" },
        { name: "Omlet — sir", price: "8 KM" },
      ],
    },
    {
      title: "Sindikalni doručak",
      items: [
        { name: "Jagnjeća džigerica u lepinji sa pavlakom", price: "7 KM" },
        { name: "Pljeskavica u lepinji", price: "7 KM" },
        { name: "Pileća džigerica u lepinji", price: "7 KM" },
        { name: "Svinjske krpice u lepinji", price: "7 KM" },
        { name: "Pileće krpice u lepinji", price: "7 KM" },
      ],
    },
    {
      title: "Hladno predjelo",
      items: [
        { name: "Hladna plata (pršut, kulen, sir)", price: "20 KM" },
        { name: "Pršut 100g", price: "10 KM" },
        { name: "Kulen 100g", price: "10 KM" },
        { name: "Gauda 100g", price: "7 KM" },
        { name: "Feta sir 100g", price: "6 KM" },
        { name: "Užički kajmak (kugla)", price: "2,50 KM" },
      ],
    },
    {
      title: "Toplo predjelo",
      items: [
        { name: "Pohovane palačinke (sir, šunka)", price: "12 KM" },
        { name: "Pohovane palačinke (sir)", price: "12 KM" },
        { name: "Uštipci sa kajmakom", price: "12 KM" },
        { name: "Šampinjoni sa žara", price: "8 KM" },
        { name: "Slani plačinci", price: "12 KM" },
      ],
    },
    {
      title: "Čorbe i variva",
      items: [
        { name: "Teleća čorba", price: "8 KM" },
        { name: "Pasulj sa kranjskom kobasicom", price: "8 KM" },
      ],
    },
    {
      title: "Jela po narudžbi",
      items: [
        { name: "Jagnjetina porcija 300g", price: "19,50 KM" },
        { name: "Hladna jagnjetina (ako je ima)", price: "40 KM" },
        {
          name: "Njeguški stek (svinjski lascare punjen kajmakom i sirom, rolovan pršutom, pekarski krompir + grilovano povrće)",
          price: "20 KM",
        },
        { name: "Karađorđeva šnicla (pomfrit + riža)", price: "21 KM" },
        {
          name: "Teleći medaljoni u braten sosu (pomfrit + bareno povrće)",
          price: "28 KM",
        },
        {
          name: "Pileći file u šampinjon sosu (pomfrit + riža)",
          price: "18 KM",
        },
        { name: "Bečka šnicla (pomfrit)", price: "16 KM" },
        { name: "Pariška šnicla (pomfrit)", price: "16 KM" },
        { name: "Pileća bečka šnicla (pomfrit)", price: "—" },
        {
          name: "Biftek (pekarski krompir + grilovano povrće)",
          price: "35 KM",
        },
        {
          name: "Banjalučka šnicla u braten sosu (sa pršutom i gauda sirom + bareni krompir)",
          price: "18 KM",
        },
      ],
    },
    {
      title: "Jela sa roštilja",
      items: [
        {
          name: "Fenjer plata (pljeskavica, pileći ražnjić, svinjski ražnjić, svinjski vrat, 2 peke, 2 ćevapa, 2 kobasice, batak, mala karađorđeva šnicla, mali njeguški stek, lepinje)",
          price: "39 KM",
        },
        {
          name: "Miješano meso (pomfrit, riža, urnebes, lepinja)",
          price: "20 KM",
        },
        { name: "Svinjski vrat (pekarski krompir, lepinja)", price: "16 KM" },
        {
          name: "Gurmanska pljeskavica (peka, krompir, lepinja)",
          price: "18 KM",
        },
        { name: "Pljeskavica (pomfrit, lepinja)", price: "14 KM" },
        { name: "Pileći batak (riža, pomfrit, lepinja)", price: "15 KM" },
        { name: "Pileći file (pomfrit, lepinja)", price: "16 KM" },
        { name: "Pileći ražnjići (pomfrit, lepinja)", price: "16 KM" },
        { name: "Svinjski ražnjići (pomfrit, lepinja)", price: "15 KM" },
        { name: "Peke (pomfrit, lepinja)", price: "14 KM" },
        { name: "Kobasice domaće (pomfrit, lepinja)", price: "12 KM" },
        { name: "Ćevapi", price: "10 KM" },
      ],
    },
    {
      title: "Prilozi",
      items: [
        { name: "Pomfrit", price: "4,50 KM" },
        { name: "Pekarski krompir", price: "5 KM" },
        { name: "Riža", price: "3 KM" },
        { name: "Bareno povrće", price: "6 KM" },
        { name: "Grilovano povrće", price: "6 KM" },
        { name: "Pavlaka", price: "2 KM" },
        { name: "Ajvar", price: "2 KM" },
        { name: "Pogačice", price: "—" },
      ],
    },
    {
      title: "Salate",
      items: [
        { name: "Šopska", price: "6 KM" },
        { name: "Srpska", price: "5,50 KM" },
        { name: "Miješana salata", price: "5 KM" },
        { name: "Sezonska salata", price: "5 KM" },
        { name: "Fafarone kisele", price: "1,50 KM" },
        { name: "Luk", price: "3 KM" },
        { name: "Ljuta paprika svježa", price: "3 KM" },
      ],
    },
    {
      title: "Dezert",
      items: [
        { name: "Baklava domaća", price: "6 KM" },
        { name: "Palačinke (razna punjenja)", price: "6 KM" },
        { name: "Sladoled 1 kugla (vanilija, čokolada)", price: "2 KM" },
        {
          name: "Fenjer palačinci (3 palačinke + sladoled + voće)",
          price: "10 KM",
        },
        { name: "Dnevni kolač", price: "6 KM" },
      ],
    },
  ],
};
