import photo from "../../assets/Grupo de máscara 20 1.png";
import { Container } from "./style";
import x from "../../assets/x.svg";

interface IModalDetailsProduct {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalDetailsProduct = ({ setOpenModal }: IModalDetailsProduct) => {
  return (
    <Container>
      <img src={x} alt="" onClick={() => setOpenModal(false)} />

      <div>
        <img src={photo} alt="" />

        <div>
          <h2>LOREM IPSUM DOLOR SIT AMET</h2>

          <span>R$ 1.499,90</span>

          <p>
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>

          <a>Veja mais detalhes do produto {">"}</a>
        </div>
      </div>
    </Container>
  );
};

export { ModalDetailsProduct };
