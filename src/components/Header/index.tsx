import { InitialInformation } from "../InitialInformation";
import { UserInformation } from "../UserInformation";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <InitialInformation />
      <UserInformation />
    </Container>
  );
};

export { Header };
