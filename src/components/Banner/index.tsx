import photo from "../../assets/Rectangle 250.svg";
import { Container } from "./style";

const Banner = () => {
  return (
    <Container>
      <img src={photo} alt="50% de desconto" />

      <div>
        <h1>Venha conhecer nossas promoções</h1>
        <h2>50% Off nos produtos</h2>

        <a href="#products">Ver produto</a>
      </div>
    </Container>
  );
};

export { Banner };
