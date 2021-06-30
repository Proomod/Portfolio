import ContactForm from "../components/contactForm/contactForm";
import styles from "../styles/Contact.module.css";
import * as Unicons from "@iconscout/react-unicons";
import { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <div className={styles.contactInformation}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactFormHeader}>Contact Me</h1>
          <p className={styles.contactSubHeader}>Get in touch</p>
        </div>
        <div className={styles.contactNo}>
          <Unicons.UilPhoneAlt size={40.0} color={styles.contactNo.color} />
          <div className={styles.innerContainer}>
            <h2 className={styles.contactNumber}>Call me</h2>
            <p className={styles.contactNoDetail}>+9779861657210</p>
          </div>
        </div>
        <div className={styles.emailInformation}>
          <Unicons.UilEnvelope size={40.0} color={styles.contactNo.color} />
          <div className={styles.innerContainer}>
            <h2 className="emailAddress">Email</h2>
            <p className={styles.emailAddress}>
              bhusalpramod456@&#13;gmail.com
            </p>
          </div>
        </div>
        <div className={styles.locationInfo}>
          <Unicons.UilMapMarker size={40.0} color={styles.contactNo.color} />

          <div className={styles.innerContainer}>
            <h2 className={styles.locationHeader}>Location</h2>
            <p className={styles.locationDetails}>Butwal,Nepal</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </Fragment>
  );
}
