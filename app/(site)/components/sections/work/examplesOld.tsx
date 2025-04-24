import Image from "next/image";
import { Button } from "@/app/(site)/components/ui/button";
import { Badge } from "@/app/(site)/components/ui/badge";
import { loadFeaturedWorks } from "@/sanity";
import { SanityImage } from "../../SanityImage";
import Link from "next/link";

type Props = {
  image: any;
  title: string;
  heading: string;
  subheading: string;
  _key: string;
  ctas: any;
};
export default async function WorkExamples({
  _key,
  title = "Our Work",
  heading = "Here's an example of my work",
  subheading = "Add more text description to the work example.",
  ctas,
}: Props) {
  // Load featured work.
  const featuredWorks = await loadFeaturedWorks();

  return (
    <section
      id={_key}
      className="py-16 px-4 bg-linear-to-br from-purple-50 to-indigo-50"
    >
      <div className="max-w-xxl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wide text-blue-600 mb-2">
            {title}
          </h2>
          <div className="w-12 h-0.5 bg-blue-300 mb-8"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-blue-900">
              {heading}
            </h1>
            <p className="text-blue-700">{subheading}</p>
          </div>
          {ctas?.map((cta, key) => (
            <Button
              className="rounded-lg px-3 w-full bg-stone-700 text-white hover:bg-stone-600 active:bg-stone-800 font-semibold py-3  shadow-2xs transition-all duration-200 ease-in-out focus:outline-hidden focus:ring-2"
              {...cta}
              key={key}
            />
          ))}
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

                <Badge className="absolute top-2 left-2 bg-blue-200 hover:bg-blue-300">
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
                    variant="default"
                    size="sm"
                    className="rounded-lg px-3  bg-stone-700 text-white hover:bg-stone-600 active:bg-stone-800 font-semibold py-3  shadow-2xs transition-all duration-200 ease-in-out focus:outline-hidden focus:ring-2e"
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
