import arrowRight from "../../assets/Vector (1).svg";
import arrowLeft from "../../assets/Vector.svg";
import { Product } from "../Product";
import { Container } from "./style";

interface IListProducts {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  products: any;
}

const ListProducts = ({ setOpenModal, products }: IListProducts) => {
  return (
    <Container id="products">
      <img src={arrowLeft} alt="seta para esquerda" />
      <menu>
        {products.map((product: any, i: any) => (
          <Product product={product} key={i} setOpenModal={setOpenModal} />
        ))}
      </menu>
      <img src={arrowRight} alt="seta para direita" />
    </Container>
  );
};

export { ListProducts };
