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

export function mailtoLink(
  email: string | undefined,
  borrador: string | undefined,
): string | null {
  if (!email) return null;
  const { asunto, cuerpo } = partirBorrador(borrador);
  const qs = new URLSearchParams();
  if (asunto) qs.set('subject', asunto);
  if (cuerpo) qs.set('body', cuerpo);
  const q = qs.toString();
  return q ? `mailto:${email}?${q}` : `mailto:${email}`;
}

export type Canal = 'email' | 'whatsapp' | 'llamada' | 'manual';

/**
 * Qué canal corresponde a este lead. El orden refleja el costo real por toque:
 * el correo se automatiza entero, WhatsApp necesita una persona, el teléfono
 * necesita una persona en horario hábil.
 */
export function canalSugerido(lead: {
  email?: string;
  telefono?: string;
}): Canal {
  if (lead.email) return 'email';
  if (lead.telefono) {
    const tel = normalizarTelefono(lead.telefono);
    // Los móviles chilenos son 56 9 XXXXXXXX: nueve dígitos tras el 56.
    // Un fijo no tiene WhatsApp, así que ese lead solo se abre llamando.
    if (tel && /^569\d{8}$/.test(tel)) return 'whatsapp';
    return 'llamada';
  }
  return 'manual';
}
