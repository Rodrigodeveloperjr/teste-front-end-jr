import { OtherRelatedProductsSecond } from "../components/OtherRelatedProductsSecond";
import { OtherRelatedProducts } from "../components/OtherRelatedProducts";
import { ModalDetailsProduct } from "../components/ModalDetailsProduct";
import { RelatedProducts } from "../components/RelatedProducts";
import { ModalBackground } from "../components/ModalBackground";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Categories } from "../components/Categories";
import { ListBrands } from "../components/ListBrands";
import { ListCards } from "../components/ListCard";
import React, { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IProduct } from "../interfaces";
import { Container } from "./style";

const PRODUCTS_URL =
  "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

const Dashboard = () => {
  const productName = sessionStorage.getItem("VTEX: name");

  const [products, setProducts] = useState<Array<IProduct>>([]);

  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

  const product = products.find(
    (product: IProduct) => product.productName === productName
  );

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet title="Dashboard | VTEX" />
      </HelmetProvider>
      {openModal ? (
        <ModalBackground>
          <ModalDetailsProduct setOpenModal={setOpenModal} product={product} />
        </ModalBackground>
      ) : null}
      <Header />
      <Banner />
      <Container>
        <Categories />
        <RelatedProducts products={products} setOpenModal={setOpenModal} />
        <ListCards />
        <OtherRelatedProducts products={products} setOpenModal={setOpenModal} />
        <ListCards />
        <ListBrands />
        <OtherRelatedProductsSecond
          products={products}
          setOpenModal={setOpenModal}
        />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export { Dashboard };
