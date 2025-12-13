"use client";

import { motion, Variants } from "framer-motion";
import GithubActivity from "../github/GithubActivity";
import Title from "../shared/Title";
import Image from "next/image";
import Skills from "../techStack/Skills";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutMe = () => {
  return (
    <motion.div
      className=""
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={itemVariants}>
        <Title text={"About Me"} />
      </motion.div>

      <div className="grid grid-cols-10 mt-14 gap-6 sm:gap-4">
        <motion.div
          className="col-span-10 sm:col-span-4 relative w-full h-80 sm:h-72"
          variants={itemVariants}
        >
          <Image
            src={"/aboutme.jpg"}
            alt="profile"
            fill
            className="object-cover bg-top rounded-md"
          />
        </motion.div>

        <motion.div
          className="col-span-10 sm:col-span-6 space-y-3"
          variants={containerVariants}
        >
          <motion.h4 variants={itemVariants} className="text-3xl font-bold">
            Md. Ubaidur Rahman
          </motion.h4>
          <motion.p variants={itemVariants} className="font-medium text-text-color">
            A detail-oriented full-stack developer specializing in the MERN
            ecosystem. I bring ideas to elegant UI, optimized APIs and
            performance. I’m always experimenting, learning, and pushing myself
            to build better solutions. From front-end experience to backend
            logic, I love crafting products that feel intuitive, responsive, and
            polished.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Skills />
          </motion.div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants}>
        <GithubActivity />
      </motion.div>
    </motion.div>
  );
};

export default AboutMe;
