import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import styles from "../ExpertCard/ExpertCard.module.scss";
import { TEAM_INFO } from "../../constants/data";

const TeamSlider = () => {
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={24}>
      {TEAM_INFO.map((participant) => (
        <SwiperSlide key={participant.name}>
          <div className={styles.card}>
            <img
              src={participant.img}
              alt="team photo"
              className={styles.card__image}
            />
            <div className={styles.card__text}>
              <div className={styles.card__container}>
                <div className={styles.card__name}>{participant.name}</div>
                <div className={styles.card__position}>
                  {participant.position}
                </div>
              </div>

              <div className={styles.card__icons}>
                {participant.head && (
                  <img
                    className={styles.card__href}
                    alt="icon"
                    src="/assets/icons/head.svg"
                  />
                )}
                {participant.href && (
                  <img
                    className={styles.card__href}
                    alt="icon"
                    src="/assets/icons/linkedin.svg"
                  />
                )}
                {participant.inst && (
                  <img
                    className={styles.card__href}
                    alt="icon"
                    src="/assets/icons/inst.svg"
                  />
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamSlider;
