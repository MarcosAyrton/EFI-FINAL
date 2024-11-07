import React, { Fragment, useState } from 'react';
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
import casacaImage3 from "/src/assets/racing.png"
import escudo3 from "/src/assets/racingEscudo.png";
import logo3 from "/src/assets/kappa.png";
import casacaImage4 from "/src/assets/velez.png"
import escudo4 from "/src/assets/velezEscudo.png";
import logo4 from "/src/assets/diadora.png";
import casacaImage5 from "/src/assets/river.png"
import escudo5 from "/src/assets/riverEscudo.png";
import logo6 from "/src/assets/hummel.png";
import casacaImage6 from "/src/assets/chacarita.png"
import escudo6 from "/src/assets/chacaritaEscudo.png";


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
                            src={casacaImage}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Casaca Club Ferro Carril Oeste</h3>
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
                                onPress={() => agregarAlCarrito({ id: 1, nombre: 'Casaca Club Ferro Carril Oeste', precio: 13499.99 })}
                            >
                                Agregar al Carrito
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Segundo bloque */}
                <div style={{ minHeight: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>

                        {/* Columna Derecha */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#f2f2f2', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '600px' }}>
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

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Casaca Club Atlético Boca Juniors</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                              
                            </div>

                            <Divider className='mb-5'/>

                            {/* Precio y Ver Producto */}
                            <h3 className='text-2xl font-medium'>Precio</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexDirection: 'row' }}>
                                <span className='text-2xl'>
                                  $15.899,99
                                </span>
                            </div>
                            <Divider />
                            <Button 
                                color='success'
                                type='submit'
                                className='mt-5 text-lg w-80'
                                onPress={() => agregarAlCarrito({ id: 2, nombre: 'Casaca Club Atlético Boca Juniors', precio: 15899.99 })}
                            >
                                Agregar al Carrito
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Tercer bloque */}
                <div style={{ minHeight: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>

                        {/* Columna Derecha */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#f2f2f2', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '600px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image 
                                src={escudo3} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '5rem', marginBottom: '2rem', alignSelf: 'center', paddingRight: '3rem' }} 
                                />
                                <Image 
                                src={logo3} 
                                alt="Sportia Indumentaria" 
                                style={{ height: '4rem', marginBottom: '2rem', alignSelf: 'center' }} 
                                />
                            </div>
                            <Image 
                            src={casacaImage3}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />

                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Casaca Racing Club</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                              
                            </div>

                            <Divider className='mb-5'/>

                            {/* Precio y Ver Producto */}
                            <h3 className='text-2xl font-medium'>Precio</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexDirection: 'row' }}>
                                <span className='text-2xl'>
                                  $12.499,99
                                </span>
                            </div>
                            <Divider />
                            <Button 
                                color='success'
                                type='submit'
                                className='mt-5 text-lg w-80'
                                onPress={() => agregarAlCarrito({ id: 3, nombre: 'Casaca Racing Club', precio: 12499.99 })}
                            >
                                Agregar al Carrito
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Cuarto bloque */}
                <div style={{ minHeight: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>

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
                                style={{ height: '4rem', marginBottom: '2rem', alignSelf: 'center' }} 
                                />
                            </div>
                            <Image 
                            src={casacaImage4}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            
                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Casaca Club Atlético Vélez Sarsfield</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                              
                            </div>

                            <Divider className='mb-5'/>

                            {/* Precio y Ver Producto */}
                            <h3 className='text-2xl font-medium'>Precio</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexDirection: 'row' }}>
                                <span className='text-2xl'>
                                  $17.299,99
                                </span>
                            </div>
                            <Divider />
                            <Button 
                                color='success'
                                type='submit'
                                className='mt-5 text-lg w-80'
                                onPress={() => agregarAlCarrito({ id: 4, nombre: 'Casaca Club Atlético Vélez Sarsfield', precio: 17299.99 })}
                            >
                                Agregar al Carrito
                            </Button>

                        </div>
                    </div>
                </div>

                {/* Quinto bloque */}
                <div style={{ minHeight: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>

                        {/* Columna Derecha */}
                        <div style={{ flex: '1 1 50%', backgroundColor: '#f2f2f2', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '600px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image 
                                src={escudo5} 
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
                            src={casacaImage5}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Casaca Club Atlético River Plate</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                              
                            </div>

                            <Divider className='mb-5'/>

                            {/* Precio y Ver Producto */}
                            <h3 className='text-2xl font-medium'>Precio</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexDirection: 'row' }}>
                                <span className='text-2xl'>
                                  $14.799,99
                                </span>
                            </div>
                            <Divider />
                            <Button 
                                color='success'
                                type='submit'
                                className='mt-5 text-lg w-80'
                                onPress={() => agregarAlCarrito({ id: 5, nombre: 'Casaca Club Atlético River Plate', precio: 14799.99 })}
                            >
                                Agregar al Carrito
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Sexto bloque */}
                <div style={{ minHeight: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f7f7f7' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden' }}>

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
                            src={casacaImage6}
                            isZoomed
                            alt='casaca'
                            style={{ width: '10rem', margin: '3rem', alignSelf: 'center', filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, .8))' }}
                            />
                            {/* Nombre Producto */}
                            <h3 className='font-bold text-2xl'>Casaca Club Atlético Chacarita Juniors</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                              
                            </div>

                            <Divider className='mb-5'/>

                            {/* Precio y Ver Producto */}
                            <h3 className='text-2xl font-medium'>Precio</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexDirection: 'row' }}>
                                <span className='text-2xl'>
                                  $24.799,99
                                </span>
                            </div>
                            <Divider />
                            <Button 
                                color='success'
                                type='submit'
                                className='mt-5 text-lg w-80'
                                onPress={() => agregarAlCarrito({ id: 6, nombre: 'Casaca Club Atlético Chacarita Juniors', precio: 24799.99 })}
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
