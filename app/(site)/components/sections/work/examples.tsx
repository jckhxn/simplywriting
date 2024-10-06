import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { loadFeaturedWorks } from "@/sanity";
import { SanityImage } from "../../SanityImage";
import Link from "next/link";

type HeroProps = {
  image: any;
  heading: string;
  subheading: string;
  _key: string;
};
export default async function WorkExamples(
  _key,
  image,
  heading = "Here's an example of my work",
  subheading = "Add more text description to the work example."
) {
  // Load featured work.
  const featuredWorks = await loadFeaturedWorks();

  return (
    <section
      id={_key}
      className="py-16 px-4 bg-gradient-to-br from-blue-50 to-cyan-50"
    >
      <div className="max-w-xxl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wide text-blue-600 mb-2">
            Our Work
          </h2>
          <div className="w-12 h-0.5 bg-blue-300 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-blue-900">
              {heading}
            </h1>
            <p className="text-blue-700">{subheading}</p>
          </div>
          <Link href="/writing">
            <Button
              variant="outline"
              className="mt-4 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              View All Work
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredWorks.map((work, index) => (
            <div
              key={index}
              className="space-y-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={work.image}
                  alt={work.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />

                <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">
                  {work.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {work.title}
                </h3>
                <p className="text-blue-700 mb-4">{work.excerpt}</p>
                <Link href={`/writing/${work.slug}`}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  >
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
