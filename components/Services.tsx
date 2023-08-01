"use client";

import React from "react";

type Props = {};

const Services = (props: Props) => {
  return (
    <section id="services" className="py-20 relative bg-gray-100">
      {/* <h3 className="text-teal-100/5 font-bold md:top-24 md:left-72 text-9xl absolute hidden xl:block">
        Servicios
      </h3> */}
      <h2 className="text-teal-950 font-bold uppercase tracking-widest text-3xl text-center mb-12">
        nuestros servicios
      </h2>
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2">
        <div className="px-3 md:px-0 mb-10 md:mb-0 md:pr-20 flex flex-col justify-center">
          {/* <h3 className="text-teal-950 font-semibold text-2xl mb-5 text-justify md:text-left">
            Nuestros Servicios
          </h3> */}
          <p className="text-teal-950 font-semibold text-justify md:text-left">
            Nuestra aplicación ha sido diseñada para realizar conversiones de
            moneda de manera rápida y segura pensando en tus necesidades para
            facilitar tus transacciones de divisas. Con MONI, podrás aprovechar
            una serie de servicios y características esenciales:
          </p>
          <br />
          <h4 className="text-teal-950 text-lg font-semibold">
            Conversión Rápida y Precisa:
          </h4>
          {/* <br /> */}
          <p className="text-teal-700">
            Realiza conversiones instantáneas entre dólares y córdobas o
            viceversa. Nuestra aplicación utiliza tasas de cambio en tiempo
            real, asegurándonos de que siempre obtengas el valor más preciso
            para tus operaciones financieras.
          </p>
          <br />
          <h4 className="text-teal-950 text-lg font-semibold">
            Calculadora Integrada:
          </h4>
          {/* <br /> */}
          <p className="text-teal-700">
            Nuestra calculadora de cambio te permite ingresar la cantidad exacta
            que deseas cambiar y obtener al instante el equivalente en la moneda
            de destino. Olvídate de cálculos complejos y asegúrate de que cada
            transacción sea transparente y sin sorpresas.
          </p>
          <br />
          <h4 className="text-teal-950 text-lg font-semibold">
            Seguridad y Privacidad:
          </h4>
          {/* <br /> */}
          <p className="text-teal-700">
            En MONI, la seguridad de tus datos personales y financieros es
            nuestra máxima prioridad. Utilizamos las últimas tecnologías de
            encriptación para garantizar que tu información esté protegida en
            todo momento.
          </p>
          <br />
          <h4 className="text-teal-950 text-lg font-semibold">
            Registro de Historial de Transacciones:
          </h4>
          {/* <br /> */}
          <p className="text-teal-700">
            Accede fácilmente a tu historial de transacciones para llevar un
            registro de tus conversiones pasadas. Esto te permitirá realizar un
            seguimiento detallado de tus operaciones y facilitar la gestión de
            tus finanzas.
          </p>
          <br />
          <h4 className="text-teal-950 text-lg font-semibold">
            Atención al Cliente:
          </h4>
          {/* <br /> */}
          <p className="text-teal-700">
            Nuestro equipo de atención al cliente está disponible de 8:00 -
            17:00 de Lunes a Viernes, para brindarte asistencia rápida y
            efectiva en caso de cualquier consulta o problema que puedas tener.
          </p>
        </div>
        <div className="flex items-center">
          <img
            src="/images/about-img.jpg"
            alt="service-image"
            width={600}
            height={600}
            className="object-center object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
