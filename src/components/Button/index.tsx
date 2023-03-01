import { Container } from "./style";

interface IButton {
  children: React.ReactNode;
  size: "large" | "medium" | "small";
}

const Button = ({ children, size }: IButton) => {
  return (
    <Container size={size} type="button">
      {children}
    </Container>
  );
};

export { Button };
