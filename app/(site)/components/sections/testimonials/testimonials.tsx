import { Avatar, AvatarFallback } from "@/app/(site)/components/ui/avatar";
import { SanityImage } from "../../SanityImage";
import { Quote } from "lucide-react";
import ScrollReveal from "../../ScrollReveal";
import { loadTestimonials } from "@/sanity";

type Testimonial = {
  name: string;
  position: string;
  company?: string;
  testimonial: string;
  image?: string;
  featured?: boolean;
  order?: number;
  project?: {
    title: string;
    slug: string;
  };
};

type TestimonialsProps = {
  title?: string;
  heading?: string;
  subheading?: string;
  testimonials?: Testimonial[];
};

export default async function Testimonials({
  title = "Client Success Stories",
  heading = "Trusted by Leading Companies",
  subheading = "Real results from real clients who've transformed their business communications.",
  testimonials,
}: TestimonialsProps) {
  
  // Load testimonials from Sanity
  const sanityTestimonials = await loadTestimonials();
  
  // Default testimonials focused on writing services
  const defaultTestimonials = [
    {
      name: "Sarah Chen",
      position: "CEO",
      company: "TechFlow Analytics",
      testimonial: "The pitch deck completely transformed our funding approach. We secured $12M in Series A funding, largely due to the compelling narrative and clear value proposition.",
      image: ""
    },
    {
      name: "Michael Rodriguez",
      position: "VP Marketing",
      company: "HealthTech Solutions",
      testimonial: "Our website conversion rate increased by 340% after the homepage redesign. The messaging now speaks directly to our target audience's pain points.",
      image: ""
    },
    {
      name: "Amanda Foster",
      position: "Founder",
      company: "GreenSpace Co.",
      testimonial: "Outstanding technical writing skills. The product documentation is now crystal clear, reducing our customer support tickets by 60%.",
      image: ""
    },
    {
      name: "David Kim",
      position: "Chief Strategy Officer",
      company: "FinanceForward",
      testimonial: "The annual report writing was exceptional. Our shareholders praised the clarity and strategic vision conveyed in the document.",
      image: ""
    },
  ];

  // Use Sanity testimonials if available, otherwise use provided testimonials, otherwise use defaults
  const testimonialsToRender = sanityTestimonials?.length > 0 ? sanityTestimonials : 
    (testimonials?.length > 0 ? testimonials : defaultTestimonials);

  return (
    <ScrollReveal>
      <section id="testimonials" className="py-16 px-6 md:px-10 bg-muted/30">
        <div className="container max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {title}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
            <p className="text-xl text-foreground/80">{subheading}</p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonialsToRender.slice(0, 4).map((testimonial, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-colors group"
              >
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-6 h-6 text-primary/60" />
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-foreground/80 text-base leading-relaxed mb-6">
                  "{testimonial.testimonial}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    {testimonial.image ? (
                      <SanityImage
                        data={testimonial.image}
                        className="w-full h-full object-cover"
                        sizes="48px"
                      />
                    ) : (
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {testimonial.position}{testimonial.company && `, ${testimonial.company}`}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-foreground/60">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2.8x</div>
                <div className="text-sm text-foreground/60">Average ROI Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">48hr</div>
                <div className="text-sm text-foreground/60">Average Turnaround</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-foreground/60">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
