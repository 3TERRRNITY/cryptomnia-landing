import Button from "../Button/Button";

import styles from "./ContactUs.module.scss";

const ContactUs = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact__title}>contact us</div>
      <div className={styles.contact__buttons}>
        <Button image="../../../public/assets/icons/PhoneCall.svg">
          Call Us
        </Button>
        <Button image="../../../public/assets/icons/telegram.svg">
          Chat with us
        </Button>
      </div>
    </div>
  );
};

export default ContactUs;
