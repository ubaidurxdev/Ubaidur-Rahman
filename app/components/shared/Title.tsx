import React, { ReactNode } from "react";
import { Lora } from "next/font/google";
const lora = Lora({
  subsets: ["latin"],
  weight: ["700"],
});

interface TitleProps {
  text: ReactNode;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h4
      className={`text-3xl italic ${lora.className} text-center md:text-4xl mt-14 mb-8 font-medium `}
    >
      {text}
    </h4>
  );
};

export default Title;
