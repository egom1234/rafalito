# Rafalito Car Events

Web corporativa para servicio de chófer privado para bodas, celebraciones y eventos privados.

## Descripción

Landing page premium de una sola página orientada a captación de reservas vía WhatsApp y formulario de contacto. El servicio es **siempre con chófer profesional** — no se alquila el vehículo sin conductor.

## Estructura

```
index.html   Landing page completa, autocontenida (CSS y JS inline)
```

## Ejecutar en local

```bash
npx serve .
# o
python3 -m http.server 8080
```

Abrir `http://localhost:8080`.

## Personalización antes de publicar

- WhatsApp / teléfono: reemplazar `+34 600 000 000`
- Email: `info@rafalitocarevents.com` → dirección real
- Zona de servicio en el footer
- Imágenes placeholder → `<img>` reales
- Formulario: conectar el mock con Formspree u otro backend
- Redes sociales: actualizar los `href="#"` del footer

## Tecnología

HTML · CSS · JavaScript — sin frameworks ni dependencias de build. Git LFS configurado para assets binarios.
