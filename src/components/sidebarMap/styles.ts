import styled from "styled-components";

export const ContainerSidebarMap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;

  .header-sidebar {
    background: linear-gradient(329.54deg, #67e093 0%, #01ada9 100%);
    width: 100vw;
    height: 9rem;

    padding: 0 10%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    img {
      height: 3.5rem;
    }

    .location-header {
      align-items: flex-end;
      display: flex;
      flex-direction: column;
      line-height: 2.4rem;
      margin-left: 1.6rem;

      strong {
        font-family: Ubuntu;
        font-weight: 800;
      }
      span {
        font-family: Ubuntu;
        font-weight: 500;
      }
    }
  } /* [end] - header-sidebar */

  .page-show-content {
    width: 100%;
    height: 100%;
  }

  .search {
    display: flex;
    flex-direction: column;
    width: 60%;

    .search-selected {
      display: flex;
      align-items: center;
      background: #ffffff;
      height: 40px;
      width: 100%;
      padding: 0 1.6rem;
      border-radius: 12px 12px 0px 0px;

      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

      input {
        margin-left: 1.6rem;
        width: 90%;
        color: #c3c3c3;
        border: none;

        :focus {
          outline: none;
        }
      }
      span {
        color: #c3c3c3;
        :hover {
          cursor: pointer;
        }
      }
    }

    .searchInput {
      display: flex;
      align-items: center;
      background: #ffffff;
      height: 40px;
      width: 100%;
      padding: 0 1.6rem;
      border-radius: 12px;

      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

      input {
        margin-left: 1.6rem;
        width: 90%;
        color: #c3c3c3;
        border: none;

        :focus {
          outline: none;
        }
      }
    }
  } /* [end] - search */

  @media (max-width: 768px) {
    .header-sidebar {
      display: flex;

      .location-header {
        display: none;
      }
    }
  }
`;
