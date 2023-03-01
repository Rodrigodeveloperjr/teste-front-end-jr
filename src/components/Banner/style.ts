import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1443px;

  position: relative;
  margin: 0 auto;

  margin-top: -2px;

  & > img {
    width: 100%;
    height: 395px;

    mix-blend-mode: normal;
    opacity: 0.8;
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

    padding: 52px 92px 50px 92px;

    & > h1 {
      font-size: 48px;
      line-height: 72px;

      width: 100%;
      max-width: 550px;

      padding-bottom: 16px;
    }

    & > h2 {
      font-size: 36px;
      line-height: 54px;

      padding-bottom: 35px;
    }

    h1,
    h2,
    a {
      font-weight: 600;
      color: var(--color-white);
    }

    & > a {
      width: 100%;
      max-width: 227px;
      height: 60px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      border-radius: 5px;
      background-color: var(--color-pink);
      border: 1.5px solid var(--color-pink);

      font-size: 18px;
      line-height: 27px;
    }
  }
`;

export { Container };
