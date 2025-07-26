import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="min-h-screen w-full bg-background font-body flex flex-col">
      <Header />
      <main className="container py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Terms of Service</CardTitle>
              <p className="text-sm text-muted-foreground">Last updated: July 25, 2024</p>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                <p>Welcome to ForgeMyCV. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our service, you agree to be bound by these Terms.</p>

                <h2>1. Use of Our Service</h2>
                <p>You must be at least 18 years old to use our service. You are responsible for any activity that occurs through your account and you agree you will not sell, transfer, license or assign your account, followers, username, or any account rights.</p>
                
                <h2>2. Content</h2>
                <p>Our service allows you to post, link, store, share and otherwise make available certain information, text, graphics, or other material ("Content"). You are responsible for the Content that you post on or through the service, including its legality, reliability, and appropriateness.</p>

                <h2>3. Intellectual Property</h2>
                <p>The Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of ForgeMyCV and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>

                <h2>4. Termination</h2>
                <p>We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>

                <h2>5. Limitation of Liability</h2>
                <p>In no event shall ForgeMyCV, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
                
                <h2>6. Changes to Terms</h2>
                <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
                
                <h2>Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at support@forgemycv.com.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
