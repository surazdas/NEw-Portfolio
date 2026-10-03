import React from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  return (
    <div className="flex h-20 w-full max-lg:h-auto">
      <div className="flex h-full w-full items-center justify-between bg-black px-30 text-white max-lg:h-auto max-lg:flex-col max-lg:items-stretch max-lg:gap-3 max-lg:px-4 max-lg:py-3">
        <div className="flex items-center">
          <div className="h-10 w-20 rounded-r-3xl bg-white"></div>
          <div className="flex h-10 items-center pl-2">
            <Link href="/" className="font-oswald text-xl font-bold text-white">
              Suraz D
            </Link>
          </div>
        </div>

        <nav className="flex items-center gap-2 max-lg:w-full max-lg:justify-between max-lg:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-2 font-oswald text-xl font-bold text-gray-300 transition-colors duration-200 hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white max-lg:flex-1 max-lg:px-2 max-lg:py-1.5 max-lg:text-center max-lg:text-sm"
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
