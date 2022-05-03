import React from 'react';
import './Cards.css';
import CardItem from '../CardItemHome/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Confira os nossos serviços</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/entrega.jpg'
              text='Rastreie a sua encomenda a qualquer hora do dia, com atualização em tempo real.'
              label='Rastreamento de encomenda'
              path='/login' //linkar pag Ana Rastreamento
            />
            <CardItem
              src='images/caminhoneiro.jpg'
              text='Seja um de nossos entregadores parceiros, venha para Expres JS.'
              label='Seja nosso parceiro'
              path='/cadastro' //linkar pag Anderson
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/faq.jpg'
              text='Ainda não conhece a Express JS ? Cadastre-se em nosso site e tenha acesso a nossa gama de serviços.'
              label='Conheça as nossas novidades'
              path='/' //linkar pag Anderson
            />
            <CardItem
              src='images/rastreio.jpg'
              text=' Aproveite nosso amplo serviço de rastreamento e acompanhe o seu pedido até chegar ao seu destino.'
              label='Aproveite nosso amplo serviço de rastreio'
              path='/faq' //linkar pag Ana Rastreamento
            />
            <CardItem
              src='images/contato.jpg'
              text='Fale Conosco! Utilize nosso canal de dúvidas e sugestões.'
              label='Entre em contato com nosso suporte'
              path='/faq'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
