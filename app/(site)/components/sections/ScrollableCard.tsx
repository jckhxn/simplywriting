"use client";
import { useRef, useEffect, useState } from "react";
import { Card } from "@/app/(site)/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/app/(site)/components/ui/avatar";
import ScrollReveal from "../ScrollReveal";

const clientTestimonials = [
  {
    id: 1,
    quote: "The pitch deck completely transformed our funding approach. We secured $12M in Series A funding.",
    name: "Sarah Chen",
    title: "CEO, TechFlow Analytics",
    result: "$12M Series A Raised",
    avatar: "SC"
  },
  {
    id: 2,
    quote: "Website conversion increased by 340% after the messaging overhaul. ROI was immediate.",
    name: "Michael Rodriguez",
    title: "VP Marketing, HealthTech Solutions",
    result: "340% Conversion Increase",
    avatar: "MR"
  },
  {
    id: 3,
    quote: "Product documentation is now crystal clear. Customer support tickets dropped by 60%.",
    name: "Amanda Foster",
    title: "Founder, GreenSpace Co.",
    result: "60% Fewer Support Tickets",
    avatar: "AF"
  },
  {
    id: 4,
    quote: "Content strategy revolutionized our lead generation. Qualified leads up 85% month-over-month.",
    name: "Robert Zhang",
    title: "Marketing Director, CloudSoft",
    result: "85% Lead Generation Growth",
    avatar: "RZ"
  },
  {
    id: 5,
    quote: "Brand messaging is now consistent across all markets. Unified voice across 15 countries.",
    name: "Lisa Thompson",
    title: "Head of Communications, ManufacturingPro",
    result: "15 Markets Unified",
    avatar: "LT"
  },
  {
    id: 6,
    quote: "Annual report writing was exceptional. 98% shareholder approval on strategic direction.",
    name: "David Kim",
    title: "Chief Strategy Officer, FinanceForward",
    result: "98% Shareholder Approval",
    avatar: "DK"
  }
];

export default function ClientSuccessCarousel({ _key }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === clientTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === clientTestimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? clientTestimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <ScrollReveal>
      <section id={_key} className="py-16 px-6 md:px-10 bg-background">
        <div className="container max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Client Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-foreground/80">
              Real results from companies who&apos;ve transformed their communications with professional writing services.
            </p>
          </div>

          {/* Carousel Container */}
          <div 
            className="relative"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="overflow-hidden rounded-lg">
              <div
                ref={carouselRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {clientTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <ClientSuccessCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-2 hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground/80" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-2 hover:bg-background transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground/80" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {clientTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-border/50'
                }`}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12 pt-8 border-t border-border/50">
            <p className="text-lg text-foreground/80 mb-4">
              Ready to achieve similar results for your business?
            </p>
            <a
              href="#contact"
              className="button-primary inline-flex items-center"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

export const ClientSuccessCard = ({ testimonial }) => {
  return (
    <Card className="bg-muted/30 border border-border/50 p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Quote Section */}
          <div className="md:col-span-2 space-y-6">
            <Quote className="w-8 h-8 text-primary/60" />
            <blockquote className="text-xl md:text-2xl font-medium text-foreground/90 italic leading-relaxed">
              &quot;{testimonial.quote}&quot;
            </blockquote>
            
            {/* Author Info */}
            <div className="flex items-center gap-4">
              <Avatar className="w-12 h-12 border-2 border-primary/20">
                <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                  {testimonial.avatar}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-foreground/60">{testimonial.title}</div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="md:col-span-1">
            <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
              <div className="text-center">
                <div className="text-sm text-primary font-medium mb-2">Key Result</div>
                <div className="text-2xl font-bold text-primary mb-2">{testimonial.result}</div>
                <div className="text-sm text-foreground/60">
                  Achieved through strategic content development
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
