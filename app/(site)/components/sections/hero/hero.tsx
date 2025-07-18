import { ChevronDown } from "lucide-react";
import { SanityImage } from "../../SanityImage";
import ScrollReveal from "../../ScrollReveal";

type HeroProps = {
  image: any;
  name: string;
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
    <ScrollReveal>
      <section
        id="TEST"
        className="relative min-h-[85vh] flex items-center pt-16 pb-12 px-6 md:px-10 bg-background"
      >

        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Main Content - Takes up 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              {/* Client Photo & Professional Badge */}
              <div className="flex items-center gap-6">
                {/* Client Photo */}
                <div className="relative flex-shrink-0 group">
                  <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ring-4 ring-primary/10">
                    {image ? (
                      <SanityImage
                        data={image}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 96px, (max-width: 1024px) 112px, 128px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                        <span className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">
                          {title?.charAt(0) || "J"}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-3 border-white shadow-md animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Professional Badge */}
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  Available for New Projects
                </div>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                  {title}
                </h1>
                <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed max-w-2xl">
                  {body}
                </p>
              </div>

              {/* Key Stats/Achievements */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-border/50">
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-foreground/60">Projects Completed</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-foreground/60">Client Satisfaction</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-primary">8+</div>
                  <div className="text-sm text-foreground/60">Years Experience</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#portfolio" 
                  className="button-primary"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="button-secondary"
                >
                  Start a Project
                </a>
              </div>
            </div>

            {/* Right Sidebar - Portfolio Preview */}
            <div className="lg:col-span-2 space-y-6">
              {/* Featured Work */}
              <div className="bg-muted/50 rounded-lg p-6 border border-border/50">
                <h3 className="text-lg font-semibold mb-4">Featured Work</h3>
                <div className="space-y-4">
                  <div className="border-l-3 border-primary pl-4">
                    <h4 className="font-medium text-foreground/90">Tech Startup Series A Pitch Deck</h4>
                    <p className="text-sm text-foreground/60 mt-1">Helped secure $12M in funding with compelling narrative</p>
                  </div>
                  <div className="border-l-3 border-primary pl-4">
                    <h4 className="font-medium text-foreground/90">Fortune 500 Annual Report</h4>
                    <p className="text-sm text-foreground/60 mt-1">Transformed complex data into engaging shareholder story</p>
                  </div>
                  <div className="border-l-3 border-primary pl-4">
                    <h4 className="font-medium text-foreground/90">Healthcare SaaS Website Copy</h4>
                    <p className="text-sm text-foreground/60 mt-1">Increased conversion rate by 340% with targeted messaging</p>
                  </div>
                </div>
              </div>

              {/* Services Overview */}
              <div className="bg-muted/50 rounded-lg p-6 border border-border/50">
                <h3 className="text-lg font-semibold mb-4">Core Services</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Pitch Decks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Website Copy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Annual Reports</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Content Strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Brand Messaging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Technical Writing</span>
                  </div>
                </div>
              </div>

              {/* Client Testimonial */}
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <blockquote className="text-sm italic text-foreground/80 mb-3">
                  "Working with this writer transformed our funding pitch completely. Clear, compelling, and results-driven."
                </blockquote>
                <div className="text-xs text-foreground/60">
                  — Sarah Chen, CEO at TechFlow Analytics
                </div>
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
    </ScrollReveal>
  );
};

export default Hero;
