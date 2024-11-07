import { Divider } from "@nextui-org/react";
import { Fragment } from "react";

const TerminosDeUso = () => {
    return(
        <Fragment>
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                <h1 className="text-2xl font-bold mt-5 mb-5">Terminos de Uso de Sportia Indumentaria</h1>
                <p className="font-bold mt-5 mb-5">Ultima Actualizacion: 03/11/24</p>
                <Divider />
                <p className="font-bold mt-10 mb-2">1. Aceptación de los Términos</p>
                <p className="mb-5">Al acceder y utilizar el sitio web Sportia Indumentaria, aceptas estos Términos de Uso. Si no estás de acuerdo con estos términos, te pedimos que no utilices nuestro sitio.</p>
                <Divider />
                <p className="font-bold mt-10 mb-2">2. Modificaciones de los Términos</p>
                <p className="mb-5">Nos reservamos el derecho de modificar estos Términos de Uso en cualquier momento. Te recomendamos revisar esta página periódicamente para estar al tanto de cualquier cambio. <br /> El uso continuado del sitio después de la publicación de cambios constituye la aceptación de esos cambios.</p>
                <Divider />
                <p className="font-bold mt-10 mb-2">3. Registro y Seguridad</p>
                <p className="mb-5">Para realizar una compra, es posible que debas registrarte y proporcionar información personal. Aceptas que la información proporcionada es precisa y completa. <br /> Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.</p>
                <Divider />
                <p className="font-bold mt-10 mb-2">4. Ley Aplicable</p>
                <p className="mb-5">Estos Términos de Uso se rigen por las leyes de Argentina. Cualquier disputa que surja en relación con estos términos será resuelta en los tribunales competentes de Rio Cuarto.</p>
            </div>
        </Fragment>
    );
}

export default TerminosDeUso