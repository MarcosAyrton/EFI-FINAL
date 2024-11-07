import { Fragment } from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Image} from "@nextui-org/react";
import SportiaLogo from "/src/assets/SportiaLogo.png";

const SobreNosotros = () => {
    return (
        <Fragment>
            <Card>
                <CardHeader className="bg-green-300 justify-center text-2xl font-bold mt-5 flex-col">
                    <Image
                     alt="sportia logo"
                     src={SportiaLogo}
                     className="h-10 sm:h-12 md:h-14 lg:h-16 mb-5"
                    />
                    
                    <p>Un poco sobre la historia de Sportia Indumentaria</p>
                </CardHeader>
                <CardBody className="bg-gray-200 text-xl text-center ">
                    <p className="mb-5 mt-5">La historia de Sportia Indumentaria comienza con nosotros: Stefano, Thomas, y Marcos. Desde siempre, los tres compartimos una pasión inquebrantable por el deporte, no solo por la competencia o el rendimiento, sino por ese sentimiento de comunidad y pertenencia que inspira. Muchas tardes, después de una buena jornada de entrenamiento o de un partido, nos quedábamos charlando sobre cómo la indumentaria deportiva no solo impacta en la comodidad, sino en la confianza y la motivación que uno siente al hacer deporte.</p>
                    <Divider />
                    <p className="mb-5 mt-5">Fue en una de esas tardes de charla cuando Thomas lanzó la idea: “¿Y si abrimos un negocio de indumentaria deportiva?” Al principio, nos reímos, pero esa pequeña chispa no tardó en prender. La idea de crear algo desde cero, de unir nuestros esfuerzos para diseñar ropa de calidad, accesible y con estilo propio, era un sueño compartido que comenzaba a hacerse tangible.</p>
                    <Divider />
                    <p className="mb-5 mt-5">Sportia Indumentaria fue la materialización de ese sueño. Comenzamos con lo básico: con lo que teníamos y con lo que sabíamos. Stefano se encargó de la parte creativa, diseñando prendas que se adaptaran a todos, desde los fanáticos del fitness hasta los que recién empezaban su camino. Thomas, con su habilidad para los negocios, comenzó a buscar proveedores, a hacer conexiones, y a idear la estrategia para llegar al público. Y Marcos, siempre práctico y detallista, asumió el rol de coordinar la producción y logística, asegurándose de que cada prenda cumpliera con los estándares de calidad que queríamos ofrecer.</p>
                    <Divider />
                    <p className="mb-5 mt-5">No fue fácil. Hubo momentos en los que pensamos que quizás nos habíamos adelantado a nuestras posibilidades, días en los que los problemas parecían más grandes que nuestras ideas. Pero también hubo muchos días de satisfacción: cuando llegaron las primeras muestras de las prendas, cuando lanzamos nuestra primera colección, cuando vimos a nuestros primeros clientes probándose Sportia y sonriendo frente al espejo.</p>
                    <Divider />
                    <p className="mb-5 mt-5">Hoy, Sportia Indumentaria no es solo un negocio; es el reflejo de nuestra amistad, de nuestro esfuerzo, y de ese sueño que comenzó como una charla entre amigos. Nos llena de orgullo ver cómo Sportia ha crecido, cómo nuestras prendas llegan a cada vez más personas, y cómo hemos logrado ofrecer ropa deportiva que no solo luce bien, sino que también inspira confianza y comodidad. Y aunque el camino no siempre ha sido fácil, cada paso ha valido la pena.</p>                    
                </CardBody>
                <CardFooter className="bg-green-300 justify-center text-2xl font-bold mb-5">
                    <p>Para nosotros, Sportia es más que una marca; es nuestra manera de compartir con el mundo la pasión que nos une.</p>
                </CardFooter>
            </Card>
        </Fragment>
    );
}

export default SobreNosotros