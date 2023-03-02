import { TitleRelatedProducts } from "../TitleRelatedProducts";
import { ListProducts } from "../ListProducts";
import { Container } from "./style";

interface IOtherRelatedProducts {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  products: any;
}

const OtherRelatedProducts = ({
  setOpenModal,
  products,
}: IOtherRelatedProducts) => {
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
