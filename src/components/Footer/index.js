import React from 'react';
import {  useHistory } from 'react-router-dom';
import { Container, LeftSide, RightSide, Line, ContainerCount, ContainerRight, ContainerButtons, ButtonNavegation, ButtonLogout } from './styles';
import { Link}from 'react-router-dom';
function Footer() {
  let history = useHistory();

  const Logout = () =>{

  try {
    localStorage.removeItem('@keepalive/connected');
    
   
 }
 catch{
  alert('Erro ao tentar fazer logout, tente novamente!')
 }

 finally {
  history.push('/login');
 }

  }
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
           <Link href="#">Continuar Navegando</Link>
           </ButtonNavegation>

          <ButtonLogout>
           <Link  onClick={Logout}>Logout</Link>
           </ButtonLogout>

        </ContainerButtons>


      </RightSide>

    </Container>
  );
}

export default Footer;