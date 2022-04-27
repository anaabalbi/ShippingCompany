import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 13vh;
  background-color: black;
  font-family: 'Nunito Sans', sans-serif;
  box-shadow: 0 0 1em rgb(239, 203, 129, 0.1), 0 0 1em rgb(241, 177, 114, 0.2);
  position: relative;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  left: 5%;
  &:hover {
    cursor: pointer;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 80%;
  color: #f1b172;
  & > a {
    color: #d9d9d9;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    width: 90px;
    height: 40px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: #262626;
    }
  }
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  height: 30px;
`;

export const Button = styled.button`
  width: 70px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  transition: 0.5s;
  color: #d9d9d9;

  &:hover {
    background: #262626;
    cursor: pointer;
  }
`;
