import cart from "../../assets/ShoppingCart.svg";
import { HamburgerMenu } from "../HamburgerMenu";
import user from "../../assets/UserCircle.svg";
import logo from "../../assets/Group 35.svg";
import heart from "../../assets/Heart.svg";
import box from "../../assets/Group.svg";
import { Container } from "./style";
import { Input } from "../Input";

const UserInformation = () => {
  return (
    <Container>
      <div className="logoContainer">
        <img src={logo} alt="logo" />
        <HamburgerMenu />
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
    </Container>
  );
};

export { UserInformation };
