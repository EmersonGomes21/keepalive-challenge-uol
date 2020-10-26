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

  a{
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
    width: 100%;
    height: 100%;
    margin: 0;
    background: ${(props) => props.theme.colors.background};
    
    @media screen and (max-width: 700px){
    background: none; 
     width: 100%;
     background-image: url(${backgroundLogin});
    
    
 
}

  }


  .col {
    display: flex;
    flex: 1;
    align-items: center;
    margin: auto;
    height: 100%;
    width: 50%;
 
    @media screen and (max-width: 750px){
      height: 100%;
       justify-content: space-around;
      }
    
  }

  .content {
    display: flex;
    height: 78%;
    flex-direction: column;
    justify-content: space-around ;
    margin: auto;
    margin-top: 100px;
   

    @media screen and (max-width: 750px){
        
        margin-top: 32px;
        }
  
  }

  .heading-title {
    font-weight: 60px;
    font-size: 60px;
    font-weight: 40px;

   
  }

  .heading-subtitle {
    font-size: 16px;
    line-height: 40px;
    font-weight: 20px;
   
  }

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: auto;
    position: relative;
    height: 90%;

    

    .title {
      font-size: 30px;
      line-height: 38px;
      font-weight: normal;
    }

    .input-group {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      margin-top: 34px;
      width: 400px;
      height: 60px;
      border-radius: 50px;
      background: transparent;
      border: 1px solid ${(props) => props.theme.colors.primary};
      padding: 20px;

      @media screen and (max-width: 750px){
        margin: auto;
        margin-bottom: 32px;
        margin-top: 32px;
        }

      input {
        background: none;
        border: none;
        width: 100%;
        font-size: 16px;
        margin-right: 10px;

        @media screen and (max-width: 750px){
          margin:0;
        }
        
      
      }

      img {
        width: 20px;
        transform: translateX(55px);
        transition: 0.2s all;
      }
    }


    .focado{

      img{

        transform: translateX(0)
      }
    }

    .desfocado{
      img{
        
        transform: translateX(55px);

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

    .text-success {
      width: 100%;
      margin-top: 28px;
      position: absolute;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.success}
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

      @media screen and (max-width: 750px){
        position: relative;
        margin: auto;
        top: 80px;
        bottom: 0;

      }
    }
  }

  .background-login {
    flex-direction: row;
    background-image: url(${backgroundLogin});
    background-repeat: no-repeat;
    width:100%;
    max-width: 1920px;
    
    
    img {
      align-self: flex-start;
      padding: 35px;
    
    }
  }





  @media screen and (max-width: 700px){

    html, body, #root {
    height: 100%;
  }
    .container  {
      margin: 0;
 
}

.container .col {
    max-height: 80%;
    margin: auto;
 
}

.container .col.content {
    max-width:inherit ;
 
}


  .container .background-login {
    display: none;
 
}


}

`;




