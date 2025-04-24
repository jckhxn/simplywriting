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
import { formatPublishedDate } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function AllPosts({ page }: { page: number }) {
  const postsPerPage = 3; // Set your desired number of posts per page here
  const { posts, total } = await loadPosts(page, postsPerPage);
  const totalPages = Math.ceil(total / postsPerPage);

  // BIG assumption that no posts means invalid page.
  if (posts.length == 0) redirect("/blog");
  return (
    <div
      className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 text-gray-900
    "
    >
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Recent Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="bg-card rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl"
            >
              <Link
                href={`/blog/${post.slug}`}
                prefetch={false}
                className="block"
              >
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={225}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                />
              </Link>
              <div className="p-6">
                <Link
                  href={`/blog/${post.slug}`}
                  prefetch={false}
                  className="block"
                >
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground line-clamp-3 mb-4">
                  {post.description}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Avatar className="w-8 h-8 mr-3">
                    <AvatarImage
                      src={post.author?.image || "/placeholder-user.jpg"}
                      alt={post.author?.name}
                    />
                    <AvatarFallback>
                      {post.author.name
                        ?.split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <span className="font-medium">{post.author?.name}</span>
                    <span className="block text-xs">
                      {formatPublishedDate(post.publishedDate)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href={page > 1 ? `?page=${page - 1}` : undefined}
                    disabled={page <= 1}
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href={`?page=${i + 1}`}
                      isActive={page === i + 1}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href={page < totalPages ? `?page=${page + 1}` : undefined}
                    disabled={page >= totalPages}
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
