import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/(site)/components/ui/avatar";
import { SanityImage } from "../../SanityImage";

type Testimonial = {
  name: string;
  position: string;
  testimonial: string;
  image?: string; // Optional, if you have a default image placeholder
};

type SocialProofProps = {
  title?: string;
  heading?: string;
  subheading?: string;
  testimonials: Testimonial[];
};

export default function SocialProof({
  title = "What Our Customers Say",
  heading = "Testimonials",
  subheading = "Hear what our satisfied customers have to say about our services.",
  testimonials,
}: SocialProofProps) {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-xxl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wide text-indigo-600 mb-2">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-indigo-300 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-indigo-900">
              {heading}
            </h1>
            <p className="text-indigo-700">{subheading}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Iterate over testimonials */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full"
                aria-hidden="true"
              >
                <Avatar className="w-16 h-16 border-2 border-indigo-200">
                  {testimonial.image ? (
                    // <AvatarImage
                    //   src={testimonial.image}
                    //   alt={testimonial.name}
                    // />
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
              <blockquote className="text-indigo-700 text-center">
                "{testimonial.testimonial}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
