import React, { Fragment, useState } from 'react';
import { Button } from "@nextui-org/react";
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import seleccionImage from "/src/assets/seleccion2.png";
import seleccionImage2 from "/src/assets/seleccion3.png";
import seleccionImage3 from "/src/assets/seleccion4.png";
import seleccionImage4 from "/src/assets/seleccion5.png";
import seleccionImage5 from "/src/assets/seleccion6.png";
import seleccionImage6 from "/src/assets/seleccion7.png";
import logo from "/src/assets/adidas.png";
import escudo from "/src/assets/afa.png";



import { Divider, Image, } from "@nextui-org/react";

function Casacas() {

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
                            src={seleccionImage}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Camiseta Seleccion Argentina 2024</h3>
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
                                onPress={() => agregarAlCarrito({ id: 1, nombre: 'Camiseta Seleccion Argentina 2024', precio: 13499.99 })}
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
                            src={seleccionImage2}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Pantalon Seleccion Argentina 2024</h3>
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
                                onPress={() => agregarAlCarrito({ id: 2, nombre: 'Pantalon Seleccion Argentina 2024', precio: 13499.99 })}
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
                            src={seleccionImage3}
                            isZoomed
                            alt='casaca'
                            style={{ width: '9rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Gorra Seleccion Argentina 2024</h3>
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
                                onPress={() => agregarAlCarrito({ id: 3, nombre: 'Gorra Seleccion Argentina 2024', precio: 13499.99 })}
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
                            src={seleccionImage4}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Buzo Seleccion Argentina 2024</h3>
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
                                onPress={() => agregarAlCarrito({ id: 4, nombre: 'Buzo Seleccion Argentina 2024', precio: 13499.99 })}
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
                            src={seleccionImage5}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Piluso Seleccion Argentina 2024</h3>
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
                                onPress={() => agregarAlCarrito({ id: 5, nombre: 'Piluso Seleccion Argentina 2024', precio: 13499.99 })}
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
                            src={seleccionImage6}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Conjunto Seleccion Argentina 2024</h3>
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
                                onPress={() => agregarAlCarrito({ id: 6, nombre: 'Conjunto Seleccion Argentina 2024', precio: 13499.99 })}
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

export default Casacas;
