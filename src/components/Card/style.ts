import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 589.73px;
  height: 284px;

  position: relative;
  border-radius: 10px;


  & > img {
    width: 100%;
    height: 284px;

    border-radius: 10px;
    mix-blend-mode: normal;
  }

  & > div {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;

    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      var(--color-black-three) 85.04%
    );

    border-radius: 10px;
    padding: 48px 39px 39px 39px;

    h2,
    h3 {
      color: var(--color-white);
    }

    & > h2 {
      font-weight: 700;
      font-size: 40px;
      line-height: 60px;

      padding-bottom: 9px;
    }

    & > h3 {
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;

      width: 100%;
      max-width: 185.96px;

      padding-bottom: 32px;
    }
  }
`;

export { Container };
