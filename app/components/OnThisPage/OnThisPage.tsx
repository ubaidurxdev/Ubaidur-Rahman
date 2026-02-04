
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    if (h2Data.length) setActiveId(h2Data[0].id);
  }, [htmlContent]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveId(id);
  };

  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-32 right-10 hidden lg:block w-56 rounded-xl border bg-background/70 backdrop-blur p-4 shadow-sm"
    >
      <h2 className="text-sm font-semibold mb-3 text-muted-foreground">
        On this page
      </h2>

      <ul className="space-y-1.5 relative">
        <AnimatePresence>
          {headings.map((heading) => {
            const isActive = activeId === heading.id;

            return (
              <motion.li
                key={heading.id}
                layout
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                {isActive && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                <motion.a
                  href={`#${heading.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(heading.id);
                  }}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.97 }}
                  className={`block pl-4 text-sm leading-snug transition-colors ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {heading.text}
                </motion.a>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </ul>
    </motion.aside>
  );
};

export default OnThisPage;

