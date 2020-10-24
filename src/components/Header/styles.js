import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
max-width: 1920px;
height: 103px;
display: flex;
justify-content: space-between;

> img{
margin-left: 40px;
}

`;

export const ContainerTemperature = styled.div`
display: flex;
flex-direction: column;
width: 121px;
height: 78px;
margin-right: 41px;

> h5{
font-family: Mark Pro;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
margin-top: 25px;
margin-bottom: 17px;
color: #222222;

}

`;

export const LocationTemperature = styled.div`

img.nuvem{
 fill: #454545;
 margin-right: 12px;
}

img.temperature{
width: 75px;
height: 61px;
}

`;


