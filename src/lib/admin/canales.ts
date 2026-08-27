/**
 * Convierte un lead en la acción más barata posible para quien la ejecuta.
 *
 * El correo se puede automatizar de punta a punta; WhatsApp y LinkedIn no. Para
 * esos, lo mejor que puede hacer el panel es dejar el mensaje escrito y a un
 * click de la app correcta, para que el trabajo manual sea apretar enviar.
 */

/**
 * Normaliza un teléfono chileno a formato internacional sin signos, como lo
 * espera wa.me.
 *
 * Acepta lo que haya en la base: "+56 9 7779 4059", "56978949082", "41 249 0012".
 * A los fijos regionales sin código de país les antepone 56.
 */
export function normalizarTelefono(raw: string | undefined): string | null {
  if (!raw) return null;
  const digits = raw.replace(/\D/g, '');
  if (!digits) return null;
  if (digits.startsWith('56')) return digits;
  // Móvil nacional escrito como 9XXXXXXXX
  if (digits.length === 9 && digits.startsWith('9')) return `56${digits}`;
  // Fijo regional: código de área + número
  if (digits.length >= 8 && digits.length <= 9) return `56${digits}`;
  return digits;
}

/**
 * Link que abre WhatsApp con el mensaje ya escrito.
 *
 * OJO: wa.me no puede adjuntar archivos — solo prefilla texto. El mockup se
 * adjunta a mano en la conversación, por eso el panel lo muestra al lado.
 */
export function waLink(
  telefono: string | undefined,
  mensaje: string | undefined,
): string | null {
  const tel = normalizarTelefono(telefono);
  if (!tel) return null;
  const texto = (mensaje ?? '').trim();
  return texto
    ? `https://wa.me/${tel}?text=${encodeURIComponent(texto)}`
    : `https://wa.me/${tel}`;
}

/** Separa un borrador "Asunto: X\n\ncuerpo" en sus partes. */
export function partirBorrador(borrador: string | undefined): {
  asunto: string;
  cuerpo: string;
} {
  const texto = (borrador ?? '').trim();
  if (!texto) return { asunto: '', cuerpo: '' };
  const m = texto.match(/^\s*asunto\s*:\s*(.+?)\n+([\s\S]*)$/i);
  if (m) return { asunto: m[1].trim(), cuerpo: m[2].trim() };
  return { asunto: '', cuerpo: texto };
}

/**
 * Compositor de Gmail en el navegador, con destinatario, asunto y cuerpo ya
 * puestos.
 *
 * Reemplaza a `mailto:`, que depende de que el sistema tenga un cliente de
 * correo configurado. En un Mac que usa Gmail en el navegador, un `mailto:` no
 * hace absolutamente nada al hacer click — parece que el botón está roto.
 */
export function gmailLink(
  email: string | undefined,
  borrador: string | undefined,
): string | null {
  if (!email) return null;
  const { asunto, cuerpo } = partirBorrador(borrador);
  const qs = new URLSearchParams({ view: 'cm', fs: '1', to: email });
  if (asunto) qs.set('su', asunto);
  if (cuerpo) qs.set('body', cuerpo);
  return `https://mail.google.com/mail/?${qs}`;
}

export type Canal = 'email' | 'whatsapp' | 'consulta' | 'llamada' | 'manual';

/**
 * Qué canal corresponde a este lead.
 *
 * POLÍTICA: el primer contacto en frío va SIEMPRE por correo.
 *
 * WhatsApp no se usa para prospectar, por tres razones que se refuerzan entre
 * sí: es un canal personal donde nadie pidió recibir ofertas; la política de
 * WhatsApp Business prohíbe el mensaje comercial no solicitado y lo castiga
 * baneando el número —el mismo número del que depende una línea de negocio de
 * la empresa—; y contradice el producto que vendemos, que existe para atender
 * a quien eligió escribir.
 *
 * Por eso WhatsApp se habilita únicamente cuando el lead YA respondió. Ahí deja
 * de ser intrusión y pasa a ser la conversación que él abrió. El primer correo
 * ofrece el número; el lead decide si lo usa.
 *
 * La llamada queda como investigación, no como venta: sirve para preguntar el
 * nombre y el correo de quien corresponde, no para ofrecer nada por teléfono.
 */
export function canalSugerido(lead: {
  email?: string;
  telefono?: string;
  respondio?: boolean;
}): Canal {
  const tel = normalizarTelefono(lead.telefono);
  // Los móviles chilenos son 56 9 XXXXXXXX. Un fijo no tiene WhatsApp.
  const esMovil = Boolean(tel && /^569\d{8}$/.test(tel));

  if (lead.respondio && esMovil) return 'whatsapp';
  if (lead.email) return 'email';
  // Sin correo y con móvil publicado: la excepción de consulta (ver abajo).
  if (esMovil) return 'consulta';
  if (tel) return 'llamada';
  return 'manual';
}

/** Primer nombre utilizable de un campo que puede traer cargos y varias personas. */
function primerNombre(contacto: string): string {
  const limpio = contacto
    .split(/[·|,;/]/)[0]
    .replace(/\([^)]*\)/g, '')
    .trim();
  const token = limpio.split(/\s+/)[0] ?? '';
  return /^[A-Za-zÁÉÍÓÚÑáéíóúñ]{2,}$/.test(token) ? token : '';
}

/**
 * Mensaje de consulta por WhatsApp: la única excepción a "el primer contacto va
 * por correo", y solo cuando la empresa no publica ningún correo.
 *
 * No vende nada. Dice de dónde salió el número, pide una dirección, y explica
 * por qué prefiere el correo. Un mensaje, sin insistir: si no contestan, esa
 * es la respuesta.
 *
 * Se genera acá, en código, y NO sale del campo de borrador a propósito. Un
 * texto editable termina convirtiéndose en pitch tarde o temprano; uno generado
 * no puede.
 */
export function mensajeConsulta(empresa: string, contacto: string): string {
  const nombre = primerNombre(contacto);
  const saludo = nombre ? `Hola ${nombre}, buen día.` : 'Buen día.';
  return `${saludo} Soy Darío Ramírez, de Apps del Sur, en Talca.

Encontré este número publicado como contacto de ${empresa} y le escribo por acá porque no encontré un correo.

No quiero ocuparle el chat con una propuesta: ¿a qué dirección se la puedo enviar? Prefiero mandársela por correo, donde la pueda leer con calma.

Gracias.`;
}

/** Link de WhatsApp para la consulta, con el texto generado y no el borrador. */
export function waConsultaLink(
  telefono: string | undefined,
  empresa: string,
  contacto: string,
): string | null {
  const tel = normalizarTelefono(telefono);
  if (!tel) return null;
  return `https://wa.me/${tel}?text=${encodeURIComponent(mensajeConsulta(empresa, contacto))}`;
}
