import { CheckCircle } from "lucide-react";

type Benefit = {
  title: string;
  description: string;
};

type BenefitsProps = {
  heading: string;
  subheading: string;
  benefits: Benefit[]; // Specify the type for benefits
};

export default function Benefits({
  heading = "Why Choose Us",
  subheading = "Experience the difference with our expert copywriting services",
  benefits = [], // Default to an empty array
}: BenefitsProps) {
  return (
    <section
      className="py-16 px-4 bg-gradient-to-br from-teal-50 to-indigo-50"
      aria-labelledby="benefits-title"
    >
      <div className="max-w-xxl mx-auto">
        <div className="flex items-center space-x-4 my-6">
          <div className="flex-grow h-px bg-indigo-600"></div>
        </div>
        <div className="text-center mb-12">
          <h2
            id="benefits-title"
            className="text-3xl font-bold text-teal-800 mb-2"
          >
            {heading}
          </h2>
          <p className="text-xl text-teal-600">{subheading}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CheckCircle className="w-6 h-6 text-teal-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-teal-800 mb-1">
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
