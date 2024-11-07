import React, { Fragment, useState } from 'react';
import { Button } from "@nextui-org/react";
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import termicaImage from "/src/assets/termica.png";
import logo from "/src/assets/flash.png";
import termicaImage2 from "/src/assets/termica2.png";
import logo2 from "/src/assets/adidas.png";
import termicaImage3 from "/src/assets/termica3.png";
import logo3 from "/src/assets/diadora.png";





import { Divider, Image, } from "@nextui-org/react";

function GorrosGorritos() {

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
                                src={logo} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center' }} 
                                />
                            </div>
                            <Image 
                            src={termicaImage}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Remera Termica Flash Masculina</h3>
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
                                onPress={() => agregarAlCarrito({ id: 1, nombre: 'Remera Termica Flash Masculina', precio: 13499.99 })}
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
                                src={logo2} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center' }} 
                                />
                            </div>
                            <Image 
                            src={termicaImage2}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Remera Termica Adidas Corta unisex</h3>
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
                                onPress={() => agregarAlCarrito({ id: 2, nombre: 'Remera Termica Adidas Corta unisex', precio: 13499.99 })}
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
                                src={logo3} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center' }} 
                                />
                            </div>
                            <Image 
                            src={termicaImage3}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Remera Termica Diadora Femenina</h3>
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
                                onPress={() => agregarAlCarrito({ id: 3, nombre: 'Remera Termica Diadora Femenina', precio: 13499.99 })}
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

export default GorrosGorritos;
