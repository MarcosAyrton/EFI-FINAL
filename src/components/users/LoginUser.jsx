// LoginUser.jsx
import { Fragment } from "react";
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
} from "@nextui-org/react";

const LoginUser = ({ isOpen, onClose }) => {
  const onLoginUser = async (values) => {
    const bodyUserLogin = btoa(`${values.username}:${values.password}`);
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        Authorization: `Basic ${bodyUserLogin}`
      }
    });

    if (!response.ok) {
      console.log('Hubo un error en la llamada a la API.');
      return;
    }

    const data = await response.json();
    const token = data.Token;

    // Decodificar payload de JWT para obtener los claims adicionales
    const payload = JSON.parse(atob(token.split('.')[1]));
    const isAdmin = payload.admin;

    localStorage.setItem('token', token);
    localStorage.setItem('role', isAdmin ? 'admin' : 'user');

    onClose(); // Cerrar modal tras iniciar sesión
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("El usuario es obligatorio")
      .max(12, "El usuario es demasiado largo"),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .max(12, "La contraseña es demasiado larga")
  });

  return (
    <Fragment>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Iniciar Sesión</ModalHeader>
            <ModalBody>
              <Formik
                initialValues={{ username: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={onLoginUser}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleSubmit,
                  isValid
                }) => (
                  <form className="form" onSubmit={handleSubmit}>
                    <Input
                      type="text"
                      name="username"
                      onChange={handleChange}
                      value={values.username}
                      placeholder="Usuario"
                    />
                    <p className="error">
                      {errors.username && touched.username && errors.username}
                    </p>
                    <Input
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={values.password}
                      placeholder="Contraseña"
                    />
                    <p className="error">
                      {errors.password && touched.password && errors.password}
                    </p>
                    <Button
                      color="secondary"
                      type="submit"
                      disabled={
                        values.password === "" ||
                        values.username === "" ||
                        !isValid
                      }
                    >
                      Iniciar Sesión
                    </Button>
                  </form>
                )}
              </Formik>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default LoginUser;
