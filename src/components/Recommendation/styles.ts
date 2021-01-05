import styled from "styled-components";

export const ContainerRecommendation = styled.div`
  width: 100%;
  height: auto;

  margin: 1.2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px #4d6f80;
  border-radius: 20px;

  /* background-color: #eceeed; */

  span {
    font: 500 4.8rem Ubuntu;
    padding: 0.8rem;
  }
  h4 {
    font: 600 1.8rem Roboto;
  }

  p {
    font: 600 1.8rem Roboto;
    color: #4d6f80;
    padding: 0.8rem;
  }

  .none-recommendation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 2rem;
    span {
      font: 500 1.4rem Roboto;
      margin-top: 1.6rem;
    }

    strong {
      margin-top: 0.8rem;
      margin-bottom: 1.6rem;
      color: #4d6f80;
      font: 800 1.8rem Roboto;
    }
  }

  .new-box-recommendation {
    width: 100%;
    margin: 1.2rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    border: 1px #4d6f80;
    border-radius: 20px;

    background-color: #eceeed;

    .buttons-box-new-recommendation {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    strong {
      padding: 1.6rem;
      font: 700 1.8rem Ubuntu;
    }

    span {
      font: 500 1.8rem Ubuntu;
      padding: 1.6rem;
    }
  }
`;
