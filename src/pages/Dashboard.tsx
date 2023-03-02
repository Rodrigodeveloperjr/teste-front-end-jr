import { OtherRelatedProducts } from "../components/OtherRelatedProducts";
import { ModalDetailsProduct } from "../components/ModalDetailsProduct";
import { RelatedProducts } from "../components/RelatedProducts";
import { ModalBackground } from "../components/ModalBackground";
import { Categories } from "../components/Categories";
import { ListBrands } from "../components/ListBrands";
import { ListCards } from "../components/ListCard";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import React, { useState } from "react";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <React.Fragment>
      {openModal ? (
        <ModalBackground>
          <ModalDetailsProduct setOpenModal={setOpenModal} />
        </ModalBackground>
      ) : null}
      <div>
        <Header />
        <Banner />
        <Categories />
        <RelatedProducts />
        <ListCards />
        <OtherRelatedProducts setOpenModal={setOpenModal} />
        <ListCards />
        <ListBrands />
        <OtherRelatedProducts setOpenModal={setOpenModal} />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export { Dashboard };
