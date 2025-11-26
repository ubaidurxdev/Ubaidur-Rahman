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
      className={`
        relative
        text-black/70 dark:text-white/80
        hover:text-black dark:hover:text-white
        transition-colors duration-300 ease-in-out
        ${isActive ? "font-bold text-black dark:text-white" : ""}
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
