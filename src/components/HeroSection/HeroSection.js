import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { SearchModalContext } from '../../Provider/context-modal';
import { HeroButton } from '../HeroButton/HeroButton';
import './HeroSection.css';

function HeroSection() {
  const { handleOpen } = useContext(SearchModalContext);
  return (
    <div className='hero-container'>
      <video src='/videos/video-caminhao.mp4' autoPlay loop muted />
      <h1>ENTREGA EXPRESSA</h1>
      <p>Sua encomenda mais rápida e segura.</p>
      <div className='hero-btns'>
        <HeroButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleOpen}
        >
          RASTREAMENTO
        </HeroButton>
        <Link to={'/cadastro'}>
          <HeroButton
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
          >
            CADASTRE-SE
          </HeroButton>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
