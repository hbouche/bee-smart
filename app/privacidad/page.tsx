import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../site-chrome";

export const metadata: Metadata = {
  title: "Política de Privacidad | BEE SMART Panamá",
  description: "Uso responsable de datos, formularios, reservas por Google Calendar y preferencias de cookies en BEE SMART.",
  alternates: { canonical: "https://bee-smart.ai/privacidad/" },
};

export default function PrivacidadPage() {
  return (
    <main className="content-wrapper">
      <SiteHeader active="privacy" ctaHref="/agenda/" ctaLabel="Agendar 30 min" />

      <article className="privacy-container" aria-label="Texto legal completo">
        <div className="privacy-header">
          <div className="eyebrow">POLÍTICA DE PRIVACIDAD</div>
          <h1 className="privacy-title">Uso responsable de tus datos.</h1>
        </div>

        <div className="privacy-body">
          <p>
            BEE SMART utiliza la información que compartes para atender solicitudes, coordinar conversaciones y gestionar reservas. Contacto responsable: <a href="mailto:hb@bee-smart.ai">hb@bee-smart.ai</a>.
          </p>

          <h2>Qué recibimos</h2>
          <p>
            Nombre, correo, teléfono y, en solicitudes empresariales, empresa, interés y necesidad. En reservas de IA para Todos también recibimos la sesión elegida, nivel de conocimiento, temas de interés y comprobante de pago.
          </p>

          <h2>Para qué los usamos</h2>
          <p>
            Para responderte, recomendar el siguiente paso, validar pagos y comunicar información de tu sesión. Enviar un formulario de contacto no te suscribe a publicidad. No vendemos tus datos.
          </p>

          <h2>Formularios, agenda y servicios externos</h2>
          <p>
            Las solicitudes se recopilan mediante Google Forms. Las llamadas se reservan mediante Google Calendar y se realizan por Google Meet. Google gestiona la disponibilidad y los datos que compartes al reservar, como nombre, correo, teléfono, empresa y motivo de la llamada; al utilizar estos servicios también aplican sus condiciones y política de privacidad. Subir un comprobante en el formulario de IA para Todos requiere iniciar sesión en Google. El sitio se aloja en Render; WhatsApp y el correo son canales alternativos de contacto y tienen sus propias condiciones.
          </p>

          <h2 id="analytics">Medición del sitio y cookies</h2>
          <p>
            Si eliges «Solo analítica» o «Aceptar todo», Google Analytics recibe información sobre las páginas visitadas, origen de las visitas, dispositivo, ubicación aproximada e interacciones con nuestros botones. Si eliges «Aceptar todo», Meta Pixel también mide visitas y clics de contacto para ayudarnos a evaluar nuestras campañas publicitarias. Estas etiquetas se cargan únicamente después de tu elección. Puedes rechazar la medición o retirar tu permiso en «Preferencias de privacidad», al pie de cualquier página; el sitio, la agenda y los formularios seguirán disponibles.
          </p>
          <p>
            Guardamos tu decisión en este navegador. No enviamos a estas plataformas las respuestas de los formularios, comprobantes de pago, nombres, correos ni teléfonos de contacto. Los clics hacia Google Calendar, Google Forms, WhatsApp y correo indican interés; no confirman una reserva, inscripción, pago o conversación. La personalización publicitaria de Google permanece desactivada. Consulta también <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noreferrer">cómo utiliza Google la información de sitios que usan sus servicios</a> y la <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noreferrer">política de privacidad de Meta</a>.
          </p>

          <h2>Comprobantes y datos confidenciales</h2>
          <p>
            Comparte únicamente lo necesario para identificar el pago. No envíes contraseñas, códigos de acceso, datos de tarjetas, historiales médicos ni bases de datos de tu empresa. Antes de compartir documentación confidencial de un proyecto, acordaremos un canal y las condiciones apropiadas.
          </p>

          <h2>Consulta, corrección o eliminación</h2>
          <p>
            Puedes consultar, corregir o solicitar la eliminación de tu información escribiendo a <a href="mailto:hb@bee-smart.ai">hb@bee-smart.ai</a>. Si alguna información debe conservarse para gestionar una reserva o atender una obligación aplicable, te lo explicaremos al responder a la solicitud.
          </p>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
