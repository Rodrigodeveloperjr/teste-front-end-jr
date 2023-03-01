import { InitialInformation } from "../InitialInformation";
import { Sessions } from "../Sessions";
import { UserInformation } from "../UserInformation";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <InitialInformation />
      <hr />
      <UserInformation />
      <hr />
      <Sessions />
    </Container>
  );
};

export { Header };
