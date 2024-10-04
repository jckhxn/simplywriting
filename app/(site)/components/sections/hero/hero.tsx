import React from "react";
import Button from "@/app/(site)/components/Button";
import { SanityImage } from "../../SanityImage";

type HeroProps = {
  image: any;
  title: string;
  body: string;
  ctas: any;
  _key: string;
};

const Hero = ({
  _key,
  image,
  title = "Welcome to our website",
  body = "New text will appear here as you add it",
  ctas,
}: HeroProps) => {
  return (
    <section
      id={_key}
      className="w-full bg-blue-50 relative z-10 overflow-hidden"
    >
      <div className="py-20 lg:py-28 mb-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
            {/* Left Side: Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-6">
                {title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl">
                {body}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {ctas?.map((cta, key) => (
                  <Button
                    className="rounded-lg px-3 w-full bg-stone-700 text-gray-200 font-semibold py-3  shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 hover:bg-stone-500"
                    {...cta}
                    key={key}
                  />
                ))}
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="w-64 h-64 lg:w-80 lg:h-80 mt-12 lg:mt-0">
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                <SanityImage
                  data={image}
                  className="w-full h-full object-cover"
                  sizes="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-tr-full"></div>
    </section>
  );
};

export default Hero;
