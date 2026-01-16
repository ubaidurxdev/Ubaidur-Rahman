"use client";
import Link from "next/link";
import { motion } from "framer-motion";
export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  tags: string[];
  slug: string;
}
const BlogPosts = ({ post, index }: { post: BlogPostMeta; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale:0.8 }}
      whileInView={{ opacity: 1, scale:1 }}
      transition={{ duration: 0.25, delay: 0.065 * index }}
      viewport={{ once: true }}
      className="p-1 mt-5 rounded-md"
    >
      <Link href={`/blogs/${post.slug}`}>
        <div className="flex sm:items-center flex-col mb-2 sm:flex-row gap-1 sm:justify-between">
          <h4 className="sm:text-lg text-base sm:font-bold font-semibold">{post.title}</h4>
          <p className="font-medium sm:text-base text-sm text-text-color">{post.date}</p>
        </div>
        <p className="text-text-color mt-3 sm:text-base text-sm">{post.description}</p>
      </Link>
    </motion.div>
  );
};

export default BlogPosts;
