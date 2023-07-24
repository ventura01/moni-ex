"use client";

import { useState, useRef, useEffect } from "react";
import { XCircle, DotsThreeCircleVertical } from "@phosphor-icons/react";
import { navLinks } from "../data";
import Link from "next/link";
import CustomBtn from "./CustomBtn";
// import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  let menuRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    let handler = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as HTMLElement)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousemove", handler);
    return () => {
      document.removeEventListener("mousemove", handler);
    };
  }, []);

  return (
    <nav className="md:block relative">
      <div className="md:container md:max-w-screen-xl md:mx-auto flex justify-between py-3 md:py-3 mx-3">
        <Link href="/">
          <img src="/logo.png" width={120} height={30} alt="logo" />
        </Link>
        <div>
          <div
            ref={menuRef}
            className={`${
              menuOpen
                ? "fixed z-20 w-[90%] left-3 capitalize top-14 items-center rounded-md flex flex-col bg-gray-900 text-zinc-100 py-10 gap-y-5"
                : "hidden md:flex gap-x-5 capitalize"
            }`}
          >
            {navLinks.map((navLink) => (
              <Link
                onClick={() => setMenuOpen(false)}
                href={navLink.url}
                key={navLink.title}
                className="hover:bg-[#0d373f1a] py-1 px-4 md:text-[#0d373f] md:hover:text-[#347a88] text-white"
              >
                {navLink.title}
              </Link>
            ))}
          <CustomBtn
            title="Registro"
            containerStyles="border border-yellow-500 rounded-md hover:bg-yellow-500 hover:text-white active:bg-yellow-700 md:text-[#0d373f] py-1 px-5"
            btnType="subscribe"
          />
          <CustomBtn
            title="Acceder"
            containerStyles="border border-yellow-500 rounded-md hover:bg-transparent bg-yellow-500 hover:text-[#0d373f] active:bg-yellow-400 md:text-white py-1 px-5"
            btnType="subscribe"
          />
          </div>
        </div>
        <div className="md:hidden">
          <div
            className={`${
              menuOpen &&
              "absolute right-0 top-0 z-0 h-screen w-screen bg-gray-500 bg-opacity-25 backdrop-blur-sm md:hidden"
            }`}
          ></div>
          <div className="md:hidden flex self-center">
            <button
              className="fixed right-6 z-20 bg-white text-[#0f424b] rounded-full py-[4px] px-[4px]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <XCircle size={24} />
              ) : (
                <DotsThreeCircleVertical size={24} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
