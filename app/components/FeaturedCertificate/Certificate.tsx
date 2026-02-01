import React from "react";
import Title from "../shared/Title";
import { CertificatesList } from "@/components/ui/Certificate-design";

interface Certificate {
  id: number;
  title: string;
  description: string;
  data: string;
  skills: string[];
  certificate: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: "Complete Web Development",
    description:
      "Completed the Complete Web Development course at Programming Hero, gaining hands-on experience as a Full Stack Developer. I built real-world projects using HTML, CSS, Tailwind CSS, and JavaScript, and advanced into modern frameworks and technologies including React.js, Next.js, Node.js, Express.js, and MongoDB. This journey strengthened my ability to develop both frontend and backend applications, manage databases, and build fully functional, responsive, and scalable web applications with confidence.",
    data: "Awarded certificate in August 2025",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "Next JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Framer Motion",
    ],
    certificate: "/programminghero.pdf",
  },
  {
    id: 2,
    title: "The Journey of Frontend Web Development",
    description:
      "Completed The Journey of Frontend Web Development course at Hablu Programmer, gaining hands-on experience building responsive and user-friendly websites with HTML, CSS, and JavaScript. I strengthened my coding skills through real projects and learned essential developer tools, version control, and debugging techniques to confidently handle real-world frontend challenges.",
    data: "Awarded certificate in December 2024",
    skills: [
      "HTML",
      "CSS",
      "Tailwind CSS",
      "JavaScript",
      "React JS",
      "React Router",
      "Tanstack Query",
      "Framer Motion",
    ],
    certificate: "/habluprogrammer.pdf",
  },
];

const Certificate = () => {
  return (
    <div id="certificates" className="mt-12">
      <Title lowerText="Certificates" upperText="Featured" />
      <CertificatesList certificates={certificates} />
    </div>
  );
};

export default Certificate;
