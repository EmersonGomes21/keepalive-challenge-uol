import React from 'react';
import LogoCompasso from '~/assets/images/404/LogoCompasso-branco.png';
import { Container, ContainerRight, Link } from './styles';
function Header404() {
  return (
    <Container>
      <img src={LogoCompasso} alt="logo" />

      <ContainerRight>
        <Link to ="/" id="link" >Transformação</Link>
        <Link to ="/" id="link">Plataformas</Link>
        <Link to ="/" id="link">Culturas</Link>
        <Link to ="/" id="link">Talentos</Link>
        <Link to ="/" id="link">Vamos Conversar?</Link>
        <Link to ="/" id="link">Português</Link>
      </ContainerRight>

    </Container>
  );
}

export default Header404;