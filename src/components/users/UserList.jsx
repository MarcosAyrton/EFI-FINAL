import React, { useEffect, useState, useCallback } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Tooltip, Chip, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@nextui-org/react";
import { useDisclosure } from "@nextui-org/react";
import { Eye, EyeOff } from "react-feather"; // Importamos los iconos de ojo

const statusColorMap = {
  true: "success",
  false: "default",
};

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState({ id: '', username: '', password: '' });
  const [tempPassword, setTempPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar u ocultar la contraseña
  const token = localStorage.getItem("token");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isOpenDetails, onOpen: onOpenDetails, onClose: onCloseDetails } = useDisclosure();

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

      if (!response.ok) {
        const errorDetails = await response.text();
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

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/users/eliminar/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el usuario");
      }
      fetchUsers(); // Recargar la lista de usuarios después de eliminar
    } catch (error) {
      setError(error.message);
    }
  };

  const showUserDetails = (user) => {
    setCurrentUser(user);
    setTempPassword(user.password);
    onOpenDetails();
  };

  const updateUser = async (id, updatedData) => {
    try {
      setTempPassword(updatedData.password);

      const response = await fetch(`http://127.0.0.1:5000/users/actualizar/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) {
        throw new Error("Error al actualizar el usuario");
      }
      fetchUsers();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    updateUser(currentUser.id, { username: currentUser.username, password: tempPassword });
  };

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
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <Tooltip content="Ver Detalles">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50 m-2" onClick={() => showUserDetails(user)}>
                <span className="pi pi-eye"></span>
              </span>
            </Tooltip>
            <Tooltip content="Editar Usuario">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50 m-2" onClick={() => {
                setCurrentUser({ id: user.id, username: user.username });
                setTempPassword('');
                onOpen();
              }}>
                <span className="pi pi-pen-to-square"></span>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Eliminar Usuario">
              <span className="text-lg text-danger cursor-pointer active:opacity-50 m-2" onClick={() => deleteUser(user.id)}>
                <span className="pi pi-eraser"></span>
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>Cargando usuarios...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div style={{ padding: "20px", display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <h1 className="text-2xl font-bold mb-5">Lista de Usuarios</h1>
      <Table style={{ width: '900px' }}>
        <TableHeader>
          <TableColumn className="bg-green-400 text-black">Username</TableColumn>
          <TableColumn className="bg-green-400 text-black">Es Admin</TableColumn>
          <TableColumn align="center" className="bg-green-400 text-black">Acciones</TableColumn>
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

      {/* Modal para ver detalles del usuario */}
      <Modal isOpen={isOpenDetails} onClose={onCloseDetails}>
        <ModalContent>
          <ModalHeader>Detalles del Usuario</ModalHeader>
          <ModalBody>
            <p><strong>Usuario:</strong> {currentUser.username}</p>
            <p><strong>Contraseña:</strong> {tempPassword}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onCloseDetails}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Modal para editar usuario */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="text-center text-xl font-semibold text-gray-700">Editar Usuario</ModalHeader>
          <ModalBody className="flex flex-col gap-4">
            <form onSubmit={handleUpdateSubmit} className="space-y-4">
              <Input 
                label="Nuevo Usuario" 
                value={currentUser.username} 
                onChange={(e) => setCurrentUser({ ...currentUser, username: e.target.value })} 
                className="p-2 border rounded-lg w-full"
                required
              />
              <div className="relative">
                <Input 
                  label="Nueva Contraseña" 
                  type={showPassword ? "text" : "password"} 
                  value={tempPassword} 
                  onChange={(e) => setTempPassword(e.target.value)}
                  className="p-2 border rounded-lg w-full"
                  required
                />
                <span
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </span>
              </div>
              <Button 
                type="submit" 
                color="success" 
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg w-full"
              >
                Actualizar
              </Button>
            </form>
          </ModalBody>
          <ModalFooter className="flex justify-end">
            <Button 
              color="danger" 
              variant="light" 
              onPress={onClose} 
              className="text-red-500 border border-red-500 hover:bg-red-100 font-semibold py-1 px-4 rounded-lg"
            >
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UserList;
