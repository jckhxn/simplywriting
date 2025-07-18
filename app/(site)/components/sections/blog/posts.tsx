import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/(site)/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/app/(site)/components/ui/pagination";
import { loadPosts } from "@/sanity";
import { formatPublishedDate, sanitizeString } from "@/lib/utils";
import { redirect } from "next/navigation";
import { Clock, ArrowUpRight, BookOpen, TrendingUp, Users } from "lucide-react";

// Helper function to estimate reading time
function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export default async function AllPosts({ page, category }: { page: number; category?: string }) {
  const postsPerPage = 6;
  const selectedCategory = category || "";
  const { posts, total, categories: fetchedCategories } = await loadPosts(page, postsPerPage, selectedCategory);
  const totalPages = Math.ceil(total / postsPerPage);
  
  const categories = [
    "All",
    ...(fetchedCategories
      ?.filter((cat) => cat?.title !== "All")
      ?.map((cat) => cat?.title) ?? []),
  ];

  // BIG assumption that no posts means invalid page.
  if (posts.length == 0) redirect("/blog");
  
  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-7xl mx-auto py-16 px-6 md:px-10 mt-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Writing Expertise
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Insights & <span className="text-primary">Case Studies</span>
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Professional writing techniques, industry insights, and real-world case studies from successful projects. 
            Learn from proven strategies that deliver measurable business results.
          </p>
        </div>

        {/* Blog Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-background rounded-lg p-6 border border-border/50 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold text-primary">{total}+</span>
            </div>
            <div className="text-sm text-foreground/60">Articles Published</div>
          </div>
          <div className="bg-background rounded-lg p-6 border border-border/50 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold text-primary">10K+</span>
            </div>
            <div className="text-sm text-foreground/60">Monthly Readers</div>
          </div>
          <div className="bg-background rounded-lg p-6 border border-border/50 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold text-primary">500+</span>
            </div>
            <div className="text-sm text-foreground/60">Industry Professionals</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => {
              const isSelected =
                selectedCategory === (cat === "All" ? "" : sanitizeString(cat));
              return (
                <Link
                  key={cat}
                  href={`?category=${cat === "All" ? "" : sanitizeString(cat)}&page=1`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-muted/50 text-foreground/80 hover:bg-muted transition-colors"
                  }`}
                  aria-current={isSelected ? "page" : undefined}
                >
                  {cat}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-colors overflow-hidden"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      {post.category || "Article"}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-foreground/60">
                      <Clock className="w-3 h-3" />
                      {estimateReadingTime(post.description || "")} min read
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                
                <Link href={`/blog/${post.slug}`} className="block">
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-foreground/70 text-sm line-clamp-3 mb-4">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8 border border-primary/20">
                      <AvatarImage
                        src={post.author?.image || "/placeholder-user.jpg"}
                        alt={post.author?.name}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        {post.author.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">{post.author?.name}</div>
                      <div className="text-xs text-foreground/60">
                        {formatPublishedDate(post.publishedDate)}
                      </div>
                    </div>
                  </div>
                  
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="border-t border-border/50 pt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={
                      page > 1
                        ? `?category=${selectedCategory}&page=${page - 1}`
                        : undefined
                    }
                    className={`transition-all duration-300 ${page <= 1 ? "cursor-not-allowed opacity-50" : "hover:bg-muted"}`}
                    aria-disabled={page <= 1}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href={`?category=${selectedCategory}&page=${i + 1}`}
                      className={`transition-all duration-300 ${
                        page === i + 1
                          ? "bg-primary text-primary-foreground"
                          : "bg-background text-foreground hover:bg-muted"
                      }`}
                      aria-current={page === i + 1 ? "page" : undefined}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href={
                      page < totalPages
                        ? `?category=${selectedCategory}&page=${page + 1}`
                        : undefined
                    }
                    className={`transition-all duration-300 ${page >= totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-muted"}`}
                    aria-disabled={page >= totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </main>

      {/* CTA Section */}
      <section className="border-t border-border/50 bg-muted/30 py-16">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              Apply the insights from these articles to your business. Professional writing services 
              that deliver the results you&apos;ve read about in these case studies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="button-primary inline-flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Start Your Project
              </Link>
              <Link
                href="/writing"
                className="button-secondary inline-flex items-center gap-2"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
