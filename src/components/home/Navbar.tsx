"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  // { name: "Recovery of Share", href: "/recovery-of-share" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#28355E] text-white hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between text-sm">

          <h3 className="font-semibold text-lg">
            Talk To Our Experts Now.
          </h3>

          <div className="flex items-center gap-8">

            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91 7834993487</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>
                Innov8 UCP, 9th Floor, Tower D, Unitech Cyber Park, Sector 39, Gurgaon (Haryana) 122001
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>info@arthalegalsolution.com</span>
            </div>

          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="h-24 flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo"
                width={95}
                height={95}
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">

              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="uppercase tracking-wide text-[15px] font-semibold text-gray-800 hover:text-[#2E73B8] transition"
                >
                  {item.name}
                </Link>
              ))}

            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden"
            >
              {open ? (
                <X size={30} />
              ) : (
                <Menu size={30} />
              )}
            </button>

          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="border-t">

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 border-b text-gray-700 font-medium hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Contact Info */}
            <div className="p-6 bg-gray-50 space-y-4 text-sm">

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>+91 7834993487</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1" />
                <span>
                Innov8 UCP, 9th Floor, Tower D, Unitech Cyber Park, Sector 39, Gurgaon (Haryana) 122001
              </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>info@arthalegalsolution.com</span>
              </div>

            </div>

          </div>
        </div>
      </nav>
    </header>
  );
}