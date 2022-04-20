import React from "react";
import { Form, Button } from "react-bootstrap";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendRegisterRequest } from "../store/user";
import { alertNewUser } from "../utils/alerts";
import "../assets/styles/RegisterForm.scss";

const RegisterForm = () => {
  const firstName = useInput();
  const surname = useInput();
  const age = useInput();
  const country = useInput();
  const email = useInput();
  const password = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      sendRegisterRequest({
        firstName: firstName.value,
        surname: surname.value,
        age: age.value,
        country: country.value,
        email: email.value,
        password: password.value,
      })
    );
    alertNewUser();
    navigate("/");
  };

  return (
    <div className="container d-flex flex-column align-items-center footerContainer">
      <div className="row mt-3 mt-lg-3 mb-lg-4 pb-5 fs-4 title d-flex justify-content-center">
        Crear una Cuenta
      </div>

      <Form
        onSubmit={handleSubmit}
        className="w-75 formLogin d-flex flex-column "
      >
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-lg-6">
            <Form.Group
              className="w-100 pe-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...firstName}
                type="text"
                placeholder="Nombre"
                className="inputLogin"
              />
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group
              className="w-100 ps-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...surname}
                className="inputLogin"
                type="text"
                placeholder="Apellido"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <Form.Group
              className="w-100 pe-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...age}
                type="number"
                placeholder="Edad"
                className="inputLogin"
              />
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group
              className="w-100 ps-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...country}
                type="text"
                placeholder="Nacionalidad"
                className="rounded-pill inputLogin"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <Form.Group
              className="w-100 pe-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...email}
                type="email"
                placeholder="Email"
                className="inputLogin"
              />
            </Form.Group>
          </div>
          <div className="col-lg-6">
            <Form.Group
              className="w-100 ps-lg-1 pb-3"
              controlId="formBasicEmail"
            >
              <Form.Control
                {...password}
                type="password"
                placeholder="Contraseña"
                className="inputLogin"
              />
            </Form.Group>
          </div>
        </div>

        <div className="row">
          <div className="d-flex justify-content-center">
            <Button
              className="mt-5 w-lg-25 px-5 px-lg-5 buttonLogin"
              type="submit"
            >
              Registrarse
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default RegisterForm;
