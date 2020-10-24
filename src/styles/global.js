import { createGlobalStyle } from 'styled-components';

import Myfont from '~/assets/fonts/markpro.ttf';
import backgroundLogin from '~/assets/images/image3.png';

export default createGlobalStyle`
  @font-face {
    font-family: 'Mark Pro';
    src: url(${Myfont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.primary}
  }

  html, body, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Mark Pro', sans-serif;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    transition: all 0.2s;
    &:hover {
      transform: translate(2px, -2px);
    }
  }

  .container {
    display: flex;
    flex: 1;
    height: 100%;
    background: ${(props) => props.theme.colors.background}
  }

  .col {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
  }

  .content {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-around

  }

  .heading-title {
    font-weight: 400;
    font-size: 60px;
  }

  .heading-subtitle {
    font-size: 16px;
    line-height: 20px;
  }

  .form-container {
    position: relative;

    .title {
      font-size: 30px;
      line-height: 38px;
      font-weight: normal;
    }

    .input-group {
      display: flex;
      margin-top: 32px;
      align-items: center;

      width: 379px;
      height: 60px;
      border-radius: 50px;
      background: transparent;
      border: 1px solid ${(props) => props.theme.colors.primary};
      padding: 20px;

      input {
        background: none;
        border: none;
        width: 100%;
        font-size: 16px;
        margin-right: 10px;
      }

      img {
        width: 20px;
      }
    }

    .error {
        border: 1px solid ${(props) => props.theme.colors.error};
    }

    .text-error {
      width: 100%;
      margin-top: 28px;
      position: absolute;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.error}
    }

    button {
      width: 379px;
      height: 67px;
      border-radius: 50px;
      margin-top: 115px;

      font-size: 18px;
      font-weight: bold;
      background: ${(props) => props.theme.colors.button};
      box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
    }
  }

  .background-login {
    flex-direction: row;
    background-image: url(${backgroundLogin});

    img {
      align-self: flex-start;
      padding: 35px;
    }
  }
`;
