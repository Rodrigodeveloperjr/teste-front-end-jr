import styled from "styled-components";

const Container = styled.menu`
  width: 100%;
  max-width: 1277px;
  height: 174px;

  flex-wrap: wrap;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 0 auto;
  align-self: center;
  padding-top: 34px;

  @media (max-width: 1100px) {
    height: 300px;
    justify-content: center;
  }

  @media (max-width: 640px) {
    height: 470px;
  }

  @media (max-width: 480px) {
    height: 650px;
  }
`;

export { Container };
