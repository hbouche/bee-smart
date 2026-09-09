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
- Meta dataset / Pixel: BEE SMART Web, `1353476229901137`.
- Dominio de Meta: `bee-smart.ai`, ID `28394644560154416`, verificación mediante metaetiqueta en `app/layout.tsx`.

## Medición del sitio

Las etiquetas se cargan únicamente en bee-smart.ai y www.bee-smart.ai. El visitante puede elegir “Aceptar todo”, “Solo analítica” o “Rechazar”. “Solo analítica” carga GA4 sin Meta; “Aceptar todo” carga ambos. La decisión puede cambiarse desde “Preferencias de privacidad” en el pie de página. Rechazar desactiva el envío y elimina las cookies accesibles al sitio.

La configuración del flujo conserva vistas de página y desplazamiento. Las vistas por cambios del historial están desactivadas: la navegación actual usa enlaces nativos que recargan el documento. También están desactivadas la medición automática de formularios, búsqueda interna, clics salientes, vídeos y descargas.

Eventos propios: `registration_click`, `business_form_click`, `whatsapp_click` y `email_click`. Solo incluyen ubicación del botón y, cuando corresponde, un identificador de sesión permitido. Son clics de interés, no formularios completados, reservas, pagos ni ventas. Los formularios externos de Google no confirman su envío a esta etiqueta.

Meta recibe `PageView`; en IA para Todos también recibe `ViewContent`; los clics permitidos se envían como `Contact` con el tipo de contacto. No se utiliza `Lead` hasta poder confirmar un formulario enviado. Conversions API queda pendiente de un formulario propio y una ruta de servidor adecuada.

La URL enviada excluye parámetros arbitrarios y fragmentos; solo admite parámetros UTM de campaña con caracteres limitados. No incluir nombres, teléfonos ni otros datos personales en las campañas UTM. El referente se limita a su origen. No se envían respuestas de formularios ni comprobantes. Google Signals y personalización publicitaria están desactivados en la etiqueta; el consentimiento de publicidad se configura como denegado. Las opciones adicionales de intercambio de datos de la cuenta quedaron sin seleccionar.

## Comprobaciones anteriores a la publicación

- Compilación de producción con el flujo de Sites aprobada.
- Once pruebas de artefacto y analítica aprobadas; `npm test` incluye ambos conjuntos.
- Aviso revisado en navegador a 360 y 1280 px; aceptar, rechazar, persistencia al recargar y reapertura desde el pie de página comprobados.
- Aceptar en la vista previa no carga la etiqueta de producción.

GA4 recibió visitas, `registration_click` y `business_form_click` en Tiempo real. Después del despliegue de Meta, comprobar `PageView`, `ViewContent` y `Contact` en Eventos de prueba. Los informes históricos y Search Console requieren que se acumulen datos.
