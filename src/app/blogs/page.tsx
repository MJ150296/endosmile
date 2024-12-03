"use client";

import React from "react";
import "animate.css";
import { nanoid } from "nanoid";

const Blogs = () => {
  const blogs = [
    {
      id: nanoid(),
      image: "/Images/smileStories/smile05.jpg",
      title: "The Importance of Oral Hygiene",
      description:
        "Learn why maintaining good oral hygiene is essential for overall health and how it prevents dental issues.",
    },
    {
      id: nanoid(),
      image: "/Images/smileStories/smile05.jpg",
      title: "Top 5 Cosmetic Dental Procedures",
      description:
        "Explore the most popular cosmetic dental treatments to enhance your smile and boost confidence.",
    },
    {
      id: nanoid(),
      image: "/Images/smileStories/smile05.jpg",
      title: "Root Canal Myths Debunked",
      description:
        "Understand the truth about root canals and why they are not as scary as you might think.",
    },
    {
      id: nanoid(),
      image: "/Images/smileStories/smile05.jpg",
      title: "Pediatric Dentistry Tips",
      description:
        "Discover how to care for your child's teeth and ensure a lifetime of healthy smiles.",
    },
  ];

  return (
    <div className="pt-28 px-5 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12 pt-14">
        <h1 className="text-4xl font-bold text-blue-600 animate__animated animate__fadeInDown">
          Latest Blogs
        </h1>
        <p className="text-lg tracking-wide text-green-600 mt-4 animate__animated animate__fadeInUp">
          Stay updated with the latest dental care tips, news, and insights.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-10 pb-20">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden animate__animated animate__fadeInUp"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            {/* Blog Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold text-blue-500">
                {blog.title}
              </h2>
              <p className="text-gray-600 mt-2">{blog.description}</p>
              <div className="mt-4">
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
