import { CheckCircle } from "lucide-react";

type Benefit = {
  title: string;
  description: string;
};

type BenefitsProps = {
  title?: string;
  subtitle?: string;
  benefits?: Benefit[];
};

export default function Benefits({
  title = "Why Choose Us",
  subtitle = "Experience the difference with our expert copywriting services",
  benefits = [
    {
      title: "Increased Engagement",
      description:
        "Our compelling copy captures your audience's attention and keeps them interested.",
    },
    {
      title: "Improved Conversions",
      description:
        "Well-crafted content drives action, turning readers into customers.",
    },
    {
      title: "Enhanced Brand Voice",
      description:
        "We help you develop a consistent and memorable brand voice across all platforms.",
    },
    {
      title: "SEO Optimization",
      description:
        "Our content is crafted to improve your search engine rankings and visibility.",
    },
  ],
}: BenefitsProps) {
  return (
    <section
      className="py-16 px-4 bg-gradient-to-br from-teal-50 to-cyan-50"
      aria-labelledby="benefits-title"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            id="benefits-title"
            className="text-3xl font-bold text-teal-800 mb-4"
          >
            {title}
          </h2>
          <p className="text-xl text-teal-600">{subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-shrink-0">
                <CheckCircle
                  className="w-6 h-6 text-teal-500"
                  aria-hidden="true"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-teal-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-teal-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
