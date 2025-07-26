import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';

const ForgeLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
    >
      <path d="M4 15c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H4Z" />
      <path d="M14 4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2Z" />
      <path d="M4 6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H4Z" />
      <path d="m15 15-2-2" />
      <path d="m6 9 8-8" />
      <path d="m6 18 8-8" />
    </svg>
  );

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
        <div className="container py-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="md:col-span-1">
                    <Link href="/" className="flex items-center gap-2 mb-4">
                        <ForgeLogo />
                        <span className="font-bold font-headline text-xl">
                        ForgeMyCV
                        </span>
                    </Link>
                    <p className="text-sm text-muted-foreground">Build your professional resume in minutes.</p>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2">
                    <div>
                        <h4 className="font-semibold mb-3">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                            <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
                            <li><Link href="/reviews" className="text-muted-foreground hover:text-primary">Reviews</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-3">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
                            <li><Link href="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold mb-3">Legal</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
                 © {new Date().getFullYear()} ForgeMyCV. All Rights Reserved.
            </div>
        </div>
    </footer>
  );
}
