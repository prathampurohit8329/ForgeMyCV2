import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';
import type { ResumeData } from '@/types/resume';

export const generateDocx = (data: ResumeData) => {
  const { personalInfo, summary, experience, education, skills } = data;

  const doc = new Document({
    sections: [{
      children: [
        new Paragraph({
          children: [new TextRun({ text: personalInfo.name, bold: true, size: 48 })],
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({
          text: `${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.linkedin}`,
          alignment: AlignmentType.CENTER,
        }),
        new Paragraph({ text: '', spacing: { after: 200 } }),

        new Paragraph({
          children: [new TextRun({ text: 'Summary', bold: true })],
          heading: HeadingLevel.HEADING_1,
          border: { bottom: { color: 'auto', space: 1, value: 'single', size: 6 } },
        }),
        new Paragraph({ text: summary }),
        new Paragraph({ text: '', spacing: { after: 200 } }),

        new Paragraph({
          children: [new TextRun({ text: 'Experience', bold: true })],
          heading: HeadingLevel.HEADING_1,
          border: { bottom: { color: 'auto', space: 1, value: 'single', size: 6 } },
        }),
        ...experience.flatMap(exp => [
          new Paragraph({
            children: [
              new TextRun({ text: exp.role, bold: true }),
              new TextRun({ text: `\t${exp.company}` }),
              new TextRun({ text: `\t${exp.startDate} - ${exp.endDate}` }),
            ],
          }),
          ...exp.description.split('\n').map(desc => new Paragraph({
            text: desc.replace(/^- /, ''),
            bullet: { level: 0 },
          })),
          new Paragraph({ text: '', spacing: { after: 100 } }),
        ]),
        
        new Paragraph({
          children: [new TextRun({ text: 'Education', bold: true })],
          heading: HeadingLevel.HEADING_1,
          border: { bottom: { color: 'auto', space: 1, value: 'single', size: 6 } },
        }),
        ...education.map(edu => new Paragraph({
          children: [
            new TextRun({ text: edu.degree, bold: true }),
            new TextRun({ text: ` - ${edu.institution}\t${edu.startDate} - ${edu.endDate}` }),
          ],
        })),
        new Paragraph({ text: '', spacing: { after: 200 } }),

        new Paragraph({
          children: [new TextRun({ text: 'Skills', bold: true })],
          heading: HeadingLevel.HEADING_1,
          border: { bottom: { color: 'auto', space: 1, value: 'single', size: 6 } },
        }),
        new Paragraph({ text: skills.join(', ') }),
      ],
    }],
  });

  Packer.toBlob(doc).then(blob => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
};
