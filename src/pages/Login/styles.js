import styled from 'styled-components';
import LogoCompasso from '../../assets/images/image3.png';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  font-family: 'Mark Pro';
  background: ${(props) => props.theme.colors.background};
`;

export const Left = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
 

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`;

export const ContainerTitle = styled.div`
 
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  justify-content: initial;
  > h4 {
    max-width: 300px;
    height: 52px;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.8px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  color: var(--color-secondary);

  > main {
    display: flex;
    flex-direction: column;
  }

  > h1 {
    width: 81px;
    height: 38px;
    font-size: 30px;
    font-weight: 400;
    line-height: 20px;
    font-family: 'Mark Pro';
  }

  > main section {
    display: flex;
    align-items: center;
    margin-top: 33px;
    margin-bottom: 33px;
  }

  > main section img {
    width: 20px;
    height: 20px;
  }

  > main section input {
    width: 379px;
    height: 60px;
    border-radius: 50px;
    background-color: var(--color-background-login);
    color: var(--color-background-login);
    padding: 10px;
    border: 1px solid #ffffff;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    font-family: 'Mark Pro';
    margin-right: 18px;
  }

  > main button {
    width: 379px;
    height: 67px;
    border-radius: 50px;
    margin-top: 70px;
    font-weight: 700;
    font-size: 18px;
    background: ${(props) => props.theme.colors.button};
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);

  }
`;

export const RightSide = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
`;

export const Background = styled.div`
  background-image: url(${LogoCompasso});
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  > img {
    margin-top: 35px;
    width: 306px;
    height: 69px;
  }
`;
