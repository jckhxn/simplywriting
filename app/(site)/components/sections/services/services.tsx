import { CheckCircle } from "lucide-react";
import Button from "../../Button";
import ScrollReveal from "../../ScrollReveal";
import { loadServices } from "@/sanity";
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
  services?: Service[];
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
    <div className="bg-background rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-colors group">
      <div className="border-l-3 border-primary pl-4 mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-foreground/70 mt-1">{description}</p>
      </div>

      <div className="space-y-2">
        {features && features.length > 0 ? (
          features.map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </div>
          ))
        ) : (
          <div className="text-sm text-foreground/60">
            No features available
          </div>
        )}
      </div>
    </div>
  );
};

export default async function Services({
  title = "Professional Writing Services",
  heading = "Specialized Content That Drives Results",
  subheading = "From pitch decks that secure funding to websites that convert visitors, I create strategic content tailored to your business objectives.",
  services,
  ctas,
  _key,
}: ServiceProps) {
  // Load services from Sanity
  const sanityServices = await loadServices();

  // Default services with real-world focus
  const defaultServices = [
    {
      title: "Investor Pitch Decks",
      description: "Compelling narratives that secure funding",
      features: [
        "Series A-C presentations",
        "Market positioning strategy",
        "Financial storytelling",
        "Competitive differentiation",
      ],
      _key: "pitch-decks",
    },
    {
      title: "Website & Landing Pages",
      description: "Convert visitors into customers",
      features: [
        "Homepage messaging",
        "Product page optimization",
        "Landing page copy",
        "A/B tested variations",
      ],
      _key: "web-copy",
    },
    {
      title: "Executive Communications",
      description: "Leadership content that inspires action",
      features: [
        "Annual reports",
        "Shareholder letters",
        "Board presentations",
        "Internal communications",
      ],
      _key: "exec-comms",
    },
    {
      title: "Technical Documentation",
      description: "Complex topics made accessible",
      features: [
        "Product documentation",
        "API documentation",
        "White papers",
        "Case studies",
      ],
      _key: "tech-docs",
    },
  ];

  // Use Sanity services if available, otherwise use provided services, otherwise use defaults
  const servicesToRender =
    sanityServices && Array.isArray(sanityServices) && sanityServices.length > 0
      ? sanityServices
      : services && Array.isArray(services) && services.length > 0
        ? services
        : defaultServices;

  return (
    <ScrollReveal>
      <section id="services" className="py-16 px-6 md:px-10 bg-background">
        <div className="container max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {title}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  {subheading}
                </p>
              </div>

              {/* Key Value Props */}
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">48hr</div>
                  <div className="text-sm text-foreground/60">
                    Turnaround Time
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-foreground/60">
                    Revision Rounds
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-foreground/60">
                    Satisfaction Guarantee
                  </div>
                </div>
              </div>
            </div>

            {/* Process Overview */}
            <div className="bg-muted/50 rounded-lg p-6 border border-border/50">
              <h3 className="text-lg font-semibold mb-4">How I Work</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div>
                    <div className="font-medium">Discovery Call</div>
                    <div className="text-foreground/60">
                      Understand your goals & audience
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div>
                    <div className="font-medium">Strategic Framework</div>
                    <div className="text-foreground/60">
                      Develop messaging strategy
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <div>
                    <div className="font-medium">Content Creation</div>
                    <div className="text-foreground/60">
                      Write & refine until perfect
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesToRender && servicesToRender.length > 0 ? (
              servicesToRender.map((service, index) => (
                <ServiceCard
                  key={service._key || service.title || index}
                  title={service.title || "Service"}
                  description={service.description || ""}
                  features={service.features || []}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-foreground/60">
                No services available
              </div>
            )}
          </div>

          {/* CTA Section */}
          {ctas && ctas.length > 0 && (
            <div className="text-center mt-12 pt-8 border-t border-border/50">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Ready to Transform Your Content Strategy?
                </h3>
                <p className="text-foreground/70 max-w-2xl mx-auto">
                  Let's create compelling content that drives real business
                  results. From pitch decks that secure funding to websites that
                  convert visitors.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                  {ctas.map((cta, index) => (
                    <Button key={index} {...cta} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </ScrollReveal>
  );
}
