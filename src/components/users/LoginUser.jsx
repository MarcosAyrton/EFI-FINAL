// LoginUser.jsx
import { Fragment, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Checkbox,
  Divider,
} from "@nextui-org/react";
import { Eye, EyeOff } from "react-feather";

const LoginUser = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);

  const onLoginUser = async (values) => {
    const bodyUserLogin = btoa(`${values.username}:${values.password}`);
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        Authorization: `Basic ${bodyUserLogin}`,
      },
    });

    if (!response.ok) {
      console.log("Hubo un error en la llamada a la API.");
      return;
    }

    const data = await response.json();
    const token = data.Token;

    const payload = JSON.parse(atob(token.split(".")[1]));
    const isAdmin = payload.admin;

    localStorage.setItem("token", token);
    localStorage.setItem("role", isAdmin ? "admin" : "user");

    onClose();
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("El usuario es obligatorio")
      .max(12, "El usuario es demasiado largo"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .max(12, "La contraseña es demasiado larga"),
  });

  return (
    <Fragment>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1 items-center mb-3">
            Iniciar Sesión
          </ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{ username: "", password: "", rememberMe: false }}
              validationSchema={validationSchema}
              onSubmit={onLoginUser}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isValid,
              }) => (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <p className="font-medium text-center">
                    Bienvenido a Sportia Indumentaria, <br /> inicie sesion para poder comprar.
                  </p>
                  <Divider />
                  <Input
                    className="mt-3 mb-1"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    placeholder="Usuario"
                  />
                  {errors.username && touched.username && (
                    <p className="text-red-500 text-sm">{errors.username}</p>
                  )}
                  <div className="relative mt-3 mb-1">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      placeholder="Contraseña"
                      className="w-full"
                    />
                    <span
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <EyeOff /> : <Eye />}
                    </span>
                  </div>
                  {errors.password && touched.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                  )}
                  <Checkbox
                    name="rememberMe"
                    checked={values.rememberMe}
                    onChange={handleChange}
                    className="mb-4"
                  >
                    Recuérdame
                  </Checkbox>
                  <Button
                    color="success"
                    type="submit"
                    disabled={
                      !isValid || values.username === "" || values.password === ""
                    }
                  >
                    Iniciar Sesión
                  </Button>
                  <p className="text-center mt-3 text-sm">
                    ¿No tienes una cuenta aún?{" "}
                    <a href="/register" className="text-blue-600 hover:underline">
                      Regístrate
                    </a>
                  </p>
                </form>
              )}
            </Formik>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default LoginUser;
