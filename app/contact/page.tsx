"use client";

import React from "react";
import CustomBtn from "../../components/CustomBtn";
import { useState, useRef } from "react";
// import Image from "next/image";

type Props = {};

const Contact = (props: Props) => {
  const [state, setState] = useState<string>();
  const [buttonDisabled, setButtonDisabled] = useState(true);
  // ---------------
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // ---------------
  let formRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("loading");
    setTimeout(() => {
      setState("ready");
      setTimeout(() => {
        setState("");
        setButtonDisabled(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      }, 1500);
    }, 1500);
    // await fetch("/api/contactEmail", {
    //   method: "POST",
    //   body: JSON.stringify({ firstName: "rafa", lastName: "vent" }),
    // });
  };
  return (
    <section id="contactus" className="py-20 px-3 sm:px-0 md:px-0">
      <div className="container max-w-screen-xl mx-auto">
        {/* <div className="md:flex align-middle row-start-2 row-end-3 md:col-start-1 md:col-end-2 hidden">
          <img
            src="https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            width={600}
            height={300}
            alt="contact-img"
            className="object-cover object-center rounded-md"
          />
        </div> */}
        <div className="md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">
          <div className="md:w-[450px] sm:w-[320px] mx-auto">
            <h2 className="text-center mb-3 text-3xl font-bold tracking-widest uppercase text-teal-950">
              Contáctanos
            </h2>
            <p className="text-teal-700 mb-5">
              Si tienes dudas o sugerencias, por favor escríbenos y un agente se
              pondrá en contacto contigo lo antes posible.
            </p>
          </div>
          <form
            action=""
            className="flex mx-auto md:w-[450px] sm:w-[320px] flex-col gap-y-5"
            onSubmit={handleSubmit}
            ref={formRef}
            id="contactForm"
          >
            <div className="flex flex-col">
              <label className="text-teal-950" htmlFor="firstName">
                Nombre
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Juan"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-teal-950" htmlFor="lastName">
                Apellido
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Perez A."
                required
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-teal-950" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="juanpereza@correo.comm"
                required
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-teal-950" htmlFor="message">
                Mensaje
              </label>
              <textarea
                name="message"
                id=""
                cols={30}
                rows={5}
                placeholder="Escribe tu mensaje"
                value={message}
                onChange={(e) => setMessage(e.currentTarget.value)}
              ></textarea>
            </div>
            <div className="">
              <CustomBtn
                title="enviar"
                containerStyles="bg-yellow-500 w-full rounded-sm hover:bg-yellow-400 text-white capitalize py-3"
                btnType="submit"
                disabled={buttonDisabled}
              />
            </div>
            {state === "loading" ? (
              <p className="text-white">Loading...</p>
            ) : state === "ready" ? (
              <p className="text-white">Enviado</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
