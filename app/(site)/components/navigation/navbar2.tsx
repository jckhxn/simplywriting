"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
// Sanity Link button
import Button from "@/app/(site)/components/Button";
import { Button as shadcnButton } from "@/components/ui/button";
type NavProps = {
  name?: string;
  ctas?: any;
  links?: any;
};

export function navbar2({ name = "B·", ctas, links }: NavProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <header className="flex h-20 w-full items-center px-4 md:px-8 lg:px-36">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold" prefetch={false}>
              {name}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-8">
                {links.map((link: any, index: number) => (
                  <NavigationMenuLink asChild key={index}>
                    <Button
                      className="text-[18px] hover:text-gray-600 transition-colors"
                      {...link}
                      key={index}
                    />
                  </NavigationMenuLink>
                ))}
                {ctas.map((cta: any, index: number) => (
                  <Button
                    className="h-10 px-4 py-2 rounded-md text-[18px] bg-black text-white hover:bg-gray-800"
                    {...cta}
                    key={index}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu - Hamburger Icon */}
          <div className="md:hidden">
            {/* Hacky as hell but I am LAZY */}
            {/* @ts-ignore */}
            <shadcnButton
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </shadcnButton>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-20 right-0 w-full bg-white shadow-lg z-50">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-col space-y-2 p-4">
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="text-[18px] hover:text-gray-600 transition-colors"
                    prefetch={false}
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/work"
                    className="text-[18px] hover:text-gray-600 transition-colors"
                    prefetch={false}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Work
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/testimonials"
                    className="text-[18px] hover:text-gray-600 transition-colors"
                    prefetch={false}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Testimonials
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="text-[18px] hover:text-gray-600 transition-colors"
                    prefetch={false}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}
      </header>
    </div>
  );
}
