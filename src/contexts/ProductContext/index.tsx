import { IModalBackground, IProduct } from "../../interfaces";
import { createContext, useEffect, useState } from "react";

interface IProductContextData {
  products: IProduct[];
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProductContext = createContext({} as IProductContextData);

export const ProductContextProvider = ({ children }: IModalBackground) => {
  const PRODUCTS_URL =
    "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json";

  const [products, setProducts] = useState<Array<IProduct>>([]);

  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    fetch(PRODUCTS_URL)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ProductContext.Provider value={{ products, openModal, setOpenModal }}>
      {children}
    </ProductContext.Provider>
  );
};
