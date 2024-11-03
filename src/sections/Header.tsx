"use client";
import Logo from "@/assets/ch-logo-plain-mini.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navigation = [
  {
    title: "Home",
    url: "#home"
  },
  {
    title: "About",
    url: "#about"
  },
  {
    title: "Services",
    url: "#services"
  },
  {
    title: "Get in touch",
    url: "#get-in-touch"
  },
]

export const Header = () => {
  const [top, setTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };

    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`sticky top-0 z-20 ${!top && `backdrop-blur-md bg-white/70`}`}>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="#hero">
              <Image src={Logo} alt="Compliance Hub Logo" height={50} width={50}/>
            </a>

            <MenuIcon
              className="h-5 w-5 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            <nav className="hidden md:block gap-6 text-black/70 items-center">
              <div className="flex flex-row gap-5">
                {navigation.map((item, index) => (
                  <a 
                    key={index}
                    href={item.url}
                    className={`block relative px-4 py-1 rounded-md transition-colors hover:text-white hover:bg-black/90`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </nav>

            <div 
              className={`absolute md:hidden top-[91px] p-2 left-0 w-full flex flex-col items-center gap-7 transform transition-transform backdrop-blur-md ${ isMenuOpen ? "bg-white/95" : "opacity-0" }`}
              style={{transition: "transform 0.3s ease, opacity 0.3s ease"}}
            >
              {navigation.map((item, index) => (
                <a 
                  key={index}
                  href={item.url}
                  className={`w-full text-center px-4 py-1 rounded-md transition-all hover:text-white hover:bg-black/90`}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
