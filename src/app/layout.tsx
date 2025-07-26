import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { ResumeProvider } from '@/contexts/resume-context';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});


export const metadata: Metadata = {
  title: 'ForgeMyCV - AI-Powered Resume Builder for Your Next Job',
  description: 'Create and download professional, ATS-friendly resumes with our easy-to-use AI resume builder. Choose from a variety of free and premium templates.',
  keywords: [
    'resume builder', 
    'cv builder', 
    'free resume builder',
    'professional resume', 
    'resume templates', 
    'online resume maker',
    'ATS resume',
    'AI resume builder',
    'ForgeMyCV'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ResumeProvider>
            {children}
            <Toaster />
          </ResumeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
