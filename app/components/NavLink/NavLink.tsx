"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}
const NavLink = ({ href, children }: NavLinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;
  return (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md ${
        isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-200"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
