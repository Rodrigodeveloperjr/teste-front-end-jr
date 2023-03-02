import { Container } from "./style";
import x from "../../assets/x.svg";

interface IModalDetailsProduct {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  product: any;
}

const ModalDetailsProduct = ({
  setOpenModal,
  product,
}: IModalDetailsProduct) => {
  return (
    <Container>
      <img src={x} alt="" onClick={() => setOpenModal(false)} />

      <div>
        <img src={product.photo} alt={product.productName} />

        <div>
          <h2>{product.productName}</h2>

          <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>

          <p>{product.description}</p>

          <a>Veja mais detalhes do produto {">"}</a>
        </div>
      </div>
    </Container>
  );
};

export { ModalDetailsProduct };
