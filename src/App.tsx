import { Banner } from "./components/Banner";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { ListCards } from "./components/ListCard";
import { OtherRelatedProducts } from "./components/OtherRelatedProducts";
import { RelatedProducts } from "./components/RelatedProducts";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <RelatedProducts />
      <ListCards />
      <OtherRelatedProducts />
      <ListCards />
    </>
  );
};

export { App };
