import React from "react"; 
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatPublishedDate } from "@/lib/utils";

interface Props {
  image: string;
  title: string;
  author: {
    name: string;
  };
  description: string;
  date: string;
  excerpt: string;
  file: string;
}

const SingleDocumentPreview: React.FC<{ data: Props }> = ({ data }) => {
  const { title, excerpt, date, file, author } = data;

  return (
    <div className="min-h-min bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/writing"
            className="inline-flex items-center text-gray-800 hover:text-gray-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Writing
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-6">
        <Card className="max-w-4xl mx-auto overflow-hidden bg-white shadow-lg border border-gray-200">
          <CardHeader className="bg-gradient-to-r from-stone-100 to-white-100 text-gray-800 p-6">
            <CardTitle className="text-2xl sm:text-3xl font-bold text-indigo-900">
              {title}
            </CardTitle>
            <p className="text-sm text-indigo-700 mt-2">
              {formatPublishedDate(date)} by {author.name}
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
              {excerpt}
            </p>

            <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-lg shadow-inner p-3">
              <div className="relative w-full h-0 pb-[100%] sm:pb-[75%] bg-white rounded-md shadow-md overflow-hidden">
                <iframe
                  src={`https://docs.google.com/viewer?url=${file}&embedded=true`}
                  className="absolute top-0 left-0 w-full h-full border-none"
                  title={title}
                  style={{
                    WebkitOverflowScrolling: "touch",
                  }}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 p-6">
            <Button
              className="w-full bg-slate-700 hover:bg-slate-600 text-white transition-colors"
              asChild
            >
              <a href={file} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Open Full Document
              </a>
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default SingleDocumentPreview;
