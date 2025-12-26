"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.17,
      ease: "easeOut",
    },
  },
};

const ResumeHeaader = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        variants={fadeUpVariants}
        className="text-2xl sm:text-3xl font-bold text-center"
      >
        Resume of Md Ubaidur Rahman
      </motion.h2>

      <motion.p
        variants={fadeUpVariants}
        className="pb-5 border-b-2 text-center text-text-color mt-6"
      >
        A concise summary of my technical skills, experience, and projects as a
        web developer. This resume reflects my journey, capabilities, and the
        value I bring as a MERN Stack Developer.
      </motion.p>
    </motion.div>
  );
};

export default ResumeHeaader;
