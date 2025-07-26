'use server';

/**
 * @fileOverview A flow to analyze a resume for ATS compatibility.
 *
 * - analyzeResumeAts - A function that handles the resume analysis process.
 * - AnalyzeResumeAtsInput - The input type for the analyzeResumeAts function.
 * - AnalyzeResumeAtsOutput - The return type for the analyzeResumeAts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeResumeAtsInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume to be analyzed.'),
});
export type AnalyzeResumeAtsInput = z.infer<typeof AnalyzeResumeAtsInputSchema>;

const AnalyzeResumeAtsOutputSchema = z.object({
  score: z
    .number()
    .describe(
      'A score out of 100 indicating the ATS compatibility of the resume.'
    ),
  suggestions: z
    .string()
    .describe(
      'Suggestions for improving the resume to be more ATS compatible.'
    ),
});
export type AnalyzeResumeAtsOutput = z.infer<typeof AnalyzeResumeAtsOutputSchema>;

export async function analyzeResumeAts(input: AnalyzeResumeAtsInput): Promise<AnalyzeResumeAtsOutput> {
  return analyzeResumeAtsFlow(input);
}

const analyzeResumeAtsPrompt = ai.definePrompt({
  name: 'analyzeResumeAtsPrompt',
  input: {schema: AnalyzeResumeAtsInputSchema},
  output: {schema: AnalyzeResumeAtsOutputSchema},
  prompt: `You are an expert resume analyst specializing in Applicant Tracking Systems (ATS).

You will analyze the resume text provided and provide a score out of 100 indicating how well the resume is optimized for ATS.

You will also provide suggestions for improving the resume to be more ATS compatible.  These suggestions should be actionable and specific.

Resume Text: {{{resumeText}}}`,
});

const analyzeResumeAtsFlow = ai.defineFlow(
  {
    name: 'analyzeResumeAtsFlow',
    inputSchema: AnalyzeResumeAtsInputSchema,
    outputSchema: AnalyzeResumeAtsOutputSchema,
  },
  async input => {
    const {output} = await analyzeResumeAtsPrompt(input);
    return output!;
  }
);
