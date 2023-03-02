import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1141px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: var(--color-gray);
    text-transform: uppercase;

    cursor: pointer;
  }

  & > .aPink {
    color: var(--color-pink);
  }

  & > div:nth-last-child(1) {
    display: flex;
    flex-direction: row;

    & > img {
      padding-right: 12px;
    }
  }
`;

export { Container };
