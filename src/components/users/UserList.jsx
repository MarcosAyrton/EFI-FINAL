import React, { useEffect, useState, useCallback } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Tooltip, Chip } from "@nextui-org/react";

const statusColorMap = {
  true: "success",
  false: "default",
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:5000/users", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      console.log("Estado de respuesta:", response.status);  // Verifica el código de estado
      
      if (!response.ok) {
        const errorDetails = await response.text();  // Captura el mensaje de error detallado
        console.error("Detalles del error:", errorDetails);
        throw new Error("Error al obtener los usuarios");
      }
  
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "username":
        return <User name={cellValue} />;
      case "is_admin":
        return (
          <Chip color={statusColorMap[user.is_admin]} size="sm">
            {user.is_admin ? "Sí" : "No"}
          </Chip>
        );
      case "actions":
        return (
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50 m-2">
                <span className="pi pi-eye"></span>
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50 m-2">
                <span className="pi pi-pen-to-square"></span>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50 m-2">
                <span className="pi pi-eraser"></span>
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  if (loading) return <div>Cargando usuarios...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: "20px", display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <h1 className="text-2xl font-bold mb-5">Lista de Usuarios</h1>
      <Table style={{width: '900px'}}>
        <TableHeader>
          <TableColumn className="bg-green-400 text-black">Username</TableColumn>
          <TableColumn className="bg-green-400 text-black">Es Admin</TableColumn>
          <TableColumn align="center" className="bg-green-400 text-black">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              {["username", "is_admin", "actions"].map((columnKey) => (
                <TableCell key={columnKey}>{renderCell(user, columnKey)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default UserList;
