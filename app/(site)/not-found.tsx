"use client";
import Link from "next/link";

import { Container } from "@/app/(site)/components/Container";
import ScrollReveal from "./components/ScrollReveal";
import { AlertTriangle, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/app/(site)/components/ui/button";
import { useRouter } from "next/navigation";
export default function NotFound() {
  const router = useRouter();
  return (
    <ScrollReveal>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="flex flex-col items-center justify-center">
            <div className="h-24 w-24 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <AlertTriangle className="h-12 w-12 text-red-500" />
            </div>
            <h1 className="text-6xl font-bold text-gray-900">404</h1>
            <h2 className="mt-2 text-2xl font-semibold text-gray-700">
              Page Not Found
            </h2>
            <p className="mt-4 text-gray-600 mb-8">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. The page may
              have been moved, deleted, or never existed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-center">
              <Button asChild variant="default" size="lg" className="gap-2">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Return Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <button onClick={() => router.back()}>
                  <ArrowLeft className="h-4 w-4" />
                  Go Back
                </button>
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-8">
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
