import styles from "./testimonial.module.css";
import Slider from "../slider/slider";
import Image from "next/image";

export default function Testimonial() {
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
          <Image src="./test1.jpg" alt="" />
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

      <Slider slidesPerView={1} slideData={clientTestimonials}></Slider>
    </div>
  );
}
