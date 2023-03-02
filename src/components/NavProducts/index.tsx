import { TitleRelatedProducts } from "../TitleRelatedProducts";
import { Container } from "./style";

const NavProducts = () => {
  return (
    <Container>
      <TitleRelatedProducts />

      <nav>
        <a>celular</a>
        <a>acessórios</a>
        <a>tablets</a>
        <a>notebooks</a>
        <a>TVs</a>
        <a>Ver todos</a>
      </nav>
    </Container>
  );
};

export { NavProducts };
