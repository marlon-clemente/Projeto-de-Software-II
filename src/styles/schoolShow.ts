import styled from 'styled-components';

export const ContainerShoolShow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .title{
    font: 500 2rem Roboto;
  }

  .text{
    margin-top: 2.4rem;
    font: 500 1.6rem Roboto;
    color: #4d6f80;
  }
  
  .button-map{
    width: 100%;
    height: 48px;
    background: #F0F0F7;
    border-radius: 0px 0px 20px 20px;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    font: 700 1.4rem Roboto;
    color: #4D6F80;

    cursor: pointer;
    transition: 0.2s;
    
    p {
      margin-left: 0.8rem;
    }

    :hover{
      background-color: #eceeed;
    }
  }
`;
