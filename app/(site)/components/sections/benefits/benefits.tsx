import { CheckCircle } from "lucide-react";
import ScrollReveal from "../../ScrollReveal";

type Benefit = {
  title: string;
  description: string;
};

type BenefitsProps = {
  title?: string;
  heading?: string;
  subheading?: string;
  benefits: Benefit[];
};

export default function Benefits({
  title = "Why Choose Professional Writing",
  heading = "Measurable Results That Matter",
  subheading = "Strategic content that drives business outcomes and achieves your goals.",
  benefits = [],
}: BenefitsProps) {
  
  // Default benefits focused on writing services
  const defaultBenefits = [
    {
      title: "Higher Conversion Rates",
      description: "Persuasive copy that turns visitors into customers, with proven track record of 2-3x conversion improvements."
    },
    {
      title: "Time-Saving Efficiency",
      description: "Get professional content delivered in 48 hours, allowing you to focus on running your business."
    },
    {
      title: "Industry Expertise",
      description: "Deep knowledge across tech, healthcare, finance, and other industries ensures relevant, authoritative content."
    },
    {
      title: "SEO-Optimized Content",
      description: "Content that ranks well and attracts your target audience through strategic keyword integration."
    },
    {
      title: "Brand Consistency",
      description: "Maintain your unique voice and messaging across all touchpoints and communications."
    },
    {
      title: "Results-Driven Approach",
      description: "Every piece of content is crafted with specific business objectives and measurable outcomes in mind."
    }
  ];

  const benefitsToRender = benefits.length > 0 ? benefits : defaultBenefits;

  return (
    <ScrollReveal>
      <section className="py-16 px-6 md:px-10 bg-muted/20">
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

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsToRender.map((benefit, index) => (
              <div
                key={index}
                className="bg-background rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Stats */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-foreground/60">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">48hr</div>
                <div className="text-sm text-foreground/60">Average Turnaround</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-foreground/60">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">2.3x</div>
                <div className="text-sm text-foreground/60">Average Conversion Lift</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
