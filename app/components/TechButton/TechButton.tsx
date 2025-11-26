import React from "react";

interface TechProps {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  name: string;
  href: string;
}

const TechButton: React.FC<TechProps> = ({ icon: Icon, name, href }) => {
  return (
    <a
      href={href}
      className="inline-flex items-center border-dashed dark:text-white text-sm font-bold border-2 py-0.5 px-1.5 text-black rounded-lg bg-second dark:bg-second-dark gap-2"
    >
      <Icon className="w-4 h-4" /> {name}
    </a>
  );
};

export default TechButton;
