// src/components/ProcederAlPago.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Divider } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ProcederAlPago = () => {
    const navigate = useNavigate();

    // Cargar carrito del localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const total = carrito.reduce((sum, producto) => sum + producto.precio, 0);

    const initialValues = {
        nombre: "",
        apellido: "",
        email: "",
        documento: "",
        tarjetaNumero: "",
        tarjetaMes: "",
        tarjetaAnio: "",
        tarjetaCVC: "",
    };

    const validationSchema = Yup.object({
        nombre: Yup.string().required("Nombre requerido"),
        apellido: Yup.string().required("Apellido requerido"),
        email: Yup.string().email("Email inválido").required("Email requerido"),
        documento: Yup.string().required("Documento requerido"),
        tarjetaNumero: Yup.string().matches(/^\d{16}$/, "Número de tarjeta inválido").required("Número de tarjeta requerido"),
        tarjetaMes: Yup.string().matches(/^(0[1-9]|1[0-2])$/, "Mes inválido, formato MM").required("Mes de vencimiento requerido"),
        tarjetaAnio: Yup.string().matches(/^\d{2}$/, "Año inválido, formato AA").required("Año de vencimiento requerido"),
        tarjetaCVC: Yup.string().matches(/^\d{3}$/, "CVC inválido").required("CVC requerido"),
    });

    const onSubmit = (values) => {
        alert("Pago procesado exitosamente!");
        localStorage.removeItem("carrito"); // Vaciar carrito
        navigate("/");
    };

    return (
        <div style={{ padding: '2rem' }}>
            <h2 className="text-2xl font-bold mb-5">Proceder al Pago</h2>
            
            <div>
                {carrito.map((producto, index) => (
                    <div key={index} style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
                        <h3 className="text-lg font-medium">{producto.nombre}</h3>
                        <span>${producto.precio.toFixed(2)}</span>
                    </div>
                ))}
                <Divider className="my-4" />
                <div style={{ fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'right' }}>
                    Total: ${total.toFixed(2)}
                </div>
            </div>

            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form className="space-y-4 mt-4">
                    <div>
                        <label>Nombre:</label>
                        <Field name="nombre" className="w-full p-2 border border-gray-300 rounded" />
                        <ErrorMessage name="nombre" component="div" className="text-red-500" />
                    </div>

                    <div>
                        <label>Apellido:</label>
                        <Field name="apellido" className="w-full p-2 border border-gray-300 rounded" />
                        <ErrorMessage name="apellido" component="div" className="text-red-500" />
                    </div>

                    <div>
                        <label>Email:</label>
                        <Field name="email" type="email" className="w-full p-2 border border-gray-300 rounded" />
                        <ErrorMessage name="email" component="div" className="text-red-500" />
                    </div>

                    <div>
                        <label>Documento:</label>
                        <Field name="documento" className="w-full p-2 border border-gray-300 rounded" />
                        <ErrorMessage name="documento" component="div" className="text-red-500" />
                    </div>

                    <Divider className="my-4" />

                    <div>
                        <label>Número de Tarjeta:</label>
                        <Field name="tarjetaNumero" className="w-full p-2 border border-gray-300 rounded" />
                        <ErrorMessage name="tarjetaNumero" component="div" className="text-red-500" />
                    </div>

                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label>Mes de Vencimiento (MM):</label>
                            <Field name="tarjetaMes" className="w-full p-2 border border-gray-300 rounded" placeholder="MM" />
                            <ErrorMessage name="tarjetaMes" component="div" className="text-red-500" />
                        </div>

                        <div className="flex-1">
                            <label>Año de Vencimiento (AA):</label>
                            <Field name="tarjetaAnio" className="w-full p-2 border border-gray-300 rounded" placeholder="AA" />
                            <ErrorMessage name="tarjetaAnio" component="div" className="text-red-500" />
                        </div>
                    </div>

                    <div>
                        <label>CVC:</label>
                        <Field name="tarjetaCVC" className="w-full p-2 border border-gray-300 rounded" />
                        <ErrorMessage name="tarjetaCVC" component="div" className="text-red-500" />
                    </div>

                    <Button type="submit" color="success" auto className="w-full mt-4">
                        Finalizar Compra
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default ProcederAlPago;
