'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Sparkles, Loader2, CheckCircle } from 'lucide-react';
import { useResume } from '@/contexts/resume-context';
import type { ResumeData } from '@/types/resume';
import { analyzeResumeAts } from '@/ai/flows/ats-resume-analyzer';
import { Progress } from './ui/progress';

function formatResumeAsText(data: ResumeData): string {
  let text = '';
  text += `${data.personalInfo.name}\n`;
  text += `${data.personalInfo.email} | ${data.personalInfo.phone} | ${data.personalInfo.linkedin}\n\n`;

  text += `## Summary\n${data.summary}\n\n`;

  text += `## Experience\n`;
  data.experience.forEach(exp => {
    text += `${exp.role} at ${exp.company} (${exp.startDate} - ${exp.endDate})\n`;
    text += `${exp.description}\n\n`;
  });

  text += `## Education\n`;
  data.education.forEach(edu => {
    text += `${edu.degree} from ${edu.institution} (${edu.startDate} - ${edu.endDate})\n`;
    text += `${edu.description}\n\n`;
  });

  text += `## Skills\n${data.skills.join(', ')}\n`;

  return text;
}

export default function AtsChecker() {
  const { state } = useResume();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ score: number; suggestions: string } | null>(null);

  const handleAnalysis = async () => {
    setIsLoading(true);
    setResult(null);
    const resumeText = formatResumeAsText(state.data);
    try {
      const analysisResult = await analyzeResumeAts({ resumeText });
      setResult(analysisResult);
    } catch (error) {
      console.error('ATS analysis failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Sparkles className="mr-2 h-4 w-4" />
          ATS Check
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="font-semibold flex items-center gap-2">
            <Sparkles />
            ATS Compatibility Check
          </DialogTitle>
          <DialogDescription>
            Analyze your resume against common Applicant Tracking Systems to improve your chances.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {!result && !isLoading && (
            <div className="text-center">
              <p className="mb-4">Click the button below to start the AI-powered analysis.</p>
              <Button onClick={handleAnalysis}>
                Analyze My Resume
              </Button>
            </div>
          )}
          {isLoading && (
            <div className="flex flex-col items-center justify-center gap-4 p-8">
              <Loader2 className="h-12 w-12 animate-spin text-primary-foreground" />
              <p className="text-muted-foreground">Analyzing your resume...</p>
            </div>
          )}
          {result && !isLoading && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Your Score: {result.score}/100</h3>
                <Progress value={result.score} className="w-full" />
                <p className="text-sm text-muted-foreground mt-1">
                  {result.score > 85 ? "Excellent work! Your resume is highly ATS-friendly." : result.score > 60 ? "Good start, but there's room for improvement." : "Your resume needs some work to pass ATS scans."}
                </p>
              </div>
              <div>
                 <h3 className="text-lg font-semibold mb-2 flex items-center gap-2"><CheckCircle /> Suggestions for Improvement</h3>
                 <div className="prose prose-sm dark:prose-invert max-h-60 overflow-y-auto rounded-md border bg-muted/50 p-4 whitespace-pre-wrap">
                    {result.suggestions}
                 </div>
              </div>
               <Button onClick={handleAnalysis}>Re-analyze</Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
