import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slider.module.scss";

const Slider = (images) => {
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={30} className={styles.slider}>
      {images.map((image) => (
        <SwiperSlide className={styles.slider__slide} key={image}>
          <img src={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
