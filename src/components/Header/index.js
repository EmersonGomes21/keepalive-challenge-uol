import React from 'react';
import LogoCompasso from '../../assets/images/home/LogoCompasso1.svg';
import Nuvem from '../../assets/images/home/nuvem.svg';
import Temperatura from '../../assets/images/home/22º.svg';
import { Container, LocationTemperature, ContainerTemperature } from './styles';

const Header = () => {
  return (
    <Container>
      <img src={LogoCompasso} alt="logo" />

      <ContainerTemperature>
        <h5>Passo Fungo - RS</h5>

        <LocationTemperature>
          <img className="nuvem" src={Nuvem} alt="Nuvem" />

          <img className="temperatura" src={Temperatura} alt="Temperature" />
        </LocationTemperature>
      </ContainerTemperature>
    </Container>
  );
};

export default Header;
