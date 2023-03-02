import styled from "styled-components";

const Container = styled.footer`
  width: 100%;
  height: 395px;

  background-color: var(--color-black);

  margin-top: 200px;

  & > div:nth-child(1) {
    height: 325px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 33px 93px 33px 96px;

    & > div {
      display: flex;
      flex-direction: row;

      & > div {
        padding-left: 93px;

        & > h3 {
          font-weight: 700;
          font-size: 13px;
          line-height: 20px;

          color: var(--color-white);
        }

        & > nav {
          display: flex;
          flex-direction: column;

          padding-top: 24px;

          & > a {
            font-weight: 300;
            font-size: 12px;
            line-height: 32px;

            text-transform: uppercase;
            color: var(--color-white);

            :hover {
              text-decoration: underline;
            }
          }
        }

        & > .navSocialMedia {
          flex-direction: row;
          justify-content: space-between;

          & > img {
            cursor: pointer;
          }
        }

        & > div {
          width: 100%;
          max-width: 195px;

          flex-wrap: wrap;

          display: flex;
          flex-direction: row;
          justify-content: space-between;

          padding-top: 24px;

          & > img {
            width: 40px;
            margin: 10px 10px 10px 0;
          }
        }
      }
    }
  }

  & > div:nth-child(2) {
    width: 100%;
    height: 70px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 19px 106.92px 19px 93px;
    border-top: 1.5px solid var(--color-white);

    & > p {
      font-weight: 400;
      font-size: 10px;
      line-height: 13px;

      color: var(--color-white);
      text-transform: uppercase;

      width: 100%;
      max-width: 698px;
    }

    & > div {
      width: 100%;
      max-width: 226.08px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export { Container };
