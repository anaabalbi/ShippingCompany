import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cadastroForm } from '../../service/Api';
import {
  Container,
  Inputs,
  Input,
  Buttons,
  Button,
} from './Dashboard-styled.jsx';
import { ContextUser } from '../../Provider/ContextUser';

function Dashboard() {
  const { dataUser, setDataUser } = useContext(ContextUser);
  const navigate = useNavigate();
  console.log(dataUser);

  function handleUpdate() {
    cadastroForm
      .put('/cliente/id/' + dataUser.usuario.ID, dataUser.usuario)
      .then((response) => {
        console.log(response.data);
        navigate('/login');
      });
  }

  function handleDelete() {
    cadastroForm.delete('/cliente/id/' + dataUser.usuario.ID);
    navigate('/login');
  }

  function handleOnChange(e) {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Container>
        <h1>Olá, {dataUser.usuario.NOME_COMPLETO}</h1>
        <Inputs>
          <h3>Informações Pessoais</h3>
          <Input
            type='text'
            name='NOME_COMPLETO'
            onChange={handleOnChange}
            value={dataUser.usuario.NOME_COMPLETO}
          />
          <Input
            type='email'
            name='EMAIL'
            value={dataUser.usuario.EMAIL}
            onChange={handleOnChange}
          />
          <Input
            type='text'
            name='CPF'
            value={dataUser.usuario.CPF}
            onChange={handleOnChange}
          />
          <Input
            type='tel'
            name='TELEFONE'
            value={dataUser.usuario.TELEFONE}
            onChange={handleOnChange}
          />
          <Input
            type='password'
            name='SENHA'
            value={dataUser.usuario.SENHA}
            onChange={handleOnChange}
          />
        </Inputs>

        <Buttons>
          <Link to='/perfil/:id/ajuda'>
            <Button>Atualizar dados</Button>
          </Link>
          <Button onClick={handleDelete}>Deletar conta</Button>
        </Buttons>
      </Container>
    </>
  );
}

export default Dashboard;
