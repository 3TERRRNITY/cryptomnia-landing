import styles from "./Customers.module.scss";
import Button from "../Button/Button";
import Slider from "../Slider/Slider";

const SliderComponent = ({ title, images, buttonTitle }) => {
  return (
    <div className={styles.sliderComponent}>
      <div className={styles.sliderComponent__title}>{title}</div>

      {buttonTitle && <Button>{buttonTitle}</Button>}
    </div>
  );
};

export default SliderComponent;
