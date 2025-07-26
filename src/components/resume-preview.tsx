'use client';

import { useRef } from 'react';
import { useResume } from '@/contexts/resume-context';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Download, FileText } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import ModernTemplate from './templates/modern-template';
import ClassicTemplate from './templates/classic-template';
import CreativeTemplate from './templates/creative-template';
import ProfessionalTemplate from './templates/professional-template';
import ExecutiveTemplate from './templates/executive-template';
import MinimalistTemplate from './templates/minimalist-template';
import AtsChecker from './ats-checker';
import { useToast } from '@/hooks/use-toast';
import { generateDocx } from '@/lib/docx-generator';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function ResumePreview() {
  const { state, dispatch } = useResume();
  const { template } = state;
  const { toast } = useToast();
  const previewRef = useRef<HTMLDivElement>(null);

  const handleTemplateChange = (value: string) => {
    dispatch({ type: 'SET_TEMPLATE', payload: value as any });
  };

  const handleExportPdf = async () => {
    const input = previewRef.current;
    if (!input) {
      toast({ title: 'Error', description: 'Could not find preview element.', variant: 'destructive' });
      return;
    }

    try {
      const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true,
        backgroundColor: template === 'modern' ? '#1f2937' : '#ffffff',
      });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
      toast({ title: 'Success', description: 'Your PDF has been downloaded.' });
    } catch (error) {
      console.error(error);
      toast({ title: 'Error', description: 'Failed to generate PDF.', variant: 'destructive' });
    }
  };

  const handleExportDocx = () => {
    try {
      generateDocx(state.data);
      toast({ title: 'Success', description: 'Your DOCX has been downloaded.' });
    } catch (error) {
      console.error(error);
      toast({ title: 'Error', description: 'Failed to generate DOCX.', variant: 'destructive' });
    }
  };

  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return <ModernTemplate data={state.data} />;
      case 'classic':
        return <ClassicTemplate data={state.data} />;
      case 'creative':
        return <CreativeTemplate data={state.data} />;
      case 'executive':
        return <ExecutiveTemplate data={state.data} />;
      case 'professional':
        return <ProfessionalTemplate data={state.data} />;
      case 'minimalist':
        return <MinimalistTemplate data={state.data} />;
      default:
        return <MinimalistTemplate data={state.data} />;
    }
  };

  const templates = [
    { id: 'minimalist', name: 'Minimalist' },
    { id: 'professional', name: 'Professional' },
    { id: 'classic', name: 'Classic' },
    { id: 'modern', name: 'Modern' },
    { id: 'creative', name: 'Creative' },
    { id: 'executive', name: 'Executive' },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resume Preview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-2 justify-between items-center">
          <Tabs value={template} onValueChange={handleTemplateChange}>
            <TabsList className="flex-wrap h-auto">
              {templates.map(t => (
                <TabsTrigger key={t.id} value={t.id} className="relative">
                  {t.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-2">
            <AtsChecker />
            <Button variant="outline" size="sm" onClick={handleExportPdf}><Download /> PDF</Button>
            <Button variant="outline" size="sm" onClick={handleExportDocx}><FileText /> DOCX</Button>
          </div>
        </div>

        <div className="aspect-[210/297] w-full overflow-auto rounded-lg border bg-secondary/50">
          <div ref={previewRef}>
            {renderTemplate()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}