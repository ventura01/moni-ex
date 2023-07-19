"use client";

import React from "react";

// import Image from "next/image";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section id="aboutus" className="bg-[#0f424b] py-20 relative">
      <h3 className="text-teal-100/5 font-bold md:top-24 md:left-72 text-9xl absolute hidden xl:block">
        Nosotros
      </h3>
      <h2 className="text-white font-bold uppercase tracking-widest text-3xl text-center mb-12 ">
        Acerca de Nosotros
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

        <div className="">
          <img
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
