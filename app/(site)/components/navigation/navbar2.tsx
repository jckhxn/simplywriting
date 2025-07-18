"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Sanity Link button
import Button from "@/app/(site)/components/Button";
import { Button as ShadcnButton } from "@/app/(site)/components/ui/button";
import type { NavigationPayload } from "@/types";

type NavProps = {
  navigation: NavigationPayload;
};

export function Navbar2({ navigation }: NavProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Extract navigation data with fallbacks
  const {
    brandName = "SimplyWriting",
    logo,
    mainLinks = [],
    ctaButtons = [],
    showBrandName = true,
    stickyNavigation = true,
    transparentOnTop = false
  } = navigation || {};
  
  const nameParts = brandName.split(" ");

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
      className={`${stickyNavigation ? 'fixed' : 'static'} top-0 left-0 right-0 z-50 px-6 md:px-10 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white shadow-2xs backdrop-blur-lg bg-opacity-80"
          : transparentOnTop && !isScrolled
          ? "py-5 bg-transparent"
          : "py-5 bg-white"
      }`}
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-xl md:text-2xl font-display font-bold tracking-tight text-foreground"
          >
            {logo && (
              <img
                src={logo.asset.url}
                alt={logo.alt || brandName}
                className="h-8 w-auto"
              />
            )}
            {showBrandName && (
              <>
                {nameParts[1] ? (
                  <>
                    {nameParts[0]}{" "}
                    <span className="text-primary">{nameParts[1]}</span>
                  </>
                ) : (
                  nameParts[0]
                )}
              </>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainLinks.map((link: any, index: number) => (
              <Button
                className={`nav-link ${index === 0 ? "after:w-full" : ""}`}
                {...link}
                key={index}
              />
            ))}
            {ctaButtons.map((cta: any, index: number) => (
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
            {mainLinks.map((link: any, index: number) => (
              <Button
                key={index}
                className={`nav-link ${index === 0 ? "after:w-full" : ""}`}
                {...link}
              />
            ))}
            {ctaButtons.map((cta: any, index: number) => (
              <Button className="nav-link" {...cta} key={index} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
