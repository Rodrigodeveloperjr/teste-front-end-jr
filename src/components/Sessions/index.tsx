import crown from "../../assets/CrownSimple.svg";
import { Container } from "./style";

const Sessions = () => {
  return (
    <Container>
      <a>Todas Categorias</a>
      <a>Supermercado</a>
      <a>Livros</a>
      <a>Moda</a>
      <a>Lançamentos</a>
      <a className="aPink">Ofertas do dia</a>
      <a>
        <img src={crown} alt="coroa" />
        <p>Assinatura</p>
      </a>
    </Container>
  );
};

export { Sessions };
