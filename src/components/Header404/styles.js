import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 103px;
display: flex;
position: absolute;
justify-content: space-between;
align-items: center;
background-color: #212121;



> img{
  margin-left: 50px;
 width: 200px;
 height: 50px;



}

`;

export const ContainerRight = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
width: 70%;
height: 70%;
margin-right: 41px;
margin-top: 5px;


`;

export const Link = styled.a`
font-size: 18px;
line-height: 18px;
margin-left: 44px;
transition: 2s all;

&:hover, &:focus{

  cursor: pointer;
  opacity: .6 ;
}



`;







