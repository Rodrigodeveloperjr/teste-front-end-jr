import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1264px;
  height: 89px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 120px;
  margin: 0 auto;

  & > h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;

    color: var(--color-pink);
    padding-bottom: 4px;

    &::before {
      left: 76px;
    }

    &::after {
      right: 76px;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      bottom: 20px;

      width: 100%;
      max-width: 360px;
      height: 1px;

      background-color: var(--color-gray-four);
    }
  }

  & > nav {
    width: 100%;
    height: 40px;

    border-top: 1.5px solid var(--color-gray-five);
    border-bottom: 1.5px solid var(--color-gray-five);
    border-right: 1.5px solid var(--color-gray-five);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > a {
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;

      align-items: center;
      text-transform: uppercase;
      color: var(--color-gray-six);

      border-left: 1.5px solid var(--color-gray-five);

      padding: 12px 58px;

      &:hover,
      &:nth-child(1) {
        font-weight: 700;
        color: var(--color-pink);
      }
    }
  }
`;

export { Container };
