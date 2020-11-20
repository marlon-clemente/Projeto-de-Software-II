import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.2rem 0;
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin-right: 1.6rem;

    background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
    border: 1px solid #A1E9C5;
    border-radius: 20px 20px 0px 0px;
    
    height: 72px;
    width: 100%;

    color: #4D6F80;

    p{
      margin-left: 1.6rem;
      font: 600 1.6rem Roboto;
    }
  }
  .copy{
    display:flex;
    align-items: center;
    justify-content: center;

    margin-top: -1px;

    height: 48px;
    width: 100%;
      
    border: 1px solid #A1E9C5;
    border-radius: 0px 0px 20px 20px;
    background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
    
    cursor: pointer;
    transition: 0.6s;
    p{
      font: 400 1.2rem Roboto;
    }
    :hover{
      background: #A1E9C5
    }
  }
`;
