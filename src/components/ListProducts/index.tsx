import arrowRight from "../../assets/Vector (1).svg";
import arrowLeft from "../../assets/Vector.svg";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Product } from "../Product";
import { Container } from "./style";

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api
      .get("")
      .then((res) => setProducts(res.data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container id="products">
      <img src={arrowLeft} alt="seta para esquerda" />
      <menu>
        {products.map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </menu>
      <img src={arrowRight} alt="seta para direita" />
    </Container>
  );
};

export { ListProducts };
