import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { Input, Button, Card, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import { Eye, EyeOff } from "react-feather";

const API_URL = "http://127.0.0.1:5000";

const ProductForm = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const [formState, setFormState] = useState({
    nombre: "",
    precio: "",
    color: "",
    temporada: "",
    marca: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();  // Estado para el modal

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/prenda`);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = formState.id
      ? `${API_URL}/prenda/actualizar/${formState.id}`
      : `${API_URL}/prenda`;
    const method = formState.id ? "PUT" : "POST";

    try {
      await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      fetchProducts();
      setFormState({
        nombre: "",
        precio: "",
        color: "",
        temporada: "",
        marca: "",
      });
      setMessage(formState.id ? "Producto actualizado con éxito" : "Producto creado con éxito");
      onClose();
    } catch (err) {
      setError("Error al crear o actualizar el producto");
    } finally {
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleEdit = (product) => {
    setFormState({ ...product });
    onOpen();
  };

  const deleteProduct = async (id) => {
    try {
      await fetch(`${API_URL}/prenda/eliminar/${id}`, {
        method: "DELETE",
      });
      fetchProducts();
      setMessage("Producto eliminado con éxito");
    } catch (err) {
      setError("Error al eliminar el producto");
    } finally {
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 className="text-2xl font-bold mb-5">Formulario de Producto</h1>
      
      {message && <p className="text-green-600 text-center mb-4">{message}</p>}
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}

      <Button color="primary" shadow onPress={onOpen} className="bg-blue-500 hover:bg-blue-600 mb-6">
        {formState.id ? "Actualizar Producto" : "Crear Producto"}
      </Button>

      <ProductList
        products={products}
        loading={loading}
        error={error}
        onEdit={handleEdit}
        onDelete={deleteProduct}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>{formState.id ? "Actualizar Producto" : "Crear Producto"}</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                clearable
                label="Nombre del producto"
                placeholder="Nombre"
                fullWidth
                value={formState.nombre}
                onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                required
              />
              <Input
                clearable
                type="number"
                label="Precio"
                placeholder="Precio"
                fullWidth
                value={formState.precio}
                onChange={(e) => setFormState({ ...formState, precio: e.target.value })}
                required
              />
              <Input
                clearable
                label="Color"
                placeholder="Color"
                fullWidth
                value={formState.color}
                onChange={(e) => setFormState({ ...formState, color: e.target.value })}
              />
              <Input
                clearable
                label="Temporada"
                placeholder="Temporada"
                fullWidth
                value={formState.temporada}
                onChange={(e) => setFormState({ ...formState, temporada: e.target.value })}
              />
              <Input
                clearable
                label="Marca"
                placeholder="Marca"
                fullWidth
                value={formState.marca}
                onChange={(e) => setFormState({ ...formState, marca: e.target.value })}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSubmit} className="bg-green-500 hover:bg-green-600">
              {formState.id ? "Actualizar Producto" : "Crear Producto"}
            </Button>
            <Button variant="light" color="danger" onPress={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProductForm;
