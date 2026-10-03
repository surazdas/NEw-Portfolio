import React from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <div className="w-full h-20 flex">
      <div className="w-full h-full bg-black text-white flex items-center justify-between px-30">
        <div className="flex items-center">
          <div className="w-20 h-10 bg-white rounded-r-3xl"></div>
          <div className="h-10 flex items-center pl-2">
            <Link href="/" className="text-white font-bold text-xl font-oswald">
              Suraz D
            </Link>
          </div>
        </div>

        <nav className="flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-5 py-2 rounded-full text-xl font-bold font-oswald text-gray-300 transition-colors duration-200 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
