import { BRIDGES } from "../constants/data";
import styles from "../styles/ApiBridgesSdk.module.scss";
import BridgesCard from "../components/BridgesCard/BridgesCard";
import Layout from "../components/Layout/Layout";
import Button from "../components/Button/Button";
import React from "react";
const ApiBridgesSdk = () => {
  return (
    <>
      <div className={styles.background} />
      <Layout>
        <div className={styles.pageContainer}>
          <div className={styles.pageContainer__titleContainer}>
            <div className={styles.pageContainer__titleContainer__dots} />
            <div className={styles.pageContainer__titleContainer__title}>
              EXPLORE PROJECTS
            </div>
          </div>
          <div className={styles.pageContainer__cardsGrid}>
            {BRIDGES.map((card, index) => (
              <React.Fragment key={card.name}>
                <BridgesCard
                  access={card.access}
                  title={card.title}
                  image={card.image}
                  type={card.type}
                  key={card.name}
                />
                {(index + 1) % 5 === 0 && index + 1 !== BRIDGES.length && (
                  <div
                    className={styles.pageContainer__cardsGrid__moreCard_mobile}
                  >
                    <div className={styles.pageContainer__cardsGrid__moreCard}>
                      <div
                        className={
                          styles.pageContainer__cardsGrid__moreCard__title
                        }
                      >
                        Request to add your SDK
                      </div>
                      <img
                        src="/assets/icons/+.svg"
                        alt="add more"
                        className={
                          styles.pageContainer__cardsGrid__moreCard__image
                        }
                      />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
            <div className={styles.pageContainer__cardsGrid__desktop}>
              <div className={styles.pageContainer__cardsGrid__moreCard}>
                <div
                  className={styles.pageContainer__cardsGrid__moreCard__title}
                >
                  Request to add your SDK
                </div>
                <img
                  src="/assets/icons/+.svg"
                  alt="add more"
                  className={styles.pageContainer__cardsGrid__moreCard__image}
                />
              </div>
            </div>
          </div>

          <div className={styles.pageContainer__buttons}>
            <Button image="/assets/icons/telegram.svg">
              Integrate it - telegram
            </Button>
            <Button image="/assets/icons/Mail.svg">Integrate it - email</Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ApiBridgesSdk;
