import SportiaLogo from "./assets/SportiaLogo.png";
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import Home from './components/Home';
import { Button } from "@nextui-org/react";
import createUser from "./components/users/createUser";
import LoginUser from "./components/users/LoginUser";  
import { useDisclosure, Divider } from "@nextui-org/react";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();  // Control del modal

  const items = [ //items del navbar
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: '/'
    },
    {
      label: 'Catalogo',
      icon: 'pi pi-th-large',
      url: '/catalog'
    },
    {
      label: 'Crear Usuarios',
      icon: 'pi pi-th-large',
      url: '/createUser'
    },
  ];

  const start = <img alt="logo" src={SportiaLogo} height="40" className="h-10" />; //inicio del navbar (LOGO)

  const center = ( // centrado de los items del navbar
    <div className="flex flex-grow justify-center">
      <Menubar model={items} className="bg-transparent border-none p-0" /> 
    </div>
  );

  const end = ( //final del navbar, contenido al ultimo 
    <div className="flex items-center gap-2">
      <Button color="success" auto onPress={onOpen}>
        Iniciar Sesión
      </Button>
    </div>
  );

  return (
    <>
     <div className="card"> {/* card del ruteo del navbar NO TOCAR */}
      <BrowserRouter> 
        <div className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
          {start}
          {center} 
          {end}
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>

      <LoginUser isOpen={isOpen} onClose={onClose} />
    </div>
     <div className="card flex justify-center"> {/* card del footer LABURA TOMI  */}
      <footer>
        <h1 className="text-2xl font-bold">Sportia Indumentaria</h1>
        <p>Moda que te inspira a brillar en cada momento.</p>
      </footer>
    </div>
    </>
  );
}

export default App;
