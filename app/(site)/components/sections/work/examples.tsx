import { ArrowUpRight } from "lucide-react";
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
}

const WorkItem = ({
  title,
  excerpt,
  category,
  image,
  slug,
  className,
}: WorkItemProps) => {
  return (
    <div
      className={cn(
        "group bg-white rounded-lg overflow-hidden border border-border/50 hover:shadow-md transition-all duration-300 opacity-0 animate-fade-in",
        className
      )}
      style={{ animationPlayState: "paused" }}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs bg-secondary text-foreground/80 px-2 py-0.5 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/80 mb-4">{excerpt}</p>
        <a
          href={`/writing/${slug}`}
          className="inline-flex items-center text-primary font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View project <ArrowUpRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

interface FeaturedWorkProps {
  heading: string;
  subheading: string;
  _type: string;
}

export default async function FeaturedWork({
  heading,
  subheading,
  _type,
}: FeaturedWorkProps) {
  const featuredWorks = await loadFeaturedWorks();

  // Fallback projects if no featured works are loaded
  const fallbackProjects = [
    {
      title: "TechSolutions Website Redesign",
      excerpt:
        "Complete content overhaul and copywriting for a tech company's website, increasing conversion by 40%.",
      category: "Web Content",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
      slug: "tech-solutions-redesign",
    },
    {
      title: "Academic Research Paper",
      excerpt:
        "Editing and proofreading services for a groundbreaking research paper published in a prominent journal.",
      category: "Academic",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80",
      slug: "academic-research-paper",
    },
    {
      title: "Corporate Communication Strategy",
      excerpt:
        "Development of internal and external communication materials for a Fortune 500 company.",
      category: "Corporate",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
      slug: "corporate-communication",
    },
  ];

  // Use featuredWorks if available, otherwise use fallback projects
  const projectsToDisplay =
    featuredWorks?.length > 0 ? featuredWorks : fallbackProjects;

  return (
    <ScrollReveal>
      <section id={_type} className="py-24 px-6 md:px-10">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span
              className="tag opacity-0 animate-fade-in"
              style={{ animationPlayState: "paused" }}
            >
              Portfolio
            </span>
            <h2
              className="section-title mt-3 mb-4 opacity-0 animate-fade-in animation-delay-100"
              style={{ animationPlayState: "paused" }}
            >
              {heading}
            </h2>
            <p
              className="text-foreground/80 opacity-0 animate-fade-in animation-delay-200"
              style={{ animationPlayState: "paused" }}
            >
              {subheading}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projectsToDisplay?.map((work, index) => (
              <WorkItem
                key={work.slug || index}
                title={work.title}
                excerpt={work.excerpt}
                category={work.category}
                image={work.image}
                slug={work.slug}
                className={`animation-delay-${(index + 1) * 100}`}
              />
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
