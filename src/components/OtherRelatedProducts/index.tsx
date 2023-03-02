import { TitleRelatedProducts } from "../TitleRelatedProducts";
import { ListProducts } from "../ListProducts";
import { Container } from "./style";

interface IOtherRelatedProducts {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const OtherRelatedProducts = ({ setOpenModal }: IOtherRelatedProducts) => {
  return (
    <Container>
      <div>
        <TitleRelatedProducts />
        <p>Ver todos</p>
      </div>

      <ListProducts setOpenModal={setOpenModal} />
    </Container>
  );
};

export { OtherRelatedProducts };
