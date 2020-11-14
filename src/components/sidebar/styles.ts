import styled from 'styled-components';

export const Aside = styled.aside`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  align-items:center;
  flex-direction: column;

  overflow: scroll;

  head{
    width: 100%;
    height: 35rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    
    background: linear-gradient(139.9deg, #67e093 21.43%, #01ada9 63.8%);
    
    .content{
      width: 90%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-top: 6.8rem;
      
      max-width: 1100px;
    }
    .name-school{
      display: flex;
      align-items: flex-start;
      
      margin-top: 4.2rem;
      width: 720px;

      color: #ffffff;
      font: 700 3.8rem Roboto;
    }
    a{
      display: flex; 
      align-items: center;
      justify-content: space-between;
      text-decoration: none;
      margin: 1.6rem 0;
      font: 500 1.8rem Roboto;
      color: #ffff;
    }
  }

  main{
    width: 720px;
    height: auto;
    padding: 6.4rem 7rem;

    margin-top: -7.2rem;

    color: #000000;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #ffffff;
    border-radius: 20px;
    
    display: flex;
    flex-direction: column;
    align-items: initial;
    justify-content: start;
  }

  @media (max-width: 768px){
    head{
      .name-school{
        width: 90%;
      }
    }
    main{
      width: 90%;
      padding: 2.8rem 2.4rem;
    }
  }
`; 
