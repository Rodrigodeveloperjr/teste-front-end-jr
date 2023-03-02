import { Container } from "./style";

interface IButton {
  children: React.ReactNode;
  size: "large" | "medium" | "small";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, size, onClick }: IButton) => {
  return (
    <Container size={size} type="button" onClick={onClick}>
      {children}
    </Container>
  );
};

export { Button };
