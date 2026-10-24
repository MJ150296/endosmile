"use client";

// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SocialMedia from "./SocialMedia";

const Navbar = () => {
  const pathname = usePathname(); // Replace useRouter with usePathname

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-3 backdrop-blur-xl bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo + Social */}
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/Images/Logo1.png"
              alt="Endo Smile Dental Care Logo"
              width={150}
              height={25}
              className="object-contain"
            />
          </Link>

          <div className="hidden sm:block">
            <SocialMedia />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-white/80">

          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Treatments", path: "/treatments" },
            { name: "Blogs", path: "/blogs" }
          ].map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative text-sm font-medium transition-all duration-300 ${pathname === item.path
                  ? "text-white"
                  : "hover:text-white"
                }`}
            >
              {item.name}

              {/* Active underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 transition-transform duration-300 ${pathname === item.path
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                  }`}
              ></span>
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/bookAppointment"
            className="ml-4 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            Book Appointment
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full backdrop-blur-xl bg-black/70 border-t border-white/10 transition-all duration-500 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div className="flex flex-col items-center py-6 gap-6 text-white/90">

          {["/", "/about", "/treatments", "/blogs"].map((path, i) => {
            const name = ["Home", "About", "Treatments", "Blogs"][i];
            return (
              <Link
                key={path}
                href={path}
                onClick={toggleMenu}
                className={`text-lg transition ${pathname === path ? "text-white" : "hover:text-white"
                  }`}
              >
                {name}
              </Link>
            );
          })}

          <Link
            href="/bookAppointment"
            onClick={toggleMenu}
            className="mt-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
          >
            Book Appointment
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
