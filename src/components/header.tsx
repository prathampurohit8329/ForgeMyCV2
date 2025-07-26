'use client';

import { ThemeToggle } from './theme-toggle';
import { Button } from './ui/button';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';

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

const NavLinks = () => (
  <>
    <Link href="#builder" className="text-foreground/60 transition-colors hover:text-foreground/80">Resume Builder</Link>
    <Link href="/reviews" className="text-foreground/60 transition-colors hover:text-foreground/80">Reviews</Link>
    <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">Cover Letter</Link>
    <Link href="#" className="text-foreground/60 transition-colors hover:text-foreground/80">Blog</Link>
  </>
);


export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <ForgeLogo />
            <span className="font-bold font-headline text-xl">
              ForgeMyCV
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <NavLinks />
        </nav>

        <div className="flex items-center justify-end space-x-2 ml-4">
          <div className="hidden md:block">
             <Button asChild>
                <Link href="#builder">Create My Resume</Link>
              </Button>
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col gap-4 py-6">
                  <NavLinks />
                  <Button asChild>
                    <Link href="#builder">Create My Resume</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
