import { Container } from "./style";
import { useState } from "react";

const HamburgerMenu = () => {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  return (
    <Container>
      <input id="menu-hamburguer" type="checkbox" />

      <label htmlFor="menu-hamburguer">
        <div
          className="menu"
          onClick={() => {
            setCheckbox(true);
            if (checkbox) {
              setCheckbox(false);
            }
          }}
        >
          <span className="hamburguer"></span>
        </div>
      </label>

      {checkbox ? (
        <div>
          <p>Todas Categorias</p>
          <p>Supermercado</p>
          <p>Livros</p>
          <p>Moda</p>
          <p>Lançamentos</p>
          <p>Ofertas do dia</p>
          <p>Assinatura</p>
        </div>
      ) : null}
    </Container>
  );
};

export { HamburgerMenu };
