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
      url: "/catalog",
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
  ];

  const start = (
    <img alt="logo" src={SportiaLogo} height="40" className="h-10" />
  );

  const center = (
    <div className="flex flex-grow justify-center">
      <Menubar model={items} className="bg-transparent border-none p-0" />
    </div>
  );

  const end = (
    <div className="flex items-center gap-2">
      <Button color="success" auto onPress={onOpen}>
        Iniciar Sesión
      </Button>
    </div>
  );

  return (
    <>
      <div className="card">
        <BrowserRouter>
          <div className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow-md">
            {start}
            {center}
            {end}
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createUser" element={<CreateUser />} /> {/* Ajuste aquí */}
          </Routes>
        </BrowserRouter>
        <LoginUser isOpen={isOpen} onClose={onClose} />
      </div>
      <Footer  />
    </>
  );
}

export default App;
