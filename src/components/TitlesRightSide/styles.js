import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

export const H1 = styled.h1`
  display: flex;
  color: ${(props) => props.color};
  font-family: Mark Pro;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.lineRight};
`;
