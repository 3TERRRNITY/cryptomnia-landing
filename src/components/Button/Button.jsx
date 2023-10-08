import styles from "./Button.module.scss";

const Button = ({ children, image }) => {
  return (
    <button className={styles.button}>
      {children}
      {image && (
        <img src={image} href="button icon" className={styles.button__icon} />
      )}
    </button>
  );
};

export default Button;
