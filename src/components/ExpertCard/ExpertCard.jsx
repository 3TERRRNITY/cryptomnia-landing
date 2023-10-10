import styles from "./ExpertCard.module.scss";
import { TEAM_INFO } from "../../constants/data.js";
const ExpertCard = () => {
  return TEAM_INFO.map((participant) => (
    <div className={styles.card} key={participant.name}>
      <img
        src={participant.img}
        alt="team photo"
        className={styles.card__image}
      />
      <div className={styles.card__text}>
        <div className={styles.card__container}>
          <div className={styles.card__name}>{participant.name}</div>
          <div className={styles.card__position}>{participant.position}</div>
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
  ));
};

export default ExpertCard;
