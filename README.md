# Tuty Packers & Movers — Website

Static React site for **Tuty Packers and Movers**, Thoothukudi. Eicher-only fleet, all-India service. Bilingual EN | தமிழ். Deployed via GitHub Pages.

## Stack

- Vite + React 18
- React Router (Hash-free routing, basename-aware)
- Framer Motion (page transitions, scroll reveal, hero parallax)
- i18next + react-i18next (EN / TA toggle)
- lucide-react icons

## Local development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # builds to dist/
npm run preview      # preview the production build
```

## Edit-to-update content

All business copy lives in JSON files under `src/i18n/` (English + Tamil strings) and `src/content/`:

- `src/i18n/en.json` — English strings (displayed copy + nav)
- `src/i18n/ta.json` — Tamil strings
- `src/content/contact.json` — phone, WhatsApp link, address, hours

Swap the **phone number** (`+91 80566 86614`) or **address** in:

- `src/content/contact.json` (used across the site)
- `src/i18n/en.json` and `src/i18n/ta.json` (only the displayed format)

## Deployment to GitHub Pages (one-time + per release)

1. Create an empty GitHub repo called `tutypackers-website` under your account.
2. Push this folder to the `main` branch:
   ```bash
   cd D:\project\Tutypackers
   git init
   git add .
   git commit -m "Initial Tuty Packers website"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/tutypackers-website.git
   git push -u origin main
   ```
3. On GitHub: **Settings → Pages → Build & deployment → Source = gh-pages branch, /(root)**
4. Publish:
   ```bash
   npm install
   npm run deploy
   ```
5. Live at `https://<YOUR_USERNAME>.github.io/tutypackers-website/`

If the repo is renamed, update `base: '/<newname>/'` in `vite.config.js` (and the `BrowserRouter basename` in `src/main.jsx`).

## Notes

- All icons and truck illustrations are inline SVGs (no external assets, no broken images on Pages).
- The phone number is the only conversion CTA; the contact form was intentionally omitted to keep the site 100% static.
- WhatsApp link opens `https://wa.me/918056686614` with no pre-filled message for privacy.
- i18n language preference is persisted in `localStorage` (`tuty_lang`).
