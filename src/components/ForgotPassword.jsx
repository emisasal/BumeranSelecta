import React from "react";
import { Form, Button } from "react-bootstrap";
import useInput from "../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../assets/styles/LoginForm.scss";

import {
  getUserRequest,
  sendRegisterRequest,
  sendLogoutRequest,
  deleteUserRequest,
} from "../store/user";

const ForgotPassword = () => {
  const user = useSelector((state) => state.user.passChange);
  const email = useInput();
  const password = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    dispatch(getUserRequest({ email, navigate }));
  };

  const handlePassSubmit = async (e) => {
    e.preventDefault();
    const firstName = user.firstName;
    const surname = user.surname;
    const age = String(user.age);
    const country = user.country;
    const email = user.email;
    const passW = password.value;
    const id = user.id;
    await dispatch(sendLogoutRequest());
    await dispatch(deleteUserRequest({ id: id }));
    await dispatch(
      sendRegisterRequest({
        firstName: firstName,
        surname: surname,
        age: age,
        country: country,
        email: email,
        password: passW,
      })
    );
    navigate("/");
  };

  return (
    <>
      <div className="d-flex justify-content-center container-fluid footerContainer">
        <div className="col-lg-3">
        <img
          className="pt-5 ms-1 pe-5 d-none d-lg-block"
          src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/contactos.png"
          alt=""
        />
        </div>
        {!user.id ? (
          <Form
            onSubmit={handleEmailSubmit}
            className="text-center mt-md-5 pt-md-5 ms-lg-5 w-lg-50 formLogin"
          >
            <div className="fs-5 title">Olvidé mi Contraseña</div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                {...email}
                type="email"
                placeholder="Ingrese su email"
                className="rounded-pill mt-4 inputLogin"
              />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox"></Form.Group>
            <Button
              type="submit"
              className=" rounded-pill px-5 mt-3 buttonLogin"
            >
              Aceptar
            </Button>
          </Form>
        ) : (
          <Form
            onSubmit={handlePassSubmit}
            className="text-center mt-5 pt-5 ms-5 w-50 formLogin"
          >
            <div className="fs-5 mt-4 mb-4 title">Olvidé mi Contraseña</div>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                {...password}
                type="password"
                placeholder="Contraseña"
                className="rounded-pill inputLogin"
              />
            </Form.Group>

            <Button
              type="submit"
              className=" rounded-pill px-5 mt-3 buttonLogin"
            >
              Enviar
            </Button>
          </Form>
        )}
      </div>
    </>
  );
};

export default ForgotPassword;
