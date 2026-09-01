import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { BLOGS } from "../../../lib/blogData";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const blog = BLOGS.find((b) => b.id.toString() === id);

  if (!blog) {
    return {
      title: "Post Not Found | Our Blog",
    };
  }

  return {
    title: `${blog.title} | Our Blog`,
    description: blog.excerpt,
  };
}

export default async function BlogPost({ params }) {
  const { id } = await params;
  const blog = BLOGS.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-white flex flex-col items-center justify-center">
          <h1 className="text-4xl font-display font-black mb-4">Post Not Found</h1>
          <Link href="/blogs" className="text-brand-orange hover:underline">
            ← Back to blogs
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050505] pt-32 pb-24 text-white relative">
        <div className="absolute top-[10%] left-[10%] w-64 h-64 orange-glow opacity-10 pointer-events-none" />

        <article className="max-w-3xl mx-auto px-6 relative z-10 animate-fade-in-up">
          <Link href="/blogs" className="text-white/40 hover:text-brand-orange text-sm mb-8 inline-block transition-colors font-sans">
            ← Back to all posts
          </Link>

          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-black leading-tight tracking-tight mb-6">
              {blog.title}
            </h1>
            
            <div className="flex items-center gap-4 text-white/60 text-sm font-sans">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                   <span className="font-bold text-white uppercase">{blog.author.substring(0, 2)}</span>
                </div>
                <div>
                  <div className="text-white font-medium">{blog.author}</div>
                  <div className="text-xs">{blog.date}</div>
                </div>
              </div>
            </div>
          </header>

          <div className="mb-12 rounded-sm overflow-hidden aspect-video border border-white/10">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-orange max-w-none font-sans leading-relaxed">
            <ReactMarkdown>{blog.content}</ReactMarkdown>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
