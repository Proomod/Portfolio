import styles from "../styles/Home.module.css";
import Link from "next/link";
import * as Unicons from "@iconscout/react-unicons";
import { Fragment } from "react";
import ImageBlob from "../components/photoBlob";
function HomePage() {
  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.mainContext}>
          <div className={styles.socialLinks}>
            <a href="" target="_blank" className="linkedIn">
              <Unicons.UilLinkedin />
            </a>
            <a href="" className="linkedIn">
              <Unicons.UilGithub />
            </a>
            <a href="" className="linkedIn">
              <Unicons.UilFacebook />
            </a>
          </div>
          <ImageBlob />
        </div>
        <h1>Hello I am pramod</h1>
        <h3>Mobile Developer</h3>
        <p className="description">
          Cupidatat excepteur dolore sunt culpa nostrud adipisicing ex
          exercitation ipsum sunt. Ipsum ea anim dolore est excepteur consequat
          consectetur sint adipisicing fugiat non. Pariatur ex ex fugiat elit
        </p>
        <Link href="/contact">
          <a>Contact Me</a>
        </Link>
      </div>
    </Fragment>
  );
}

export default HomePage;
