"use client";
import { JSX, useState } from "react";
import { motion } from "framer-motion";
import NextjsIcon from "@/components/svgs/Next";
import JavaScript from "@/components/svgs/JavaScript";
import TypeScript from "@/components/svgs/TypeScript";
import Redux from "@/components/svgs/Redux";
import React from "@/components/svgs/React";
import Expressjs from "@/components/svgs/Express";
import MongoDB from "@/components/svgs/MongoDB";
import PostgreSQL from "@/components/svgs/PostgreSql";


type Skill = {
  name: string;
  icon: JSX.Element;
};

const skills: Skill[] = [
  { name: "JavaScript", icon: <JavaScript className="size-5" /> },
  { name: "TypeScript", icon: <TypeScript className="size-5" /> },
  { name: "React ", icon: <React className="size-5" /> },
  { name: "Next.js", icon: <NextjsIcon className="size-5" /> },
  { name: "Redux", icon: <Redux className="size-5" /> },
  { name: "Express.js", icon: <Expressjs className="size-5" /> },
  { name: "MongoDB", icon: <MongoDB className="size-5" /> },
  { name: "PostgreSQL", icon: <PostgreSQL className="size-5" /> },
];

export default function Skills() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-2">
      {skills.map((skill, index) => {
        const isHovered = hovered === index;
        return (
          <motion.div
            key={index}
            layout
            className="border p-1.5 rounded-full flex cursor-pointer overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            animate={{ opacity: isHovered ? 1 : 0.90 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <span className={isHovered ? "mr-1" : undefined}>{skill.icon}</span>

            <motion.span
              initial={{ width: 0 }}
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
