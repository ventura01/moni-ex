"use client";

import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import CustomBtn from "./CustomBtn";

type Props = {};

const Hero = (props: Props) => {
  const handleScroll = () => {};
  return (
    <header className="hero flex items-center bg-[url('/images/hero-img.jpg')] bg-cover bg-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-0"/>
      <div className="container max-w-screen-xl mx-auto flex justify-end z-10">
        <div className="flex flex-col justify-start w-2/4 gap-y-8 text-right">
          <h1 className="text-white text-6xl uppercase font-bold">
            Lorem ipsum dolor sit amet.
          </h1>
          <p className="text-white tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            delectus impedit, sed voluptatem nostrum placeat quia ipsum a!
          </p>
          <div className="inline-block self-end">
              <CustomBtn
                title="Más información"
                containerStyles="py-3 px-5 text-white rounded-md bg-yellow-500 hover:bg-yellow-400"
                handleClick={handleScroll}
                iconStyles="ml-3"
              />
          </div>
        </div>
        {/* <div className="pl-20">
          <Image
            src="/hero-image.svg"
            width={900}
            height={900}
            alt="hero-image"
            className="object-contain object-right"
          />
        </div> */}
      </div>
    </header>
  );
};

export default Hero;
