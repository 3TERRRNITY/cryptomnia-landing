import ExpertCard from "../ExpertCard/ExpertCard";
import TeamSlider from "../TeamSlider/TeamSlider";
import styles from "./OurExperts.module.scss";

const OurExperts = () => {
  return (
    <>
      <div className={styles.experts} id="experts">
        <div className={styles.experts__title}>our experts</div>
        <div className={styles.experts__subtitle}>
          <p>
            We are an international team with more than 5 years experience in
            the blockchain space. Our team members are located in a different
            cities around the world. As one big family, we are focused on best
            practices in the industry and always learning new things from each
            other and from our partners.
          </p>
          <p>
            Our representatives are based in Tokyo, Zagreb, Moscow, though we
            regularly participate in the biggest blockchain events around the
            world to ensure we are constantly gaining more experience and
            understanding, which we can then impart to our customers.
          </p>
        </div>
      </div>
      <div className={styles.map} />
      <div className={styles.team}>
        <div className={styles.team__title}>
          Our 8 in-house team members and more than 10 outsourced team members
          allow us to deliver the highest service levels to our clients and to
          find the best opportunities in such a fast changing industry.
        </div>
        <div className={styles.team__subtitle}>
          3 in-house developers with 30+ years combined experience who are
          leaders in their areas of expertise, and always provide the most
          competitive solutions for our customers
        </div>
        <div className={styles.team__experts}>
          <ExpertCard />
        </div>
        <div className={styles.team__mobile}>
          <TeamSlider />
        </div>
      </div>
    </>
  );
};

export default OurExperts;
