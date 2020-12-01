import styled from 'styled-components';

export const ContainerShoolShow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .text{
    margin: 1.2rem 0;
    font: 500 1.6rem Roboto;
    color: #4d6f80;
  }
  
  .buttons-shared {
    display: flex;
  }

  .header-recommendation-schools{
    width: 100%;
    height: auto;
    display: flex;
    margin: 0;
    align-items:center;
    margin: 1.2rem 0;

    .title-rs {
      font: 500 2rem Roboto;
      display: flex;
      flex-grow: 1;
      align-items: center;
      p {
        margin-left: 1.6rem;
      }
    }
    .button-show-info-recommendation-schools{
      display: flex;
      align-items:center;
      transition: 0.2s;

      p { 
        color: #4D6F80;
        font: 500 1.6rem Roboto;
        cursor: pointer;
        :hover{
          color: #000000;
        }
      }
    }
  }
  .title{
    font: 500 2rem Roboto;
    display: flex;
    flex-grow: 1;
    align-items: center;
    margin: 1.2rem 0;
    p {
      margin-left: 1.6rem;
    }
    :first-child{
      margin-top: 2.4rem;
    }
  }
`;
