import { Container } from "./style";
import { FC } from "react";

interface IModalBackground {
  children: React.ReactNode;
}

const ModalBackground: FC<IModalBackground> = ({ children }) => {
  return <Container>{children}</Container>;
};

export { ModalBackground };
