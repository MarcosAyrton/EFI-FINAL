import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Input, Divider, Card, CardBody, Image, Checkbox } from "@nextui-org/react";
import SportiaLogoIcono from "/src/assets/SportiaLogoIcono.png";
import UserList from "./UserList";
import { Fragment } from "react";

const CreateUser = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("El usuario es obligatorio")
      .max(12, "Máximo 12 caracteres"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .max(12, "Máximo 12 caracteres"),
    isAdmin: Yup.boolean(),  // Agregamos validación para el checkbox
  });

  const token = localStorage.getItem("token");

  const registerUser = async (values) => {
    const bodyRegisterUser = {
      username: values.username,
      password: values.password,
      isAdmin: values.isAdmin || false,  // Asegúrate de enviar false si no está marcado
    };

    console.log("Cuerpo de la solicitud:", bodyRegisterUser);

    const response = await fetch("http://127.0.0.1:5000/users", {
      method: "POST",
      body: JSON.stringify(bodyRegisterUser),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    console.log("Respuesta del servidor:", data);

    if (response.ok) {
      alert('El usuario ha sido creado correctamente');
    } else {
      alert(`Error: ${data.Error}`);  // Mostrar el error si hay
    }
  };

  return (
    <Fragment>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card className="m-10">
        <div className="flex justify-center items-center">
          <Image src={SportiaLogoIcono} style={{ height: "5rem", marginTop: "2rem", display: "block" }} />
        </div>
        <CardBody>
          <Formik
            initialValues={{ password: "", username: "", isAdmin: false }}  // Agregar isAdmin aquí
            validationSchema={validationSchema}
          >
            {({ values, errors, touched, handleChange, handleBlur, isValid }) => (
              <div className="flex-column justify-items-center">
                <h1 className="mt-10 text-xl font-bold">Formulario para Creación de Usuarios</h1>
                <form>
                  <p className="mt-10 font-medium">Ingrese el usuario deseado</p>
                  <Divider />
                  <Input
                    className="mt-2"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.username}
                    placeholder="username"
                  />
                  <p className="error text-red-600 font-bold mt-2">
                    {errors.username && touched.username && errors.username}
                  </p>
                  <Divider />
                  <p className="mt-10 font-medium">Ingrese la contraseña deseada</p>
                  <Divider />
                  <Input
                    className="mt-2"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="password"
                  />
                  <p className="error text-red-600 font-bold mt-2">
                    {errors.password && touched.password && errors.password}
                  </p>
                  <Divider />
                  <Checkbox 
                    color="success"
                    name="isAdmin"  // Nombre del checkbox
                    checked={values.isAdmin}  // Controlar el estado del checkbox
                    onChange={handleChange}  // Actualizar el estado al cambiar
                  >
                    ¿Es admin?
                  </Checkbox>
                  <Button
                    className="m-10"
                    color="success"
                    onClick={() => registerUser(values)}
                    type="button"
                    disabled={values.password === "" || values.username === "" || !isValid}
                  >
                    Crear Usuario
                  </Button>
                </form>
              </div>
            )}
          </Formik>
        </CardBody>
      </Card>
      <UserList />
    </div>
    </Fragment>
  );
};

export default CreateUser;
