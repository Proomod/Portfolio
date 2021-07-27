import styles from "./service.module.css";
import { useState, useRef, useEffect } from "react";
import Modal from "../../components/modal/modal";
import ScreenDimmer from "../../components/screenDimmer/screenDimmer";
import { Fragment } from "react";
import * as Unicons from "@iconscout/react-unicons";

export default function Service({ data }) {
  const node = useRef();
  const [showModal, toggleState] = useState(false);
  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleModal);
    } else {
      document.removeEventListener("mousedown", handleModal);
    }
    return () => {
      document.removeEventListener("mousedown", handleModal);
    };
  }, [showModal]);

  const handleModal = (e) => {
    console.log(e.target);
    if (node.current && node.current.contains(e.target)) {
      return;
    } else {
      toggleState(false);
    }
  };
  return (
    <Fragment>
      {showModal ? <ScreenDimmer /> : null}
      <div className={styles.service}>
        {data.icon}
        <h3 style={{ textAlign: "center" }}>{data.name}</h3>
        <button className={styles.serviceButton} onClick={() => toggleState(!showModal)}>
          <a>View More</a>
        </button>
        {showModal ? (
          <Modal key={data.name} refs={node}>
            <h2>{data.name}</h2>
            <ul className={styles.serviceDescription}>
              {data.description.map((desc) => (
                <li key={desc} className={styles.serviceDescriptionList}>
                  {<Unicons.UilBullseye size={10} />} {desc}
                </li>
              ))}
            </ul>
          </Modal>
        ) : null}
      </div>
    </Fragment>
  );
}
