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
    <Container>
      {products.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </Container>
  );
};

export { ListProducts };
