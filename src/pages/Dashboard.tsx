import { OtherRelatedProducts } from "../components/OtherRelatedProducts";
import { ModalDetailsProduct } from "../components/ModalDetailsProduct";
import { RelatedProducts } from "../components/RelatedProducts";
import { ModalBackground } from "../components/ModalBackground";
import { Categories } from "../components/Categories";
import { ListBrands } from "../components/ListBrands";
import { ListCards } from "../components/ListCard";
import React, { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IProduct } from "../interfaces";

const Dashboard = () => {
  const name = sessionStorage.getItem("VTEX: name");

  const [products, setProducts] = useState<Array<IProduct>>([]);

  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetch(
      "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

  const product = products.find(
    (product: IProduct) => product.productName === name
  );

  return (
    <React.Fragment>
      {openModal ? (
        <ModalBackground>
          <ModalDetailsProduct setOpenModal={setOpenModal} product={product} />
        </ModalBackground>
      ) : null}
      <div>
        <Header />
        <Banner />
        <Categories />
        <RelatedProducts products={products} setOpenModal={setOpenModal} />
        <ListCards />
        <OtherRelatedProducts products={products} setOpenModal={setOpenModal} />
        <ListCards />
        <ListBrands />
        <OtherRelatedProducts products={products} setOpenModal={setOpenModal} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export { Dashboard };
