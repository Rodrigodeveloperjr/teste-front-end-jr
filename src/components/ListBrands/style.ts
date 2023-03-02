import styled from "styled-components";

const Container = styled.div`
  padding: 105px 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 45px;

    color: var(--color-pink);
    padding-bottom: 60px;
  }

  & > menu {
    display: flex;
    flex-direction: row;

    padding: 10px;

    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export { Container };
