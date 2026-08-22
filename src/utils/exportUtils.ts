import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Document, Packer, Paragraph, TextRun, Table, TableCell, TableRow, BorderStyle, convertInchesToTwip } from 'docx';
import { ResumeData } from '../types/resume';

export const exportToPDF = async (elementId: string, fileName: string) => {
  try {
    const element = document.getElementById(elementId);
    if (!element) throw new Error('Element not found');

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    let heightLeft = canvas.height * pageWidth / canvas.width;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, pageWidth, heightLeft);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - canvas.height * pageWidth / canvas.width;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, pageWidth, heightLeft);
      heightLeft -= pageHeight;
    }

    pdf.save(`${fileName}.pdf`);
  } catch (error) {
    console.error('PDF export failed:', error);
    throw error;
  }
};

export const exportToWord = async (resume: ResumeData, fileName: string) => {
  try {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: resume.personalInfo.fullName,
              bold: true,
              size: 28,
            }),
            new Paragraph({
              text: `${resume.personalInfo.email} | ${resume.personalInfo.phone} | ${resume.personalInfo.location}`,
              size: 20,
            }),
            new Paragraph({ text: '' }),
            new Paragraph({
              text: 'PROFESSIONAL SUMMARY',
              bold: true,
              size: 24,
            }),
            new Paragraph({
              text: 'Professional summary goes here',
              size: 22,
            }),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.docx`;
    link.click();
  } catch (error) {
    console.error('Word export failed:', error);
    throw error;
  }
};

export const exportToText = (resume: ResumeData, fileName: string) => {
  try {
    let text = '';
    text += `${resume.personalInfo.fullName}\n`;
    text += `${resume.personalInfo.email} | ${resume.personalInfo.phone}\n`;
    text += `${resume.personalInfo.location}\n\n`;

    text += 'PROFESSIONAL EXPERIENCE\n';
    resume.experience.forEach((exp) => {
      text += `${exp.position} - ${exp.company}\n`;
      text += `${exp.startDate} - ${exp.endDate}\n`;
      exp.responsibilities.forEach((resp) => {
        text += `• ${resp}\n`;
      });
      text += '\n';
    });

    text += 'SKILLS\n';
    resume.skills.forEach((skill) => {
      text += `${skill.category}: ${skill.skills.join(', ')}\n`;
    });

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName}.txt`;
    link.click();
  } catch (error) {
    console.error('Text export failed:', error);
    throw error;
  }
};

export const printResume = () => {
  window.print();
};

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Copy to clipboard failed:', error);
    return false;
  }
};
