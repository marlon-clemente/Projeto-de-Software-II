import styled, { css } from 'styled-components';

export const ContainerButton = styled.div<{ gradient ?: boolean }>`
  display: flex;
  width: 100%;
  height: 48px;

  margin: 1.6rem 0;

  align-items: center;
  justify-content: center;

  border-radius: 20px;

  cursor: pointer;
  transition: 0.6s;

  ${(props:any) =>
    props.gradient ?
    css`
      background: linear-gradient(139.9deg, #67e093 21.43%, #01ada9 63.8%);
      color: #FFFFFF;
      
      :hover{
        background: linear-gradient(139.9deg, #01ada9 21.43%, #67e093 63.8%);
      } 
    ` : 
    css`
      color: #4D6F80;
      border: 1px solid #A1E9C5;
      background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
      
      :hover{
        background: #A1E9C5;
      } 
    `
  }

  p {
    margin-left: 1.6rem;
  }
`;
