"use client";

import React from "react";
import {
  ClockClockwise,
  ShieldCheck,
  CheckCircle,
} from "@phosphor-icons/react";

type Props = {};

const Services = (props: Props) => {
  return (
    <section id="services" className="py-20 relative bg-teal-900">
      <h3 className="text-teal-100/5 font-bold md:top-24 md:left-72 text-9xl absolute hidden xl:block">
        Servicios
      </h3>
      <h2 className="text-white font-bold uppercase tracking-widest text-3xl text-center mb-12">
        nuestros servicios
      </h2>
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="px-3 md:px-0 mb-10 md:mb-0 md:pr-20 flex flex-col justify-center">
          <h3 className="text-white font-semibold text-2xl mb-5 text-justify md:text-left">
            Nos dedicamos a hacer ahorrar a nuestros clientes
          </h3>
          <p className="text-teal-200 font-light text-justify md:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur animi nesciunt accusantium? Itaque ratione minima sed
            dolor dignissimos esse dolores hic aliquid quae dolorum! Cum rerum
            porro atque iste esse qui modi molestiae? In, sit harum?
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center gap-y-10 md:gap-y-0 md:gap-x-5 mb-10 md:mb-0 ">
          <div className="flex flex-col items-center gap-y-3 px-3 md:px-0">
            <div>
              <ClockClockwise size={60} className="text-teal-100" />
            </div>
            <h3 className="text-white font-bold text-lg">Rápido</h3>
            <p className="text-center font-light text-white">Minima sit libero veritatis dolores animi.</p>
          </div>
          <div className="flex flex-col items-center gap-y-3 px-3 md:px-0">
            <div>
              <CheckCircle size={60} className="text-teal-100" />
            </div>
            <h3 className="text-white font-bold text-lg">Fácil</h3>
            <p className="text-center font-light text-white">Autem blanditiis aut eligendi quis officiis dolore et aliquam.</p>
          </div>
          <div className="flex flex-col items-center gap-y-3 px-3 md:px-0">
            <div>
              <ShieldCheck size={60} className="text-teal-100" />
            </div>
            <h3 className="text-white font-bold text-lg">Seguro</h3>
            <p className="text-center font-light text-white">Laborum sapiente nesciunt dolor repellat qui.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
