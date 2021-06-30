import styles from "./skills.module.css";
import { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function Skills() {
  const [isOpen, setOpenStatus] = useState(false);
  const rotationValue = "-90deg";
  const arrowStyle = {
    "--transform": rotationValue,
  };

  function clickHandler() {
    setOpenStatus(!isOpen);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.skillsHeader}>Skills</h2>
      <p>My current skills level</p>

      <button onClick={clickHandler} className={styles.collapseButton}>
        <div className={styles.arrow}>
          <span
            className={`${styles.leftPart} `}
            style={isOpen ? arrowStyle : null}
          ></span>
          <span
            className={styles.rightPart}
            style={isOpen ? arrowStyle : null}
          ></span>
        </div>
        <div className={styles.skillIdentifier}>
          <Unicons.UilBracketsCurly className={styles.frontEndIcon} />
          <div>
            <h3>FrontEnd Developer</h3>
            <p>doing for a long time</p>
          </div>
        </div>
        <ul
          className={styles.itemList}
          style={isOpen ? { lineHeight: "1.5" } : { lineHeight: "0" }}
        >
          <li>
            <div className={styles.skillPercentage}>
              <h4>HTML</h4>
              <p>90%</p>
            </div>
            <div className={styles.progressbarFull}>
              <div className={styles.progressbarCompleted}></div>
            </div>
          </li>
          <li>
            <div className={styles.skillPercentage}>
              <h4>CSS</h4>
              <p>90%</p>
            </div>
            <div className={styles.progressbarFull}>
              <div className={styles.progressbarCompleted}></div>
            </div>
          </li>
          <li>
            <div className={styles.skillPercentage}>
              <h4>VanillaJS</h4>
              <p>90%</p>
            </div>
            <div className={styles.progressbarFull}>
              <div className={styles.progressbarCompleted}></div>
            </div>
          </li>
          <li>
            <div className={styles.skillPercentage}>
              <h4>React</h4>
              <p>90%</p>
            </div>
            <div className={styles.progressbarFull}>
              <div className={styles.progressbarCompleted}></div>
            </div>
          </li>
        </ul>
      </button>
    </div>
  );
}
