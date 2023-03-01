import { Container } from "./style";

const NavProducts = () => {
  return (
    <Container>
      <h2>Produtos relacionados</h2>

      <nav>
        <a>celular</a>
        <a>acessórios</a>
        <a>tablets</a>
        <a>notebooks</a>
        <a>TVs</a>
        <a>Ver todos</a>
      </nav>
    </Container>
  );
};

export { NavProducts };
