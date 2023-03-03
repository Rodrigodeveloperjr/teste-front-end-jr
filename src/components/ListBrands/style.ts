import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1550px;

  margin: 0 auto;
  padding: 105px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  & > h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;

    color: var(--color-pink);
    padding-bottom: 60px;
  }

  & > menu {
    width: 100%;
    max-width: 1280px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    padding: 10px;

    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  & > .arrowRight {
    position: absolute;
    right: 10%;
    top: 300px;
    width: 56px;
    height: 56px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background: var(--color-white);
    box-shadow: 0px 4px 10px var(--shadow-five);

    cursor: pointer;
  }
`;

export { Container };
