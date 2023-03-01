import { Button } from "../Button";
import { Container } from "./style";

interface IProduct {
  photo: string;
  productName: string;
  price: number;
}

interface IProductComponent {
  product: IProduct;
}

const Product = ({ product }: IProductComponent) => {
  const discount = product.price / 2;

  return (
    <Container>
      <img src={product.photo} alt={product.productName} />

      <div>
        <h3>{product.productName}</h3>

        <div>
          <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>
          <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>
        </div>

        <div>
          <p>ou 2x de R$ {discount.toFixed(2).replace(".", ",")} sem juros</p>

          <span>Frete grátis</span>
        </div>

        <Button size="large">Comprar</Button>
      </div>
    </Container>
  );
};

export { Product };
