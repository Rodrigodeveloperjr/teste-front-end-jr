import crown from "../../assets/CrownSimple.svg";
import { Container } from "./style";

const Sessions = () => {
  return (
    <Container>
      <p>Todas Categorias</p>
      <p>Supermercado</p>
      <p>Livros</p>
      <p>Moda</p>
      <p>Lançamentos</p>
      <p className="aPink">Ofertas do dia</p>
      <div>
        <img src={crown} alt="coroa" />
        <p>Assinatura</p>
      </div>
    </Container>
  );
};

export { Sessions };
