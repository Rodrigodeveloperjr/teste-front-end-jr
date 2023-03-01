import magnifyingGlass from "../../assets/MagnifyingGlass.svg";
import { Container } from "./style";

const Input = () => {
  return (
    <Container>
      <input type="text" placeholder="O que você está buscando?" />
      <img src={magnifyingGlass} alt="magnifying glass" />
    </Container>
  );
};

export { Input };
