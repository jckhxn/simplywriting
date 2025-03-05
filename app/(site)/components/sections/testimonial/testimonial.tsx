"use client";

import React from "react";
import { Card, CardContent } from "@/app/(site)/components/ui/Card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/(site)/components/ui/avatar";
import { Quote } from "lucide-react";
import { SanityImage } from "../../SanityImage";

type TestimonialProps = {
  image: any;
  isRight: boolean;
  name: string;
  position: string;
  testimonial: string;
  _key: string;
};

export default function TestimonialSection({
  _key,
  image,
  isRight,
  name = "John Doe",
  position = "CEO of Company",
  testimonial = "Molestie vivamus at sed massa at purus scelerisque egestas quis non augue hac massa rhoncus, nec nunc consequat cras diam tristique rhoncus et vitae.",
}: TestimonialProps) {
  return (
    <section
      id={_key}
      className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <Card className="max-w-lg mx-auto">
        <CardContent className="p-8 sm:p-12">
          <div
            className={`flex flex-col ${
              isRight ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-8`}
          >
            <div className="w-full lg:w-1/3">
              <Avatar className="w-56 h-56 rounded-full mx-auto lg:mx-0">
                <SanityImage
                  data={image}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
            <div className="w-full lg:w-2/3 space-y-4">
              <Quote className="text-primary w-10 h-10 mb-4" />
              <blockquote className="text-xl font-medium text-foreground italic">
                "{testimonial}"
              </blockquote>
              <div className="mt-4">
                <cite className="not-italic">
                  <span className="font-semibold text-lg block">{name}</span>
                  <span className="text-muted-foreground">{position}</span>
                </cite>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
