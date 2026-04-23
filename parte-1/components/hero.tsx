"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About us" },
  { href: "#services", label: "Services" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
];

const clientLogos = [
  { name: "amazon", src: "/images/company/amazon-company-logo.svg", width: "w-24" },
  { name: "dribbble", src: "/images/company/dribbble-company-logo.svg", width: "w-24" },
  { name: "HubSpot", src: "/images/company/hubspot-company-logo.svg", width: "w-28" },
  { name: "Notion", src: "/images/company/notion-company-logo.svg", width: "w-24" },
  { name: "NETFLIX", src: "/images/company/netflix-company-logo.svg", width: "w-24" },
  { name: "zoom", src: "/images/company/zoom-company-logo.svg", width: "w-20" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <img src="/brand/positivus-logo.svg" alt="Positivus" className="h-7 w-7" />
      <span className="text-3xl font-medium tracking-tight">Positivus</span>
    </Link>
  );
}

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full py-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xl leading-7 font-normal text-foreground transition-colors hover:text-foreground/70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button className="hidden rounded-xl border-2 border-foreground bg-background px-6 py-3 text-xl font-normal leading-7 text-foreground transition-all hover:bg-foreground hover:text-background lg:block">
          Request a quote
        </button>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-b-2 border-foreground bg-background px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-normal text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="mt-4 w-full rounded-xl border-2 border-foreground bg-background px-6 py-3 text-sm font-normal text-foreground transition-all hover:bg-foreground hover:text-background">
              Request a quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroContent() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left Column - Text Content */}
        <div className="order-2 flex flex-col gap-8 lg:order-1">
          <h1 className="text-balance text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Navigating the digital landscape for success
          </h1>
          <p className="max-w-lg text-xl leading-7 text-foreground/90">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <button className="w-fit rounded-xl bg-foreground px-8 py-4 text-xl font-normal leading-7 text-background transition-all hover:bg-foreground/90 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
            Book a consultation
          </button>
        </div>

        {/* Right Column - Illustration */}
        <div className="order-1 flex items-center justify-center lg:order-2">
          <img 
            src="/images/hero-illustration.svg" 
            alt="Hero illustration" 
            className="w-full max-w-md lg:max-w-none" 
          />
        </div>
      </div>
    </section>
  );
}

function ClientLogos() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
      <div className="flex flex-wrap items-center justify-center gap-8 grayscale md:gap-12 lg:justify-between lg:gap-8">
        {clientLogos.map((logo) => (
          <div
            key={logo.name}
            className={`flex h-8 items-center justify-center ${logo.width}`}
          >
            <img src={logo.src} alt={logo.name} className="h-full w-auto object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroContent />
        <ClientLogos />
      </main>
    </div>
  );
}
