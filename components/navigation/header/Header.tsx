"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-11 left-1/2 z-50 flex w-full max-w-11/12 -translate-x-1/2 items-center justify-between rounded-full bg-white/35 px-6 py-4 backdrop-blur-md lg:max-w-[1312px]">
      <div className="flex w-full items-center justify-between gap-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/brand/logos/infinity-ooh-logo.svg"
            alt="Infinity OOH Logo"
            width={132}
            height={41}
          />
        </Link>

        {/* Hamburger Button (mobile only) */}
        <button
          className="text-black md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Nav */}
        <div className="hidden w-full items-center justify-between gap-12 md:flex">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="/about" className="text-black hover:underline">
                Why Infinity OOH?
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="text-black hover:underline">
                FAQs
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/contact" className="text-black hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-full space-y-4 rounded-xl bg-white p-6 shadow-lg md:hidden">
          <ul className="space-y-4">
            <li>
              <Link
                href="/about"
                className="block text-black hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Why Infinity OOH?
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                className="block text-black hover:underline"
                onClick={() => setIsOpen(false)}
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-black hover:underline"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
