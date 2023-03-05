import styled, { keyframes } from "styled-components";

const menuOpen = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 70%;
  }
`;

const Container = styled.div`
  display: none;

  & > div {
    width: 70%;

    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    z-index: 2000;

    background-color: var(--color-white);
    border-left: 2.5px solid var(--color-white-four);

    padding: 10px;
    animation: ${menuOpen} 1s forwards;

    & > div:nth-child(1) {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: flex-end;

      padding: 18px 0;

      & > img {
        width: 25px;
        height: 25px;
      }
    }

    & > .divInput {
      display: flex;
      flex-direction: column;

      border-bottom: 1px solid var(--color-white-four);

      & > div:nth-last-child(1) {
        padding: 10px;
      }
    }

    & > .sessions {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding-top: 15px;

      & > p {
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;

        color: var(--color-gray);
        text-transform: uppercase;

        cursor: pointer;
        padding: 10px 0;
      }

      .aPink,
      p:hover {
        color: var(--color-pink);
        transition: 0.5s;
      }
    }

    & > .promotions {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      position: absolute;
      bottom: 0;

      & > div {
        display: flex;
        flex-direction: row;

        padding: 7px 0;

        & > p {
          padding-left: 12.12px;
          display: flex;
          flex-direction: row;

          font-weight: 500;
          font-size: 12px;
          line-height: 18px;

          color: var(--color-gray);

          & > p:nth-child(1) {
            padding-left: 3px;

            font-weight: 600;
            color: var(--color-pink);
          }
        }
      }
    }
  }
`;

export { Container };
