"use client";

import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import CustomBtn from "./CustomBtn";

type Props = {};

const Hero = (props: Props) => {
  const handleScroll = () => {};
  return (
    <header className="hero">
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center pr-28 gap-y-8">
          <h1 className="text-gray-700 text-6xl font-bold">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-gray-400 tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            delectus impedit, sed voluptatem nostrum placeat quia ipsum a!
          </p>
          <CustomBtn
            title="Más información"
            containerStyles={"border-2 rounded-md"}
            handleClick={handleScroll}
          />
        </div>
        <div>
          <Image
            src="/hero-image.svg"
            width={600}
            height={600}
            alt="hero-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
