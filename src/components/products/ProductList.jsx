import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Tooltip } from "@nextui-org/react";
import { Edit2, Trash2 } from "react-feather";

const ProductList = ({ products, loading, error, onEdit, onDelete }) => {
  if (loading) return <div className="text-center p-4">Cargando productos...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="mt-8 w-full flex justify-center">
      <Table aria-label="Lista de productos" css={{ width: "80%" }}>
        <TableHeader>
          <TableColumn className="bg-green-400 text-black">Nombre</TableColumn>
          <TableColumn className="bg-green-400 text-black">Precio</TableColumn>
          <TableColumn className="bg-green-400 text-black">Marca</TableColumn>
          <TableColumn className="bg-green-400 text-black">Color</TableColumn>
          <TableColumn className="bg-green-400 text-black">Temporada</TableColumn>
          <TableColumn className="bg-green-400 text-black">Acciones</TableColumn>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.nombre}</TableCell>
              <TableCell>{product.precio}</TableCell>
              <TableCell>{product.marca}</TableCell>
              <TableCell>{product.color}</TableCell>
              <TableCell>{product.temporada}</TableCell>
              <TableCell>
                <div className="flex justify-center space-x-2">
                  <Tooltip content="Editar Producto">
                    <Button auto flat color="primary" onClick={() => onEdit(product)}>
                      <Edit2 size={16} />
                    </Button>
                  </Tooltip>
                  <Tooltip color="danger" content="Eliminar Producto">
                    <Button auto flat color="danger" onClick={() => onDelete(product.id)}>
                      <Trash2 size={16} />
                    </Button>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductList;
