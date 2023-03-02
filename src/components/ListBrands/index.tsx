import { Container } from "./style";
import { Brand } from "../Brand";

const ListBrands = () => {
  return (
    <Container>
      <h2>Navegue por marcas</h2>

      <menu>
        <Brand />
        <Brand />
        <Brand />
        <Brand />
        <Brand />
      </menu>
    </Container>
  );
};

export { ListBrands };
