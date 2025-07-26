import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen w-full bg-background font-body flex flex-col">
      <Header />
      <main className="container py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Privacy Policy</CardTitle>
              <p className="text-sm text-muted-foreground">Last updated: July 25, 2024</p>
            </CardHeader>
            <CardContent className="prose prose-sm dark:prose-invert max-w-none">
                <p>ForgeMyCV ("us", "we", or "our") operates the ForgeMyCV website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

                <h2>1. Information Collection and Use</h2>
                <p>We collect several different types of information for various purposes to provide and improve our Service to you. The primary data we handle is the information you provide for your resume. This data is stored in your browser's local storage and is not transmitted to our servers.</p>
                
                <h2>2. Data Storage</h2>
                <p>All resume data, including personal details, work history, and skills, is stored directly in your web browser's local storage. This means your data remains on your device and is not collected or stored by us. This enhances your privacy and gives you full control over your information. Clearing your browser's cache or local storage will permanently delete your data.</p>
                
                <h2>3. AI Features</h2>
                <p>When you use AI-powered features like the ATS Checker, the text content of your resume is sent to a third-party AI service (such as Google's Gemini) for analysis. This data is processed anonymously and is not stored or used to train the AI models beyond the immediate request.</p>

                <h2>4. Cookies</h2>
                <p>We may use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

                <h2>5. Security of Data</h2>
                <p>The security of your data is important to us. Since your data is stored locally on your device, you are responsible for securing your own computer and browser. We implement security measures on our website to protect against unauthorized access, but no method of transmission over the Internet is 100% secure.</p>
                
                <h2>6. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
                
                <h2>Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at support@forgemycv.com.</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
