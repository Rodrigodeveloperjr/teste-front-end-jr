import { TitleRelatedProducts } from "../TitleRelatedProducts";
import { ListProductsSecond } from "../ListProductsSecond";
import { IListProducts } from "../../interfaces";
import { Container } from "./style";

const OtherRelatedProducts = ({ setOpenModal, products }: IListProducts) => {
  return (
    <Container>
      <div>
        <TitleRelatedProducts />
        <p>Ver todos</p>
      </div>

      <ListProductsSecond setOpenModal={setOpenModal} products={products} />
    </Container>
  );
};

export { OtherRelatedProducts };
