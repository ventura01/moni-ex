"use client";

import React from "react";
import {
  ClockClockwise,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react";
import Image from "next/image";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section id="aboutus" className="bg-zinc-800 py-20 relative">
      <h2 className="text-zinc-200/5 font-bold md:top-24 md:left-72 text-9xl absolute hidden md:block">
        Nosotros
      </h2>
      <h2 className="text-zinc-200 font-bold uppercase tracking-widest text-3xl text-center mb-12">
        Acerca de Nosotros
      </h2>
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3">
        <div className="px-3 md:px-0 mb-10 md:mb-0">
          <h3 className="text-zinc-300 font-semibold text-2xl mb-5 text-justify md:text-left">
            Nos dedicamos a hacer ahorrar a nuestros clientes
          </h3>
          <p className="text-zinc-400 font-light text-justify md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur animi nesciunt accusantium? Itaque ratione minima sed
            dolor dignissimos esse dolores hic aliquid quae dolorum! Cum rerum
            porro atque iste esse qui modi molestiae? In, sit harum?
          </p>
        </div>
        <div className="flex flex-col justify-between items-center gap-y-5 mb-10 md:mb-0">
          <div className="flex flex-col items-center">
            <h3 className="text-zinc-300 font-bold text-lg">Rápido</h3>
            <div>
              <ClockClockwise size={48} className="text-zinc-100" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-zinc-300 font-bold text-lg">Fácil</h3>
            <div>
              <CheckCircle size={48} className="text-zinc-100" />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-zinc-300 font-bold text-lg">Seguro</h3>
            <div>
              <ShieldCheck size={48} className="text-zinc-100" />
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src="/images/about-img.jpg"
            width={600}
            height={600}
            alt="about-img"
            className="object-cover object-center rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
