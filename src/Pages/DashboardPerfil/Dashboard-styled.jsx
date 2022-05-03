import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 2em;
  flex-direction: column;
  height: 100vh;
  width: 100vh;
  align-items: center;
`;
export const Inputs = styled.div`
  margin-top: 2.5em;
  width: 30em;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 2rem;
  margin: 0.3em;
  padding: 0px 5px 0px 5px;
  border-style: none;
  border: #1e1e1e1e 2px solid;
  border-radius: 5px;
`;

export const Buttons = styled.div`
  margin-top: 2.5em;
  width: 30em;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  height: 2rem;
  width: 10rem;
  background-color: #1e1e1e;
  color: white;
  border-style: none;
  border-radius: 7px;
  cursor: pointer;
`;
