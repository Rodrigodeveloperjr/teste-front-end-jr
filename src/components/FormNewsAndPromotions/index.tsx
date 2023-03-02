import { Button } from "../Button";
import { Container } from "./style";

const FormNewsAndPromotions = () => {
  return (
    <Container>
      <p>
        Cadastre-se e Receba nossas
        <b>novidades e promoções</b>
      </p>

      <p>
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
        ipsum
      </p>

      <div>
        <input placeholder="SEU E-MAIL" />
        <Button size="small">OK</Button>
      </div>
    </Container>
  );
};

export { FormNewsAndPromotions };
