"use client";

import React from "react";
import { Card, CardContent } from "@/app/(site)/components/ui/Card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/(site)/components/ui/avatar";
import { Quote, TrendingUp } from "lucide-react";
import { SanityImage } from "../../SanityImage";
import ScrollReveal from "../../ScrollReveal";

type TestimonialProps = {
  image: any;
  isRight: boolean;
  name: string;
  position: string;
  testimonial: string;
  _key: string;
  result?: string;
};

export default function TestimonialSection({
  _key,
  image,
  isRight,
  name = "Sarah Chen",
  position = "CEO, TechFlow Analytics",
  testimonial = "The pitch deck completely transformed our funding approach. We secured $12M in Series A funding, largely due to the compelling narrative and clear value proposition.",
  result = "$12M Series A Raised",
}: TestimonialProps) {
  return (
    <ScrollReveal>
      <section
        id={_key}
        className="py-16 px-6 md:px-10 bg-muted/30"
      >
        <div className="container max-w-6xl mx-auto">
          <Card className="bg-background border border-border/50 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div
                className={`grid lg:grid-cols-3 gap-8 items-center ${
                  isRight ? "lg:grid-flow-col-reverse" : ""
                }`}
              >
                {/* Avatar Section */}
                <div className="lg:col-span-1 text-center">
                  <Avatar className="w-24 h-24 md:w-32 md:h-32 mx-auto border-4 border-primary/20">
                    <SanityImage
                      data={image}
                      className="object-cover w-full h-full"
                      sizes="(max-width: 768px) 96px, 128px"
                    />
                    <AvatarFallback className="bg-primary/10 text-primary text-xl md:text-2xl">
                      {name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="mt-4">
                    <div className="font-semibold text-lg">{name}</div>
                    <div className="text-foreground/60 text-sm">{position}</div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex items-start gap-2">
                    <Quote className="text-primary w-6 h-6 flex-shrink-0 mt-1" />
                    <blockquote className="text-xl md:text-2xl font-medium text-foreground/90 italic leading-relaxed">
                      &quot;{testimonial}&quot;
                    </blockquote>
                  </div>
                  
                  {/* Result Card */}
                  {result && (
                    <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-6 h-6 text-primary" />
                        <div>
                          <div className="text-sm text-primary font-medium mb-1">Key Result</div>
                          <div className="text-lg font-bold text-primary">{result}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </ScrollReveal>
  );
}
