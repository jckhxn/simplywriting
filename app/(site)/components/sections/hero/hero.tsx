import { ChevronDown } from "lucide-react";
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
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background to-background/40"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d')] bg-cover bg-center opacity-5"></div>
      </div>

      <div className="container max-w-6xl mx-auto z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="opacity-0 animate-fade-in">
                <span className="tag animation-delay-100">
                  Professional Writing Service
                </span>
              </div>

              <h1 className="section-title text-4xl md:text-5xl lg:text-6xl opacity-0 animate-fade-in animation-delay-200">
                {title}
                Elevate Your Writing{" "}
                <span className="text-primary">Journey</span>
              </h1>

              <p className="text-lg md:text-xl text-foreground/80 max-w-md opacity-0 animate-fade-in animation-delay-300">
                {body}
                Professional writing services tailored to your needs. From
                content creation to editing, we help you communicate with
                clarity and impact.
              </p>

              {/* CTAS GO HERE */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2 opacity-0 animate-fade-in animation-delay-400">
                <a href="#services" className="button-primary">
                  Our Services
                </a>
                <a href="#contact" className="button-secondary">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 opacity-0 animate-fade-in animation-delay-300 flex flex-col items-center">
            {/* Profile Image - Properly styled as circular */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8">
              <SanityImage
                data={image}
                className="w-full h-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, (max-width: 1024px) 66vw, 50vw"
              />
            </div>

            {/* Quote Card - Positioned cleanly below the image */}
            <div className="glass w-full max-w-md p-6 rounded-lg">
              <blockquote className="text-center italic text-foreground/80">
                <p className="text-lg md:text-xl">
                  "The art of writing is the art of discovering what you
                  believe."
                </p>
                <footer className="mt-2 text-sm font-medium text-foreground">
                  — Gustave Flaubert
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/60 hover:text-foreground transition-colors duration-300"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} className="animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
