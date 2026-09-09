import { contact, SiteFooter, SiteHeader } from "../site-chrome";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("Privacidad | BEE SMART", "Información sobre los datos de contacto, solicitudes empresariales y comprobantes de reserva compartidos con BEE SMART.", "/privacidad/");

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <SiteHeader />
      <article className="section privacy-copy">
        <p className="eyebrow">PRIVACIDAD</p><h1>Uso responsable de tus datos.</h1>
        <p>BEE SMART utiliza la información que compartes para atender solicitudes, coordinar conversaciones y gestionar reservas. Contacto responsable: <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p>
        <h2>Qué recibimos</h2><p>Nombre, correo, teléfono y, en solicitudes empresariales, empresa, interés y necesidad. En reservas de IA para Todos también recibimos la sesión elegida, nivel de conocimiento, temas de interés y comprobante de pago.</p>
        <h2>Para qué los usamos</h2><p>Para responderte, recomendar el siguiente paso, validar pagos y comunicar información de tu sesión. Enviar un formulario de contacto no te suscribe a publicidad. No vendemos tus datos.</p>
        <h2>Formularios y servicios externos</h2><p>Las solicitudes se recopilan mediante Google Forms. Google almacena las respuestas y los archivos adjuntos; al abrir el formulario también aplican sus condiciones y política de privacidad. Subir un comprobante requiere iniciar sesión en Google. El sitio se aloja en Render; WhatsApp y el correo son canales alternativos de contacto y tienen sus propias condiciones.</p>
        <h2>Comprobantes y datos confidenciales</h2><p>Comparte únicamente lo necesario para identificar el pago. No envíes contraseñas, códigos de acceso, datos de tarjetas, historiales médicos ni bases de datos de tu empresa. Antes de compartir documentación confidencial de un proyecto, acordaremos un canal y las condiciones apropiadas.</p>
        <h2>Consulta, corrección o eliminación</h2><p>Puedes consultar, corregir o solicitar la eliminación de tu información escribiendo a <a href={`mailto:${contact.email}`}>{contact.email}</a>. Si alguna información debe conservarse para gestionar una reserva o atender una obligación aplicable, te lo explicaremos al responder a la solicitud.</p>
      </article>
      <SiteFooter />
    </main>
  );
}
