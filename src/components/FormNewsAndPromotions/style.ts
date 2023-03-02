import styled from "styled-components";

const Container = styled.form`
  width: 100%;
  max-width: 380px;
  height: 260px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 40px 29px;

  border-radius: 10px;
  background-color: var(--color-white);

  & > p {
    font-weight: 300;
    color: var(--color-gray-two);
  }

  & > p:nth-child(1) {
    font-size: 18px;
    line-height: 26px;

    text-align: left;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  & > p:nth-child(2) {
    font-size: 12px;
    line-height: 19px;

    text-align: center;

    width: 100%;
    max-width: 310px;
    padding-top: 15px;
  }

  & > div {
    width: 100%;
    max-width: 301px;
    height: 45px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 31px;

    & > input {
      border: 1px solid var(--color-black-two);
      padding: 13px 25px 12px 25px;

      font-weight: 400;
      font-size: 12px;
      line-height: 20px;

      border-radius: 4px;
      margin-right: 9px;

      &:hover {
        color: var(--color-white-six);
      }
    }
  }
`;

export { Container };
