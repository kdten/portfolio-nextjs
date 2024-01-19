"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const HeroSection = () => {
  const [isKoltenVisible, setIsKoltenVisible] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isKoltenInDOM = Array.from(document.querySelectorAll("span")).some(
        (span) => span.textContent.includes("Kolten")
      );
      setIsKoltenVisible(isKoltenInDOM);
    });

    observer.observe(document, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  const items = [
    { key: "docx", label: "DOCX", link: "KoltenEdwardSoftwareEng.docx" },
    { key: "pdf", label: "PDF", link: "KoltenEdwardSoftwareEng.pdf" },
  ];

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-black dark:text-white mb-4 text-4xl sm:text-5xl md:text-4xl lg:text-6xl xl:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m
              <span className={isKoltenVisible ? "hidden" : "secondary-600"}>
                {" "}
                a
              </span>
            </span>
            <br />
            {/* <br className="md:block lg:hidden"></br> */}
            <TypeAnimation
              sequence={[
                "Kolten",
                5000,
                "Software Engineer",
                3000,
                "UI/UX Developer",
                3000,
                "Fullstack Developer",
                3000,
                "Frontend Developer",
                3000,
                "Backend Developer",
                3000,
              ]}
              wrapper="span"
              // className="whitespace-nowrap"
              speed={50}
              repeat={Infinity}
              className="text-4xl md:text-4xl lg:text-6xl xl:text-7xl"
            />
          </h1>
          <p className="text-gray-500 dark:text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl text-balance">
            Building innovative software solutions with modern technologies to
            drive business growth and improve UX.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 betterhover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>

            <Dropdown>
              <DropdownTrigger>
                <Button
                  auto
                  className="px-1 py-1 inline-block w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 betterhover:bg-slate-800 text-black dark:text-white mt-3"
                >
                  <span className="block bg-[#f0f0f0] dark:bg-[#121212] betterhover:bg-slate-300 dark:betterhover:bg-slate-800 rounded-full px-5 py-2">
                    Download CV
                  </span>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                {items.map((item) => (
                  <DropdownItem key={item.key}>
                    <div className="flex items-center justify-between">
                      <ArrowDownTrayIcon className="h-5 w-5 mr-4 text-black dark:text-white" />
                      <a
                        href={item.link}
                        download
                        className="text-black dark:text-white outline-none"
                      >
                        {item.label}
                      </a>
                    </div>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            {/* <Link
              href="KoltenEdwardSoftwareEng.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 betterhover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] betterhover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link> */}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#dddddd] dark:bg-[#181818] w-[250px] h-[250px] sm:w-[180px] sm:h-[180px] md:w-[225px] md:h-[225px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] relative">
            <Image
              src="/images/hero-image.webp"
              alt="Kolten Edward sitting at this laptop"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 xl:w-[400px]"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
