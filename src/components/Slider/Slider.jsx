import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Slider.module.scss";

const Slider = ({ images, preview }) => {
  return (
    <Swiper slidesPerView={preview} className={styles.slider}>
      {images.map((customer) => (
        <SwiperSlide className={styles.slider__slide} key={customer}>
          <img src={customer} alt="Slide 1" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
