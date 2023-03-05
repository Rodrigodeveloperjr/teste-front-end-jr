import creditCard from "../../assets/CreditCard.svg";
import shield from "../../assets/ShieldCheck.svg";
import cart from "../../assets/ShoppingCart.svg";
import user from "../../assets/UserCircle.svg";
import heart from "../../assets/Heart.svg";
import truck from "../../assets/Truck.svg";
import box from "../../assets/Group.svg";
import bars from "../../assets/bars.svg";
import { Container } from "./style";
import x from "../../assets/x.svg";
import { useState } from "react";
import { Input } from "../Input";

const LateralMenu = () => {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  return (
    <Container>
      <img
        src={bars}
        alt="menu"
        onClick={() => {
          setCheckbox(true);

          if (checkbox) {
            setCheckbox(false);
          }
        }}
      />

      {checkbox ? (
        <div>
          <div>
            <img src={x} alt="x" onClick={() => setCheckbox(false)} />
          </div>

          <div className="divInput">
            <Input />
            <div>
              <img src={box} alt="caixa" />
              <img src={heart} alt="coração" />
              <img src={user} alt="usuário" />
              <img src={cart} alt="carrinho" />
            </div>
          </div>

          <div className="sessions">
            <p>Todas Categorias</p>
            <p>Supermercado</p>
            <p>Livros</p>
            <p>Moda</p>
            <p>Lançamentos</p>
            <p className="aPink">Ofertas do dia</p>
            <p>Assinatura</p>
          </div>

          <div className="promotions">
            <div>
              <img src={shield} alt="shield" />
              <p>
                Compra
                <p>100% segura</p>
              </p>
            </div>

            <div>
              <img src={truck} alt="truck" />
              <p>
                Frete grátis
                <p>acima de R$ 200</p>
              </p>
            </div>

            <div>
              <img src={creditCard} alt="credit card" />
              <p>
                Parcele
                <p>suas compras</p>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </Container>
  );
};

export { LateralMenu };
