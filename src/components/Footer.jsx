// /components/Footer.jsx
import SportiaLogo from "/src/assets/SportiaLogo.png";
import 'primeicons/primeicons.css';
import React from 'react';
import { Divider } from 'primereact/divider';
import { Button } from '@nextui-org/react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-white py-10 h-80">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-column justify-items-center items-center space-x-4">
          <img alt="logo" src={SportiaLogo} height="40" className="h-20" />
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <span className="h-10 w-10 text-2xl text-black pi pi-facebook" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <span className="h-10 w-10 text-2xl text-black pi pi-instagram" />
              </a>
              <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer">
                <span className="h-10 w-10 text-2xl text-black pi pi-twitter" />
              </a>
            </div>
          </div>

          <div className="flex space-x-8">
            <div>
              <a href="/sobreNosotros" className="hover:underline text-black"><h4 className="font-bold text-xl text-black">Sobre Nosotros</h4></a> 
            </div>
            <div>
              <a href="https://forms.gle/5QSjkxMmaDvTykqC8" className="hover:underline text-black"><h4 className="font-bold text-xl text-black">Contacto</h4></a>
            </div>
            <div>
              <a href="/terminosDeUso" className="hover:underline text-black"><h4 className="font-bold text-xl text-black">Terminos de Uso</h4></a>
            </div>
            <div>
              <a href="/preguntasFrecuentes" className="hover:underline text-black"><h4 className="font-bold text-xl text-black">Preguntas Frecuentes</h4></a>
            </div>
          </div>
        </div>

        <Divider className="my-8" />

        <div className="text-center text-sm text-black ">
          <p className="text-lg">© 2024 Sportia Indumentaria. Moda que te inspira a brillar en cada momento. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
