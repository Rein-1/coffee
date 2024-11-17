/* eslint-disable @next/next/no-img-element */
import styles from "./hero.module.css";
function Hero() {
  return (
    <div className={styles.hero}>
      <div className="bg-black absolute  inset-0 bg-opacity-50 flex items-center">
        <div className="ml-6 w-[500px] border">
          <h2>Discover the Perfect Coffee</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            atque repudiandae sapiente aspernatur enim tempora vitae autem,
            perferendis a ipsa, sed molestiae voluptates laboriosam ratione,
            incidunt delectus. Quia, doloribus laudantium.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
