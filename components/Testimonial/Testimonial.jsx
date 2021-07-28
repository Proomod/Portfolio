import styles from "./testimonial.module.css";
import Slider from "../slider/slider";
import {useState,useRef,useEffect} from  'react';
import Image from "next/image";

export default function Testimonial() {
  const [width,getWidth]=useState(0);
  useEffect(() => {
    getWidth(window.innerWidth);
    const handleResize= () => {
      
    }
    window.addEventListener("resize",handleResize)

    return () => {
      window.removeEventListener("resize",handleResize);
    }
  }, [width])

  const clientTestimonials = [
    {
      name: "John miller",
      rating: 4,
      occupation: "client",
      description:
        "Fugiat occaecat cillum qui mollit eiusmod eiusmod est proident dolore laboris sint dolore sunt sunt.",
    },
    {
      name: "Auther Morgan",
      rating: 4,
      occupation: "client",
      description:
        "Fugiat occaecat cillum qui mollit eiusmod eiusmod est proident dolore laboris sint dolore sunt sunt.",
    },
    {
      name: "Dutch vandelinne",
      rating: 4,
      occupation: "client",
      description:
        "Fugiat occaecat cillum qui mollit eiusmod eiusmod est proident dolore laboris sint dolore sunt sunt.",
    },
  ].map((data, index) => (
    <div className={styles.slider} key={index}>
      <div className={styles.clientDetails}>
        <div className={styles.avatar}>
          <Image
            className={styles.avatarImage}
            src="/test1.jpg"
            style={{ borderRadius: "50%" }}
            width={300}
            height={300}
            unoptimized
            // layout="fill"
            objectFit="cover"
            alt="profile"
          />
        </div>
        <div className={styles.nameOccupation}>
          <h3>{data.name}</h3>
          <p>{data.occupation}</p>
        </div>
      </div>
      <div className={styles.clientSaying}>
        <p>{data.description}</p>
      </div>
    </div>
  ));

  return (
    <div className={styles.container}>
      <h1>Testimonial</h1>
      <p> My clients sayings</p>

      <Slider slidesPerView={(width>=990)?2:1} slideData={clientTestimonials}></Slider>
      <style jsx>
       { `p{
          margin-bottom:6rem;
        }`}
      </style>
    </div>
  );
}
