import styles from "./button.module.css";

export default function Button(props) {
  console.log(props.onclick);
  return (
    <button
    onClick={props.onclick}
      {...props.download}
      className={`${styles.button} ${props.classname}`}
      type={props.type}
    >
      {props.children}
    </button>
  );
}
