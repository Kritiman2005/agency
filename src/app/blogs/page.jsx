"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Link from "next/link";
import { BLOGS } from "../../lib/blogData";

export default function Blogs() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-white relative">
        <div className="absolute top-[10%] right-[10%] w-64 h-64 orange-glow opacity-10 pointer-events-none" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 border-b border-white/10 pb-8"
          >
            <h1 className="text-3xl md:text-4xl font-display font-black leading-tight tracking-tight uppercase mb-4">
              The UpScale Blog
            </h1>
            <p className="text-muted-text/80 text-lg font-sans">
              Latest thoughts, tutorials, and insights.
            </p>
          </motion.div>

          <div className="space-y-12">
            {BLOGS.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col-reverse sm:flex-row gap-8 border-b border-white/5 pb-12 last:border-0"
              >
                {/* Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <Link href={`/blogs/${blog.id}`}>
                    <h2 className="text-xl md:text-2xl font-sans text-white/60 mb-3 leading-snug cursor-pointer hover:text-white transition-colors">
                      <span className="font-bold text-white">{blog.title}</span>
                    </h2>
                  </Link>

                  <p className="text-white/60 font-sans text-base leading-relaxed mb-6 line-clamp-2">
                    {blog.excerpt}
                  </p>
                </div>

                {/* Image */}
                <Link href={`/blogs/${blog.id}`} className="w-full sm:w-[200px] h-[130px] shrink-0 sm:mt-2 block">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500 brightness-90 cursor-pointer border border-white/10"
                  />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
