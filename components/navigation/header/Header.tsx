"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [enableScrollState, setEnableScrollState] = useState(false);

  const handleWindowScroll = () => {
    if (typeof window !== undefined) {
      const scrollY = window.scrollY;
      if (scrollY > 0) {
        setEnableScrollState(true);
      } else {
        setEnableScrollState(false);
      }
    }
  };

  useEffect(() => {
    if (document) {
      document.addEventListener("scroll", handleWindowScroll);
    }

    return () => {
      if (document) {
        document.removeEventListener("scroll", handleWindowScroll);
      }
    };
  }, []);

  return (
    <nav
      className={`${enableScrollState ? "header-scroll-state" : ""} navbar max-w-11/12 absolute left-1/2 top-11 z-50 flex w-full -translate-x-1/2 items-center justify-between rounded-full bg-white/35 px-8 py-6 backdrop-blur-md lg:max-w-[1312px]`}
    >
      <div className="flex w-full items-center justify-between gap-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src={`${enableScrollState ? "/images/brand/logos/infinity-ooh-brief.svg" : "/images/brand/logos/infinity-ooh-logo.svg"}`}
            alt="Infinity OOH Logo"
            width={enableScrollState ? 57 : 132}
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
        <div className="desktop-nav-links hidden w-full items-center justify-between gap-12 md:flex">
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
        <div className="absolute left-0 top-full mt-2 w-full space-y-4 rounded-xl bg-white p-6 shadow-lg md:hidden">
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
