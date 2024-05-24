import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vignesh</h1>
        <p className={styles.description}>
          Passionate backend developer with frontend expertise, excited to
          contribute to innovative projects and personal growth.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=vigneshpond22@gmail.com"
          className={styles.contactBtn}
          target="_blank"
          rel="noopener noreferrer">
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/Hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
