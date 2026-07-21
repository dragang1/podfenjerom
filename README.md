# Pod fenjerom

Web sajt restorana **Pod fenjerom** (Nova Topola, Gradiška).

## Development

```bash
npm install
npm run dev
```

Otvori [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

## SEO / dijeljenje

U Vercel Environment Variables postavi:

```
NEXT_PUBLIC_SITE_URL=https://tvoj-domen.com
```

Bez toga koristi se fallback `https://podfenjerom.vercel.app`.
