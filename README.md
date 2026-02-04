# IntelliToggle Website — Nuxt 3 Implementation

> Faithful recreation of the IntelliToggle landing page from the Figma design, built with **Nuxt 3 · Vue 3 · TailwindCSS**.

---

## Quick Start

```bash
npm install        # installs Nuxt 3 + @nuxtjs/tailwindcss
npm run dev        # http://localhost:3000
```

### Production build & static export (for Firebase / Vercel / GitHub Pages)

```bash
npm run generate   # outputs to /dist  (fully static)
```

---

## Hosted URL

| Host | URL |
|------|-----|
| GitHub Pages | https://wemi2.github.io/intellitoggle-website/# |

---

## Project Structure

```
intellitoggle/
├── app.vue                  # Root wrapper, global CSS import, <head> defaults
├── nuxt.config.ts           # Nuxt + TailwindCSS module config
├── tailwind.config.js       # Brand tokens: colors, fonts, shadows, animations
├── assets/css/global.css    # @tailwind directives + reusable component classes
├── layouts/default.vue      # Default layout shell
├── pages/
│   └── index.vue            # Home page – composes all sections
├── components/
│   ├── Navbar.vue           # Sticky nav with animated hamburger (interactive ✦)
│   ├── Hero.vue             # Lavender hero + countdown timer (interactive ✦)
│   ├── DashboardMockup.vue  # Pure-CSS replica of the app dashboard card
│   ├── BuiltForTeams.vue    # 3-card audience section
│   ├── Features.vue         # 2×2 feature grid
│   ├── DartCodeAI.vue       # Two-column AI promo + checklist
│   ├── TrustedBy.vue        # Logo strip
│   ├── Testimonials.vue     # 3 testimonial cards
│   ├── CTABanner.vue        # Purple rounded CTA block
│   └── Footer.vue           # 4-col footer + newsletter input
└── pixelay/
    ├── notes.md             # Comparison notes (see below)
    ├── pixelay-desktop.png  # Desktop overlay screenshot (add after Pixelay run)
    └── pixelay-mobile.png   # Mobile overlay screenshot  (add after Pixelay run)
```

---

## Interactive Elements

| # | Element | Location |
|---|---------|----------|
| 1 | **Mobile hamburger menu** – animated three-bar → X toggle with slide-down nav panel | `Navbar.vue` |
| 2 | **Live countdown timer** – ticks every second toward the Sep 15 deadline | `Hero.vue` |
| 3 | **Newsletter email input** – focusable, validated placeholder | `Footer.vue` |

---

## Pixelay Evidence

The `/pixelay` folder contains:

* `notes.md` – itemised list of expected pixel-level differences and their causes.
* `pixelay-desktop.png` / `pixelay-mobile.png` – overlay screenshots to be captured after a Pixelay run against the hosted URL. *(Placeholder filenames committed; swap in real captures before final submission.)*

---

## Tradeoffs & Shortcuts

1. **Inline sub-components** – Several small, single-use presentational pieces (e.g. `StatCard`, `ActivityRow`, `CheckItem`) are defined with `defineComponent` inside their parent `.vue` file rather than as separate files. This keeps the file count low and the components co-located, but a larger project would split them out.

2. **Logo-bar text badges instead of SVGs** – Sourcing and embedding the official Google Cloud / AWS / Azure / DigitalOcean / IBM brand marks requires checking their respective brand-usage policies. Text badges were used as a faithful stand-in.

3. **Avatar placeholders** – Real photograph assets were not exported from the Figma invite. Initials-based avatar circles maintain layout fidelity; swap in `<img>` tags when assets are available.

4. **No CMS / data layer** – All content is hard-coded in the Vue templates. A production version would pull testimonials, features, and flag data from a headless CMS or API.

### What I would do with more time

* Wire up the newsletter `<input>` to an actual email service (e.g. Mailchimp / ConvertKit).
* Add subtle scroll-triggered `fade-up` entrance animations via an Intersection Observer composable.
* Replace text logo badges with the real brand SVGs.
* Add unit tests for the countdown logic edge case (target date in the past).
* Run a full Lighthouse accessibility audit and tighten ARIA attributes.
