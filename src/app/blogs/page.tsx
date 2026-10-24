// pages/blog/index.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogs } from "../data/blogs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "animate.css"; // Make sure animate.css is imported globally (in _app.tsx or here)

const BlogList: React.FC = () => {
  return (
    <section className="pt-40 px-4 max-w-7xl mx-auto">
      {/* Page Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-blue-500 drop-shadow-sm mb-4 animate__animated animate__fadeInDown">
          Endo Smile Dental Insights
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed animate__animated animate__fadeIn animate__delay-1s">
          Stay informed with tips, the latest dental technologies, and
          oral health advice curated by our specialists at{" "}
          <span className="font-semibold text-green-500">Endo Smile</span>.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className={`group block transition-all duration-300 hover:-translate-y-1 animate__animated animate__fadeInUp animate__delay-${
              index % 3
            }s`}
          >
            <Card className="h-full flex flex-col shadow-md rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:border-blue-500 transition-all duration-300">
              {/* Blog Thumbnail */}
              <div className="relative w-full h-60">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 flex flex-col flex-grow bg-white dark:bg-gray-900">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors">
                    {blog.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium group-hover:bg-green-500 group-hover:text-white transition-colors">
                      Read More
                    </span>
                    <span className="text-xs text-gray-500">
                      {blog.additionalImages.length} min read
                    </span>
                  </div>
                </CardContent>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="my-20 text-center animate__animated animate__fadeInUp animate__delay-1s">
        <h3 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          Looking for personalized dental advice?
        </h3>
        <Link
          href="/bookAppointment"
          className="inline-block bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 text-white font-medium py-4 px-10 rounded-xl shadow-lg transition-all duration-300"
        >
          Book Your Consultation
        </Link>
      </div>
    </section>
  );
};

export default BlogList;
