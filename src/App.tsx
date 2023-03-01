import { Banner } from "./components/Banner";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { RelatedProducts } from "./components/RelatedProducts";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <RelatedProducts />
    </>
  );
};

export { App };
