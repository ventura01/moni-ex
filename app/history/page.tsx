import React from "react";

type Props = {};

const History = (props: Props) => {
  return (
    <div className="md:w-[50%] px-3 md:px-0 mx-auto py-20">
      <h4 className="text-lg font-semibold">Nuestra Historia</h4>

      <p>
        Desde nuestro inicio en 2023, hemos trabajado arduamente para
        convertirnos en una de las principales opciones de intercambio de moneda
        para individuos y empresas en el país. Nuestro equipo está formado por
        expertos en el sector financiero y tecnológico, cuya visión es
        simplificar y agilizar el proceso de cambio de divisas para nuestros
        clientes.
      </p>
      <br />
      <h4 className="text-lg font-semibold">Nuestra Filosofía</h4>

      <p>
        En MONI, creemos en la transparencia, la seguridad y la eficiencia.
        Valoramos la confianza que nuestros clientes depositan en nosotros y nos
        esforzamos por superar sus expectativas en cada interacción. Nuestra
        filosofía se centra en tres pilares fundamentales:
      </p>
<br/>
      <ul className="list-decimal">
        <li>
          <strong>Transparencia:</strong> Queremos que nuestros clientes tengan
          una experiencia clara y comprensible en cada etapa del proceso de
          intercambio de moneda. No hay costos ocultos ni sorpresas
          desagradables; todo está detallado de forma transparente.
        </li>
        <li>
          <strong>Seguridad:</strong> La seguridad de los fondos y datos de
          nuestros clientes es nuestra máxima prioridad. Implementamos medidas
          de seguridad avanzadas para proteger cada transacción y garantizar la
          confidencialidad de la información.
        </li>
        <li>
          <strong>Eficiencia:</strong> Reconocemos la importancia del tiempo en
          las operaciones financieras. Por ello, trabajamos para ofrecer un
          servicio rápido y eficiente, brindando a nuestros usuarios la
          flexibilidad que necesitan para sus necesidades de cambio de divisas.
        </li>
      </ul>
      <br />
      <h4 className="text-lg font-semibold">Por qué Elegirnos</h4>

      <ul className="list-disc">
        <li>
          <strong>Tarifas Competitivas:</strong> Ofrecemos tasas de cambio competitivas y SIN
          comisiones para que nuestros clientes obtengan el mejor valor en sus
          operaciones de intercambio de moneda.
        </li>
        <li>
          <strong>Facilidad de Uso:</strong> Nuestra plataforma intuitiva y amigable hace que el
          proceso de cambio de divisas sea sencillo y accesible para todos.
        </li>
        <li>
          <strong>Atención al Cliente de Calidad:</strong> Nuestro equipo de atención al cliente
          está disponible para asistirte en cada paso del camino, brindando un
          servicio personalizado y profesional.
        </li>
        <li>
          <strong>Seguridad Garantizada:</strong> Implementamos medidas de seguridad de
          vanguardia para asegurar que tus datos y transacciones estén
          protegidos en todo momento.
        </li>
      </ul>

      <p>
        En MONI, estamos comprometidos con la excelencia en el servicio y en
        ofrecer una experiencia confiable y satisfactoria para nuestros
        clientes. Siempre nos esforzamos por mejorar y adaptarnos a las
        necesidades cambiantes del mercado financiero, para seguir siendo tu
        mejor opción en intercambio de moneda.
      </p>

      <p>¡Gracias por elegirnos para tus operaciones de cambio de divisas!</p>
      <p>[Nombre del equipo o fundador/es]</p>
      <p>MONI</p>
      <p>[Fecha actualización o fundación]</p>
    </div>
  );
};

export default History;
