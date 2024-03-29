import styles from "./button.module.css";

export default function Button(props) {
  return (
    <button
    ref={props.reff}
    onClick={props.onclick}
      {...props.download}
      className={`${styles.button} ${props.classname}`}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
