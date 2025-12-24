import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";
const BlogPosts = ({ post }) => {
  return (
    <div className=" p-1 mt-1 rounded-md">
      <Link href={`/blogs/${post.slug}`}>
        <div className="flex sm:items-center flex-col mb-2 sm:flex-row gap-1 sm:justify-between">
          <h4 className="text-lg  font-semibold ">{post.title}</h4>
          <p className="font-medium text-text-color">{post.date}</p>
        </div>
        <p className="text-text-color mt-2">{post.description}</p>
        <div className="flex items-center gap-2 justify-end mt-2 w-full">
          <p className="text-text-color flex items-center gap-1 text-right hover:underline">
            <span>Read more</span> <GoArrowRight size={16} />
          </p>
        </div>
      </Link>
    </div>
  );
};

export default BlogPosts;
