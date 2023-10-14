import styles from "./BridgesCard.module.scss";

const BridgesCard = ({ image, title, type, access }) => {
  return (
    <div className={styles.bridgeCard}>
      <img src={image} alt={title} className={styles.bridgeCard__image} />
      <p className={styles.bridgeCard__title}>{title}</p>
      <div className={styles.bridgeCard__values}>
        <div className={styles.bridgeCard__values__container}>
          <p className={styles.bridgeCard__values__container_title}>Type</p>
          <p className={styles.bridgeCard__values__container_desc}>{type}</p>
        </div>
        <div className={styles.bridgeCard__values__container}>
          <p className={styles.bridgeCard__values__container_title}>Access</p>
          <p className={styles.bridgeCard__values__container_desc}>{access}</p>
        </div>
      </div>
    </div>
  );
};

export default BridgesCard;
