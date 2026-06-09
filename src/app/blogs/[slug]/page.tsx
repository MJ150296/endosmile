"use client";

import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { blogs } from "@/app/data/blogs";

const BlogDetail: React.FC = () => {
  const params = useParams();
  const slug = params.slug as string;

  const blog = blogs.find((b) => b.id === slug);
  if (!blog) {
    return <p className="text-center p-10 text-gray-600">Blog not found.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Back to Blogs */}
      <Link
        href="/blogs"
        className="text-sky-600 hover:underline mb-6 inline-block text-sm font-medium"
      >
        ← Back to Dental Insights
      </Link>

      <Card className="shadow-xl border border-gray-100 bg-white dark:bg-gray-900 relative overflow-hidden rounded-2xl">
        {/* Subtle Background Logo */}
        <div className="absolute inset-0 z-0 opacity-30 flex justify-center items-center pointer-events-none">
          <Image
            src="/Images/Logo2.png" // Replace with actual Endosmile logo
            alt="Endosmile Logo"
            width={350}
            height={350}
            className="object-contain"
          />
        </div>

        {/* Blog Content */}
        <div className="relative z-10">
          {/* Main Blog Image */}
          <div className="relative w-full h-80">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover rounded-t-2xl"
              priority
            />
          </div>

          {/* Blog Header */}
          <CardHeader className="px-6 pt-6">
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white leading-tight">
              {blog.title}
            </CardTitle>
            {blog.subheading && (
              <h3 className="text-lg text-sky-600 dark:text-sky-400 mt-2 font-medium">
                {blog.subheading}
              </h3>
            )}
          </CardHeader>

          {/* Blog Body */}
          <CardContent className="px-6 pb-10">
            <div
              className="text-gray-700 dark:text-gray-300 leading-relaxed text-base mb-6"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* First Section with Image */}
            {blog.additionalImages[0] && (
              <div className="w-full flex flex-col md:flex-row md:justify-between items-center mt-8 gap-6">
                <div className="relative w-full md:w-1/2 h-64">
                  <Image
                    src={blog.additionalImages[0]}
                    alt={`${blog.title} additional image 1`}
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <div className="w-full md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                  <p>{blog.content1}</p>
                </div>
              </div>
            )}

            {/* Second Section with Image */}
            {blog.additionalImages[1] && (
              <div className="w-full flex flex-col md:flex-row md:justify-between items-center mt-12 gap-6">
                <div className="w-full md:w-1/2 text-gray-700 dark:text-gray-300 leading-relaxed text-base order-2 md:order-1">
                  <p>{blog.content2}</p>
                </div>
                <div className="relative w-full md:w-1/2 h-64 order-1 md:order-2">
                  <Image
                    src={blog.additionalImages[1]}
                    alt={`${blog.title} additional image 2`}
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            )}
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default BlogDetail;
