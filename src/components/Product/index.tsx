import { Button } from "../Button";
import { Container } from "./style";

interface IProduct {
  src: string;
  alt: string;
  name: string;
  price: number;
}

const Product = ({ src, alt, name, price }: IProduct) => {
  return (
    <Container>
      <img src={src} alt={alt} />

      <div>
        <h3>{name}</h3>

        <div>
          <span>R$ {price}</span>
          <span>R$ {price}</span>
        </div>

        <div>
          <p>ou 2x de R$ {price / 2} sem juros</p>

          <span>Frete grátis</span>
        </div>

        <Button size="large">Comprar</Button>
      </div>
    </Container>
  );
};

export { Product };
