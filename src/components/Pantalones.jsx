import React, { Fragment, useState } from 'react';
import { Button } from "@nextui-org/react";
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import pantalonImage from "/src/assets/pantalon2.png";
import logo from "/src/assets/leafVillage.png";
import escudo from "/src/assets/narutoLogo.png";
import pantalonImage2 from "/src/assets/pantalon3.png";
import logo2 from "/src/assets/adidas.png";
import escudo2 from "/src/assets/riverEscudo.png";
import pantalonImage3 from "/src/assets/pantalon.png";
import escudo3 from "/src/assets/bocaEscudo.png";
import pantalonImage4 from "/src/assets/pantalon4.png";
import logo4 from "/src/assets/diadora.png";
import logo5 from "/src/assets/kappa.png";
import escudo4 from "/src/assets/velezEscudo.png";
import pantalonImage5 from "/src/assets/pantalon5.png";
import escudo5 from "/src/assets/racingEscudo.png";
import escudo6 from "/src/assets/nike.png";
import pantalonImage6 from "/src/assets/pantalon6.png";
import logo6 from "/src/assets/jojoLogo.png";


import { Divider, Image, } from "@nextui-org/react";

function Pantalones() {

    const agregarAlCarrito = (producto) => {
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
        carrito.push(producto);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        alert(`${producto.nombre} agregado al carrito`);
    };

    return (
        <Fragment>
            {/* Contenedor Padre que alinea los dos bloques */}
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#f7f7f7', flexWrap: 'wrap' }}>
                {/* Primer bloque */}
                <div style={{ minHeight: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  }}>

                        {/* Columna Derecha */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#f2f2f2', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '600px' }}>
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
                            src={pantalonImage}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Pantalon de Naruto</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                              
                            </div>

                            <Divider className='mb-5'/>

                            {/* Precio y Ver Producto */}
                            <h3 className='text-2xl font-medium'>Precio</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexDirection: 'row' }}>
                                <span className='text-2xl'>
                                  $13.499,99
                                </span>
                            </div>
                            <Divider />
                            <Button 
                                color='success'
                                type='submit'
                                className='mt-5 text-lg w-80'
                                onPress={() => agregarAlCarrito({ id: 1, nombre: 'Pantalon de Naruto', precio: 13499.99 })}
                            >
                                Agregar al Carrito
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Segundo bloque */}
                <div style={{ minHeight: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  }}>

                        {/* Columna Derecha */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#f2f2f2', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '600px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image 
                                src={escudo2} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center', paddingRight: '3rem' }} 
                                />
                                <Image 
                                src={logo2} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center' }} 
                                />
                            </div>
                            <Image 
                            src={pantalonImage2}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Pantalon de River</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                              
                            </div>

                            <Divider className='mb-5'/>

                            {/* Precio y Ver Producto */}
                            <h3 className='text-2xl font-medium'>Precio</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexDirection: 'row' }}>
                                <span className='text-2xl'>
                                  $13.499,99
                                </span>
                            </div>
                            <Divider />
                            <Button 
                                color='success'
                                type='submit'
                                className='mt-5 text-lg w-80'
                                onPress={() => agregarAlCarrito({ id: 2, nombre: 'Pantalon de River', precio: 13499.99 })}
                            >
                                Agregar al Carrito
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Tercer bloque */}
                <div style={{ minHeight: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  }}>

                        {/* Columna Derecha */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#f2f2f2', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '600px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image 
                                src={escudo3} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center', paddingRight: '3rem' }} 
                                />
                                <Image 
                                src={logo2} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center' }} 
                                />
                            </div>
                            <Image 
                            src={pantalonImage3}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Pantalon de Boca</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                              
                            </div>

                            <Divider className='mb-5'/>

                            {/* Precio y Ver Producto */}
                            <h3 className='text-2xl font-medium'>Precio</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexDirection: 'row' }}>
                                <span className='text-2xl'>
                                  $13.499,99
                                </span>
                            </div>
                            <Divider />
                            <Button 
                                color='success'
                                type='submit'
                                className='mt-5 text-lg w-80'
                                onPress={() => agregarAlCarrito({ id: 3, nombre: 'Pantalon de Boca', precio: 13499.99 })}
                            >
                                Agregar al Carrito
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Cuarto bloque */}
                <div style={{ minHeight: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  }}>

                        {/* Columna Derecha */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#f2f2f2', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '600px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image 
                                src={escudo4} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center', paddingRight: '3rem' }} 
                                />
                                <Image 
                                src={logo4} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center' }} 
                                />
                            </div>
                            <Image 
                            src={pantalonImage4}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Pantalon de Velez</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                              
                            </div>

                            <Divider className='mb-5'/>

                            {/* Precio y Ver Producto */}
                            <h3 className='text-2xl font-medium'>Precio</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexDirection: 'row' }}>
                                <span className='text-2xl'>
                                  $13.499,99
                                </span>
                            </div>
                            <Divider />
                            <Button 
                                color='success'
                                type='submit'
                                className='mt-5 text-lg w-80'
                                onPress={() => agregarAlCarrito({ id: 4, nombre: 'Pantalon de Velez', precio: 13499.99 })}
                            >
                                Agregar al Carrito
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Quinto bloque */}
                <div style={{ minHeight: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  }}>

                        {/* Columna Derecha */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#f2f2f2', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '600px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image 
                                src={escudo5} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center', paddingRight: '3rem' }} 
                                />
                                <Image 
                                src={logo5} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center' }} 
                                />
                            </div>
                            <Image 
                            src={pantalonImage5}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Pantalon de Racing</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                              
                            </div>

                            <Divider className='mb-5'/>

                            {/* Precio y Ver Producto */}
                            <h3 className='text-2xl font-medium'>Precio</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexDirection: 'row' }}>
                                <span className='text-2xl'>
                                  $13.499,99
                                </span>
                            </div>
                            <Divider />
                            <Button 
                                color='success'
                                type='submit'
                                className='mt-5 text-lg w-80'
                                onPress={() => agregarAlCarrito({ id: 5, nombre: 'Pantalon de Racing', precio: 13499.99 })}
                            >
                                Agregar al Carrito
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Sexto bloque */}
                <div style={{ minHeight: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  }}>

                        {/* Columna Derecha */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#f2f2f2', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '600px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image 
                                src={escudo6} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center', paddingRight: '3rem' }} 
                                />
                                <Image 
                                src={logo6} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center' }} 
                                />
                            </div>
                            <Image 
                            src={pantalonImage6}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Pantalon de JoJo's Bizarre Adventure</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                              
                            </div>

                            <Divider className='mb-5'/>

                            {/* Precio y Ver Producto */}
                            <h3 className='text-2xl font-medium'>Precio</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexDirection: 'row' }}>
                                <span className='text-2xl'>
                                  $13.499,99
                                </span>
                            </div>
                            <Divider />
                            <Button 
                                color='success'
                                type='submit'
                                className='mt-5 text-lg w-80'
                                onPress={() => agregarAlCarrito({ id: 6, nombre: 'Pantalon de JoJoS Bizarre Adventure', precio: 13499.99 })}
                            >
                                Agregar al Carrito
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    );
}

export default Pantalones;
