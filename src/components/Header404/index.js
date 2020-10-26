import React from 'react';
import LogoCompasso from '~/assets/images/404/LogoCompasso-branco.png';
import { Container, ContainerRight } from './styles';

function Header404() {
  return (
    <Container>
      <img src={LogoCompasso} alt="logo" />

      <ContainerRight>
        <a href ="#" className="link" >Transformação</a>
        <a href ="#" className="link">Plataformas</a>
        <a href ="#" className="link">Culturas</a>
        <a href ="#" className="link">Talentos</a>
        <a href ="#" className="link">Vamos Conversar?</a>
        <a href ="#" className="link">Português</a>
      </ContainerRight>

    </Container>
  );
}

export default Header404;