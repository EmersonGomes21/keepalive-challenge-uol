import styled from 'styled-components';
import BolaLogoCompasso from '../../assets/images/home/bola-LogoCompasso1.svg';

export const Container = styled.div`
width: 100%;
max-width: 1920px;
height: 1080px;
background-color: (--color-primary);

`;

export const Content = styled.div`
display: flex;
width: 100%;
height: 100%;
`;

export const LeftSide = styled.div`
display: flex;
position: relative;
width: 825px;
height: 825px;
top: 232px;
left: -50px;
background-image: url(${BolaLogoCompasso});
background-repeat: no-repeat;
`;
export const RightSide = styled.div`
display: flex;
flex-direction: column;
width: 1095px;
height: 450px;
margin-top: 396px;
text-align: right;
`;

export const CointainerTexts = styled.div`
display: flex;
flex-direction: column;
width: 89%;
height: 100%;

`;



