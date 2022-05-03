import styled from 'styled-components';

export const Div = styled.main`
  height: 140vh;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.div`
  width: 75%;
  height: 70vh;
  padding: 25px 0 25px 0;
  background: #023047;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
`;

export const Texto = styled.h1`
  font-size: 36px;
  color: white;
  font-family: 'Roboto';
  font-style: normal;
`;

export const Text = styled.div`
  width: 40%;
  height: 25vh;
`;

export const Inputs = styled.div`
  width: 40%;
  height: 59vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
`;

export const InputText = styled.input`
  width: 90%;
  padding: 11px;
  border-radius: 3px;
  border-style: none;
`;

export const InputTextarea = styled.textarea`
  width: 90%;
  padding-left: 10px;
  padding-top: 10px;
  height: 150px;
  border-radius: 3px;
  border-style: none;
  text-align: left;
  resize: none;
`;

export const Botao = styled.button`
  width: 29%;
  height: 39px;
  background: #fd9e02;
  border-style: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 1px;
`;

export const Accordions = styled.div`
  margin-top: 25px;
  width: 88%;
`;
