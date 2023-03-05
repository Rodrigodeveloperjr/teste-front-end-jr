import arrowRight from "../../assets/Vector (1).svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { IListProducts } from "../../interfaces";
import arrowLeft from "../../assets/Vector.svg";
import { Product } from "../Product";
import { Container } from "./style";
import { Navigation } from "swiper";

const ListProducts = ({ setOpenModal, products }: IListProducts) => {
  const width = window.screen.width;

  return (
    <Container>
      <img className="btn-left" src={arrowLeft} alt="seta para esquerda" />
      <Swiper
        modules={[Navigation]}
        spaceBetween={width > 1440 ? 62 : width < 1250 ? 300 : 62}
        slidesPerView={width > 425 ? 4 : 1}
        navigation={{
          prevEl: ".btn-left",
          nextEl: ".btn-right",
        }}
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <Product product={product} setOpenModal={setOpenModal} />
          </SwiperSlide>
        ))}
      </Swiper>
      <img className="btn-right" src={arrowRight} alt="seta para direita" />
    </Container>
  );
};

export { ListProducts };
