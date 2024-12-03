"use client";

// components/Navbar.tsx
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname(); // Replace useRouter with usePathname

  return (
    <nav className="fixed z-50 w-full p-4 bg-black tracking-wide font-medium">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
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
            className={`px-2 py-1 transition-colors ${
              pathname === "/" ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-2 py-1 transition-colors ${
              pathname === "/about" ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
          >
            About
          </Link>
          <Link
            href="/treatments"
            className={`px-2 py-1 transition-colors ${
              pathname === "/treatments"
                ? "text-cyan-400"
                : "hover:text-cyan-400"
            }`}
          >
            Treatments
          </Link>
          <Link
            href="/blogs"
            className={`px-2 py-1 transition-colors ${
              pathname === "/blogs" ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
          >
            Blogs
          </Link>
          <button className="bg-green-500 text-white font-medium rounded-lg py-3 px-5">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button className="text-white">
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
      </div>
    </nav>
  );
};

export default Navbar;
