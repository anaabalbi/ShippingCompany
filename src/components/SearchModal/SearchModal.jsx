import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchModalContext } from '../../Provider/context-modal';
import { useApi } from '../../Hooks/useApi';

import {
  Overlay,
  ModalContainer,
  Header,
  CloseIcon,
  FormContainer,
  InputContainer,
  Footer,
  CheckIcon,
  Alert,
} from './style-modal';

const SearchModal = () => {
  const { handleClose, codeHandler, codeTracking, setData } =
    useContext(SearchModalContext);
  const [alert, setAlert] = useState(1);
  const navigate = useNavigate();

  const { data } = useApi(
    `//transportadora-pedido.herokuapp.com/address/codetracking/${codeTracking}`
  );

  function HandleSubmit(e) {
    if (codeTracking === '' || codeTracking.length < 7) {
      return setAlert(0);
    } else {
      navigate('/busca/' + codeTracking);
      handleClose();
    }
  }

  return (
    <Overlay>
      <ModalContainer>
        <Header>
          <strong> Tracking </strong>
          <button type='button' onClick={handleClose}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer>
          <InputContainer>
            <label>Código de Rastreio</label>
            <input
              type='text'
              placeholder='Insira o código de rastreio do pedido'
              onChange={codeHandler}
            />
            <Alert erro={alert}>
              <p>
                {' '}
                Entre com o código de rastreio, ele é composto por 7 digitos
                numericos{' '}
              </p>
            </Alert>
          </InputContainer>
        </FormContainer>
        <Footer>
          <button type='submit' value='submit' onClick={HandleSubmit}>
            <CheckIcon />
          </button>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default SearchModal;
