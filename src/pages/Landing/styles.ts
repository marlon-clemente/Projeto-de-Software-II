import styled from 'styled-components';

import Background from '../../assets/landing.svg';

export const LandingPager = styled.div`
  background: linear-gradient(329.54deg, #67e093 0%, #01ada9 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
  .landing-content {
    width: 90%;
    max-width: 1100px;
    height: 100vh;
    padding-top: 4.5rem;

    background: url(${Background}) no-repeat 100% center;

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 60px 350px 1fr;
    grid-template-areas:
      "logo location"
      "text img"
      "button img";

    .logo {
      grid-area: logo;
    }
    .landing-location {
      grid-area: location;
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      strong{
        font-weight: 800;
      }

      span {
        font-weight: 500;
      }
    }
    .landing-text {
      grid-area: text;
      display: flex;
      margin-top: 4.6rem;
      flex-direction: column;
      justify-content: space-between;
      
      h1{
        font-size: 4.8rem;
        font-weight: 500;
        font-family: Fredoka One;
      }

      strong{
        font: 400 2.4rem Ubuntu;
      }

    }

    .landing-button{
      grid-area: button;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .enter-app {
        width: 35rem;
        height: 64px;
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        margin: 1.6rem auto;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: 0.2s;
        color: rgba(0, 0, 0, 3.6);
        text-decoration: none;
        :hover {
          background: #f1f1f1;
        }
        p{
          margin-right: 1.6rem;
        }
      }
    }
    .imagem-bc {
      display: none
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .landing-content{
      width: 100%;
      max-width: 90%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 2fr 1fr 1fr 1fr;
      grid-template-areas: 
        "logo"
        "imagebc"
        "landingtext"
        "landingbutton"
        "landinglocation"; 
      
      background: none;

      .logo{
        grid-area: logo;
      }
      .imagem-bc{
        grid-area: imagebc;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        img{
          height: 100%;
        }
      }
      .landing-text{
        grid-area: landingtext;
        display: flex;
        flex-direction: column;
        h1{
          font-size: 3.2rem;
          font-weight: 500;
          font-family: Fredoka One;
        }
        strong {
          margin-top: 1.6rem;
          font: 400 2.4rem Ubuntu;
        }
      }
      .landing-button{
        grid-area: landingbutton;
        .enter-app {
          width: 100%;
          height: 80px;
          background: #ffffff;
          border-radius: 30px;
          
          margin: 1.6rem auto;
  
          display: flex;
          align-items: center;
          justify-content: center;
  
          transition: 0.2s;
          color: rgba(0, 0, 0, 3.6);
          text-decoration: none;
          :hover {
            background: #f1f1f1;
          }
        }
      }
      .landing-location{
        grid-area: landinglocation;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1.6rem auto;
        strong{
          font-weight: 800;
        }
        span{
          font-weight: 500;
        }
      }
    }   
  }
`;
