import { TitleRelatedProducts } from "../TitleRelatedProducts";
import { IListProducts } from "../../interfaces";
import { ListProducts } from "../ListProducts";
import { Container } from "./style";

const OtherRelatedProducts = ({ setOpenModal, products }: IListProducts) => {
  return (
    <Container>
      <div>
        <TitleRelatedProducts />
        <p>Ver todos</p>
      </div>

      <ListProducts setOpenModal={setOpenModal} products={products} />
    </Container>
  );
};

export { OtherRelatedProducts };
