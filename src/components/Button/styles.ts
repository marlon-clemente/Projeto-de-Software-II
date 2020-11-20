import styled from 'styled-components';

export const ContainerButton = styled.div`
  display: flex;
  width: 100%;
  height: 48px;

  margin: 1.6rem 0;

  align-items: center;
  justify-content: center;

  background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
  border: 1px solid #A1E9C5;
  border-radius: 20px;

  color: #4D6F80;

  cursor: pointer;
  transition: 0.6s;

  p {
    margin-left: 1.6rem;
  }

  :hover{
    background: #A1E9C5;
  }
`;
