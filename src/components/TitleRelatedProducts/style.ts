import styled from "styled-components";

const Container = styled.div`
  height: 45px;

  display: flex;
  flex-direction: row;
  align-items: center;

  & > hr {
    width: 360px;
    height: 1px;

    border: none;
    background-color: var(--color-gray-four);
  }

  & > h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;

    color: var(--color-pink);
    padding: 0 34px 4px 34px;
  }
`;

export { Container };
