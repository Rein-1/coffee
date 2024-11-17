/* eslint-disable @next/next/no-img-element */
import styles from "./hero.module.css";
import Section1 from "./section/Section1";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className="bg-black absolute  inset-0 bg-opacity-50 flex items-center">
       <Section1 />
      </div>
    </div>
  );
}

export default Hero;
