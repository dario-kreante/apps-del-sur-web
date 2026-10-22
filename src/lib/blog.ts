export const blogTopics = [
  { id: 'ia', label: 'IA para pymes', description: 'Elegir un primer proyecto, preparar datos y medir resultados.' },
  { id: 'automatizacion', label: 'WhatsApp y automatización', description: 'Agenda, atención y seguimiento con intervención humana.' },
  { id: 'campo', label: 'Cuaderno de campo', description: 'Registro de labores, temporeros y costos por hectárea.' },
  { id: 'inversion', label: 'Costos y financiamiento', description: 'Presupuestos, ROI y opciones de fondos públicos.' },
  { id: 'datos', label: 'Datos y cumplimiento', description: 'Privacidad y criterios para trabajar con información sensible.' },
  { id: 'visibilidad', label: 'Visibilidad en buscadores e IA', description: 'Contenido útil para que encuentren y entiendan tu negocio.' },
];
export function topicFor(slug: string) {
  const id = slug.startsWith('ley-') ? 'datos'
    : slug.startsWith('como-aparecer-') ? 'visibilidad'
    : /roi|cuanto-cuesta|fondos-financiamiento|guia-financiamiento/.test(slug) ? 'inversion'
    : /agente-ia|crear-agente/.test(slug) ? 'automatizacion'
    : /vinas|vina|vendimia|sustentavid|agtech|agricola/.test(slug) ? 'campo' : 'ia';
  return blogTopics.find(topic => topic.id === id)!;
}
export const blogTitle = 'Blog de Apps del Sur: IA, digitalización y cuaderno de campo';
export const blogDescription = 'Guías prácticas para pymes chilenas: IA, automatización por WhatsApp, cuaderno de campo, costos y financiamiento. Decide tu próximo paso con Apps del Sur.';
