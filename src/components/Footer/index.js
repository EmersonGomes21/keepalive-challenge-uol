import React from 'react';

import { Container, LeftSide, RightSide, Line, ContainerCount, ContainerRight, ContainerButtons, ButtonNavegation, ButtonLogout } from './styles';

function Footer() {
  return (
    <Container > 
      <LeftSide>
        <h4>Essa janela do navegador é usada para manter sua sessão de autenticação ativa. Deixe-a aberta em segundo plano e abra uma nova janela para continuar a navegar.</h4>
      </LeftSide>

      <Line></Line>

      <RightSide>

        <ContainerRight>

          <span>Application refresh in</span>

          <ContainerCount>
            <h1>600</h1>
            <h4>seconds</h4>
          </ContainerCount>
        </ContainerRight>

        <ContainerButtons>
          <ButtonNavegation>
           <a href="/home/">Continuar Navegando</a>
           </ButtonNavegation>

          <ButtonLogout>
           <a href="/login/">Logout</a>
           </ButtonLogout>

        </ContainerButtons>


      </RightSide>

    </Container>
  );
}

export default Footer;