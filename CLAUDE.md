# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**Rafalito Car Events** — Chófer privado para bodas, celebraciones y eventos privados.
Idioma: español. Sitio estático, sin build step.

## Estructura

```
index.html   — Landing page única, autocontenida (CSS y JS inline)
```

No hay dependencias externas de CSS/JS. Todo el estilo y la interactividad viven dentro de `index.html`.

## Ejecutar en local

Abrir `index.html` directamente en el navegador, o servir como estático:

```bash
npx serve .          # o
python3 -m http.server 8080
```

## Sistema de diseño (CSS custom properties en `:root`)

| Variable | Propósito |
|---|---|
| `--bg` / `--surface` / `--surface-2` | Fondos cálidos sobre crema |
| `--ink` / `--ink-soft` / `--ink-muted` | Jerarquía de texto |
| `--accent` `#9B7D56` | Dorado tostado — color de marca |
| `--accent-pale` | Tono suave del acento para fondos |
| `--line` | Bordes y divisores |

Tipografías: Cormorant Garamond (display) + DM Sans (texto).

## Convenciones internas

- **Scroll-reveal**: añadir `data-reveal` al elemento; se anima al entrar en viewport vía `IntersectionObserver`.
- **Formulario**: `<form id="cform">` con `novalidate`. El submit se gestiona al final del `<script>` — actualmente mock con `setTimeout`.
- **Labels**: cada `<label for="f-*">` empareja con su input `id="f-*"` y `name` correspondiente.
- **Anclas**: la navegación usa enlaces `#id` a las secciones de la misma página.

## A reemplazar antes de publicar

- WhatsApp / teléfono: `+34 600 000 000` → número real.
- Email: `info@rafalitocarevents.com` → dirección real.
- Zona de servicio en el footer.
- Imágenes placeholder → `<img>` reales con `alt`.
- Mock del formulario (`setTimeout`) → fetch a Formspree o backend propio.
- Enlaces sociales del footer (`href="#"`) → URLs reales.
- Meta `og:image` → preview social real.

## Notas de arquitectura

- Sin framework, sin bundler — HTML/CSS/JS vanilla.
- Todo en un único `index.html`; navegación con anclas.
- Git LFS configurado — assets binarios grandes (fotos, vídeos) deberían trackearse con `git lfs track`.
