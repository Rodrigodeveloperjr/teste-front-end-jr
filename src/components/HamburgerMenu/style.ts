import styled from "styled-components";

const Container = styled.div`
  display: none;

  .menu {
    width: 60px;
    height: 60px;
    cursor: pointer;
  }

  .hamburguer {
    position: relative;
    display: block;
    background: var(--color-gray);
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before,
  .hamburguer:after {
    background: var(--color-gray);
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before {
    top: -10px;
  }

  .hamburguer:after {
    bottom: -10px;
  }

  input {
    display: none;
  }

  input:checked ~ label .hamburguer {
    transform: rotate(45deg);
  }

  input:checked ~ label .hamburguer:before {
    transform: rotate(90deg);
    top: 0;
  }

  input:checked ~ label .hamburguer:after {
    transform: rotate(90deg);
    bottom: 0;
  }

  & > div {
    width: 250px;

    position: absolute;
    top: 80px;
    right: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    z-index: 2000;

    background-color: var(--color-white);
    box-shadow: 0px 3px 5px var(--shadow-three);

    & > p {
      margin: 15px;
      font-size: 20px;
      transition: all 0.3s;

      color: var(--color-gray);

      &:hover {
        color: var(--color-gray);
      }
    }
  }
`;

export { Container };
