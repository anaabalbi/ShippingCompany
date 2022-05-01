import React, { useContext } from "react";
import { Div, Form, Inputs, InputText, Texto, Botao, CriarConta } from "./style.js";
import { Link, useNavigate } from "react-router-dom";
import { cadastroForm } from "../../service/Api";
import { ContextUser } from "../../Providers/ContextUser.js";

const Login = () => {
  const navigate = useNavigate();
  const { setDataUser, dataUser } = useContext(ContextUser);

  function handleOnChange(e) {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  }

  function login(e) {
    e.preventDefault();
    cadastroForm.post("/cliente/login", dataUser).then((response) => {
      setDataUser(response.data);
      localStorage.setItem("User", JSON.stringify(response.data));
      navigate("/perfil/" + response.data.usuario.ID);
    });
  }

  return (
    <Div>
      <Form onSubmit={(e) => login(e)}>
        <Texto>Entre em sua conta</Texto>
        <Inputs>
          <InputText
            type="email"
            onChange={handleOnChange}
            placeholder="E-mail"
            name="EMAIL"
          />
          <InputText
            type="password"
            onChange={handleOnChange}
            placeholder="Senha"
            name="SENHA"
          />
          <Botao type="submit">Entrar</Botao>

          <Link to="/cadastro" style={{ textDecoration: "none" }}>
            <CriarConta>Crie sua Conta</CriarConta>
          </Link>
        </Inputs>
      </Form>
    </Div>
  );
};

export default Login;
