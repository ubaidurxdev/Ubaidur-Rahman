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
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  /* ---------- Parse headings ---------- */
  useEffect(() => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;

    const h2Elements = tempDiv.querySelectorAll("h2");
    const h2Data = Array.from(h2Elements).map((h2) => ({
      text: h2.textContent ?? "",
      id: h2.id,
    }));

    setHeadings(h2Data);
    if (h2Data.length) setActiveId(h2Data[0].id);
  }, [htmlContent]);

  /* ---------- Active heading observer ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" },
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
    setIsOpen(false);
  };

  const visibleHeadings = isOpen
    ? headings
    : headings.filter((h) => h.id === activeId);

  return (
    <>
      {/* ---------- Backdrop ---------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ---------- Floating Button / Modal ---------- */}
      <motion.aside className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 w-80 sm:w-96">
        <motion.div
          layout
          onClick={() => setIsOpen((p) => !p)}
          className={`cursor-pointer ${isOpen ? "rounded-md" : "rounded-full"} bg-black dark:bg-neutral-900 shadow-3xl p-3`}
        >
          <motion.ul layout className="relative space-y-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleHeadings.map((heading) => {
                const isActive = activeId === heading.id;

                return (
                  <motion.li
                    key={heading.id}
                    layout
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="relative"
                  >
                    <a
                      href={`#${heading.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(heading.id);
                      }}
                      className={`block text-xs  sm:text-sm leading-snug transition-colors ${
                        isActive ? "text-white font-medium" : "text-gray-400 hover:text-gray-300"
                      }`}
                    >
                      {heading.text}
                    </a>
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </motion.ul>
        </motion.div>
      </motion.aside>
    </>
  );
};

export default OnThisPage;
