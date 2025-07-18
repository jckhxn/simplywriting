import ScrollReveal from "../../ScrollReveal";

interface AboutSectionProps {
  heading: string;
  subheading: string;
  description: string;
  awards: {};
  milestones: {};
  _type: string;
}
export default function AboutSection({
  _type,
  awards,
  milestones,
  heading = "Expertise & Experience",
  subheading = "Professional Writing That Drives Results",
  description = "Award-winning copywriter and content strategist with 8+ years helping businesses secure funding, increase conversions, and communicate their value effectively.",
}: AboutSectionProps) {
  return (
    <ScrollReveal>
      <section id={_type} className="py-16 px-6 md:px-10 bg-muted/30">
        <div className="container max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {subheading}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{heading}</h2>
                <p className="text-xl text-foreground/80 leading-relaxed">{description}</p>
              </div>

              {/* Expertise Areas */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Industries Served</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Technology & SaaS</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Healthcare & Biotech</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Financial Services</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Manufacturing & Engineering</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Content Types</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Investor Pitch Decks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Website & Landing Pages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Executive Communications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>Technical Documentation</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Results */}
              <div className="bg-background rounded-lg p-6 border border-border/50">
                <h3 className="text-lg font-semibold mb-4">Proven Results</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">$50M+</div>
                    <div className="text-sm text-foreground/60">Funding Secured</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">2.3x</div>
                    <div className="text-sm text-foreground/60">Avg. Conversion Lift</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">95%</div>
                    <div className="text-sm text-foreground/60">Client Retention Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Credentials & Awards */}
            <div className="space-y-6">
              {/* Credentials */}
              <div className="bg-background rounded-lg p-6 border border-border/50">
                <h3 className="text-lg font-semibold mb-4">Credentials</h3>
                <div className="space-y-3 text-sm">
                  <div className="border-l-3 border-primary pl-3">
                    <div className="font-medium">MBA, Marketing Strategy</div>
                    <div className="text-foreground/60">Northwestern Kellogg</div>
                  </div>
                  <div className="border-l-3 border-primary pl-3">
                    <div className="font-medium">Certified Content Strategist</div>
                    <div className="text-foreground/60">Content Marketing Institute</div>
                  </div>
                  <div className="border-l-3 border-primary pl-3">
                    <div className="font-medium">B.A. English Literature</div>
                    <div className="text-foreground/60">University of Chicago</div>
                  </div>
                </div>
              </div>

              {/* Recognition */}
              <div className="bg-background rounded-lg p-6 border border-border/50">
                <h3 className="text-lg font-semibold mb-4">Recognition</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">Content Marketing Awards</div>
                      <div className="text-foreground/60">Best B2B Campaign (2023)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">MarTech Breakthrough</div>
                      <div className="text-foreground/60">Content Innovation (2022)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                    <div>
                      <div className="font-medium">Featured Expert</div>
                      <div className="text-foreground/60">Content Marketing World</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
                <h3 className="text-lg font-semibold mb-4">My Process</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                    <span>Strategy & Research</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                    <span>Content Creation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                    <span>Review & Optimize</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
