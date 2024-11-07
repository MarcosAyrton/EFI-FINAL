// src/components/Cart.jsx
import React, { useState, useEffect } from 'react';
import { Button, Divider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function Cart() {
    const [carrito, setCarrito] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem("carrito")) || [];
        setCarrito(carritoGuardado);
    }, []);

    const eliminarDelCarrito = (index) => {
        const nuevoCarrito = [...carrito];
        nuevoCarrito.splice(index, 1);
        setCarrito(nuevoCarrito);
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    };

    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + producto.precio, 0);
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2 className="text-2xl font-bold mb-5">Carrito de Compras</h2>
            {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <div>
                    {carrito.map((producto, index) => (
                        <div key={index} style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 className="text-xl font-medium">{producto.nombre}</h3>
                                <span className="text-lg">${producto.precio.toFixed(2)}</span>
                            </div>
                            <Button 
                                color="danger"
                                auto
                                onPress={() => eliminarDelCarrito(index)}
                                className="ml-4"
                            >
                                Eliminar
                            </Button>
                        </div>
                    ))}
                    <Divider className="my-4" />
                    
                    <div style={{ fontWeight: 'bold', fontSize: '1.2rem', margin: '1rem 0', textAlign: 'right' }}>
                        Total: ${calcularTotal().toFixed(2)}
                    </div>
                    
                    <Button 
                        color="success" 
                        auto
                        onPress={() => navigate('/checkout')}
                        className="w-full"
                    >
                        Proceder al Pago
                    </Button>
                </div>
            )}
        </div>
    );
}

export default Cart;



