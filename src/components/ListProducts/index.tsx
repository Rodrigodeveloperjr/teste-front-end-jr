import arrowRight from "../../assets/Vector (1).svg";
import { IListProducts } from "../../interfaces";
import arrowLeft from "../../assets/Vector.svg";
import { Product } from "../Product";
import { Container } from "./style";

const ListProducts = ({ setOpenModal, products }: IListProducts) => {
  return (
    <Container>
      <img src={arrowLeft} alt="seta para esquerda" />
      <menu>
        {products.map((product, i) => (
          <Product product={product} key={i} setOpenModal={setOpenModal} />
        ))}
      </menu>
      <img src={arrowRight} alt="seta para direita" />
    </Container>
  );
};

export { ListProducts };
