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
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, delay: 0.065 * index }}
      viewport={{ once: true }}
      className="p-1 mt-5 rounded-md"
    >
      <Link href={`/blogs/${post.slug}`}>
        <div className=" mb-2">
          <h4 className="sm:text-lg text-base sm:font-bold font-semibold">
            {post.title}
          </h4>
          <p className="font-medium sm:text-base mt-1 text-sm text-text-color">
            {post.date}
          </p>
        </div>
        <p className="text-text-color mt-2 sm:text-base text-sm">
          {post.description}
        </p>
      </Link>
    </motion.div>
  );
};

export default BlogPosts;
