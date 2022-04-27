import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchModalContext } from '../../provider/context-modal';

import {
  Overlay,
  ModalContainer,
  Header,
  CloseIcon,
  FormContainer,
  InputContainer,
  Footer,
  CheckIcon,
} from './style-modal';

const SearchModal = () => {
  const { handleClose, codeHandler, codeTracking } =
    useContext(SearchModalContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(codeTracking);
    if (
      codeTracking === '' &&
      codeTracking.length < 7 &&
      codeTracking === undefined
    ) {
      alert('digite o código de rastreio');
    } else {
      navigate('/search/' + codeTracking);
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
            <label htmlFor='codeTracking'>Código de Rastreio</label>
            <input
              id='codeTracking'
              type='text'
              placeholder='Insira o código de rastreio do pedido'
              onChange={codeHandler}
              required='required'
            />
          </InputContainer>
        </FormContainer>
        <Footer>
          <button type='submit' value='submit' onClick={handleSubmit}>
            <CheckIcon />
          </button>
        </Footer>
      </ModalContainer>
    </Overlay>
  );
};

export default SearchModal;
