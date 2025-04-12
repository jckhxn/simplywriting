import { Avatar, AvatarFallback } from "@/app/(site)/components/ui/avatar";
import { SanityImage } from "../../SanityImage";

type Testimonial = {
  name: string;
  position: string;
  testimonial: string;
  image?: string; // Optional, if you have a default image placeholder
};

type TestimonialsProps = {
  title?: string;
  heading?: string;
  subheading?: string;
  testimonials: Testimonial[];
};

export default function Testimonials({
  title = "What Our Customers Say",
  heading = "Testimonials",
  subheading = "Hear what our satisfied customers have to say about our services.",
  testimonials,
}: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-24 px-6 md:px-10 bg-secondary/50">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="tag opacity-0 animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            {title}
          </span>
          <h2
            className="section-title mt-3 mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            {heading}
          </h2>
          <p
            className="text-foreground/80 opacity-0 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            {subheading}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <blockquote className="text-indigo-700 text-center italic">
                "{testimonial.testimonial}"
              </blockquote>
              <div
                className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full"
                aria-hidden="true"
              >
                <Avatar className="w-16 h-16 border-2 border-indigo-200">
                  {testimonial.image ? (
                    <SanityImage
                      data={testimonial.image}
                      className="w-full h-full object-cover"
                      sizes="lg"
                    />
                  ) : (
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  )}
                </Avatar>
              </div>
              <h3 className="text-xl font-semibold text-indigo-900 text-center">
                {testimonial.name}
              </h3>
              <p className="text-sm text-indigo-600 text-center">
                {testimonial.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
