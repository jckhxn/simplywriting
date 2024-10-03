import { Button } from "@/components/ui/button";

export default function Services() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-xxl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wide text-indigo-600 mb-2">
            Our Services
          </h2>
          <div className="w-12 h-0.5 bg-indigo-300 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-indigo-900">
              Crafting Copy That Delivers Your Message
            </h1>
            <p className="text-indigo-700">
              We specialize in writing compelling copy that engages your
              audience, whether it's for SEO-optimized blogs, marketing
              campaigns, or website content. Let us help you tell your story in
              a way that resonates.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Blogging & SEO",
              description:
                "Boost your online visibility with well-researched, SEO-friendly blog content that not only ranks but also connects with readers.",
            },
            {
              title: "Marketing Campaigns",
              description:
                "Strategically crafted marketing copy designed to capture attention and drive action across all your campaigns.",
            },
            {
              title: "Web Content",
              description:
                "Engage your visitors with clear, persuasive, and informative web content tailored to your brand's voice.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="space-y-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-900">
                {service.title}
              </h3>
              <p className="text-indigo-700">{service.description}</p>
              <Button
                variant="outline"
                className="mt-4 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
