import styles from "./OurVision.module.scss";

const OurVision = () => {
  return (
    <>
      <div id="vision" className={styles.vision}>
        <div className={styles.vision__title}>our vision</div>
        <div className={styles.vision__subtitle}>
          <p>
            We are witnessing a dramatic shift these days, which is spanning
            more and more industries every day. There is a paradigm shift
            occuring among the people of this new generation; from a system
            where people handover their assets - and control of their assets -
            sometimes unwillfully - and often without even knowing who is
            responsible for it, to a paradigm where you actively and consciously
            interact and influence the situation by owning and participating! We
            believe that most industries will be completely transformed by this
            paradigm.
          </p>
          <p>
            <strong>
              The goal of our company is to help other companies and communities
              be at the forefront of these events and be a participant in
              changes at this mental, technological and production level.
            </strong>{" "}
            Taxation, investing, insurance, logistics, the gaming industry,
            training - all these industries are already changing before our
            eyes.
          </p>
        </div>
      </div>
      <p className={styles.migration}>
        We participate in all changes related with human and tech migration from
        web2 to web3 and even web4
      </p>
    </>
  );
};

export default OurVision;
