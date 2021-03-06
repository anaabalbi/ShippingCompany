import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style-headerhome.css';
import logo from '../../assets/logo/express.png';

function HeaderHome() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-logo'>
            <Link to='/'>
              <img className='navbar-logo' src={logo} alt='logo' />
            </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                LOGIN
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                FAQ
              </Link>
            </li>

            <li>
              <Link
                to='/Cadastro'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                CADASTRE-SE
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default HeaderHome;
