import { Lora } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const lora = Lora({ subsets: ["latin"], weight: "700" });

export default function Logo() {
  const name = "<Ubaidur/>";
  return (
    <Link
      href={"/"}
      className={`${lora.className} text-[28px] italic font-bold`}
    >
      <Image width={56} height={56} className="object-cover bg-center rounded-md" src={"/avatar.png"} alt="Logo" />
    </Link>
  );
}
