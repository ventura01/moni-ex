"use client";

import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import CustomBtn from "./CustomBtn";

type Props = {};

const Hero = (props: Props) => {
  const handleScroll = () => {
    window.scrollTo({ top: 1640, left: 0 });
  };
  return (
    <header className="hero flex items-center bg-[url('/images/hero-img-1.jpg')] bg-cover bg-center relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-teal-950/70 z-0" />
      <div className="container max-w-screen-xl md:mx-auto md:justify-end z-10 grid grid-cols-1 md:grid-cols-2 md:gap-y-0">
        <div className="flex flex-col md:justify-center gap-y-8 px-3 md:px-0 py-20 md:py-0">
          <h1 className="text-white md:text-6xl text-4xl text-center md:text-left uppercase font-bold">
            cambia con confianza, obtén el mejor valor en cada transacción
          </h1>
          <p className="text-white tracking-wider text-center md:text-left">
            La plataforma confiable para intercambiar moneda de manera rápida,
            segura y eficiente.
          </p>
          <div className="inline-block md:self-start self-center">
            <CustomBtn
              title="Más información"
              containerStyles="py-3 px-5 text-white rounded-md bg-yellow-500 hover:bg-yellow-400"
              handleClick={handleScroll}
              iconStyles="ml-3"
              btnType="button"
            />
          </div>
        </div>
        <div className="md:pl-20 pl-0 pb-20 md:pb-0">
          <img
            src="/images/hero-img-2.png"
            height={600}
            width={600}
            alt="hero-image"
            className="object-cover object-center"
          />
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
