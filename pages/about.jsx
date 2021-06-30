import Button from "../components/button/button";
import styles from "../styles/About.module.css";
import Image from "next/image";
export default function AboutPage() {
  const workExperience = [
    { content: "02+", description: "Years\nexperience" },
    { content: "10+", description: "Completed\nProjects" },
    { content: "10+", description: "Companies\nWorked" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.aboutMe}>About Me</h1>
      <p className={styles.introduction}>My details</p>
      <Image
        src="/pp.png"
        className="myImage"
        alt="image goes here"
        height="300px"
        width="300px"
      />
      <p className={styles.description}>
        Magna anim proident culpa adipisicing dolore commodo dolor eu ad aute
        nisi. Pariatur velit consequat dolor irure aute ullamco duis dolore
      </p>
      <div className={styles.worksDone}>
        {workExperience.map((data, index) => {
          return (
            <div key={index} className={styles.experience}>
              <h2 className={styles.experieceContent}>{data.content}</h2>
              <p className={styles.experienceDescription}>{data.description}</p>
            </div>
          );
        })}
      </div>
      <Button download>Download CV</Button>
    </div>
  );
}
