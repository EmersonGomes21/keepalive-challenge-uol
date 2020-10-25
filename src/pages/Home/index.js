import React, { useEffect, useState } from 'react';
import Header from '~/components/Header';
import DateTime from '~/components/DateTime';
import BolaLogo from '~/assets/images/home/bola-LogoCompasso1.svg';
import H1 from '~/components/TitlesRightSide';
import {
  Container,
  Content,
  LeftSide,
  RightSide,
  CointainerTexts

} from './styles';
import Footer from '~/components/Footer';


const Home = () => {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    let texts = [
      { id: 1, title: 'Our mission is', size: '36px', color: '#C12D18', lineRight: '45px', fontWeight: 'bold' },
      { id: 2, title: 'Nossa missão é', size: '24px', color: '#222222', lineRight: '30px', fontWeight: 'normal' },
      { id: 3, title: 'to transform the world', size: '64px', color: '#C12D18', lineRight: '81px', fontWeight: 'bold' },
      { id: 4, title: 'transformar o mundo', size: '24px', color: '#222222', lineRight: '30px', fontWeight: 'normal' },
      { id: 5, title: 'building digital experiences', size: '64px', color: '#C12D18', lineRight: '81px', fontWeight: 'bold' },
      { id: 6, title: 'construindo experiências digitais', size: '24px', color: '#222222', lineRight: '30px', fontWeight: 'normal' },
      { id: 7, title: 'that enable our client’s growth', size: '64px', color: '#C12D18', lineRight: '81px', fontWeight: 'bold' },
      { id: 8, title: 'que permitam o crescimento dos nossos clientes', size: '24px', color: '#222222', lineRight: '30px', fontWeight: 'normal' },
    ];

    setTitles(texts.map(d => {
      return {
        id: d.id,
        title: d.title,
        size: d.size,
        color: d.color,
        lineRight: d.lineRight,
        fontWeight: d.fontWeight
      };
    })
    );

  }, [titles])

 
  return (
    <>
      <Container>

        <Header />

        <DateTime />

        <Content>

          <LeftSide>
            <img src={BolaLogo} alt="Bola logo" />
          </LeftSide>

          <RightSide>

            <CointainerTexts>
              {
                titles.map((d, i) => (
                  <H1 key={d.id} size={d.size} color={d.color} lineRight={d.lineRight} fontWeight={d.fontWeight}>{d.title}</H1>)
                )
              }
            </CointainerTexts>

          </RightSide>
          
        </Content>

        <Footer/>
        
      </Container>
    </>

  );
}

export default Home;