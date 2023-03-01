import { Banner } from "./components/Banner";
import { Categories } from "./components/Categories";
import { Header } from "./components/Header";
import { NavProducts } from "./components/NavProducts";

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Categories />
      <NavProducts />
    </>
  );
};

export { App };
