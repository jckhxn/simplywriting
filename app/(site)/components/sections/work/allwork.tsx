import Link from "next/link";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/(site)/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/app/(site)/components/ui/pagination";
import { loadWorks } from "@/sanity";
import { formatPublishedDate, sanitizeString } from "@/lib/utils";
import { ArrowUpRight, FileText, TrendingUp, Building, Calendar } from "lucide-react";

const ITEMS_PER_PAGE = 6;

export default async function WritingWorkPage({
  page,
  category,
}: {
  page: number;
  category: string;
}) {
  const currentPage = page || 1;
  const selectedCategory = category || "";

  const worksData = await loadWorks(
    currentPage,
    ITEMS_PER_PAGE,
    selectedCategory
  );

  const {
    posts = [],
    total = 0,
    categories: fetchedCategories = [],
  } = worksData ?? {};

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  const categories = [
    "All",
    ...(fetchedCategories
      ?.filter((cat) => cat?.title !== "All")
      ?.map((cat) => cat?.title) ?? []),
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container max-w-7xl mx-auto px-6 md:px-10 py-16 mt-20">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Professional Portfolio
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Writing <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Explore professional writing projects that have delivered measurable results for clients across industries. 
            Each project demonstrates strategic content development and proven business impact.
          </p>
        </div>

        {/* Portfolio Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-background rounded-lg p-6 border border-border/50 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold text-primary">{total}+</span>
            </div>
            <div className="text-sm text-foreground/60">Writing Projects</div>
          </div>
          <div className="bg-background rounded-lg p-6 border border-border/50 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Building className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold text-primary">50+</span>
            </div>
            <div className="text-sm text-foreground/60">Clients Served</div>
          </div>
          <div className="bg-background rounded-lg p-6 border border-border/50 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-2xl font-bold text-primary">2.5x</span>
            </div>
            <div className="text-sm text-foreground/60">Average ROI</div>
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

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {posts.map((post) => (
            <article
              key={post?._id}
              className="group bg-background rounded-lg border border-border/50 hover:border-primary/30 transition-colors overflow-hidden"
            >
              <Link
                href={`/writing/${post?.slug}`}
                prefetch={false}
                className="block"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post?.image || "/placeholder.svg"}
                    alt={post?.title || "Untitled"}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                      {post?.category || "Writing"}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-foreground/60">
                      <Calendar className="w-3 h-3" />
                      {formatPublishedDate(post?.publishedDate)}
                    </div>
                  </div>
                </div>
                
                <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post?.title || "Untitled"}
                </h2>
                
                <p className="text-foreground/70 text-sm line-clamp-3 mb-4">
                  {post?.excerpt ?? ""}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-8 h-8 border border-primary/20">
                      <AvatarImage
                        src={post?.author?.image || "/placeholder-user.jpg"}
                        alt={post?.author?.name || "Author"}
                      />
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        {post?.author?.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("") || "AU"}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <span className="font-medium text-sm">
                        {post?.author?.name || "Author"}
                      </span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/writing/${post?.slug}`}
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    View Project
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
                      currentPage > 1
                        ? `?category=${selectedCategory}&page=${currentPage - 1}`
                        : undefined
                    }
                    className={`transition-all duration-300 ${currentPage <= 1 ? "cursor-not-allowed opacity-50" : "hover:bg-muted"}`}
                    aria-disabled={currentPage <= 1}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href={`?category=${selectedCategory}&page=${i + 1}`}
                      className={`transition-all duration-300 ${
                        currentPage === i + 1
                          ? "bg-primary text-primary-foreground"
                          : "bg-background text-foreground hover:bg-muted"
                      }`}
                      aria-current={currentPage === i + 1 ? "page" : undefined}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href={
                      currentPage < totalPages
                        ? `?category=${selectedCategory}&page=${currentPage + 1}`
                        : undefined
                    }
                    className={`transition-all duration-300 ${currentPage >= totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-muted"}`}
                    aria-disabled={currentPage >= totalPages}
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
              Ready to Create Your Next Success Story?
            </h2>
            <p className="text-foreground/80 mb-8 leading-relaxed">
              Let's discuss how professional writing can help you achieve your business goals. 
              From pitch decks to website copy, I'll create content that delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#contact"
                className="button-primary inline-flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Start Your Project
              </Link>
              <Link
                href="/blog"
                className="button-secondary inline-flex items-center gap-2"
              >
                Read Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
