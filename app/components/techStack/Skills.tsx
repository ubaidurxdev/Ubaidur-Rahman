"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={18} /> },
  { name: "CSS", icon: <FaCss3Alt size={18} /> },
  { name: "JavaScript", icon: <SiJavascript size={18} /> },
  { name: "React", icon: <FaReact size={18} /> },
  { name: "Node.js", icon: <FaNodeJs size={18} /> },
  { name: "MongoDB", icon: <SiMongodb size={18} /> },
];

export default function Skills() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex items-start gap-1">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          layout
          className="border p-1.5 rounded-full flex items-center justify-center cursor-pointer overflow-hidden"
          initial={{ x: -10 }}
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
          animate={{
            opacity: hovered === index ? 1 : 0.85,
          }}
          transition={{ duration: 0.35, ease: "easeInOut" }} 
        >
          {skill.icon}

          <AnimatePresence>
            {hovered === index && (
              <motion.span
                className="ml-2 text-sm"
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -4 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {skill.name}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
