"use client";

// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname(); // Replace useRouter with usePathname

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-50 w-full p-4 bg-black tracking-wide font-medium">
      <div className="w-full flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Link href="/" passHref>
            <Image
              src="/Images/Logo.png" // Path to your logo image
              alt="EndoSmile Dental Care Logo"
              width={160} // Adjust width as needed
              height={25} // Adjust height as needed
              className="object-contain"
            />
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          <Link
            href="/"
            className={`p-2 transition-colors ${
              pathname === "/" ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`p-2 transition-colors ${
              pathname === "/about" ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
          >
            About
          </Link>
          <Link
            href="/treatments"
            className={`p-2 transition-colors ${
              pathname === "/treatments"
                ? "text-cyan-400"
                : "hover:text-cyan-400"
            }`}
          >
            Treatments
          </Link>
          <Link
            href="/blogs"
            className={`p-2 transition-colors ${
              pathname === "/blogs" ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/bookAppointment"
            className="bg-green-500 text-white font-medium rounded-lg py-3 px-5"
          >
            Book Appointment
          </Link>
        </div>

        <div className="md:hidden">
          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Sidebar / Menu Options */}
          <div
            className={`fixed -mt-0 top-28 right-0 h-full w-64 bg-gradient-to-b from-gray-100 to-gray-50 rounded-t-lg text-green-600 shadow-lg transform ${
              isOpen
                ? "translate-x-0 animate__animated animate__slideInRight"
                : "translate-x-full animate__animated animate__slideOutRight"
            } transition-transform duration-500 ease-in-out md:hidden`}
          >
            <button
              onClick={toggleMenu}
              className="text-gray-800 absolute top-4 right-4 focus:outline-none"
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Links */}
            <ul className="mt-12 space-y-6 px-6">
              <li>
                <Link
                  href="/"
                  className={`p-2 transition-colors ${
                    pathname === "/" ? "text-green-600" : "hover:text-green-700"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`p-2 transition-colors ${
                    pathname === "/about"
                      ? "text-green-600"
                      : "hover:text-green-700"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments"
                  className={`p-2 transition-colors ${
                    pathname === "/treatments"
                      ? "text-green-600"
                      : "hover:text-green-700"
                  }`}
                >
                  Treatments
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className={`p-2 transition-colors ${
                    pathname === "/blogs"
                      ? "text-green-600"
                      : "hover:text-green-700"
                  }`}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/bookAppointment"
                  className="text-blue-600 font-medium rounded-2xl border-y-2 border-y-green-600 py-3 px-5 block text-center"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
