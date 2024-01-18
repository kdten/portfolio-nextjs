"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#d5d5d5] dark:border-[#33353F] top-0 left-0 right-0 z-50 bg-[#f0f0f0] dark:bg-[#121212] bg-opacity-60 backdrop-filter backdrop-blur-md dark:bg-opacity-60 dark:backdrop-filter dark:backdrop-blur-md">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        ></Link>
        <div className="flex items-center">
          <ThemeSwitcher />
          {/* className="flex items-center px-3 py-2 text-slate-200 hover:text-white hover:border-white mr-4" */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                // className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                className="dark:bg-[#121212] bg-[#f0f0f0] dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-3 py-2 text-2xl md:text-4xl rounded-md border border-gray-800"
              >
                <Bars3Icon className="h-5 w-5 dark:text-white text-black" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-black dark:border-slate-200 text-black dark:text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
