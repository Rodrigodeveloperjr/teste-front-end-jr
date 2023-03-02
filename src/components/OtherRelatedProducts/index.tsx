import { ListProducts } from "../ListProducts";
import { TitleRelatedProducts } from "../TitleRelatedProducts";
import { Container } from "./style";

const OtherRelatedProducts = () => {
  return (
    <Container>
      <div>
        <TitleRelatedProducts />
        <p>Ver todos</p>
      </div>

      <ListProducts />
    </Container>
  );
};

export { OtherRelatedProducts };
