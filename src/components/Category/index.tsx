import { Container } from "./style";

interface ICategory {
  src: string;
  alt: string;
  title: string;
}

const Category = ({ src, alt, title }: ICategory) => {
  return (
    <Container>
      <div>
        <img src={src} alt={alt} />
      </div>

      <p>{title}</p>
    </Container>
  );
};

export { Category };
