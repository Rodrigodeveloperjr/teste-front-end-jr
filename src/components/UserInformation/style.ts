import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1224px;
  height: 72px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > div {
    width: 100%;
    max-width: 990px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > div:nth-child(2) {
      width: 100%;
      max-width: 272px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      & > img {
        cursor: pointer;
      }
    }
  }
`;

export { Container };
