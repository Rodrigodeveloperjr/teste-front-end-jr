import styled from "styled-components";

const Container = styled.nav`
  width: 100%;
  max-width: 1141px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > a {
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;

    color: var(--color-gray);
    text-transform: uppercase;
  }

  & > .aPink {
    color: var(--color-pink);
  }

  & > a:nth-last-child(1) {
    display: flex;
    flex-direction: row;

    & > img {
      padding-right: 12px;
    }
  }
`;

export { Container };
