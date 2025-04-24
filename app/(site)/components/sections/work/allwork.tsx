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

const ITEMS_PER_PAGE = 3;

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
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 text-gray-900">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Explore Our <span className="text-primary">Writing</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">
            Discover insightful articles, thought-provoking essays, and expert
            analyses on various topics.
          </p>
        </div>

        <nav
          className="mb-12 flex flex-wrap justify-center gap-3"
          aria-label="Categories"
        >
          {categories.map((cat) => {
            const isSelected =
              selectedCategory === (cat === "All" ? "" : sanitizeString(cat));
            return (
              <Link
                key={cat}
                href={`?category=${cat === "All" ? "" : sanitizeString(cat)}&page=1`}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isSelected
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:shadow-xs"
                }`}
                aria-current={isSelected ? "page" : undefined}
              >
                {cat}
              </Link>
            );
          })}
        </nav>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post?._id}
              className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <Link
                href={`/writing/${post?.slug}`}
                prefetch={false}
                className="block overflow-hidden"
              >
                <img
                  src={post?.image || "/placeholder.svg"}
                  alt={post?.title || "Untitled"}
                  width={400}
                  height={225}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </Link>
              <div className="p-6">
                <Link
                  href={`/writing/${post?.slug}`}
                  prefetch={false}
                  className="block"
                >
                  <h2 className="mb-3 text-2xl font-bold text-gray-900 transition-colors duration-300 hover:text-primary">
                    {post?.title || "Untitled"}
                  </h2>
                </Link>
                <p className="mb-4 line-clamp-3 text-gray-600">
                  {post?.excerpt ?? ""}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <Avatar className="mr-3 h-10 w-10 border-2 border-primary/20">
                    <AvatarImage
                      src={post?.author?.image || "/placeholder-user.jpg"}
                      alt={post?.author?.name || "Author"}
                    />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {post?.author?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("") || "AU"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="font-medium text-gray-900">
                      {post?.author?.name || "Author"}
                    </span>
                    <span className="block text-xs">
                      {formatPublishedDate(post?.publishedDate)}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <nav className="mt-16" aria-label="Pagination">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={
                      currentPage > 1
                        ? `?category=${selectedCategory}&page=${currentPage - 1}`
                        : undefined
                    }
                    className={`transition-all duration-300 ${currentPage <= 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100"}`}
                    aria-disabled={currentPage <= 1}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href={`?category=${selectedCategory}&page=${i + 1}`}
                      className={`transition-all duration-300 ${
                        currentPage === i + 1
                          ? "bg-primary text-white"
                          : "bg-white text-gray-700 hover:bg-gray-100"
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
                    className={`transition-all duration-300 ${currentPage >= totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-gray-100"}`}
                    aria-disabled={currentPage >= totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </nav>
        )}
      </main>
    </div>
  );
}
