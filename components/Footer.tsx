"use client";

import { footerLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { InstagramLogo, TwitterLogo, MetaLogo } from "@phosphor-icons/react";
import CustomBtn from "./CustomBtn";

type Props = {};
const year = new Date().getFullYear();

const Footer = (props: Props) => {
  return (
    <footer id="info" className="bg-zinc-900 py-20">
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col gap-y-5">
          <div>
            <Image
              src="/logo-footer.png"
              width={120}
              height={120}
              alt="logo-footer"
            />
          </div>
          <div className="text-xs font-semibold text-zinc-400 text-center md:text-start">
            <p>18530 Greenfelder Trail</p>
            <p>514.663.1470</p>
            <p>Ventura Inc</p>
            <p>Managua, Nicaragua.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-y-5">
            {footerLinks.map((link) => (
              <div key={link.title}>
                <h4 className="uppercase text-zinc-400 font-bold text-sm">
                  {link.title}
                </h4>
                <div className="flex flex-col">
                  {link.links.map((link) => (
                    <Link
                      key={link.title}
                      href={link.url}
                      className="text-sm text-zinc-500 capitalize cursor-pointer"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <h4 className="font-bold text-zinc-400 text-right">
            Suscríbete y recibe Noticias y Actualizaciones
          </h4>
          <div className="flex justify-end">
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
          <div className="flex gap-x-5 justify-end">
            <div>
              <InstagramLogo size={32} className="fill-zinc-400 cursor-pointer" />
            </div>
            {/* <div>
              <TwitchLogo size={32} className="fill-zinc-400" />
            </div> */}
            <div>
              <TwitterLogo size={32} className="fill-zinc-400 cursor-pointer" />
            </div>
            <div>
              <MetaLogo size={32} className="fill-zinc-400 cursor-pointer" />
            </div>
          </div>
          <div>
            <p className="text-xs font-thin text-white md:text-right text-center">
              All rights reserved &copy; {year}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
