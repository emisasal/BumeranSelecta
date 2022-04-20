import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendLoginRequest } from "../store/user";
import "../assets/styles/LoginForm.scss";

const LoginForm = () => {
  const email = useInput();
  const password = useInput();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(
      sendLoginRequest({
        email: email.value,
        password: password.value,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center mt-5 container-fluid containerFooter">
      <div className="row">
        <div className="col-6">
          <img
            className="mt-5 pt-5 ms-1 pe-5 d-none d-lg-block"
            src="https://www.bumeran.com.ar/selecta/wp-content/uploads/2021/06/contactos.png"
            alt=""
          />
        </div>
      </div>

      <div className="col-6">
        <Form
          onSubmit={handleSubmit}
          className="text-center w-100 mt-md-4 pt-md-5 ms-lg-5 formLogin"
        >
          <div className="pt-4 mb-5 fs-4 title">
            ¿Listo para encontrar el talento que estás buscando?​
          </div>
          <div className="fs-5 title">Iniciar sesión</div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              {...email}
              type="email"
              placeholder="Email"
              className="rounded-pill mt-4 inputLogin"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              {...password}
              type="password"
              placeholder="Contraseña"
              className="inputLogin"
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Link className="forgotPass" to="/forgotPass">
            Olvidé mi contraseña
          </Link>
          <Button type="submit" className="px-5 mt-3 buttonLogin">
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
