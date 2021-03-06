import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import isConnected from '~/utils/isConnected';
import {
  Container,
  Content,
  ContainerWarning,
  ContainerIcons,
  IconsLeft,
  IconsRight
  ,
  ImageBackground
} from './styles';
import Header404 from '~/components/Header404';
import Footer from '~/components/Footer';
import icon1 from '~/assets/images/404/image-4-mobile.png';
import icon2 from '~/assets/images/404/image-2-mobile.png';
import icon3 from '~/assets/images/404/image-5-mobile.png'

const Erro404 = () => {
  let history = useHistory();

  useEffect(() => {

  setTimeout(() => {
    isConnected ? history.push('/home')
    : 
    history.push('/login')

    }, (1000 * 10));

    return () => clearTimeout(); 

  }, [])
  return (
    <>

<       Header404 />
      <Container>
     
       <ImageBackground>

       </ImageBackground>

        <Content>

        

          <ContainerWarning>
            <h1>Hey! Como você veio parar aqui?</h1>
            <h5>Parece que a página que você acessou não está mais disponível. </h5>
            <h5>Iremos redirecioná-lo para a home, ok? </h5>
          </ContainerWarning>

          <ContainerIcons>
            <div className="icon">

              <img src={icon1} alt="icon" />

            </div>

            <IconsLeft>
              <img src={icon1} alt="icon" />

              <img src={icon2} alt="icon" />
            </IconsLeft>

            <IconsRight>
              <img src={icon1} alt="icon" />

              <img src={icon3} alt="icon" />
            </IconsRight>


          </ContainerIcons>

        </Content>

      </Container>

      <Footer />
    </>
  );

}

export default Erro404;