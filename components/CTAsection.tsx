import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const CTAsection = (props: Props) => {
  return (
    <section
      id="cta-section"
      className="bg-gradient-to-b from-teal-500 via-teal-600 to-teal-700"
    >
      <div className="container max-w-screen-xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2">
        <div className="px-3 md:px-0 md:pr-20">
          <p className="text-white uppercase text-3xl font-bold text-center md:text-left">
            Descarga la app en tu móvil ahora!
          </p>
          <p className="text-white text-justify md:text-left mb-10 md:mb-0">
            Y descubre la comodidad de cambiar entre monedas de forma eficiente
            y segura. Facilitamos tus operaciones financieras, brindándote la confianza que
            necesitas en cada paso del camino.
          </p>
        </div>
        <div className="md:flex md:gap-y-10 items-center flex flex-col gap-y-10 ">
          <div>
            <Link href="https://play.google.com/store/apps?hl=es_NI&gl=US">
              <img
                src="/images/app-store.png"
                height={100}
                width={200}
                alt="app-store"
                className="w-50 h-auto "
              />
            </Link>
          </div>
          <div>
            <Link href="https://www.apple.com/la/app-store/">
              <img
                src="/images/apple-store.png"
                height={100}
                width={200}
                alt="app-store"
                className="w-50 h-auto"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAsection;
