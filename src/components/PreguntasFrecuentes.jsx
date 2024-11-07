import {Accordion, AccordionItem, Divider} from "@nextui-org/react";
import { Fragment } from "react";
import { HelpCircle } from "react-feather";

const PreguntasFrecuentes = () => {
    const defaultContent =
    '¡Sí! Realizamos envíos a todo el país, así como a países limítrofes sin ningún inconveniente. Nuestro objetivo es que recibas tu pedido de manera rápida y segura, sin importar tu ubicación.';
    const defaultContent2 =
    'Aceptamos una amplia variedad de métodos de pago, incluyendo efectivo (en tienda), transferencias bancarias, tarjetas de débito y crédito, con opciones de financiamiento de hasta 12 cuotas. Queremos que tu experiencia de compra sea cómoda y accesible.';
    const defaultContent3 =
    'El tiempo de entrega varía según la ubicación: los envíos pueden tardar entre 3 días y 1 semana en zonas alejadas. Si te encuentras en Río Cuarto, ofrecemos entregas el mismo día para mayor comodidad.';
    const defaultContent4 =
    'Ofrecemos una variedad de tallas que van desde XS hasta XXL para la mayoría de nuestros productos. Cada artículo cuenta con una guía de tallas específica para ayudarte a seleccionar la opción que mejor se adapte a tus necesidades.';
    const defaultContent5 =
    'Sí, aceptamos cambios y devoluciones dentro de los 15 días posteriores a la entrega. Los productos deben estar en su estado original, sin usar y con las etiquetas intactas. Para iniciar un cambio o devolución, contáctanos a través de nuestro servicio de atención al cliente.';
    const defaultContent6 =
    'Regularmente ofrecemos descuentos y promociones especiales. Te recomendamos suscribirte a nuestro boletín para recibir notificaciones sobre las últimas ofertas y descuentos exclusivos para nuestros usuarios.';


  return (
    <Fragment>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}} className="mt-10 text-4xl font-bold">
            <HelpCircle />Preguntas Frecuentes
        </div>
        <div className="w-9/12 card bg-green-300 rounded-md mt-10 mb-10" style={{display: 'flex', justifySelf: 'center'}}>
            <Accordion
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
        >
          <AccordionItem key="1" aria-label="Accordion 1" title={<span className="font-bold">¿Realizan envíos a nivel nacional?</span>} className="px-5 bg-gray-100 mt-2 mb-2 py-2">
          <Divider className="mb-5"/>
            {defaultContent}
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 1" title={<span className="font-bold">¿Qué métodos de pago están disponibles?</span>} className="px-5 bg-gray-100 mt-2 mb-2 py-2">
          <Divider className="mb-5"/>
            {defaultContent2}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 1" title={<span className="font-bold">¿Cuánto tiempo tarda el envío en llegar?</span>} className="px-5 bg-gray-100 mt-2 mb-2 py-2">
          <Divider className="mb-5"/>
            {defaultContent3}
          </AccordionItem>
          <AccordionItem key="4" aria-label="Accordion 1" title={<span className="font-bold">¿Qué tallas están disponibles para cada producto?</span>} className="px-5 bg-gray-100 mt-2 mb-2 py-2">
          <Divider className="mb-5"/>
            {defaultContent4}
          </AccordionItem>
          <AccordionItem key="5" aria-label="Accordion 1" title={<span className="font-bold">¿Se aceptan cambios y devoluciones?</span>} className="px-5 bg-gray-100 mt-2 mb-2 py-2">
          <Divider className="mb-5"/>
            {defaultContent5}
          </AccordionItem>
          <AccordionItem key="6" aria-label="Accordion 1" title={<span className="font-bold">¿Ofrecen descuentos o promociones?</span>} className="px-5 bg-gray-100 mt-2 mb-2 py-2">
          <Divider className="mb-5"/>
            {defaultContent6}
          </AccordionItem>
        </Accordion>
        </div>
    </Fragment>
  );
}

export default PreguntasFrecuentes