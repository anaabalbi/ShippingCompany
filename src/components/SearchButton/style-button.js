import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

export const Button = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 5px;

  transition: 0.5s;
  &:hover {
    background: #262626;
    cursor: pointer;
  }
`;

export const SearchIcon = styled(IoSearch)`
  width: 2em;
  height: 2em;
  color: #d9d9d9;
`;
