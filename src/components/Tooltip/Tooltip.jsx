import styles from "./Tooltip.module.scss";

const Tooltip = ({ children }) => {
  return <div className={styles.tooltip}>{children}</div>;
};

export default Tooltip;
