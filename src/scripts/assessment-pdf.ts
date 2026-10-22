import { jsPDF } from 'jspdf';

type ReportRequest = { summary: string; type: 'ia' | 'digital' };

document.addEventListener('assessment:download-pdf', (event) => {
  const { summary, type } = (event as CustomEvent<ReportRequest>).detail;
  const button = document.getElementById('assessment-print') as HTMLButtonElement | null;
  if (button) button.disabled = true;
  try {
    const pdf = new jsPDF();
    pdf.setProperties({ title: `Diagnóstico de madurez ${type === 'ia' ? 'en IA' : 'digital'}`, author: 'Apps del Sur' });
    const pageHeader = () => {
      pdf.setFillColor(6, 78, 59);
      pdf.rect(0, 0, 210, 25, 'F');
      pdf.setTextColor(255, 255, 255);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(18);
      pdf.text('Apps del Sur', 20, 16);
      pdf.setTextColor(15, 31, 26);
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(11);
    };
    pageHeader();
    let y = 37;
    const text = summary.replace(/•/g, '-').replace(/→/g, '>').replace(/–|—/g, '-');
    const lines = pdf.splitTextToSize(text, 170) as string[];
    for (const line of lines) {
      if (y > 275) { pdf.addPage(); pageHeader(); y = 37; }
      pdf.text(line, 20, y);
      y += 5.7;
    }
    const pages = pdf.getNumberOfPages();
    for (let page = 1; page <= pages; page++) {
      pdf.setPage(page);
      pdf.setTextColor(90, 105, 98);
      pdf.setFontSize(9);
      pdf.text('Autoevaluación orientativa · No es una certificación', 20, 288);
      pdf.text(`${page} / ${pages}`, 190, 288, { align: 'right' });
    }
    const name = `diagnostico-madurez-${type}-${new Date().toLocaleDateString('sv-SE')}.pdf`;
    const previous = document.getElementById('assessment-pdf-link') as HTMLAnchorElement | null;
    if (previous) previous.remove();
    const link = document.createElement('a');
    link.id = 'assessment-pdf-link'; link.className = 'assessment-link-button';
    link.href = pdf.output('datauristring'); link.download = name;
    link.textContent = 'Descargar PDF generado';
    button?.parentElement?.append(link);
    link.click();
  } catch (error) {
    console.error("Assessment PDF generation failed", error);
    const status = document.getElementById('assessment-form-message');
    if (status) status.textContent = 'No pudimos generar el PDF. Puedes copiar el resumen y volver a intentarlo.';
  } finally {
    if (button) button.disabled = false;
  }
});
