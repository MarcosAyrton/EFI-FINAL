// Catalogo.js
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

const Catalogo = () => {
  const navigate = useNavigate(); // Inicializamos el hook useNavigate

  const list = [
    {
      title: "Casaca Futbol",
      img: "/src/assets/boca.png",
      url: '/casacas',
    },
    {
      title: "Pantalones",
      img: "/src/assets/pantalon.png",
      url: '/pantalones',
    },
    {
      title: "Gorras/Gorritos",
      img: "/src/assets/gorrito.png",
      url: '/gorros-gorritos',
    },
    {
      title: "Accesorios",
      img: "/src/assets/accesorios.png",
      url: '/accesorios',
    },
    {
      title: "Remeras Entrenamiento",
      img: "/src/assets/entrenamiento.png",
      url: '/entrenamiento',
    },
    {
      title: "Calzas Termicas",
      img: "/src/assets/calza.png",
      url: '/calza',
    },
    {
      title: "Remeras Termicas",
      img: "/src/assets/termica.png",
      url: '/termica',
    },
    {
      title: "Seleccion Argentina",
      img: "/src/assets/seleccion.png",
      url: '/seleccion',
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 justify-items-center mt-10 mb-10">
      {list.map((item, index) => (
        <Card
          className="w-80 mb-10 mt-10"
          shadow="lg"
          key={index}
          isPressable
          onClick={() => navigate(item.url)}  // Redireccionamos al URL del item
        >
          <CardBody className="overflow-visible w-80 p-0 h-80">
            <Image
              shadow="lg"
              width="100%"
              alt={item.title}
              className="w-80 h-80"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-center bg-green-400 rounded">
            <b>{item.title}</b>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default Catalogo;
