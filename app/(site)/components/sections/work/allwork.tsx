import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
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
  const selectedCategory = category || ""; // Sanitize category

  // Fetch works based on the current page and category
  const worksData = await loadWorks(
    currentPage,
    ITEMS_PER_PAGE,
    selectedCategory
  );

  // Safely destructure the worksData with optional chaining and default values
  const {
    posts = [],
    total = 0,
    categories: fetchedCategories = [],
  } = worksData ?? {};

  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  // Ensure "All" is the first category and append fetched categories
  const categories = [
    "All",
    ...(fetchedCategories
      ?.filter((cat) => cat?.title !== "All")
      ?.map((cat) => cat?.title) ?? []),
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Explore Our Writing
        </h1>

        {/* Category Links */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Link
              key={category}
              href={`?category=${category === "All" ? "" : sanitizeString(category)}&page=1`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Post Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post?._id}
              className="bg-card rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <Link
                href={`/writing/${post?.slug}`}
                prefetch={false}
                className="block"
              >
                <img
                  src={post?.image || "/placeholder.svg"}
                  alt={post?.title || "Untitled"}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <Link
                  href={`/writing/${post?.slug}`}
                  prefetch={false}
                  className="block"
                >
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors duration-300">
                    {post?.title || "Untitled"}
                  </h2>
                </Link>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post?.excerpt ?? ""}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Avatar className="w-8 h-8 mr-3">
                    <AvatarImage
                      src={post?.author?.image || "/placeholder-user.jpg"}
                      alt={post?.author?.name || "Author"}
                    />
                    <AvatarFallback>
                      {post?.author?.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("") || "AU"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="font-medium">
                      {post?.author?.name || "Author"}
                    </span>
                    <span className="block text-xs">
                      {formatPublishedDate(post?.publishedDate)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={
                      currentPage > 1
                        ? `?category=${selectedCategory}&page=${currentPage - 1}`
                        : undefined
                    }
                    disabled={currentPage <= 1}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href={`?category=${selectedCategory}&page=${i + 1}`}
                      isActive={currentPage === i + 1}
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
                    disabled={currentPage >= totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </main>
    </div>
  );
}
