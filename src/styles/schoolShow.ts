import styled from 'styled-components';

export const ContainerShoolShow = styled.div`
  h2{
    font: 500 2rem Roboto;
  }

  p{
    margin-top: 2.4rem;
    font: 500 1.6rem Roboto;
    color: #4d6f80;
  }
  .map_container{
    width: 100%;
    height: 250px;
    border-radius: 20px;
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

    :hover{
      /* background-color: red; */
    }
  }
`;
