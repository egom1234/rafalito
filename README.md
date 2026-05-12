# Eclipse Chauffeur

Web corporativa para servicio de alquiler de coche con chófer para bodas, celebraciones y eventos privados.

## Descripción

Landing page premium de una sola página orientada a captación de reservas vía WhatsApp y formulario de contacto. El servicio es **siempre con chófer profesional** — no se alquila el vehículo sin conductor.

## Estructura

```
index.html       Producción — landing page completa
test.html        Entorno de pruebas independiente (Élite Drive)
css/styles.css   Sistema de diseño y estilos
js/main.js       Interactividad (menú, FAQ, scroll-reveal, formulario)
```

## Secciones de index.html

1. Header fijo con navegación y CTA
2. Hero con estadísticas
3. Aviso destacado: servicio siempre con chófer
4. Servicio con chófer — propuesta de valor
5. Ocasiones: bodas, aniversarios, pedidas, comuniones, bautizos, sesiones foto, eventos privados
6. Ventajas del servicio
7. El vehículo — specs y galería
8. Cómo funciona la reserva — 4 pasos
9. Galería visual
10. Testimonios
11. FAQ con acordeón
12. CTA final
13. Formulario de contacto
14. Footer con WhatsApp, redes y zona de servicio

## Ejecutar en local

```bash
npx serve .
# o
python3 -m http.server 8080
```

Abrir `http://localhost:8080` para `index.html` o `http://localhost:8080/test.html` para el entorno de pruebas.

## Personalización antes de publicar

- Número de WhatsApp: reemplazar `34600000000` en todos los enlaces `wa.me/`
- Email: `info@eclipsechauffeur.com` → dirección real
- Zona de servicio: `[Indicar ciudad / comunidad autónoma]` en el footer
- Imágenes: sustituir los `div.img-placeholder` por `<img>` reales
- Formulario: conectar el mock de `main.js` a Formspree u otro backend
- Redes sociales: actualizar los `href="#"` del footer

## Tecnología

HTML · CSS · JavaScript — sin frameworks ni dependencias de build. Git LFS configurado para assets binarios.
