import styles from "./screenDimmer.module.css";

export default function ScreenDimmer() {
  return (
    <div
      className={styles.screenDimmer}
      style={{ background: "hsla(223, 100%, 10%, 0.42)" }}
    ></div>
  );
}
