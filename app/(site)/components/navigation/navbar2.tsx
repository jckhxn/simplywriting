"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Sanity Link button
import Button from "@/app/(site)/components/Button";
import { Button as ShadcnButton } from "@/app/(site)/components/ui/button";

type NavProps = {
  name?: string;
  ctas?: any;
  links?: any;
};

export function navbar2({ name = "B·", ctas, links }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const nameParts = name.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white shadow-sm backdrop-blur-lg bg-opacity-80"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl md:text-2xl font-display font-bold tracking-tight text-foreground"
          >
            {nameParts[1] ? (
              <>
                {nameParts[0]}{" "}
                <span className="text-primary">{nameParts[1]}</span>
              </>
            ) : (
              nameParts[0]
            )}
            {/* Simply<span className="text-primary">Writing</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link: any, index: number) => (
              <Button
                className={`nav-link ${index === 0 ? "after:w-full" : ""}`} // Apply class if it's the first child
                {...link}
                key={index} // Ensure to add a key for each mapped element
              />
            ))}
            {ctas.map((cta: any, index: number) => (
              <Button className="nav-link" {...cta} key={index} />
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md p-5 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            {links.map((link: any, index: number) => (
              <Button
                className={`nav-link ${index === 0 ? "after:w-full" : ""}`}
                {...link}
              />
            ))}
            {ctas.map((cta: any, index: number) => (
              <Button className="nav-link" {...cta} key={index} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
