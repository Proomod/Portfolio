import styles from "./button.module.css";

export default function Button(props) {
  return (
    <button
      {...props.download}
      className={`${styles.button} ${props.className}`}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
