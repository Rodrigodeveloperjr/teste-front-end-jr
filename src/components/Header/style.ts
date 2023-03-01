import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  max-width: 1280px;

  border-bottom: 1px solid var(--color-white-four);

  & > div:nth-child(1) {
    width: 100%;
    max-width: 714.5px;
    height: 32px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > div {
      display: flex;
      flex-direction: row;

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
`;

export { Container };
