import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cadastroForm } from '../../service/Api';
import {
  Container,
  Inputs,
  Input,
  Buttons,
  Button,
} from '../DashboardPerfil/Dashboard-styled';
import { ContextUser } from '../../Provider/ContextUser';

function Ajuda() {
  const { dataUser, setDataUser } = useContext(ContextUser);
  const [atualizaUser, setAtualizaUser] = useState({});

  const navigate = useNavigate();

  function handleOnChange(e) {
    setAtualizaUser({ ...atualizaUser, [e.target.name]: e.target.value });
  }

  function dataAtualiza() {
    if (atualizaUser.ID === undefined) {
      atualizaUser.ID = dataUser.usuario.ID;
    }
    if (atualizaUser.NOME_COMPLETO === undefined) {
      atualizaUser.NOME_COMPLETO = dataUser.usuario.NOME_COMPLETO;
    }
    if (atualizaUser.CPF === undefined) {
      atualizaUser.CPF = dataUser.usuario.CPF;
    }
    if (atualizaUser.TELEFONE === undefined) {
      atualizaUser.TELEFONE = dataUser.usuario.TELEFONE;
    }
    if (atualizaUser.SENHA === undefined) {
      atualizaUser.SENHA = dataUser.usuario.SENHA;
    }
    if (atualizaUser.EMAIL === undefined) {
      atualizaUser.EMAIL = dataUser.usuario.EMAIL;
    }
  }

  dataAtualiza();
  function handleUpdate() {
    cadastroForm
      .put('/cliente/id/' + atualizaUser.ID, atualizaUser)
      .then((response) => {
        console.log(response.data);
        cadastroForm.get('/cliente/id/' + atualizaUser.ID).then((response) => {
          setDataUser(response.data);
          console.log(response.data);
          localStorage.setItem('User', JSON.stringify(response.data));
          navigate('/perfil/' + response.data.usuario.ID);
        });
      });
  }
  return (
    <>
      <Container>
        <h1>Olá, {dataUser.usuario.NOME_COMPLETO}</h1>
        <Inputs>
          <h3>Atualize suas informações</h3>
          <Input
            type='text'
            name='nome_completo'
            onChange={handleOnChange}
            placeholder={dataUser.usuario.NOME_COMPLETO}
          />
          <Input
            type='email'
            name='EMAIL'
            placeholder={dataUser.usuario.EMAIL}
            onChange={handleOnChange}
          />
          <Input
            type='text'
            name='CPF'
            placeholder={dataUser.usuario.CPF}
            onChange={handleOnChange}
          />
          <Input
            type='tel'
            name='TELEFONE'
            placeholder={dataUser.usuario.TELEFONE}
            onChange={handleOnChange}
          />
          <Input
            type='password'
            name='SENHA'
            placeholder={dataUser.usuario.SENHA}
            onChange={handleOnChange}
          />
        </Inputs>

        <Buttons>
          <Button onClick={handleUpdate}>Confirmar</Button>
        </Buttons>
      </Container>
    </>
  );
}

export default Ajuda;
