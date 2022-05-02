import React, { useState } from 'react';
import { Div, Form, Inputs, InputText, Texto, Botao } from './style';
import { useNavigate } from 'react-router-dom';
import { cadastroForm } from '../../service/Api';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Footer from '../../components/Footer/Footer';

const Cadastro = () => {
  const [value, setValue] = useState({});
  const navigate = useNavigate();

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  console.log('value', value);

  const Api = () => {
    cadastroForm
      .post('/cliente', value)
      .then((response) => {
        console.log(response.data);
      })
      .catch((erro) => console.log(erro));
  };

  function submit() {
    Api();
    navigate('/login');
  }

  return (
    <>
      <HeaderHome></HeaderHome>
      <Div>
        <Form onSubmit={submit}>
          <Texto>Crie sua conta</Texto>
          <Inputs>
            <InputText
              type='text'
              placeholder='Nome Completo'
              onChange={handleChange}
              name='NOME_COMPLETO'
            />
            <InputText
              type='email'
              placeholder='E-mail'
              onChange={handleChange}
              name='EMAIL'
            />
            <InputText
              type='text'
              placeholder='CPF'
              onChange={handleChange}
              name='CPF'
            />
            <InputText
              type='tel'
              placeholder='Telefone'
              onChange={handleChange}
              name='TELEFONE'
            />
            <InputText
              type='password'
              placeholder='Senha'
              onChange={handleChange}
              name='SENHA'
            />
            <Botao type='submit'>Criar minha conta</Botao>
          </Inputs>
        </Form>
      </Div>
      <Footer></Footer>
    </>
  );
};

export default Cadastro;
