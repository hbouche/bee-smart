# Google Analytics y Search Console — 9 de septiembre de 2026

## Propiedades creadas

- Cuenta GA4: BEE SMART, `407362241`.
- Propiedad: BEE SMART · bee-smart.ai, `553366054`.
- Flujo web: BEE SMART Web, `15747380800`, https://bee-smart.ai.
- ID público de medición: `G-XDFE688HHQ`.
- Zona horaria: Panamá (UTC−05:00). Moneda: USD.
- Search Console: propiedad de prefijo `https://bee-smart.ai/`, verificada mediante la etiqueta HTML en `app/layout.tsx`.
- Sitemap https://bee-smart.ai/sitemap.xml enviado y procesado; cinco páginas descubiertas. Esto no significa que todas estén indexadas.
- Vinculación Search Console → BEE SMART Web creada y confirmada en la interfaz de Analytics.

## Medición del sitio

La etiqueta se carga únicamente en bee-smart.ai y www.bee-smart.ai, tras aceptar la medición. No se carga en vistas previas ni cuando el visitante rechaza. La decisión puede cambiarse desde “Preferencias de privacidad” en el pie de página. Rechazar desactiva el envío y elimina las cookies de GA accesibles al sitio.

La configuración del flujo conserva vistas de página y desplazamiento. Las vistas por cambios del historial están desactivadas: la navegación actual usa enlaces nativos que recargan el documento. También están desactivadas la medición automática de formularios, búsqueda interna, clics salientes, vídeos y descargas.

Eventos propios: `registration_click`, `business_form_click`, `whatsapp_click` y `email_click`. Solo incluyen ubicación del botón y, cuando corresponde, un identificador de sesión permitido. Son clics de interés, no formularios completados, reservas, pagos ni ventas. Los formularios externos de Google no confirman su envío a esta etiqueta.

La URL enviada excluye parámetros arbitrarios y fragmentos; solo admite parámetros UTM de campaña con caracteres limitados. No incluir nombres, teléfonos ni otros datos personales en las campañas UTM. El referente se limita a su origen. No se envían respuestas de formularios ni comprobantes. Google Signals y personalización publicitaria están desactivados en la etiqueta; el consentimiento de publicidad se configura como denegado. Las opciones adicionales de intercambio de datos de la cuenta quedaron sin seleccionar.

## Comprobaciones anteriores a la publicación

- Compilación de producción con el flujo de Sites aprobada.
- Once pruebas de artefacto y analítica aprobadas; `npm test` incluye ambos conjuntos.
- Aviso revisado en navegador a 360 y 1280 px; aceptar, rechazar, persistencia al recargar y reapertura desde el pie de página comprobados.
- Aceptar en la vista previa no carga la etiqueta de producción.

Después del despliegue, comprobar la recepción de visitas y eventos en Tiempo real de Analytics. Los informes históricos y Search Console requieren que se acumulen datos. La publicación de la etiqueta no reemplaza esa comprobación.
