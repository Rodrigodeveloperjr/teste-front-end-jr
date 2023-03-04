import arrowRight from "../../assets/Vector (1).svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { IListProducts } from "../../interfaces";
import arrowLeft from "../../assets/Vector.svg";
import { Product } from "../Product";
import { Container } from "./style";
import { Navigation } from "swiper";

const ListProducts = ({ setOpenModal, products }: IListProducts) => {
  return (
    <Container>
      <img className="btn-left" src={arrowLeft} alt="seta para esquerda" />
      <Swiper
        modules={[Navigation]}
        spaceBetween={62}
        slidesPerView={4}
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
