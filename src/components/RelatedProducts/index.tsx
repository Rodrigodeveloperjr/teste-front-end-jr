import { IListProducts } from "../../interfaces";
import { ListProducts } from "../ListProducts";
import { NavProducts } from "../NavProducts";
import { Container } from "./style";

const RelatedProducts = ({ setOpenModal, products }: IListProducts) => {
  return (
    <Container id="products">
      <NavProducts />
      <ListProducts products={products} setOpenModal={setOpenModal} />
    </Container>
  );
};

export { RelatedProducts };
