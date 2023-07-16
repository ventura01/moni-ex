import { testimonials } from "@/data";
import Image from "next/image";
import React from "react";

type Props = {};

const Testimonials = (props: Props) => {
  return (
    <section id="testimonials" className="bg-zinc-500 py-20">
      <div className="container max-w-screen-xl px-3 md:px-0 mx-auto">
        <h2 className="uppercase tracking-widest text-center font-bold text-3xl text-zinc-900 mb-20">
          ¿Qué dicen nuestros clientes?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-5 gap-y-16 md:gap-y-0">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="px-5 bg-zinc-400 rounded-md pt-12 pb-10 relative"
            >
              <div className="">
                <Image
                  src={testimonial.img}
                  alt={testimonial.name}
                  width={120}
                  height={120}
                  className="absolute right-1/2 top-0 w-20 -translate-y-1/2 translate-x-1/2 transform rounded-full border-4 border-zinc-200"
                />
              </div>
              <div className="flex h-full flex-col justify-between gap-y-5">
                <div>
                  <Image
                    src="/quotes.png"
                    width={300}
                    height={300}
                    alt="qoutes"
                    className="absolute w-24 top-5 left-5"
                  />
                </div>
                <p className="text-zinc-800 line-clamp-5 z-10">{testimonial.text}</p>
                <p className="text-zinc-100 text-right text-sm font-semibold">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
