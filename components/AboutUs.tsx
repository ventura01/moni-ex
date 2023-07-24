"use client";

import React from "react";

// import Image from "next/image";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <section id="aboutus" className="py-20 relative">
      {/* <h3 className="text-teal-100/50 font-bold md:top-24 -z-10 md:left-72 text-9xl absolute hidden xl:block">
        Nosotros
      </h3> */}
      <h2 className="text-teal-950 font-bold uppercase tracking-widest text-3xl text-center mb-12 ">
        Acerca de Nosotros
      </h2>
      <div className="container max-w-screen-xl mx-auto grid z-10 grid-cols-1 md:grid-cols-2">
        <div className="px-3 text-teal-950 md:px-0 mb-10 md:mb-0 md:pr-20 flex flex-col justify-center">
          <h3 className="font-semibold text-2xl mb-5 text-justify md:text-left">
            Bienvenido a MONI, tu compañero confiable para el cambio de moneda
            de manera rápida, segura y eficiente.
          </h3>
          <p className="text-teal-700 font-light text-justify md:text-left">
            Somos una plataforma digital dedicada a proporcionar un servicio
            confiable y seguro para el intercambio de monedas extranjeras.
            Nuestra misión es facilitar las transacciones financieras cambiarias
            y ofrecer a nuestros usuarios una experiencia de cambio de divisas
            sin complicaciones.
          </p>
          <br />
          <h4 className="text-lg">Seguridad y Privacidad</h4>
          <p className="text-teal-700 font-light text-justify md:text-left">
            En MONI, tu seguridad y privacidad son nuestra máxima prioridad.
            Utilizamos los más altos estándares de seguridad y encriptación para
            proteger tus datos financieros y personales. Además, nunca
            almacenamos información confidencial en nuestros servidores.
          </p>
          <br />
          {/* <h4 className="text-lg">Atención al Cliente</h4>
          <p className="text-teal-700 font-light text-justify md:text-left">
            Nuestro equipo de soporte está siempre disponible para ayudarte en
            caso de cualquier consulta o problema que puedas tener. No dudes en
            contactarnos a través de la sección de soporte en la aplicación.
            <br />
            Descarga MONI hoy mismo y descubre la comodidad de cambiar moneda de
            forma rápida y segura. ¡Gracias por elegirnos como tu plataforma de
            cambio de moneda preferida!
          </p> */}
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
