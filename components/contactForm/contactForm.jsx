import styles from "./contactForm.module.css";
import Button from "../button/button";
export default function ContactForm(props) {
  function handleSubmit(event) {
    event.preventDefault();

    console.log("you are a pussycat");
  }
  return (
    <form action="" className={styles.contactForm} onSubmit={handleSubmit}>
      <input type="text" className={styles.contactName} placeholder="name" />
      <input type="text" className={styles.contactEmail} placeholder="email" />
      <textarea
        type="textarea"
        className={styles.contactMessage}
        placeholder="message"
        rows={5}
      />
      <Button type="submit" className={styles.sendMessageButton}>
        Send Message
      </Button>
    </form>
  );
}
