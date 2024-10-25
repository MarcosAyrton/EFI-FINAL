import React, { Fragment, useState } from 'react';
import { Rating } from "primereact/rating";
import { Button } from "@nextui-org/react";
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import casacaImage from "/src/assets/casaca.png";
import logo from "/src/assets/nike.png";
import escudo from "/src/assets/ferro.png";
import casacaImage2 from "/src/assets/boca.png";
import logo2 from "/src/assets/adidas.png";
import escudo2 from "/src/assets/bocaEscudo.png";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Avatar} from "@nextui-org/react";

function Home() {
    const colors = [
        { name: 'Gris', colorCode: '#7E7E7E' },
        { name: 'Rojo', colorCode: '#E74C3C' },
        { name: 'Amarillo', colorCode: '#F1C40F' },
        { name: 'Verde', colorCode: '#27AE60' }
    ];

    const sizes = ['S', 'M', 'L', 'XS'];

    // Estado para manejar el hover de cada bloque
    const [hoveredColor1, setHoveredColor1] = useState(null);
    const [hoveredSize1, setHoveredSize1] = useState(null);
    const [hoveredColor2, setHoveredColor2] = useState(null);
    const [hoveredSize2, setHoveredSize2] = useState(null);


    return (
        <Fragment>
            {/* Contenedor Padre que alinea los dos bloques */}
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                {/* Primer bloque */}
                <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxWidth: '900px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>

                        {/* Columna Izquierda */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#27AE60', color: '#fff', padding: '2rem' }}>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Casaca Fútbol</h1>
                            <p className='' style={{ fontSize: '1.2rem', marginBottom: '1.2rem' }}>
                                Una casaca ideal para entrenar, con una tela perfecta para poca transpiración, cómoda para su largo uso en entrenamientos.
                            </p>
                            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                                Disponible en diferentes talles y colores para cualquier gusto.
                            </p>
                            <Divider className='mb-5'/>
                            <div className='flex justify-evenly items-center'>
                                <Button color='default' style={{ padding: '0.75rem 1.5rem', fontSize: '1.2rem' }}>COMPRAR YA</Button>
                                <p className='font-bold text-2xl shadow-2xl'>$13.499,99</p>
                            </div>
                            <Divider className='mt-5'/>
                            <Card className="max-w-[400px] mt-10">
                                <CardHeader className="flex gap-3">
                                <Avatar isBordered color='secondary' radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                                    <div className="flex flex-col">
                                    <p className="text-md">Marta Gonzales Figueredo</p>
                                    <p className="text-small text-default-500">MartitaTraining02</p>
                                    </div>
                                </CardHeader>
                                <Divider/>
                                <CardBody>
                                    <p>Increible la calidad de la remera, se la compre a mi pareja y dice que le encanta. Mejor imposible!!</p>
                                </CardBody>
                                <Divider/>
                                <CardFooter className="flex justify-center">
                                    <div className="flex justify-center">
                                        <Rating value={5} readOnly cancel={false} />
                                    </div>
                                </CardFooter>
                                </Card>
                        </div>

                        {/* Columna Derecha */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#f2f2f2', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image 
                                src={escudo} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center', paddingRight: '3rem' }} 
                                />
                                <Image 
                                src={logo} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center' }} 
                                />
                            </div>
                            <Image 
                            src={casacaImage}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            <Divider />

                            {/* Colores Disponibles */}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Colores disponibles</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                {colors.map((color) => (
                                    <div 
                                        key={color.name} 
                                        style={{ textAlign: 'center' }}
                                        onMouseEnter={() => setHoveredColor1(color.name)} 
                                        onMouseLeave={() => setHoveredColor1(null)}
                                    >
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: color.colorCode,
                                            border: '1px solid #ccc',
                                            margin: '0 auto',
                                            marginBottom: '0.5rem',
                                            transition: 'transform 0.2s, box-shadow 0.2s',
                                            transform: hoveredColor1 === color.name ? 'scale(1.2)' : 'scale(1)',
                                            boxShadow: hoveredColor1 === color.name ? '0 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
                                            cursor: 'pointer',
                                        }}></div>
                                        <span>{color.name}</span>
                                    </div>
                                ))}
                            </div>

                            <Divider />

                            {/* Talles Disponibles */}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Talles disponibles</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                                {sizes.map((size) => (
                                    <span 
                                        key={size} 
                                        style={{ 
                                            fontSize: '1.5rem', 
                                            fontWeight: 'bold', 
                                            transition: 'transform 0.2s, box-shadow 0.2s',
                                            transform: hoveredSize1 === size ? 'scale(1.2)' : 'scale(1)',
                                            cursor: 'pointer',
                                        }} 
                                        onMouseEnter={() => setHoveredSize1(size)} 
                                        onMouseLeave={() => setHoveredSize1(null)}
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Segundo bloque */}
                <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', maxWidth: '900px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>

                        {/* Columna Izquierda */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#3b83bd', color: '#fff', padding: '2rem' }}>
                            <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Casaca Fútbol</h1>
                            <p style={{ fontSize: '1.2rem', marginBottom: '1.2rem' }}>
                                Una casaca ideal para entrenar, con una tela perfecta para poca transpiración, cómoda para su largo uso en entrenamientos.
                            </p>
                            <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                                Disponible en diferentes talles y colores para cualquier gusto.
                            </p>
                            <Divider className='mb-5'/>
                            <div className='flex justify-evenly items-center'>
                                <Button color='default' style={{ padding: '0.75rem 1.5rem', fontSize: '1.2rem' }}>COMPRAR YA</Button>
                                <p className='font-bold text-2xl shadow-2xl'>$13.499,99</p>
                            </div>
                            <Divider className='mt-5'/>
                            <Card className="max-w-[400px] mt-10">
                                <CardHeader className="flex gap-3">
                                <Avatar isBordered color='secondary' radius="full" size="md" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                    <div className="flex flex-col">
                                    <p className="text-md">Martin Hector Bratik</p>
                                    <p className="text-small text-default-500">MartincitoYTS420</p>
                                    </div>
                                </CardHeader>
                                <Divider/>
                                <CardBody>
                                    <p>Me encanta, llevo 1 mes buscando una remera de boca de buena calidad, y esta era exactamente lo que buscaba. Aguante Boca!!</p>
                                </CardBody>
                                <Divider/>
                                <CardFooter className="flex justify-center">
                                    <div className="flex justify-center">
                                        <Rating value={5} readOnly cancel={false} />
                                    </div>
                                </CardFooter>
                                </Card>
                        </div>

                        {/* Columna Derecha */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#f2f2f2', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image 
                                src={escudo2} 
                                alt="Sportia Indumentaria"
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center', paddingRight: '1rem' }}
                                />
                                <Image 
                                src={logo2} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center' }} 
                                />
                            </div>
                            <Image
                            src={casacaImage2}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            <Divider />

                            {/* Colores Disponibles */}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Colores disponibles</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
                                {colors.map((color) => (
                                    <div 
                                        key={color.name} 
                                        style={{ textAlign: 'center' }}
                                        onMouseEnter={() => setHoveredColor2(color.name)} 
                                        onMouseLeave={() => setHoveredColor2(null)}
                                    >
                                        <div style={{
                                            width: '40px',
                                            height: '40px',
                                            borderRadius: '50%',
                                            backgroundColor: color.colorCode,
                                            border: '1px solid #ccc',
                                            margin: '0 auto',
                                            marginBottom: '0.5rem',
                                            transition: 'transform 0.2s, box-shadow 0.2s',
                                            transform: hoveredColor2 === color.name ? 'scale(1.2)' : 'scale(1)',
                                            boxShadow: hoveredColor2 === color.name ? '0 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
                                            cursor: 'pointer',
                                        }}></div>
                                        <span>{color.name}</span>
                                    </div>
                                ))}
                            </div>

                            <Divider />

                            {/* Talles Disponibles */}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Talles disponibles</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                                {sizes.map((size) => (
                                    <span 
                                        key={size} 
                                        style={{ 
                                            fontSize: '1.5rem', 
                                            fontWeight: 'bold', 
                                            transition: 'transform 0.2s, box-shadow 0.2s',
                                            transform: hoveredSize2 === size ? 'scale(1.2)' : 'scale(1)',
                                            cursor: 'pointer',
                                        }} 
                                        onMouseEnter={() => setHoveredSize2(size)} 
                                        onMouseLeave={() => setHoveredSize2(null)}
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
