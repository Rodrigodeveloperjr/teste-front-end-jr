import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 128px;
  height: 174px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;

  &:nth-child(1) {
    & > div {
      background-color: var(--color-white);
    }
    & > p {
      color: var(--color-pink);
    }
  }

  &:hover {
    & > div {
      background-color: var(--color-white);
    }
    & > p {
      color: var(--color-pink);
    }
  }

  & > div {
    width: 100%;
    height: 128px;

    background-color: var(--color-white-three);
    box-shadow: 0px 4px 11px var(--shadow);
    border-radius: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  }

  & > p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    text-align: center;
    color: var(--color-gray-three);
  }
`;

export { Container };
