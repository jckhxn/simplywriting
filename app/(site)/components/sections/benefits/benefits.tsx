import { CheckCircle } from "lucide-react";

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
  title = "Why Choose Us",
  heading = "Benefits of Our Services",
  subheading = "Discover the key advantages of working with us.",
  benefits = [],
}: BenefitsProps) {
  return (
    <section className="py-16 px-4 bg-linear-to-br from-purple-50 to-indigo-50">
      <div className="max-w-xxl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wide text-indigo-600 mb-2">
            {title} THIS SHOULD BE
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
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full"
                aria-hidden="true"
              >
                <CheckCircle className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-indigo-900 text-center">
                {benefit.title}
              </h3>
              <p className="text-indigo-600 text-center">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
