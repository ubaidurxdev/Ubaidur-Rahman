"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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
    <div className="flex items-start gap-2">
      {skills.map((skill, index) => {
        const isHovered = hovered === index;
        return (
          <motion.div
            key={index}
            layout // enables smooth width animation
            className="border p-1.5 rounded-full flex cursor-pointer overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            animate={{ opacity: isHovered ? 1 : 0.85 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <span className={isHovered ? "mr-1" : undefined}>{skill.icon}</span>

            {/* Animate width using a motion.span wrapper */}
            <motion.span
              className=" text-sm font-medium whitespace-nowrap"
              animate={{
                width: isHovered ? "auto" : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
}
