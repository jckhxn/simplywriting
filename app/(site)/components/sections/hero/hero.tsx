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
      <div className="py-12 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
            {/* Left Side: Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 mb-4 sm:mb-6">
                {title}
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl">
                {body}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full sm:w-auto">
                {ctas?.map((cta, key) => (
                  <Button
                    className="rounded-lg px-3 w-full sm:w-auto bg-stone-700 text-white hover:bg-stone-600 active:bg-stone-800 font-semibold py-2 sm:py-3 shadow-sm transition-all duration-200 ease-in-out focus:outline-none focus:ring-2"
                    {...cta}
                    key={key}
                  />
                ))}
              </div>
            </div>

            {/* Right Side: Full Image */}
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2">
              <div className="w-full overflow-hidden rounded-lg shadow-md aspect-w-16 aspect-h-9">
                <SanityImage
                  data={image}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 66vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-primary/5 rounded-tr-full"></div>
    </section>
  );
};

export default Hero;
