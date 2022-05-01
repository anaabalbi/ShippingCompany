import styled from 'styled-components';

export const Div = styled.main`
    font-family: 'Roboto', sans-serif;
    height: 100vh;
    width: 100%;
    background-color: #efefef;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const Form = styled.form`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 8px;
    border: solid 1px black;
`;

export const Texto = styled.h1`
    font-size: 34px;
    margin-top: 20px;
    color: black;
    font-family: 'Roboto';
    font-style: normal;
`;

export const Inputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 8px;
    align-items: center;
    min-height: 300px;
    margin: 0 0 30px 0;
`;

export const InputText = styled.input`
    width: 70%;
    height: 2rem;
    border-radius: 3px;
    border-style: none;
    border: solid 1px white;
`;

export const Botao = styled.button`
    width: 70%;
    height: 39px;
    background: black;
    border-style: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
`;