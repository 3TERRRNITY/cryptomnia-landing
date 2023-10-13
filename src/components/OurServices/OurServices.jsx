import styles from "./OurServices.module.scss";
import Button from "../Button/Button";

const OurServices = () => {
  return (
    <div className={styles.services}>
      <div className={styles.services__title}>Our Services</div>

      <div className={styles.services__cards}>
        <div className={styles.services__card_RD}>
          <div className={styles.services__card__titleContainer}>
            <div className={styles.services__card__title}>R&D</div>
            <img
              src="/assets/icons/info.svg"
              alt="information"
              className={styles.services__card__icon}
            />
          </div>
          <ul className={styles.services__card__description}>
            <li className={styles.services__card__descriptionItem}>
              Turn-key solution for your NFT collection creation.
            </li>
            <li className={styles.services__card__descriptionItem}>
              Smart Contract development. ETH, Polygon, BSC.
            </li>
          </ul>
        </div>

        <div className={styles.services__card_solutions}>
          <div className={styles.services__card__titleContainer}>
            <div className={styles.services__card__title}>
              Centralized and Decentralized <br /> exchange solutions
            </div>
            <img
              src="/assets/icons/info.svg"
              alt="information"
              className={styles.services__card__icon}
            />
          </div>
          <ul className={styles.services__card__description}>
            <li className={styles.services__card__descriptionItem}>
              Crypto Wallets
            </li>
            <li className={styles.services__card__descriptionItem}>
              Centralized exchanges
            </li>
            <li className={styles.services__card__descriptionItem}>
              Dex solutions
            </li>
          </ul>
          <Button>Get a quote now</Button>
        </div>

        <div className={styles.services__card_SC}>
          <div className={styles.services__card__titleContainer}>
            <div className={styles.services__card__title}>
              Smart Contracts, DeFi, wrapped <br /> digital products,
              certificates
            </div>
          </div>
          <div className={styles.services__card__description}>
            Fundamentally, within the systems we build, we can use any logic and
            mathematical methods from real life. For example, ETH and Polygon
            blockchain allow you to build and modify your Smart Contracts based
            on your business demands. Below you can review some of our services
            that may be relevant to your business.
          </div>
        </div>

        <div className={styles.services__card_image1} />

        <div className={styles.services__card_image2} />

        <div className={styles.services__card_loyalty}>
          <div className={styles.services__card__titleContainer}>
            <div className={styles.services__card__title}>
              Loyalty incentives and reward programs <br /> incorporating NFT
              technology
            </div>
          </div>
          <div className={styles.services__card__description}>
            Need to make your product/company/platform attractive for the young
            generation of people who prefer to use the power of crypto in their
            daily lives? <br /> <br />
            We would be happy to help you to build a loyalty program that will
            connect blockchain technology with your customers’ needs.
          </div>
        </div>

        <div className={styles.services__card_market}>
          <div className={styles.services__card__titleContainer}>
            <div className={styles.services__card__title}>
              Market Making <br /> and Token Listings
            </div>
            <img
              src="/assets/icons/info.svg"
              alt="information"
              className={styles.services__card__icon}
            />
          </div>
          <div className={styles.services__card__description}>
            We use our own trading system with diversified trading algorithms.
            The system is based on the 4 years of layered Data from the biggest
            exchanges, and the data has been added manually layer by layer while
            being tested over many months.
          </div>
          <Button>Get a quote now</Button>
        </div>

        <div className={styles.services__card_seo}>
          <div className={styles.services__card__titleContainer}>
            <div className={styles.services__card__title}>
              SEO, Marketing <br /> and PR
            </div>
            <img
              src="/assets/icons/info.svg"
              alt="information"
              className={styles.services__card__icon}
            />
          </div>

          <ul className={styles.services__card__description}>
            <li className={styles.services__card__descriptionItem}>
              Website auditing
            </li>
            <li className={styles.services__card__descriptionItem}>
              on-page optimization
            </li>
            <li className={styles.services__card__descriptionItem}>
              SM, Content Marketing
            </li>
            <li className={styles.services__card__descriptionItem}>
              Link Building
            </li>
          </ul>
          <Button>Get a quote now</Button>
        </div>

        <div className={styles.services__card_integration}>
          <div className={styles.services__card__titleContainer}>
            <div className={styles.services__card__title}>
              Integration with 3rd <br /> party platforms
            </div>
          </div>
          <div className={styles.services__card__description}>
            Request our help with integration of your platform to other
            successful platforms and solutions. Why reinvent the wheel?
          </div>
        </div>
        <div className={styles.services__card_image3} />
        <div className={styles.services__card_imageMobile} />
      </div>
    </div>
  );
};

export default OurServices;
