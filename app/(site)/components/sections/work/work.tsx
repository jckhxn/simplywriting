import React from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Download, TrendingUp, Calendar, Building, FileText, Eye } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/(site)/components/ui/Card";
import { Button } from "@/app/(site)/components/ui/button";
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
  category?: string;
  client?: string;
  timeline?: string;
  result?: string;
  industry?: string;
  projectType?: string;
}

const SingleDocumentPreview: React.FC<{ data: Props }> = ({ data }) => {
  const { 
    title, 
    excerpt, 
    date, 
    file, 
    author, 
    category = "Writing Project",
    client = "Confidential Client",
    timeline = "2-3 weeks",
    result = "Successful completion",
    industry = "Technology",
    projectType = "Professional Writing"
  } = data;

  return (
    <div className="min-h-screen bg-background">
      {/* Project Content */}
      <main className="container max-w-7xl mx-auto px-6 md:px-10 py-12 mt-20">
        {/* Project Header with Back Button */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <Link
              href="/writing"
              className="inline-flex items-center text-foreground/80 hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Portfolio</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hidden sm:inline-flex"
              >
                <a href={file} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Project Info Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Project Overview */}
            <Card className="bg-background border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Building className="w-4 h-4 text-primary" />
                    <span className="text-foreground/60">Client:</span>
                    <span className="font-medium">{client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-foreground/60">Timeline:</span>
                    <span className="font-medium">{timeline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="text-foreground/60">Type:</span>
                    <span className="font-medium">{projectType}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Results */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Key Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  {result}
                </p>
              </CardContent>
            </Card>

            {/* Project Details */}
            <Card className="bg-background border-border/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Project Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-foreground/60">Industry:</span>
                  <span className="font-medium">{industry}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-foreground/60">Category:</span>
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                    {category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-foreground/60">Published:</span>
                  <span className="font-medium">{formatPublishedDate(date)}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-foreground/60">Author:</span>
                  <span className="font-medium">{author.name}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Project Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                <FileText className="w-3 h-3" />
                {category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {title}
              </h1>
              <p className="text-xl text-foreground/80 leading-relaxed">
                {excerpt}
              </p>
            </div>

            {/* Document Viewer */}
            <Card className="bg-background border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  Document Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="relative w-full h-0 pb-[75%] bg-background rounded-lg shadow-inner overflow-hidden border border-border/50">
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
                
                {/* Document Actions */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <Button
                    className="flex-1"
                    asChild
                  >
                    <a href={file} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open Full Document
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                  >
                    <a href={file} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project Description */}
            <Card className="bg-background border-border/50">
              <CardHeader>
                <CardTitle>Project Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-foreground max-w-none">
                  <p className="text-foreground/80 leading-relaxed">
                    {excerpt}
                  </p>
                  <p className="text-foreground/80 leading-relaxed mt-4">
                    This project showcases professional writing expertise in {category.toLowerCase()}, 
                    demonstrating strategic content development that delivers measurable business results. 
                    The work combines industry knowledge with persuasive writing techniques to create 
                    compelling content that resonates with target audiences.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Related Projects Section */}
      <section className="border-t border-border/50 bg-muted/30 py-16">
        <div className="container max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">More Writing Projects</h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Explore additional examples of professional writing work across different industries and project types.
            </p>
          </div>
          
          <div className="text-center">
            <Link
              href="/writing"
              className="button-primary inline-flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleDocumentPreview;
