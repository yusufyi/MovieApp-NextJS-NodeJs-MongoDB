import React from "react";
import Link from "next/link";
export const Navbar = () => {
  return (
    <nav
      className="flex  sticky justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link href="/" className="pl-8">
        Home
      </Link>
      <div className="pr-8 md:block hidden">
        <Link href="/login" className="p-4">
          Login
        </Link>
        <Link href="/about" className="p-4">
          Register
        </Link>
      </div>
    </nav>
  );
};
