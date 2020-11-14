import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  .info {
    display: flex;
    align-items: center;
    justify-content: center;
    

    background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
    border: 1px solid #A1E9C5;
    border-radius: 20px 20px 0px 0px;
    
    height: 72px;
    width: 300px;

    p{
      font: 400 1.2rem Roboto;
    }
  }
  .copy{
    display:flex;
    align-items: center;
    justify-content: center;

    margin-top: -1px;

    height: 48px;
    width: 300px;
      
    border: 1px solid #A1E9C5;
    border-radius: 0px 0px 20px 20px;
    background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);

  p{
    font: 400 1.2rem Roboto;
  }
  
}
`;
