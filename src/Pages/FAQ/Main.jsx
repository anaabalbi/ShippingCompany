import React from 'react';
import { Div, Form, Inputs, InputText, Text, Texto, InputTextarea, Botao, Accordions } from './style';
import Accordion from '../../components/accordion/Accordion';

const Main = () => {
    return (
      <>
      <Div> 
            <Form>
              <Text><Texto>Deixe sua mensagem e vamos te responder em breve.</Texto></Text>
              <Inputs>
                <InputText type='text' placeholder='Nome'/>
                <InputText type='text' placeholder='E-mail de contato'/>
                <InputTextarea type='text' placeholder='Mensagem'/>
                <Botao>Enviar</Botao>

              </Inputs>
            </Form>
            <Accordions>
                <Accordion
              title="Como contratar os serviços Express JS ?"
       content="Cadastre-se em nosso site e verifique as oportunidades como um dos nossos parceiros."
            />
            <Accordion
              title="Como acompanho o rastreamento do meu pedido?"
       content="Após o cadastro em nosso site, através do código fornecido acompanhe o status do seu pedido em nossa aba de rastreamento."
            />
            <Accordion
              title="Sobre oque você gostaria de tratar?"
       content="
   <p>Soluções para o meu Negócio.</p>
   </br>
   <p>Preços, Prazos e Serviços.</p>
   </br>
   <p>Elogios, Sugestões e Reclamações.</p>"
            />
            </Accordions>
        </Div>
        
        </>
    );
  };
  
  export default Main;