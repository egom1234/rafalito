# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Eclipse Chauffeur** — Premium chauffeur-driven car service for weddings, celebrations and private events.
Brand name: *Eclipse Chauffeur*. Tagline: *"Tu llegada, nuestra obra maestra."*
Language: Spanish. This is a static website with no build step.

## File structure

```
index.html      — Single-page landing (all sections) — production
css/styles.css  — All styles (custom properties + utility classes)
js/main.js      — Header scroll, mobile menu, FAQ accordion, scroll-reveal, form
test.html       — Isolated test environment (standalone, self-contained)
```

## Running locally

Open `index.html` directly in a browser, or use any static file server:

```bash
npx serve .          # or
python3 -m http.server 8080
```

## Key design system (CSS custom properties in `:root`)

| Variable | Purpose |
|---|---|
| `--accent` | Electric blue `#4db8ff` — primary interactive colour |
| `--surface-0..4` | Dark background layers |
| `--font-display` | Cormorant Garamond — all section titles |
| `--font-sans` | Space Grotesk — nav, labels, buttons, UI |
| `--font-body` | DM Sans — body copy |

## What to replace before going live

- WhatsApp number: every `wa.me/34600000000` link → real number.
- Email: `info@eclipsechauffeur.com` → real address.
- Service area: `[Indicar ciudad / comunidad autónoma]` in footer.
- `img-placeholder` divs → real `<img>` tags with `alt` text.
- Form `setTimeout` mock in `main.js` → real fetch to Formspree / backend.
- Footer social links (`href="#"`) → real Instagram / Facebook URLs.
- `og:image` meta tag → real social preview image.

## test.html — entorno de pruebas

Archivo independiente, sin dependencias externas de CSS/JS. Contiene todo inline (estilos y scripts en el mismo archivo). Marca: **Élite Drive**. Diseño futurista dorado (`--gold`) distinto al de `index.html`.

**Lo que tiene:**
- Cursor personalizado con anillo dorado (`.cursor` + `.cursor-dot`) — crece en `.is-hover` al pasar sobre elementos interactivos
- Secciones: nav fijo, hero, servicios (grid 3×2), flota (SVG inline de coches), eventos, proceso (4 pasos), testimonios, contacto, footer
- Scroll-reveal con clase `.reveal` → `.visible` via `IntersectionObserver`
- Animaciones de líneas verticales en el hero (`@keyframes scanline`)

**Convenciones internas:**
- Scroll-reveal: añadir clase `reveal` al elemento; se activa automáticamente
- Cursor hover: los elementos `a, button, input, select, textarea` ya togglean `.is-hover` vía JS — añadir nuevos interactivos al selector si hace falta
- Form: `<form id="contactForm">` con `novalidate`; el submit se gestiona en `form.addEventListener('submit')` al final del script
- Todos los `<label>` tienen `for="f-*"` y sus inputs tienen `id="f-*"` y `name` correspondiente

**No depende de** `css/styles.css` ni `js/main.js`. Cambios en test.html no afectan a index.html y viceversa.

## Architecture notes

- No framework, no bundler — vanilla HTML/CSS/JS.
- All sections are in one `index.html` file; navigation uses anchor `#id` links.
- Scroll-reveal uses `IntersectionObserver` with `[data-reveal]` attribute — add it to any new element to get the fade-up animation.
- FAQ accordion relies on `aria-controls` / `aria-expanded` matching `id` on the answer `div`.
- The form success state is CSS class `is-visible` toggled on `#formSuccess`.
- Git LFS is configured — large binary assets (photos, videos) should be tracked with `git lfs track`.
