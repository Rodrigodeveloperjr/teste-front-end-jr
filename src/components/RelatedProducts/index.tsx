import { ListProducts } from "../ListProducts";
import { NavProducts } from "../NavProducts";
import { Container } from "./style";

const RelatedProducts = () => {
  return (
    <Container>
      <NavProducts />
      <ListProducts />
    </Container>
  );
};

export { RelatedProducts };
