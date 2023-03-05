import { TitleRelatedProducts } from "../TitleRelatedProducts";
import { Container } from "../OtherRelatedProducts/style";
import { ListProductsThird } from "../ListProductsThird";
import { IListProducts } from "../../interfaces";

const OtherRelatedProductsSecond = ({
  setOpenModal,
  products,
}: IListProducts) => {
  return (
    <Container>
      <div>
        <TitleRelatedProducts />
        <p>Ver todos</p>
      </div>

      <ListProductsThird setOpenModal={setOpenModal} products={products} />
    </Container>
  );
};

export { OtherRelatedProductsSecond };
