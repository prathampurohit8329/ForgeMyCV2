import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-background font-body flex flex-col">
      <Header />
      <main className="container py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl text-center font-bold font-headline">About ForgeMyCV</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <div className="text-center">
                <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Team working on resume builder" 
                    width={600} 
                    height={400} 
                    className="rounded-lg mx-auto"
                    data-ai-hint="team collaboration"
                />
              </div>
              <p className="text-lg text-center">
                Our mission is to empower job seekers by providing the best tools to create professional, effective resumes that open doors to new opportunities.
              </p>
              <p>
                ForgeMyCV was born from a simple idea: resume building should be easy, fast, and accessible to everyone. We noticed that many talented individuals struggled to present their skills and experiences effectively on paper. That's why we decided to create a powerful, AI-driven platform that simplifies the entire process.
              </p>
              <p>
                From professionally designed templates to our AI-powered ATS checker, every feature is designed with one goal in mind: to help you land your dream job. We believe that a great resume is more than just a document—it's a key that unlocks your potential.
              </p>
              <p>
                Thank you for trusting ForgeMyCV. We're excited to be a part of your career journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
