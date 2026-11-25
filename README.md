# Sunforce Beauty — Unofficial Demo Website

A bespoke editorial landing page concept built in Ukrainian for **Sunforce Beauty**, a beauty salon in Kyiv, Ukraine (`вул. Предславинська, 43/2`, near Palats Ukraina metro station).

> **Disclaimer:** This is an **unofficial design concept / demo prototype** created for presentation purposes. It is not the official website of Sunforce Beauty. All photography consists of editorial placeholders, and listed permanent makeup prices are indicative figures sourced from public Instagram archive highlights that must be confirmed with the salon prior to any official launch.

## Features

- **Editorial Design System**: Forest green (`#193C32`), botanical green (`#315347`), champagne gold (`#D8CB8E`), warm ivory (`#F4F0E8`), and muted stone (`#9A9A8E`) paired with *Cormorant Garamond* and *Manrope* (Cyrillic-ready).
- **Interactive Service Categories**: Five salon categories (*Косметологія*, *Перманентний макіяж*, *Послуги для волосся*, *Вії*, *Лазерні процедури*) with image and scope switching.
- **Permanent Makeup Price Ledger**: Filterable by facial zone (`Усі зони`, `Брови`, `Губи`, `Очі`) with tabular numerals and procedure selection.
- **Curated Gallery & Lightbox**: Asymmetric editorial gallery with accessible keyboard-navigable modal preview (`Escape`, `ArrowLeft`, `ArrowRight`).
- **Location & Instagram Booking**: Direct link to `@sunforce_cosmetology`, copy-to-clipboard Kyiv address, Google Maps link, and an architectural route schematic.
- **Responsive & Accessible**: Designed for desktop (`1440px`), laptop (`1024px`), tablet (`768px`), and mobile (`390px` / `320px`) with `prefers-reduced-motion` support.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- Motion (`motion/react`)
- Lucide Icons (`lucide-react`)

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

### Scripts

- `npm run dev` — Start the Vite development server on port `3000`
- `npm run build` — Build the production bundle into `dist/`
- `npm run preview` — Preview the production build locally
- `npm run lint` — Type-check with `tsc --noEmit`
- `npm run deploy` — Build `dist/` and publish to the `gh-pages` branch via `gh-pages`

## Deploying to GitHub Pages

### Option A — Automatic via GitHub Actions (Recommended)

This repository includes `.github/workflows/deploy.yml`, which builds `dist/` automatically on every push to `main`.

1. Push your code (including `.github/workflows/deploy.yml`) to `main`.
2. In your GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.

### Option B — Manual via `npm run deploy`

1. Ensure your local project is connected to your GitHub repository (`git remote -v`).
2. Run:

```bash
npm install
npm run deploy
```

3. In your GitHub repository, go to **Settings → Pages** and select **Deploy from a branch** → **`gh-pages`** (`/` root) — **do not** select `main`, because `main` contains unbuilt TypeScript/TSX source files and will show a blank page.

*(Alternative)*: You can also deploy the `dist/` output directly to **Vercel** or **Netlify** with build command `npm run build` and output directory `dist`.

## Customization

All salon copy, address details, Instagram links, service categories, pricing rows, and gallery items are centralized in `src/data/salonData.ts` for easy adaptation.
