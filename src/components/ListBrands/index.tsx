import arrowRight from "../../assets/Vector (2).svg";
import { Container } from "./style";
import { Brand } from "../Brand";

const ListBrands = () => {
  return (
    <Container>
      <h2>Navegue por marcas</h2>

      <menu>
        <Brand />
        <Brand />
        <Brand />
        <Brand />
        <Brand />

        <div className="arrowRight">
          <img src={arrowRight} alt="seta para a direita" />
        </div>
      </menu>
    </Container>
  );
};

export { ListBrands };
