import Image from "next/image";
interface TechStack {
  name: string;
  doc: string;
}
const react : TechStack = {
  name: "React.js",
  doc: "https://react.dev/",
};
const next : TechStack = {
  name: "Next.js",
  doc: "https://nextjs.org/docs",
};
const typeScript : TechStack = {
  name: "TypeScript",
  doc: "https://www.typescriptlang.org/docs/",
};
const express : TechStack = {
  name: "Express.js",
  doc: "https://expressjs.com/en/starter/installing.html",
};
const mongoDB : TechStack = {
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
      <p className="mt-6 font-medium text-lg text-text-color">
        I specialize in building fast, modern, and scalable web applications
        using TypeScript, React, Next.js, Node.js, Bun, and PostgreSQL. With a
        strong focus on clean architecture, user experience, and performance, I
        turn ideas into reliable digital products.
      </p>
    </div>
  );
}
