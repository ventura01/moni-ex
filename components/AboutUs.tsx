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
            de manera rápida y segura.
          </h3>
          <p className="text-teal-700 font-light text-justify md:text-left">
            Somos una plataforma dedicada a proporcionar un servicio confiable y
            seguro para el intercambio de monedas extranjeras. Nuestra misión es
            facilitar las transacciones financieras cambiarias y ofrecer a
            nuestros usuarios una experiencia de cambio de divisas sin
            complicaciones.
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
          <h4 className="text-lg">Atención al Cliente</h4>
          <p className="text-teal-700 font-light text-justify md:text-left">
            Nuestro equipo de soporte está siempre disponible para ayudarte en
            caso de cualquier consulta o problema que puedas tener. No dudes en
            contactarnos a través de la sección de soporte en la aplicación.
            <br />
            Descarga MONI hoy mismo y descubre la comodidad de cambiar moneda de
            forma rápida y segura. ¡Gracias por elegirnos como tu plataforma de
            cambio de moneda preferida!
          </p>
          <h4>Nuestra Historia</h4>

          <p>
            Desde nuestro inicio en 2023, hemos trabajado
            arduamente para convertirnos en una de las principales opciones de
            intercambio de moneda para individuos y empresas en el país.
            Nuestro equipo está formado por expertos en el sector financiero y
            tecnológico, cuya visión es simplificar y agilizar el proceso de
            cambio de divisas para nuestros clientes.
          </p>

          <h4>Nuestra Filosofía</h4>

          <p>
            En MONI, creemos en la transparencia, la seguridad y la eficiencia.
            Valoramos la confianza que nuestros clientes depositan en nosotros y
            nos esforzamos por superar sus expectativas en cada interacción.
            Nuestra filosofía se centra en tres pilares fundamentales:
          </p>

          <p>
            1. Transparencia: Queremos que nuestros clientes tengan una
            experiencia clara y comprensible en cada etapa del proceso de
            intercambio de moneda. No hay costos ocultos ni sorpresas
            desagradables; todo está detallado de forma transparente.
          </p>

          <p>
            2. Seguridad: La seguridad de los fondos y datos de nuestros
            clientes es nuestra máxima prioridad. Implementamos medidas de
            seguridad avanzadas para proteger cada transacción y garantizar la
            confidencialidad de la información.
          </p>

          <p>
            3. Eficiencia: Reconocemos la importancia del tiempo en las
            operaciones financieras. Por ello, trabajamos para ofrecer un
            servicio rápido y eficiente, brindando a nuestros usuarios la
            flexibilidad que necesitan para sus necesidades de cambio de
            divisas.
          </p>
          <h4>Por qué Elegirnos</h4>

          <p>
            Tarifas Competitivas: Ofrecemos tasas de cambio competitivas y SIN
            comisiones para que nuestros clientes obtengan el mejor valor
            en sus operaciones de intercambio de moneda.
          </p>

          <p>
            Facilidad de Uso: Nuestra plataforma intuitiva y amigable hace que
            el proceso de cambio de divisas sea sencillo y accesible para todos.
          </p>

          <p>
            Atención al Cliente de Calidad: Nuestro equipo de atención al
            cliente está disponible para asistirte en cada paso del camino,
            brindando un servicio personalizado y profesional.
          </p>

          <p>
            Seguridad Garantizada: Implementamos medidas de seguridad de
            vanguardia para asegurar que tus datos y transacciones estén
            protegidos en todo momento.
          </p>

          <p>
            En MONI, estamos comprometidos con la
            excelencia en el servicio y en ofrecer una experiencia confiable y
            satisfactoria para nuestros clientes. Siempre nos esforzamos por
            mejorar y adaptarnos a las necesidades cambiantes del mercado
            financiero, para seguir siendo tu mejor opción en intercambio de
            moneda.
          </p>

          <p>
            ¡Gracias por elegirnos para tus operaciones de cambio de divisas!
          </p>
          <p>[Nombre del equipo o fundador/es]</p>
          <p>MONI</p>
          <p>[Fecha actualización o fundación]</p>
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
