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
        padding-right: 93px;

        & > h3 {
          font-weight: 700;
          font-size: 13px;
          line-height: 20px;

          color: var(--color-white);
        }

        & > div,
        & > nav {
          display: flex;
          flex-direction: column;

          padding-top: 24px;

          & > p {
            position: relative;
            width: min-content;

            font-weight: 300;
            font-size: 12px;
            line-height: 32px;

            text-transform: uppercase;
            color: var(--color-white);

            white-space: nowrap;

            cursor: pointer;

            ::after, ::before {
              content: "";
              position: absolute;
              bottom: -1px;
              height: 2px;
              transition: 0.3s;
              background-color: var(--color-white);
            }

            ::after {
              left: 0px;
              width: 0;
            }

            :hover::after {
              width: 100%;
            }

            :hover::before {
              width: 0;
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

        & > .paymentMethods {
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

      text-transform: uppercase;
      color: var(--color-white);

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

  @media (max-width: 1440px) {
    & > div:nth-child(1),
    & > div:nth-child(2) {
      justify-content: center;
      text-align: center;

      & > div {
        display: none;
      }
    }
  }

  @media (max-width: 768px) {
    & > div:nth-child(1),
    & > div:nth-child(2) {
      padding: 20px;
    }

    & > div:nth-child(2) {
      height: unset;
      background-color: var(--color-black);
    }
  }
`;

export { Container };
