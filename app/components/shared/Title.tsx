import React, { ReactNode } from "react";

interface TitleProps {
  text: ReactNode;
}

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h4 className="text-3xl md:text-4xl mt-16 mb-8 font-semibold ">{text}</h4>
  );
};

export default Title;
