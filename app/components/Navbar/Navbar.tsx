import Image from "next/image";
import React from "react";
import logo from "../../../public/test.jpg";
import NavLink from "../NavLink/NavLink";
const Navbar = () => {
  return (
    <header className="bg-transparent sticky top-0 backdrop-blur-2xl py-3 flex items-center justify-between">
      <div>
        <Image src={logo} alt="logo" className="rounded-full size-12" />
      </div>
      <div className="md:flex items-center hidden gap-4 ">
        <NavLink href="/">Portfolio</NavLink>
        <NavLink href="/blogs">Blogs</NavLink>
        <NavLink href="/snippets">Snippets</NavLink>
      </div>
    </header>
  );
};

export default Navbar;
