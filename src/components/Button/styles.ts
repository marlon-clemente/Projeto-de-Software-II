import styled, { css } from "styled-components";

export const ContainerButton = styled.div<{ gradient?: boolean }>`
  display: flex;
  width: 100%;
  height: 48px;

  margin: 1.2rem 0;

  align-items: center;
  justify-content: center;

  border-radius: 20px;

  cursor: pointer;
  transition: 0.6s;

  font-family: Roboto;

  ${(props: any) =>
    props.gradient
      ? css`
          background: linear-gradient(139.9deg, #67e093 21.43%, #01ada9 63.8%);
          color: #ffffff;

          :hover {
            background: linear-gradient(
              139.9deg,
              #01ada9 21.43%,
              #67e093 63.8%
            );
          }
        `
      : props.facebook
      ? css`
          background: #507cbe;
          color: #f7f7f7;

          :hover {
            color: #507cbe;
            border: 1px solid #507cbe;
            background: #f7f7f7;
          }
        `
      : props.google
      ? css`
          background: #db4437;
          color: #f7f7f7;

          :hover {
            color: #db4437;
            border: 1px solid #db4437;
            background: #f7f7f7;
          }
        `
      : css`
          color: #4d6f80;
          border: 1px solid #a1e9c5;
          background: linear-gradient(154.16deg, #edfff6 7.85%, #ffffff 91.03%);

          :hover {
            background: #a1e9c5;
          }
        `}

  p {
    margin-left: 1.6rem;
  }
`;
