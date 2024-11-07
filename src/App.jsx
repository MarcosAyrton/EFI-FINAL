// App.jsx
import SportiaLogo from "./assets/SportiaLogo.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import Home from "./components/Home";
import { Button } from "@nextui-org/react";
import CreateUser from "./components/users/CreateUser";
import LoginUser from "./components/users/LoginUser";
import { useDisclosure } from "@nextui-org/react";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Catalogo from "./components/Catalogo";
import Casacas from "./components/Casacas"
import Pantalones from "./components/Pantalones"; 
import GorrosGorritos from "./components/GorrosGorritos"; 
import Accesorios from "./components/Accesorios"; 
import Entrenamiento from "./components/Entrenamiento"; 
import CalzasTermicas from "./components/CalzaTermica"; 
import RemerasTermicas from "./components/RemeraTermica"; 
import SeleccionArgentina from "./components/SeleccionArgentina";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import TerminosDeUso from "./components/TerminosDeUso";
import Cart from "./components/Carrito";
import ProcederAlPago from "./components/Checkout";
import { ShoppingCart } from "react-feather";
import ProductForm from "./components/products/ProductForm";
import Registrarse from "./components/users/Registrarse";
import SobreNosotros from "./components/SobreNosotros";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, [isOpen]);

  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: "/",
    },
    {
      label: "Catalogo",
      icon: "pi pi-th-large",
      url: "/catalogo",
    },
    ...(isAdmin
      ? [
          {
            label: "Crear Usuarios",
            icon: "pi pi-user-plus",
            url: "/createUser",
          },
        ]
      : []),
      ...(isAdmin
        ? [
            {
              label: "Productos",
              icon: "pi pi-warehouse",
              url: "/products",
            },
          ]
        : []),
  ];

  const start = (
    <img
      alt="logo"
      src={SportiaLogo}
      className="h-10 sm:h-12 md:h-14 lg:h-16"
    />
  );

  const center = (
    <div className="flex flex-grow justify-center">
      <Menubar
        model={items}
        className="bg-transparent border-none p-0 flex flex-wrap justify-center text-sm sm:text-base md:text-lg"
      />
    </div>
  );

  const end = (
    <div className="flex items-center gap-2">
      <Button color="success" auto className="px-3 py-2" onPress={() => (window.location.href = "/cart")}>
        <ShoppingCart />Ver Carrito
      </Button>
      <Button
        color="success"
        auto
        className="px-3 py-2 text-xs sm:text-sm md:text-base"
        onPress={onOpen}
      >
        Iniciar Sesión
      </Button>
    </div>
  );

  return (
    <>
      <div className="card">
        <BrowserRouter>
          <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-4 bg-gray-100 shadow-md">
            {start}
            {center}
            {end}
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createUser" element={<CreateUser />} />
            <Route path="/products" element={<ProductForm />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/casacas" element={<Casacas />} />
            <Route path="/pantalones" element={<Pantalones />} />
            <Route path="/gorros-gorritos" element={<GorrosGorritos />} />
            <Route path="/accesorios" element={<Accesorios />} />
            <Route path="/entrenamiento" element={<Entrenamiento />} />
            <Route path="/calza" element={<CalzasTermicas />} />
            <Route path="/termica" element={<RemerasTermicas />} />
            <Route path="/seleccion" element={<SeleccionArgentina />} />
            <Route path='/preguntasFrecuentes' element={<PreguntasFrecuentes />} />
            <Route path='/terminosDeUso' element={<TerminosDeUso />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<ProcederAlPago />} /> 
            <Route path='/register' element={<Registrarse />} />
            <Route path='/sobreNosotros' element={<SobreNosotros />} />            
          </Routes>
        </BrowserRouter>
        <LoginUser isOpen={isOpen} onClose={onClose} />
      </div>
      <Footer />
    </>
  );
}

export default App;
