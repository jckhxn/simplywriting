import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/(site)/components/ui/avatar";
import { formatPublishedDate } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Clock, Share2, BookOpen, Tag } from "lucide-react";
import Link from "next/link";

interface PostPageProps {
  image?: string;
  title: string;
  author: {
    name: string;
    image?: string | null;
  };
  content: Array<any>;
  publishedDate: string;
  tags?: string[];
  category?: string;
}

// Helper function to estimate reading time
function estimateReadingTime(content: Array<any>): number {
  if (!content || !Array.isArray(content)) return 1;
  
  const textContent = content
    .filter(block => block._type === 'block' && block.children)
    .map(block => block.children.map(child => child.text || '').join(' '))
    .join(' ');
  
  const wordsPerMinute = 200;
  const words = textContent.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function PostPage({
  data: { image, title, author, content, publishedDate, tags = [], category },
}: {
  data: PostPageProps;
}) {
  const readingTime = estimateReadingTime(content);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="bg-background border-b border-border/50 sticky top-0 z-40 backdrop-blur-sm bg-background/95">
        <div className="container max-w-7xl mx-auto px-6 md:px-10 py-4">
          <nav className="flex items-center justify-between">
            <Link
              href="/blog"
              className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Blog</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
                <Share2 className="h-4 w-4" />
                <span className="hidden sm:inline text-sm">Share</span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Article Content */}
      <article className="container max-w-4xl mx-auto px-6 md:px-10 py-12">
        {/* Article Header */}
        <header className="mb-12">
          {/* Category Badge */}
          {category && (
            <div className="mb-6">
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <Tag className="w-3 h-3" />
                {category}
              </span>
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {title}
          </h1>
          
          {/* Author & Meta Info */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-border/50">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border-2 border-primary/20">
                <AvatarImage
                  src={author?.image || "/placeholder-user.jpg"}
                  alt={author?.name || "Author avatar"}
                />
                <AvatarFallback className="bg-primary/10 text-primary">
                  {author.name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{author.name}</p>
                <p className="text-sm text-foreground/60">
                  {formatPublishedDate(publishedDate)}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-foreground/60">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min read</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>Article</span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {image && (
          <div className="mb-12">
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-foreground/70">
          <PortableText
            value={content}
            components={{
              block: {
                normal: ({ children }) => <p className="mb-6 leading-relaxed">{children}</p>,
                h1: ({ children }) => <h1 className="text-2xl font-bold mt-8 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-xl font-bold mt-6 mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-lg font-semibold mt-4 mb-2">{children}</h3>,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary pl-6 italic text-foreground/70 my-6">
                    {children}
                  </blockquote>
                ),
              },
              marks: {
                strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                em: ({ children }) => <em className="italic">{children}</em>,
                code: ({ children }) => (
                  <code className="bg-muted px-1 py-0.5 rounded text-sm">{children}</code>
                ),
              },
            }}
          />
        </div>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-border/50">
            <h3 className="text-lg font-semibold mb-4">Topics</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-muted/50 text-foreground/80 px-3 py-1 rounded-full text-sm hover:bg-muted/70 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Related Articles Section */}
      <section className="border-t border-border/50 bg-muted/30 py-16">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Continue Reading</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Explore more insights on professional writing, content strategy, and business communication.
            </p>
          </div>
          
          <div className="text-center">
            <Link
              href="/blog"
              className="button-primary inline-flex items-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
