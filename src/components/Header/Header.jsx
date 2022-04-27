import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchModalContext } from '../../Provider/context-modal';
import logoExpress from '../../assets/logo/express.png';
import ButtonSearch from '../SearchButton/SearchButton';
import SearchModal from '../SearchModal/SearchModal';
import { Nav, Logo, Div, BoxButton, Button } from './style-header';

const Header = () => {
  const { openSearchModal } = useContext(SearchModalContext);
  console.log(openSearchModal);

  return (
    <Nav>
      <Logo>
        <img
          src={logoExpress}
          alt='Nome da transpordadora, Express.JS com uma caixa de papelão aberta'
          height='90px'
        />
      </Logo>

      <Div>
        <Link to='/contato'>Contato</Link>
        <BoxButton>
          <ButtonSearch />

          <Button> Login</Button>
        </BoxButton>
      </Div>
      {openSearchModal && <SearchModal></SearchModal>}
    </Nav>
  );
};

export default Header;
