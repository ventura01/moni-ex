'use client'

import React from "react";
import {
    ClockClockwise,
    ShieldCheck,
    CheckCircle,
    Headset,
  } from "@phosphor-icons/react";

type Props = {};

const Features = (props: Props) => {
  return (
    <section id="features" className="bg-teal-800 py-10">
      <div className="flex flex-col md:flex-row justify-around items-center gap-y-10 md:gap-y-0 md:gap-x-5 mb-10 md:mb-0 container maxw-screen-xl mx-auto">
        <div className="flex flex-col items-center gap-y-3 px-3 md:px-0">
          <div>
            <ClockClockwise size={60} className="text-teal-50" />
          </div>
          <h3 className="text-teal-100 font-bold text-lg">Rápido</h3>
          {/* <p className="text-center font-light text-teal-100">
            Minima sit libero veritatis dolores animi.
          </p> */}
        </div>
        <div className="flex flex-col items-center gap-y-3 px-3 md:px-0">
          <div>
            <ShieldCheck size={60} className="text-teal-50" />
          </div>
          <h3 className="text-teal-100 font-bold text-lg">Seguro</h3>
          {/* <p className="text-center font-light text-teal-100">
            Laborum sapiente nesciunt dolor repellat qui.
          </p> */}
        </div>
        <div className="flex flex-col items-center gap-y-3 px-3 md:px-0">
          <div>
            <CheckCircle size={60} className="text-teal-50" />
          </div>
          <h3 className="text-teal-100 font-bold text-lg">Eficiente</h3>
          {/* <p className="text-center font-light text-teal-100">
            Autem blanditiis aut eligendi quis officiis dolore et aliquam.
          </p> */}
        </div>
        <div className="flex flex-col items-center gap-y-3 px-3 md:px-0">
          <div>
            <Headset size={60} className="text-teal-50" />
          </div>
          <h3 className="text-teal-100 font-bold text-lg">Asistencia</h3>
          {/* <p className="text-center font-light text-teal-100">
            Laborum sapiente nesciunt dolor repellat qui.
          </p> */}
        </div>
        {/* <Calculator size={32} /><ChartLineUp size={32} /> */}
      </div>
    </section>
  );
};

export default Features;
