import styled from 'styled-components';

export const AlertContainerDiv = styled.div`
  width: 100%;

  background: #def0d8;
  color: #4D6F80;
  border: 1px solid #4D6F80;

  padding: 16px;
  margin: 1.6rem;
  
  text-transform: uppercase;
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 20px;
  
  font: 500 1.6rem Roboto;

  box-sizing: border-box;
  
  .button-alert{
    margin: 0 2rem;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: #4D6F80
  }
`;
