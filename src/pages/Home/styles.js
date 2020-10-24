import styled from 'styled-components';
import BolaLogoCompasso from '../../assets/images/home/bola-LogoCompasso1.svg';

export const Container = styled.div`
width: 100%;
height: 100%;
background-color: ${props => props.theme.white};

`;

export const Content = styled.div`
display: flex;
width: 100%;
height: calc(100% + 200px);
`;

export const LeftSide = styled.div`
display: flex;
position: relative;
width: 825px;
height: 825px;
left: -50px;
background-image: url(${BolaLogoCompasso});
background-repeat: no-repeat;
`;
export const RightSide = styled.div`
display: flex;
flex-direction: column;
width: 1095px;
height: 450px;
text-align: right;
`;

export const CointainerTexts = styled.div`
display: flex;
flex-direction: column;
width: 89%;
height: 100%;
margin-top: 150px;

`;



