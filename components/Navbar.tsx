import React from "react";
import { navLinks } from "../data";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav>
      <div className="container max-w-screen-xl mx-auto flex justify-between py-5">
        <Image src="/logo.png" width={120} height={30} alt="logo" />
        <div className="flex gap-x-10 capitalize">
          {navLinks.map((navLink) => (
            <Link href={navLink.url} key={navLink.title}>
              {navLink.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
