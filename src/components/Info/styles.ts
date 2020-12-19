import styled from 'styled-components';

export const AlertContainer = styled.div`
  width: 100%;
  min-height: 64px;
  margin: 1.2rem 0;
  display: flex;
  align-items: center;
  padding-left: 1.6rem;

  background: linear-gradient(154.16deg, #EDF3FF 7.85%, #FFFFFF 91.03%);
  border: 1px solid #A1BEE9;

  box-sizing: border-box;
  border-radius: 20px;

  > p {
    color: #3782C7;
    margin: 1.6rem;
    font-weight: 500;
    > b {
      font-weight: 800;
    }
  }
`;
