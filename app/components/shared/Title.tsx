"use client";
import React from "react";
import { motion,Variants } from "framer-motion";

interface TitleProps {
  upperText: React.ReactNode;
  lowerText: React.ReactNode;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants:Variants = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const Title: React.FC<TitleProps> = ({ upperText, lowerText }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.p
        variants={itemVariants}
        className="text-text-color font-medium"
      >
        {upperText}
      </motion.p>

      <motion.p
        variants={itemVariants}
        className=" text-2xl font-bold"
      >
        {lowerText}
      </motion.p>
    </motion.div>
  );
};

export default Title;
