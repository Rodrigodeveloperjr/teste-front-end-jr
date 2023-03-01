import creditCard from "../../assets/CreditCard.svg";
import shield from "../../assets/ShieldCheck.svg";
import truck from "../../assets/Truck.svg";
import { Container } from "./style";

const InitialInformation = () => {
  return (
    <Container>
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
    </Container>
  );
};

export { InitialInformation };
