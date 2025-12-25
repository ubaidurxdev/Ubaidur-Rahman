"use client";

import React, { useEffect, useState } from "react";

type HeadingItem = {
  text: string;
  id: string;
};

type OnThisPageProps = {
  htmlContent: string;
};

const OnThisPage = ({ htmlContent }: OnThisPageProps) => {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;

    const h2Elements = tempDiv.querySelectorAll("h2");

    const h2Data: HeadingItem[] = Array.from(h2Elements).map((h2) => ({
      text: h2.textContent ?? "",
      id: h2.id,
    }));

    setHeadings(h2Data);

    if (h2Data.length > 0) {
      setActiveId(h2Data[0].id);
    }
  }, [htmlContent]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    setActiveId(id);
  };

  return (
    <div className="on-this-page fixed top-32 lg:right-10 hidden p-4 lg:block ">
      <h2 className="text-md font-bold my-2">On This Page</h2>

      <ul className="text-sm space-y-1">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              onClick={() => handleClick(heading.id)}
              className={`pl-2 transition-all duration-300 ease-in-out ${
                activeId === heading.id
                  ? "font-medium border-l-4"
                  : "text-text-color border-l-4 border-transparent"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
