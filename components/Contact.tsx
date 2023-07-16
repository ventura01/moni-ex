import React from "react";
import CustomBtn from "./CustomBtn";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section id="contactus" className="py-20 bg-zinc-700 px-3 sm:px-0 md:px-0">
      <div className="md:w-[450px] sm:w-[320px] mx-auto">
        <h2 className="text-center mb-3 text-3xl font-bold tracking-widest uppercase text-zinc-100">
          Contáctanos
        </h2>
        <p className="text-zinc-300 mb-5">
          Si tienes dudas o sugerencias, por favor escríbenos y un agente se
          pondrá en contacto contigo lo antes posible.
        </p>
      </div>
      <form
        action=""
        className="flex mx-auto md:w-[450px] sm:w-[320px] flex-col gap-y-5"
      >
        <div className="flex flex-col">
          <label className="text-zinc-400" htmlFor="name">
            Nombre
          </label>
          <input type="text" name="name" id="" placeholder="Nombre" />
        </div>
        <div className="flex flex-col">
          <label className="text-zinc-400" htmlFor="apellido">
            Apellido
          </label>
          <input type="text" name="apellido" id="" placeholder="Apellido" />
        </div>
        <div className="flex flex-col">
          <label className="text-zinc-400" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id=""
            placeholder="tucorreo@correo.comm"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-zinc-400" htmlFor="message">
            Mensaje
          </label>
          <textarea
            name="message"
            id=""
            cols={30}
            rows={5}
            placeholder="Escribe tu mensaje"
          ></textarea>
        </div>
        <div className="">
          <CustomBtn
            title="enviar"
            containerStyles="bg-zinc-500 w-full rounded-sm hover:bg-zinc-400 text-zinc-100 capitalize py-3"
            btnType="submit"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
