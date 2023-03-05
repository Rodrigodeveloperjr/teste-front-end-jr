import arrowRight from "../../assets/Vector (1).svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "../ListProducts/style";
import { IListProducts } from "../../interfaces";
import arrowLeft from "../../assets/Vector.svg";
import { Product } from "../Product";
import { Navigation } from "swiper";

const ListProductsSecond = ({ setOpenModal, products }: IListProducts) => {
  const width = window.screen.width;

  return (
    <Container>
      <img className="btn-left2" src={arrowLeft} alt="seta para esquerda" />
      <Swiper
        modules={[Navigation]}
        spaceBetween={width > 1440 ? 62 : width < 1250 ? 300 : 62}
        slidesPerView={width > 425 ? 4 : 1}
        navigation={{
          prevEl: ".btn-left2",
          nextEl: ".btn-right2",
        }}
      >
        {products.map((product, i) => (
          <SwiperSlide key={i}>
            <Product product={product} setOpenModal={setOpenModal} />
          </SwiperSlide>
        ))}
      </Swiper>
      <img className="btn-right2" src={arrowRight} alt="seta para direita" />
    </Container>
  );
};

export { ListProductsSecond };
