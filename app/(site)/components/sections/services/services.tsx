import { CheckCircle } from "lucide-react";
import Button from "../../Button";
import ScrollReveal from "../../ScrollReveal";
// Define the type for individual services
type Service = {
  title: string;
  description: string;
  features: [string];
  _key: string;
};

// Define the props for the Services component
type ServiceProps = {
  title?: string;
  heading?: string;
  subheading?: string;
  services: Service[];
  ctas: any[];
  _key?: string; // Optional key to set the section's ID
};

const ServiceCard = ({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: string[];
}) => {
  return (
    <div
      className="bg-white rounded-lg p-8 shadow-2xs border border-border/50 transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] opacity-0 animate-scale-in"
      style={{ animationPlayState: "paused" }}
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle
              size={18}
              className="text-primary mt-0.5 shrink-0"
            />
            <span className="text-sm text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Services({
  title = "Our Services",
  heading = "Services that deliver your message",
  subheading = `We specialize in writing compelling copy that engages your
                audience, whether it's for SEO-optimized blogs, marketing
                campaigns, or website content. Let us help you tell your story in
                a way that resonates.`,
  services,
  ctas,
  _key, // Optional key used to set the section's ID
}: ServiceProps) {
  return (
    <ScrollReveal>
      <section id="services" className="py-24 px-6 md:px-10">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className="tag opacity-0 animate-fade-in"
              style={{ animationPlayState: "paused" }}
            >
              Our Services
            </span>
            <h2
              className="section-title mt-3 mb-4 opacity-0 animate-fade-in animation-delay-100"
              style={{ animationPlayState: "paused" }}
            >
              {heading}
            </h2>
            <p
              className="text-foreground/80 opacity-0 animate-fade-in animation-delay-200"
              style={{ animationPlayState: "paused" }}
            >
              {subheading}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
