# Auditoría BEE SMART · seguimiento de implementación

Base: GitHub main `213c0e9562cb00a6b4f9efab8fbfdc34ebfa7d4c`. Dominio: https://bee-smart.ai/.

## Cambios preparados

- Calendario compartido: 10 y 24 septiembre 2026, 7:30–10:30 p. m. online; 3 octubre 2026, 10:00 a. m.–1:00 p. m., San Francisco, Ciudad de Panamá, lugar por definir. UTC−5.
- Ocultación de sesiones iniciadas en el navegador, cada minuto. NO cierra opciones de Google Forms ni retira fechas del HTML exportado; mantener calendario y formulario tras cada sesión.
- Reserva sujeta a validación del pago, explicación de acceso Google para subir comprobante y presencia del facilitador.
- Diferenciación de curso abierto (3 h / $75 por persona) y capacitación corporativa privada (2½ h / desde USD 500 según alcance).
- Metadatos propios, canonical, sitemap, robots, favicon, Organization JSON-LD y noindex en la antigua página de agradecimiento.
- Imágenes WebP adaptativas con dimensiones, carga diferida bajo el primer bloque. Originales preservados. Reducciones de archivos NO equivalen a mediciones de transferencia o Core Web Vitals.
- Retirada de 795 reglas repetidas en estilos, menú modal accesible, controles táctiles y pausa del carrusel.
- Captación redirigida a Google Forms; no conservar formularios FormSubmit sin configurar.

## Formulario empresarial: publicado

Cuenta: hebouche@gmail.com.
Editor: https://docs.google.com/forms/d/10Xz2cSiN1-4hl8GbL7sKEbOMxRLZfLOfm5FnWuHqDG4/edit
Vista previa verificada: https://docs.google.com/forms/d/10Xz2cSiN1-4hl8GbL7sKEbOMxRLZfLOfm5FnWuHqDG4/preview
Enlace público verificado: https://docs.google.com/forms/d/e/1FAIpQLSdSyG_Qu6xG0i9Ku15CBVlPXNr534N1RL1J-uf-AJqPBXD5SA/viewform?usp=publish-editor

Siete preguntas obligatorias: servicio, nombre, empresa, correo, WhatsApp con código de país, necesidad, consentimiento de contacto. Sin pagos ni archivos. Resumen de respuestas no público. No exige sesión de Google por limitación de una respuesta ni recogida de correo verificado. Confirmación no promete contratación ni plazo de respuesta.

Autorizado y publicado para cualquier persona con el enlace, manteniendo las respuestas privadas. URL pública, siete campos y botón Enviar verificados. No se envió una solicitud de prueba ni se comprobó entrega de notificaciones por correo. `businessFormUrl` integrado en Contacto.

Formulario del curso existente: verificado en la vista pública. Ya muestra 3 octubre, 10:00–13:00, San Francisco, Panamá, lugar exacto por confirmar, tanto en descripción como en la opción de fecha. Mantiene $75, tres horas, pago por Yappy/Banco General y comprobante obligatorio de hasta 10 MB. No requirió modificar la fecha nuevamente.

## Revisión móvil: requisito de cierre

Método: página local temporal con iframe de anchos 360, 390, 430, 768 y 1280 px. Prueba de media queries reales dentro del marco; NO emulación de iOS, Android, Safari, teclado táctil ni dispositivo físico. La barra de scroll de Chrome resta 15 px al ancho de contenido.

- Portada: sin desbordamiento horizontal en los cinco anchos (contenido/scroll: 345/345, 375/375, 415/415, 753/753, 1265/1265).
- IA para Todos, Empresas, Contacto y Privacidad: mismos cinco anchos verificados, sin desbordamiento horizontal ni imágenes fallidas entre las ya cargadas. Capturas revisadas del hero del curso, calendario, hero empresarial y ambos bloques de captación.
- Menú a 390 px: abre modal, foco inicial en cerrar, bloqueo de scroll y cinco enlaces visibles de 62 px de alto. Captura revisada. Se amplió el CTA interno a un mínimo de 50 px tras inspección.
- Escape: cierra el diálogo, devuelve foco a Menú y restaura desplazamiento. El ciclo completo de Tab/Shift+Tab no pudo aislarse con fiabilidad en el marco de prueba; se conserva el comportamiento modal nativo de dialog. No equivale a certificación de accesibilidad.
- Cambio a escritorio con menú abierto: diálogo cerrado y scroll restaurado, verificado a 1280 px. Enlace Contáctenos del menú probado: navega a /contacto/ y deja el diálogo cerrado.
- Harness temporal retirado de `public` antes del build final; nunca se versiona ni publica. Las pruebas estáticas comprueban su ausencia.

## Validación y conexiones pendientes

Primera compilación Next de los cambios parciales: correcta. Pruebas contra export estático añadidas; exigir todas aprobadas después de integrar enlace empresarial y retirar harness.

Pendientes de datos/acceso real: GA4/GTM, Search Console y verificación DNS/sitemap, eventos clave y conversiones Ads, perfiles sociales exactos, revisión de políticas de cancelación/reprogramación y conservación, casos reales autorizados. No se han creado cuentas ni instalado IDs ficticios, campañas, píxeles o seguimiento sin configuración verificada.

Los atributos `data-event` son puntos de integración, NO envían eventos todavía. Un clic a Forms no es una solicitud enviada ni un pago confirmado; un clic a WhatsApp no es una conversación iniciada. No afirmar indexación, conversiones recibidas, rendimiento de campo ni pruebas de seguridad que no se han medido.
