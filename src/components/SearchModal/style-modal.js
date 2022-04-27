import styled from 'styled-components';
import { IoClose, IoCheckmark } from 'react-icons/io5';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(5, 25, 38, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  background-color: #f2f2f2;
  border-radius: 20px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.08);
  padding: 20px 20px;
`;
export const Header = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > strong {
    font-size: 18px;
  }

  & > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }
  }
`;
export const CloseIcon = styled(IoClose)`
  height: 22px;
  width: 22px;
`;

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;
export const InputContainer = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  & > label {
    font-size: 18px;
  }
  & > input {
    border: none;
    color: #1e1e1e;
    background-color: white;
    border-radius: 5px;
    height: 30px;
    width: 100%;

    transition: 0.2s;
    &:hover {
      background-color: #f2f2f2;
    }
  }
`;
export const Footer = styled.div`
  display: flex;
  justify-content: center;
  & > button {
    align-self: center;
    background: #051a26;

    border: none;
    border-radius: 6px;
    width: 150px;
    height: 35px;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  & > button:hover {
    opacity: 0.5;
  }
`;
export const CheckIcon = styled(IoCheckmark)`
  color: white;
  height: 22px;
  width: 22px;
`;
