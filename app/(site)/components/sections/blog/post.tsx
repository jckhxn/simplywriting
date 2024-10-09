import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { formatPublishedDate } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
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
}

export function PostPage({
  data: { image, title, author, content, publishedDate },
}: {
  data: PostPageProps;
}) {
  return (
    <div className="min-h-min bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      {/* Header Section */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-800 hover:text-gray-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Posts
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <article className="flex-grow container mx-auto px-4 py-6">
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={title || "Blog post hero image"}
            width={1200}
            height={600}
            className="w-full h-full object-cover"
            style={{ aspectRatio: "1200/600", objectFit: "cover" }}
          />
        </div>
        <div className="mt-8 md:mt-12 lg:mt-16 px-4 md:px-0">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage
                src={author?.image || "/placeholder-user.jpg"}
                alt={author?.name || "Author avatar"}
              />
              <AvatarFallback>{author.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                {title}
              </h2>
              <p className="text-muted-foreground">
                By {author.name} {""}
                on {formatPublishedDate(publishedDate)}
              </p>
            </div>
          </div>
          <div className="prose prose-gray mt-8 dark:prose-invert">
            <PortableText
              value={content}
              components={{
                block: {
                  normal: ({ children }) => <p>{children}</p>,
                },
              }}
            />
          </div>
        </div>
      </article>
    </div>
  );
}
