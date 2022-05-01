import styled from 'styled-components';

export const SectionPackage = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 85vh;
  background-color: #a6a6a6;
  font-family: 'Nunito Sans', sans-serif;
`;

export const BoxPackage = styled.ul`
  display: flex;
  width: 600px;
  height: 300px;
  background: #bfbfbf;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  list-style: none;
  padding: 0;
`;

export const ButtonReturn = styled.div`
  width: 600px;
  height: 200px;
  display: flex;
  flex-diretion: column;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  & > strong {
    color: #fa680c;
    font-size: 25px;
  }
  & > a {
    color: #1e1e1e;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    width: 200px;
    height: 30px;
    border-bottom: 4px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      border-bottom: 4px solid #fa680c;
    }
  }
`;
