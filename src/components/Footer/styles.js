import styled from 'styled-components';
export const Container = styled.div`
display: flex;
position: fixed;
bottom:0;
width: 100%;
height: 100px;
background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);

  
`;

export const LeftSide = styled.div`
display: flex;
width: 50%;
/**background-color: red; */
justify-content: flex-end;
align-items: center;

> h4{
 max-width: 541px;
 height: 58px;
 font-family: 'Mark Pro', Mark Pro ;
 font-weight: 400;
 font-style: normal;
 font-weight: normal;
 font-size: 12px;
 line-height: 15px;
 text-align: right;
 margin-top: 33px;
 margin-right: 35px;
}
`;

export const Line = styled.div`
width: 0;
height: 61px;
border: 1px solid #FFFFFF;
margin-top: 17px;
`;

export const RightSide = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
`;
export const ContainerRight = styled.div`
width: 50%;
display: flex;

span{
width: 109px;
height: 49px;
margin-top: 32px;
margin-left: 123px;
margin-right: 23px;
font-family: 'Mark Pro', Mark Pro ;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
text-align: right;
color: ${props => props.theme.colors.white};
}
`;

export const ContainerCount = styled.div`
display:flex;
flex-direction: column;
align-items: center;
margin-top: 9px;
color: ${props => props.theme.colors.white};

h1{
width: 97px;
height: 61px;
font-family: 'Mark Pro', Mark Pro;
font-style: normal;
font-weight: bold;
font-size: 48px;
line-height: 61px;

}

h4{
width: 55px;
height: 18px;
margin: -10px;
font-family:'Mark Pro', Mark Pro;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
text-align: center;
}

`;

export const ContainerButtons = styled.div`
display: flex;
justify-content: flex-end;
width: 50%;

`;

export const ButtonNavegation = styled.div`
display: flex;
width: 131px;
height: 100px;
background: ${props => props.theme.colors.white};
justify-content: center;
text-align: center;
align-items: center;

a{
position: absolute;
width: 95.49px;
height: 28.56px;
font-family: Mark Pro;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
text-align: center;
color: #C13216;
}


`;

export const ButtonLogout = styled.div`
display: flex;
width: 128px;
height: 55px;
margin-top: 22px;
justify-content: center;
text-align: center;
align-items: center;
color: ${props => props.theme.colors.white};

 a{

font-family: 'Mark Pro', Mark Pro;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 15px;
display: flex;
align-items: center;
text-align: center;
 }

`;


 

 

