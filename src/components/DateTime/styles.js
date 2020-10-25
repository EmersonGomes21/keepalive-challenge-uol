import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
margin-top: -60px;
> h1{
font-family: Mark Pro;
font-style: normal;
font-weight: bold;
font-size: 144px; 
line-height: 120px;
text-align: center;
color: ${props => props.theme.colors.text};
}
  
  > h5{
font-family: Mark Pro;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 18px;
color: ${props => props.theme.colors.text};

  }
`;
