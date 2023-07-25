"use client";

import { footerLinks } from "@/data";
// import Image from "next/image";
import Link from "next/link";
import React from "react";
import { InstagramLogo, TwitterLogo, MetaLogo } from "@phosphor-icons/react";
import CustomBtn from "./CustomBtn";

type Props = {};
const year = new Date().getFullYear();

const Footer = (props: Props) => {
  return (
    <footer id="info" className="bg-teal-950 py-20">
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0">
        <div className="flex md:flex-col flex-col-reverse md:items-start items-center gap-y-5 md:gap-y-0 row-start-3 row-end-4 md:row-start-1 md:row-end-2">
          <div>
            <p className="text-xs font-thin text-white md:text-right text-center md:hidden block">
              All rights reserved &copy; {year}
            </p>
          </div>
          <div className="md:mb-5 mb-0">
            <Link href="/">
              <img
                src="/logo-footer.png"
                width={120}
                height={120}
                alt="logo-footer"
              />
            </Link>
          </div>
          <div className="text-xs font-semibold text-white text-center mb-10 md:mb-0 md:text-start">
            <p>18530 Greenfelder Trail</p>
            <p>514.663.1470</p>
            <p>Ventura Inc</p>
            <p>Managua, Nicaragua.</p>
          </div>
        </div>
        <div className="flex justify-center row-start-1 row-end-2 md:col-start-2 md:col-end-3">
          <div className="flex flex-col gap-y-5">
            {footerLinks.map((link) => (
              <div key={link.title}>
                <h4 className="uppercase text-white font-bold text-sm">
                  {link.title}
                </h4>
                <div className="flex flex-col">
                  {link.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.url}
                      className="text-sm text-white capitalize cursor-pointer"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-5 row-start-2 row-end-3 md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2">
          <h4 className="font-bold text-white md:text-right text-center">
            Suscríbete y recibe Noticias y Actualizaciones
          </h4>
          <div className="flex md:justify-end justify-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="micorreo@correo.com"
              className="rounded-sm mr-2"
            />
            <CustomBtn
              title="suscríbete"
              containerStyles="bg-yellow-500 py-2 px-4 text-white capitalize"
              btnType="submit"
            />
          </div>
          <div className="flex gap-x-5 md:justify-end justify-center">
            <div>
              <InstagramLogo size={32} className="fill-white cursor-pointer" />
            </div>
            {/* <div>
              <TwitchLogo size={32} className="fill-white" />
            </div> */}
            <div>
              <TwitterLogo size={32} className="fill-white cursor-pointer" />
            </div>
            <div>
              <MetaLogo size={32} className="fill-white cursor-pointer" />
            </div>
          </div>
          <div>
            <p className="text-xs font-thin text-white md:text-right text-center hidden sm:block">
              All rights reserved &copy; {year}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
