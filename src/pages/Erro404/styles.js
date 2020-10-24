import styled from 'styled-components';
export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 100%;
height: 100%;
background-color: #212121; 
`;

export const Content = styled.div`
display: flex;
position: relative;
justify-content: center;
align-items: center;
width: 100%;
height: 1000px;
top: -150px;
background-image: url('https://compasso.com.br/wp-content/themes/compassouol/public/images/TexturaMapa-Desktop.png');
background-repeat: none;
color: white;
  
`;

export const ContainerWarning = styled.div`
display: flex;
flex-direction: column;
text-align: left;
width: 50%;
height: 20%;
margin-left: 5%;
color: white;

> h1{
 max-width: 600px;
font-family:  Mark Pro;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: 60px;
margin-bottom: 25px;
}

>h5 {
font-family:  Mark Pro;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 30px;
padding: 5px;
}
`;

export const ContainerIcons = styled.div`
display: flex;
position: relative;
width: 50%;
height: 40%;
margin-right: 150px;
> .icon{
  width: 150px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  >img{
  position: relative;
  width: 90px;
  height: 90px;
  left: -100px;
  top: 20px;
}

}

`;


export const IconsLeft = styled.div`
display: flex;
flex-direction: column;
width: 250px;
height: 290px;
margin-top: 100px;

>img{
  position: relative;
  width: 150px;
  height: 150px;
  left: -100px;
}
>img + img{
  width: 200px;
  height: 200px;
  margin-top: -120px;
}

`;

export const IconsRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
position: relative;
left: -130px;
width: 200px;
height: 360px;

>img{
  width: 110px;
  height: 110px;
}
>img + img{
  position: relative;
  left: 45px;
  width: 80px;
  height: 80px;

}

`;



  

