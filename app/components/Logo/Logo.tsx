import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"], weight: "700" }); 

export default function Logo() {
    const name = "<Ubaidur/>"
  return (
    <h1 className={`${lora.className} text-3xl italic font-bold`}>
      {name}
    </h1>
  );
}
