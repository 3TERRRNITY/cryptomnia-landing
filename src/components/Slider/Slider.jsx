import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./Slider.module.scss";
import { CUSTOMERS } from "../../constants/data";

const Slider = () => {
  return (
    <Swiper slidesPerView={6} className={styles.slider}>
      {CUSTOMERS.map((customer) => (
        <SwiperSlide className={styles.slider__slide} key={customer}>
          <img src={customer} alt="Slide 1" />
        </SwiperSlide>
      ))}

      {/* <SwiperSlide className={styles.slider__slide}>
        <img src="/public/assets/customers/neurotrade.png" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className={styles.slider__slide}>
        <img src="/public/assets/customers/neurotrade.png" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className={styles.slider__slide}>
        <img src="/public/assets/customers/neurotrade.png" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className={styles.slider__slide}>
        <img src="/public/assets/customers/neurotrade.png" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className={styles.slider__slide}>
        <img src="/public/assets/customers/neurotrade.png" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className={styles.slider__slide}>
        <img src="/public/assets/customers/neurotrade.png" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className={styles.slider__slide}>
        <img src="/public/assets/customers/neurotrade.png" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide className={styles.slider__slide}>
        <img src="/public/assets/customers/neurotrade.png" alt="Slide 1" />
      </SwiperSlide> */}
    </Swiper>
  );
};

export default Slider;
