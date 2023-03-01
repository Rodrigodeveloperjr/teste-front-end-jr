import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  max-width: 1280px;

  box-shadow: 0px 8px 16px var(--shadow-two);

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > hr {
    width: 100%;
    border: none;
    height: 1px;
    background: var(--color-white-four);
  }
`;

export { Container };
