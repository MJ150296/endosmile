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
            <p className="mb-2 font-semibold">
              Your Path to Perfect Oral Health.
            </p>
            <p className="mb-2">Location:</p>
            <p>
              203 - Hawelia Road, Iteda<br />Greater Noida 201318
            </p>
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
                href="tel:+91 8368847831"
                className="text-blue-400 hover:underline"
              >
                +91 83688 47831
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:endosmiledentalcare@gmail.com"
                className="text-blue-400 hover:underline"
              >
                endosmiledentalcare@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Links Section */}
        <div className="flex flex-wrap justify-between text-sm">
          {/* Services */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul>
              <li className="hover:underline">RCT Treatments</li>
              <li className="hover:underline">Crowns & Bridges</li>
              <li className="hover:underline">Cosmetic Dentistry</li>
              <li className="hover:underline">Dental Fillings and Implants</li>
              <li className="hover:underline">Clear Aligners</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/treatments">Treatments</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          {/* <div className="w-full md:w-1/3 mb-6">
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
          </div> */}

          {/* GOOGLE MAP  */}

          <div className="w-full md:w-1/3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.0060037994235!2d77.43618889999999!3d28.599596699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefe4346f5001%3A0x41bed249551cec15!2sEndo%20Smile%20Dental%20Care%7CBest%20Dentist%20in%20Greater%20Noida%20West%7CDr%20Sumit%20Dinkar%20RCT%20Specialist%7C%20Crowns%20%26%20Implants!5e0!3m2!1sen!2sin!4v1734765033861!5m2!1sen!2sin"
              width="400"
              height="200"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} EndoSmile Dental Care. All rights
            reserved.</p>
          <p>Designed & Developed by - <span className="font-semibold">Mayank Joshi</span></p>
          <a href="tel:+917895927366" aria-label="Call 8368847831" className="font-semibold">
            +91 78959 27366
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
