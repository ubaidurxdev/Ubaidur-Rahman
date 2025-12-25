import Link from "next/link";
import { getBlogs } from "@/lib/getBlogs";
import Title from "../shared/Title";

export default function FeaturedBlogs() {
  const blogs = getBlogs().slice(0, 3);

  return (
    <section className="mt-10">
      <Title upperText="Featured" lowerText="Blogs" />
      <div className="space-y-4">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="block border rounded-md p-4 hover:bg-accent transition"
          >
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="text-sm text-text-color mt-1">{blog.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
