// CreateUser.jsx
import { Fragment, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Input, Divider, Card, CardBody, Image } from "@nextui-org/react";
import { Eye, EyeOff } from "react-feather";
import SportiaLogoIcono from "/src/assets/SportiaLogoIcono.png";

const Registrarse = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("El usuario es obligatorio")
      .max(12, "Máximo 12 caracteres"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .max(12, "Máximo 12 caracteres"),
    email: Yup.string()
      .required("El email es obligatorio")
      .email("Escriba bien el email, por favor"),
  });

  const token = localStorage.getItem("token");

  const registerUser = async (values) => {
    const bodyRegisterUser = {
      username: values.username,
      password: values.password,
      email: values.email,
    };

    try {
      const response = await fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        body: JSON.stringify(bodyRegisterUser),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,  
        },
      });

      const data = await response.json();

      if (response.ok) {
        alert("El usuario ha sido registrado correctamente");
      } else {
        alert(`Error: ${data.Error}`);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Ocurrió un error al intentar registrar el usuario.");
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
              initialValues={{ password: "", username: "", email: "" }}
              validationSchema={validationSchema}
              onSubmit={registerUser}  
            >
              {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit }) => (
                <div className="flex-column justify-items-center">
                  <h1 className="mt-10 text-xl font-bold">Formulario de registro de Sportia Indumentaria</h1>
                  <form onSubmit={handleSubmit}>
                    <p className="mt-10 font-medium">Ingrese su email</p>
                    <Divider />
                    <Input
                      className="mt-2"
                      type="text"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="email"
                    />
                    <p className="error text-red-600 font-bold mt-2">
                      {errors.email && touched.email && errors.email}
                    </p>
                    <Divider />
                    <p className="mt-10 font-medium">Ingrese un nombre de usuario</p>
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
                    <div className="relative mt-2">
                      <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="password"
                        className="w-full"
                      />
                      <span
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <EyeOff /> : <Eye />}
                      </span>
                    </div>
                    <p className="error text-red-600 font-bold mt-2">
                      {errors.password && touched.password && errors.password}
                    </p>
                    <Divider />
                    <Button
                      className="m-10"
                      color="success"
                      type="submit"
                      disabled={values.password === "" || values.username === "" || values.email === "" || !isValid}
                    >
                      Crear Usuario
                    </Button>
                  </form>
                </div>
              )}
            </Formik>
          </CardBody>
        </Card>
      </div>
    </Fragment>
  );
};

export default Registrarse;
