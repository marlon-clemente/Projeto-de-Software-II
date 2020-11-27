import styled from 'styled-components';

export const ContainerDropdownList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  padding: 1.6rem 0;

  top: 6rem;
  width: 48%;
  height: auto;
  max-height: 45rem;
  overflow: auto;
  background-color: #ffffff;
  z-index: +6;
  border-radius: 0 0 12px 12px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  .iten-school-list{
    display: flex;
    align-items: center;

    height: 512px;
    width:100%;

    :hover{
      background-color: #c3c3c3;
      cursor: pointer;
    }
    a {
      margin: 1.2rem 2.4rem;
      text-decoration: none;
      color: #000000;
      font: 500 1.8rem Roboto;
    }
  }
`;
