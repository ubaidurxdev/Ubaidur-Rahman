"use client";
import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMongodb } from "react-icons/si";
import ReactIcon from "@/components/svgs/React";
import NextjsIcon from "@/components/svgs/Next";

type Skill = {
  name: string;
  icon: JSX.Element;
};

const skills: Skill[] = [
  { name: "HTML", icon: <ReactIcon className="size-5" /> },
  { name: "CSS", icon: <NextjsIcon className="size-5" /> },
  { name: "JavaScript", icon: <SiJavascript size={18} /> },
  { name: "React", icon: <FaReact size={18} /> },
  { name: "Node.js", icon: <FaNodeJs size={18} /> },
  { name: "MongoDB", icon: <SiMongodb size={18} /> },
];

export default function Skills() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-1">
      {skills.map((skill, index) => {
        const isHovered = hovered === index;
        return (
          <motion.div
            key={index}
            layout
            className="border p-1.5 rounded-full flex cursor-pointer overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            animate={{ opacity: isHovered ? 1 : 0.85 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <span className={isHovered ? "mr-1" : undefined}>
              {skill.icon}
            </span>

            <motion.span
              className="text-sm font-medium whitespace-nowrap"
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
