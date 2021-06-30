import styles from "./modal.module.css";
export default function Modal({ children, refs }) {
  return (
    <div className={styles.modal} style={{ background: "transparent" }}>
      <section className={styles.modalContent} ref={refs}>
        {children}
      </section>
    </div>
  );
}
