import React from 'react';
import LogoCompasso from '../../assets/images/404/LogoCompasso-branco.png';
import { Container, ContainerRight } from './styles';

function Header404() {
  return (
    <Container>
      <img src={LogoCompasso} alt="logo" />

      <ContainerRight>
        <a>Transformação</a>
        <a>Plataformas</a>
        <a>Culturas</a>
        <a>Talentos</a>
        <a>Vamos Conversar?</a>
        <a>Português</a>
      </ContainerRight>

    </Container>
  );
}

export default Header404;