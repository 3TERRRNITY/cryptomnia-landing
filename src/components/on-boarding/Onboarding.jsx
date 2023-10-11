import styles from "./Onboarding.module.scss";
import { ONBOARDING_CARDS } from "../../constants/data";

const Onboarding = () => {
  return (
    <div className={styles.onboarding}>
      <div className={styles.onboarding__title}>on-boarding process</div>
      <div className={styles.onboarding__cards}>
        {ONBOARDING_CARDS.map(({ index, description, image }) => (
          <div
            className={`${styles.onboarding__card} ${
              index === 5 ? styles["onboarding__card__big"] : ""
            }`}
            key={index}
          >
            <div className={styles.onboarding__card__title}>0{index}</div>
            <div className={styles.onboarding__card__container}>
              <img
                src={image}
                alt="icon"
                className={styles.onboarding__card__icon}
              />
              <div className={styles.onboarding__card__description}>
                {description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Onboarding;
