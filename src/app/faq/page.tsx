import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
    {
        question: "Is ForgeMyCV completely free to use?",
        answer: "Yes, our resume builder is completely free. All templates and features, including PDF and DOCX exports, are available to all users without any charges."
    },
    {
        question: "Can I download my resume in different formats?",
        answer: "Absolutely! You can download your resume as a high-quality PDF, an editable DOCX file, or a plain TXT file."
    },
    {
        question: "How does the ATS Checker work?",
        answer: "Our AI-powered ATS (Applicant Tracking System) Checker analyzes your resume content for keywords, formatting, and other factors that are important for passing through automated screening systems. It provides a score and actionable suggestions to improve your resume's compatibility."
    },
    {
        question: "Can I change my resume template after filling in my details?",
        answer: "Yes, you can switch between any of our templates at any time. Your information will be automatically transferred to the new design, allowing you to see which one works best for you."
    },
     {
        question: "Is my data safe?",
        answer: "We take your privacy very seriously. Your resume data is saved automatically to your browser's local storage, which means only you have access to it on your device. We do not store your personal resume data on our servers."
    }
]

export default function FaqPage() {
  return (
    <div className="min-h-screen w-full bg-background font-body flex flex-col">
      <Header />
      <main className="container py-12 flex-grow">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl text-center font-bold font-headline">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
