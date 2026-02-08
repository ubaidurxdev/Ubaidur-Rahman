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

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveId(id);
    setIsOpen(false);
  };

  const activeHeading = headings.find((h) => h.id === activeId);

  return (
    <>
      {/* ---------- Backdrop ---------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ---------- Floating Panel ---------- */}
      <motion.aside className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 w-80 sm:w-96">
        <motion.div
          layout
          className={`bg-black dark:bg-neutral-900 shadow-3xl ${isOpen ? "rounded-md" : "rounded-full"} overflow-hidden`}
        >
          <motion.ul layout className="relative p-2">
            <AnimatePresence mode="popLayout" initial={false}>
              {/* ---------- OPEN: full list ---------- */}
              {isOpen &&
                headings.map((heading) => {
                  const isActive = activeId === heading.id;

                  return (
                    <motion.li
                      key={heading.id}
                      layout
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className=""
                    >
                      <button
                        onClick={() => handleNavigate(heading.id)}
                        className={`block w-full text-left text-xs sm:text-sm p-2 mt-1 rounded-md leading-snug transition-colors ${
                          isActive
                            ? "text-white font-medium bg-neutral-800"
                            : "text-gray-400 hover:text-gray-300"
                        }`}
                      >
                        {heading.text}
                      </button>
                    </motion.li>
                  );
                })}
            </AnimatePresence>

            {/* ---------- ACTIVE (always visible, border-top, clickable) ---------- */}
            {activeHeading && (
              <li
                onClick={() => setIsOpen(true)}
                className={`${isOpen && "border-t border-gray-600 mt-2"} p-2  cursor-pointer overflow-hidden`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={activeHeading.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="text-xs sm:text-sm font-medium text-white"
                  >
                    {activeHeading.text}
                  </motion.p>
                </AnimatePresence>
              </li>
            )}
          </motion.ul>
        </motion.div>
      </motion.aside>
    </>
  );
};

export default OnThisPage;
