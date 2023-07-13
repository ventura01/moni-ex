"use client";

import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import CustomBtn from "./CustomBtn";

type Props = {};

const Hero = (props: Props) => {
  const handleScroll = () => {};
  return (
    <header className="hero flex items-center">
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-start pr-28 gap-y-8">
          <h1 className="text-gray-700 text-6xl font-bold">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-gray-400 tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            delectus impedit, sed voluptatem nostrum placeat quia ipsum a!
          </p>
          <div className="inline-block self-start">
              <CustomBtn
                title="Más información"
                containerStyles="py-3 px-5 text-white rounded-md bg-yellow-500 hover:bg-yellow-400 font-bold"
                handleClick={handleScroll}
                iconStyles="ml-3"
              />
          </div>
        </div>
        <div className="pl-20">
          <Image
            src="/hero-image.svg"
            width={900}
            height={900}
            alt="hero-image"
            className="object-contain object-right"
          />
        </div>
      </div>
    </header>
  );
};

export default Hero;
