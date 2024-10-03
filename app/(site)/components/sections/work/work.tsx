"use client";

import React from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatPublishedDate } from "@/lib/utils";

interface Props {
  image: string;
  title: string;
  author: string;
  description: string;
  date: string;
  excerpt: string;
  file: string;
}

const SingleDocumentPreview: React.FC<{ data: Props }> = ({ data }) => {
  // Destructuring the data object
  const { title, excerpt, date, file, author } = data;

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Button variant="ghost" className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Work
      </Button>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <p className="text-sm text-gray-500 mb-2">
            {formatPublishedDate(date)} by {author.name}
          </p>
          <p className="text-base text-gray-700">{excerpt}</p>
        </CardHeader>
        <CardContent>
          <div className="h-[70vh] w-full border rounded-md overflow-hidden">
            <iframe
              src={file} // Use the fileUpload link for the iframe
              className="w-full h-full md:h-[70vh] h-[50vh] border-none"
              title={title}
              frameBorder="0"
              style={{
                overflow: "hidden",
                WebkitOverflowScrolling: "touch",
              }}
            />
          </div>
          <div className="mt-4">
            <a
              href={file} // Use fileUpload for the download link
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-600 text-white p-4 rounded-md text-lg text-center"
            >
              <ExternalLink className="inline mr-2 h-5 w-5" />
              Open Full Document
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleDocumentPreview;
