import { Button } from "@/components/ui/button";
import { loadServices } from "@/sanity";
import Link from "@/sanity/schemas/objects/link";
import { PenTool, Megaphone, Globe, LucideIcon } from "lucide-react";

// Define the type for individual services
type Service = {
  title: string;
  description: string;
  _key: string;
};

// Define the props for the Services component
type ServiceProps = {
  title?: string;
  heading?: string;
  subheading?: string;
  _key?: string; // Optional key to set the section's ID
};

const iconMap: { [key: string]: LucideIcon } = {
  "Blogging & SEO": PenTool,
  "Marketing Campaigns": Megaphone,
  "Web Content": Globe,
};

export default async function Services({
  title = "Our Services",
  heading = "Services that deliver your message",
  subheading = `We specialize in writing compelling copy that engages your
              audience, whether it's for SEO-optimized blogs, marketing
              campaigns, or website content. Let us help you tell your story in
              a way that resonates.`,
  _key, // Optional key used to set the section's ID
}: ServiceProps) {
  // Fetch the services data

  // Should I just pass services from Sanity?
  const services: Service[] = await loadServices();
  return (
    <section
      id={_key}
      className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50"
      aria-labelledby="services-title"
    >
      <div className="max-w-xxl mx-auto">
        <div className="mb-12">
          <h2
            id="services-title"
            className="text-sm uppercase tracking-wide text-indigo-600 mb-2"
          >
            {title}
          </h2>
          <div
            className="w-12 h-0.5 bg-indigo-300 mb-8"
            aria-hidden="true"
          ></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-indigo-900">
              {heading}
            </h1>
            <p className="text-indigo-700">{subheading}</p>
          </div>

          <Button
            className="mt-4 bg-stone-700 text-white hover:bg-stone-600
          active:bg-stone-800 font-semibold transition-all
          duration-200 ease-in-out focus:outline-none focus:ring-2 hover:text-white"
          >
            Learn More
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.title] || PenTool;
            return (
              <div
                key={service._key}
                className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-full"
                  aria-hidden="true"
                >
                  <Icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-indigo-900 text-center">
                  {service.title}
                </h3>
                <p className="text-indigo-700 text-center">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
