"use client";

import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-5">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between">
          {/* Clinic Info */}
          <div className="mb-6 md:mb-0 w-full md:w-1/3 md:pr-5">
            <h3 className="text-xl font-bold mb-4">EndoSmile Dental Care</h3>
            <p className="mb-2">
              "Patients will experience a comfortable, professional setting
              designed for relaxation and care."
            </p>
            <p className="mb-2">Location:</p>
            <p>Gaur City 2, Greater Noida (west)</p>
          </div>

          {/* Opening Hours */}
          <div className="mb-6 md:mb-0 w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <p>Mon to Sat -</p>
            <p>Morning: 10:00 AM to 01:00 PM</p>
            <p>Evening: 05:00 PM to 08:00 PM</p>
            <p>Sunday: Appointment Only</p>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-4">Get In Touch!</h3>
            <p>
              Phone:
              <a
                href="tel:+91 7895927366"
                className="text-blue-400 hover:underline"
              >
                +91 7895927366
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:contact@endosmiledentalcare.com"
                className="text-blue-400 hover:underline"
              >
                contact@endosmiledentalcare.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-between text-sm">
          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/dr-sumit-dinkar" className="hover:underline">
                  Dr Sumit Dinkar
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About EndoSmile Dental Care
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:underline">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:underline">
                  Smile Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul>
              <li>
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul>
              <li>
                <Link
                  href="/services/zoom-teeth-whitening"
                  className="hover:underline"
                >
                  Painless RCT Treatments
                </Link>
              </li>
              <li>
                <Link href="/services/invisalign" className="hover:underline">
                  Crowns & Bridges
                </Link>
              </li>
              <li>
                <Link
                  href="/services/smile-makeover"
                  className="hover:underline"
                >
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dental-veneers"
                  className="hover:underline"
                >
                  Dental Fillings and Implants
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dental-implants"
                  className="hover:underline"
                >
                  Clear Alligners
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} EndoSmile Dental Care. All rights
          reserved. | Designed with ❤️ in Greater Noida
        </div>
      </div>
    </footer>
  );
};

export default Footer;
