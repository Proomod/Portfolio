import styles from "../styles/Portfolio.module.css";
import Slider from "../components/slider/slider";
import Button from "../components/button/button";
import Testimonial from "../components/Testimonial/Testimonial";
import Image from "next/image";
import { Fragment } from "react";

export default function Portfolio() {
  const sliderComponent = [
    <div className={styles.slide} key={1}>
      <Image
        className={styles.portfolioImage}
        src="./portfolioimg1.jpg"
        alt="human"
      />

      <div className={styles.content}>
        <h2>Modern Website</h2>
        <p>lorem ipsum dolor sit amet, consectetur</p>
        <Button>Demo</Button>
      </div>
    </div>,
    <div className={styles.slide} key={2}>
      <Image className={styles.portfolioImage} src="./pp.png" alt="computer" />

      <div className={styles.content}>
        <h2>Modern Website</h2>
        <p>lorem ipsum dolor sit amet, consectetur</p>
        <Button>Demo</Button>
      </div>
    </div>,
  ];

  return (
    <Fragment>
      <div className={styles.container}>
        <h1>Portfolio</h1>
        <p>Some recent works</p>
        <Slider slideData={sliderComponent} />
      </div>
      <Testimonial></Testimonial>
    </Fragment>
  );
}
