import styles from "./Portfolio.module.css";
import Slider from "../../slider/slider";
import Button from "../../button/button";
import Testimonial from "../../Testimonial/Testimonial";
import Image from "next/image";
import computer from "/public/portfolioimg1.jpg";
import placeholder from "/public/test1.jpg";
import { Fragment } from "react";

export default function Portfolio() {
  const sliderComponent = [
    <div className={styles.slide} key={1}>
      <Image
        className={styles.portfolioImage}
        src={computer}
        width={300}
        placeholder="blur"
        height={200}
        alt="human"
      />

      <div className={styles.content}>
        <h2>Modern Website</h2>
        <p>I can build modern responsive websites using latest technology</p>
        <Button>Demo</Button>
      </div>
    </div>,
    <div className={styles.slide} key={2}>
      <Image
        className={styles.portfolioImage}
        width={300}
        height={200}
        placeholder="blur"
        src={placeholder}
        alt="computer"  
      />

      <div className={styles.content}>
        <h2>Mobile Application</h2>
        <p>I can beautiful mobile apps with complex <br/> UI and animation along with native features and experience. </p>
        <Button>Demo</Button>
      </div>
    </div>,
  ];

  return (
    <Fragment>
      <div className={styles.container}>
        <h1>Portfolio</h1>
        <p>Some recent works</p>
        <div>
        </div>
        <style jsx>
         {
           `div{
             margin-bottom:6rem;
           }
           `
         }
        </style>
        <Slider slideData={sliderComponent} />
      </div>
      {/* <Testimonial></Testimonial> */}
    </Fragment>
  );
}
