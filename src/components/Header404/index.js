import React from 'react';
import LogoCompasso from '../../assets/images/404/LogoCompasso-branco.png';
import { Container, ContainerRight } from './styles';

function Header404() {
  return (
    <Container>
      <img src={LogoCompasso} alt="logo" />

      <ContainerRight>
        <a href ="#">Transformação</a>
        <a href ="#">Plataformas</a>
        <a href ="#">Culturas</a>
        <a href ="#">Talentos</a>
        <a href ="#">Vamos Conversar?</a>
        <a href ="#">Português</a>
      </ContainerRight>

    </Container>
  );
}

export default Header404;