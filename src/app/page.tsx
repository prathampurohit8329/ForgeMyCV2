import Header from '@/components/header';
import Footer from '@/components/footer';
import ResumeForm from '@/components/resume-form';
import ResumePreview from '@/components/resume-preview';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, FileText, Bot, FileCheck2, Linkedin, FolderUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="text-center p-6">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-lg font-bold mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </Card>
);

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background font-body flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 text-center bg-secondary/50">
          <div className="container">
            <h1 className="text-4xl md:text-6xl font-bold font-headline mb-4">Build a Resume in 5 Minutes</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our intuitive builder makes it quick and easy to create a professional resume that gets results.
            </p>
            <Button asChild size="lg">
              <Link href="#builder">Create My Resume</Link>
            </Button>
          </div>
        </section>

        {/* Features Highlight */}
        <section className="py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard icon={<FileCheck2 size={40} className="text-primary" />} title="Instant Templates" description="Choose from a variety of professionally designed templates." />
              <FeatureCard icon={<Bot size={40} className="text-primary" />} title="AI Suggestions" description="Get AI-powered tips to improve your resume content." />
              <FeatureCard icon={<Linkedin size={40} className="text-primary" />} title="LinkedIn Import" description="Import your work history and education with one click." />
              <FeatureCard icon={<FolderUp size={40} className="text-primary" />} title="Multiple Formats" description="Export your resume as a PDF, DOCX, or TXT file." />
            </div>
          </div>
        </section>
        
        <section id="builder" className="p-4 lg:p-8">
            <div className="container">
                {/* Template Preview */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline mb-4">Choose Your Template</h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">Select a template to get started. You can switch templates at any time.</p>
                </div>
                 <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
                    <div className="lg:col-span-1">
                      <ResumeForm />
                    </div>
                    <div className="lg:col-span-1">
                      <div className="sticky top-24">
                        <ResumePreview />
                      </div>
                    </div>
                 </div>
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
