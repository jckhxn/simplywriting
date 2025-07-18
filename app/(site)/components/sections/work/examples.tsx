import { ArrowUpRight, TrendingUp, Users, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";
import { loadFeaturedWorks } from "@/sanity";
import ScrollReveal from "../../ScrollReveal";

interface WorkItemProps {
  image?: any;
  title?: string;
  heading?: string;
  excerpt?: string;
  category?: string;
  slug?: string;
  subheading?: string;
  ctas?: any;
  className?: string;
  _type?: string;
  results?: string;
  client?: string;
  timeline?: string;
}

const WorkItem = ({
  title,
  excerpt,
  category,
  image,
  slug,
  results,
  client,
  timeline,
  className,
}: WorkItemProps) => {
  return (
    <a
      href={`/work/${slug}`}
      className={cn(
        "group bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-colors cursor-pointer block",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                {category}
              </span>
              {timeline && (
                <span className="text-xs text-foreground/60">{timeline}</span>
              )}
            </div>
            <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            {client && (
              <p className="text-sm text-foreground/60 mb-2">{client}</p>
            )}
          </div>
          <ArrowUpRight className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors" />
        </div>

        {/* Description */}
        <p className="text-foreground/80 text-sm leading-relaxed">{excerpt}</p>

        {/* Results */}
        {results && (
          <div className="flex items-center gap-2 pt-2 border-t border-border/30">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">{results}</span>
          </div>
        )}

      </div>
    </a>
  );
};

interface FeaturedWorkProps {
  heading: string;
  subheading: string;
  _type: string;
}

export default async function FeaturedWork({
  heading = "Featured Work & Results",
  subheading = "Real projects that delivered measurable business impact for clients across industries.",
  _type,
}: FeaturedWorkProps) {
  const featuredWorks = await loadFeaturedWorks();

  // Enhanced fallback projects with results and client info
  const fallbackProjects = [
    {
      title: "Series A Pitch Deck",
      excerpt: "Comprehensive investor presentation for AI healthcare startup seeking $15M Series A funding.",
      category: "Pitch Deck",
      client: "HealthTech AI Inc.",
      timeline: "2 weeks",
      results: "$12M raised (80% of target)",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      slug: "series-a-pitch-deck",
    },
    {
      title: "SaaS Homepage Redesign",
      excerpt: "Complete messaging overhaul for B2B software company's homepage and key landing pages.",
      category: "Website Copy",
      client: "CloudFlow Solutions",
      timeline: "3 weeks",
      results: "340% conversion increase",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      slug: "saas-homepage-redesign",
    },
    {
      title: "Annual Report Writing",
      excerpt: "Executive communications and financial storytelling for public company's annual shareholder report.",
      category: "Executive Comms",
      client: "Manufacturing Corp",
      timeline: "6 weeks",
      results: "98% shareholder approval",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      slug: "annual-report-writing",
    },
    {
      title: "Product Documentation",
      excerpt: "Technical writing and API documentation for enterprise software platform used by 50,000+ developers.",
      category: "Technical Writing",
      client: "DevTools Platform",
      timeline: "4 weeks",
      results: "60% reduction in support tickets",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      slug: "product-documentation",
    },
    {
      title: "Content Strategy & SEO",
      excerpt: "Comprehensive content marketing strategy and blog content creation for fintech startup.",
      category: "Content Strategy",
      client: "FinanceForward",
      timeline: "8 weeks",
      results: "285% organic traffic growth",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
      slug: "content-strategy-seo",
    },
    {
      title: "Brand Messaging Framework",
      excerpt: "Complete brand voice and messaging architecture for scaling e-commerce platform.",
      category: "Brand Strategy",
      client: "E-commerce Co",
      timeline: "5 weeks",
      results: "Unified brand voice across 15 markets",
      image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&q=80",
      slug: "brand-messaging-framework",
    },
  ];

  // Use featuredWorks if available, otherwise use fallback projects
  const projectsToDisplay =
    featuredWorks?.length > 0 ? featuredWorks : fallbackProjects;

  return (
    <ScrollReveal>
      <section id={_type} className="py-16 px-6 md:px-10 bg-muted/20">
        <div className="container max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
            <p className="text-xl text-foreground/80">{subheading}</p>
          </div>

          {/* Results Summary */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-background rounded-lg p-6 border border-border/50 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-primary">$50M+</span>
              </div>
              <div className="text-sm text-foreground/60">Total Funding Secured</div>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border/50 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-primary">2.8x</span>
              </div>
              <div className="text-sm text-foreground/60">Average Conversion Lift</div>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border/50 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-primary">50+</span>
              </div>
              <div className="text-sm text-foreground/60">Companies Served</div>
            </div>
          </div>

          {/* Work Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsToDisplay?.map((work, index) => (
              <WorkItem
                key={work.slug || index}
                title={work.title}
                excerpt={work.excerpt}
                category={work.category}
                image={work.image}
                slug={work.slug}
                results={work.results}
                client={work.client}
                timeline={work.timeline}
              />
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
