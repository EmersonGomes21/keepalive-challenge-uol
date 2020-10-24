import React from 'react';
import DataTime from '../../assets/images/home/11_26.svg';
import { Container } from './styles';

const DateTime = () => {
  return (
     <Container>
       <img src={DataTime} alt="Date and Time" />
       <h5>terça-feira, 17 de março de 2020</h5>
    </Container>
  );
}

export default DateTime;