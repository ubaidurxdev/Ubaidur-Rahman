import Image from "next/image";
import TechButton from "./components/TechButton/TechButton";
import React from "@/components/svgs/React";
import TypeScript from "@/components/svgs/TypeScript";
import Nextjs from "@/components/svgs/Next";
import Expressjs from "@/components/svgs/Express";
import MongoDB from "@/components/svgs/MongoDB";
interface TechStack {
  name: string;
  doc: string;
}
const react: TechStack = {
  name: "React.js",
  doc: "https://react.dev/",
};
const next: TechStack = {
  name: "Next.js",
  doc: "https://nextjs.org/docs",
};
const typeScript: TechStack = {
  name: "TypeScript",
  doc: "https://www.typescriptlang.org/docs/",
};
const express: TechStack = {
  name: "Express.js",
  doc: "https://expressjs.com/en/starter/installing.html",
};
const mongoDB: TechStack = {
  name: "MongoDB",
  doc: "https://www.mongodb.com/docs/",
};
export default function Home() {
  return (
    <div className="pt-14">
      <Image
        src="/profile.jpg"
        alt="image"
        width={100}
        height={60}
        className="rounded-full"
      />
      <p className="mt-8 font-semibold text-3xl">
        Hi, I'm Ubaidur ———{" "}
        <span className="text-text-color">A Full Stack Developer </span>
      </p>
      <p className="mt-6 text-lg text-text-color leading-8">
        I specialize in building fast, modern, and scalable web applications
        using <TechButton icon={React} name={react.name} href={react.doc} /> ,
        <TechButton
          icon={TypeScript}
          name={typeScript.name}
          href={typeScript.doc}
        />
        , <TechButton icon={Nextjs} name={next.name} href={next.doc} /> ,
        <TechButton icon={Expressjs} name={express.name} href={express.doc} />,
        and <TechButton icon={MongoDB} name={mongoDB.name} href={mongoDB.doc} />
        . With a strong focus on clean architecture, user experience, and
        performance, I turn ideas into reliable digital products.
      </p>
    </div>
  );
}
