import { Container } from "./style";

interface IconProps {
  src: string;
  alt: string;
  title: string;
}

const Icon = ({ src, alt, title }: IconProps) => {
  return (
    <Container>
      <div>
        <img src={src} alt={alt} />
      </div>

      <p>{title}</p>
    </Container>
  );
};

export { Icon };
