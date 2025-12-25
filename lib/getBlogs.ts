import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogPostMeta = {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
};

const blogsDir = path.join(process.cwd(), "content");

export function getBlogs(): BlogPostMeta[] {
  const files = fs.readdirSync(blogsDir);

  return files.map((file) => {
    const filePath = path.join(blogsDir, file);
    const content = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(content);

    return {
      ...(data as BlogPostMeta),
      slug: file.replace(".md", ""),
    };
  });
}
