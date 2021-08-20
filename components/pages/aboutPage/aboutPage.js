import Button from "../../button/button";
import styles from "./About.module.css";
import Image from "next/image";
export default function AboutPage({resumeFile}) {
  async function pdfDownloadHandler(e){
    const blobData=Buffer.from(resumeFile.content, 'binary');
    const file= new Blob([blobData],{type:'application/pdf'})
    const fileURL=URL.createObjectURL(file);
    var a = document.createElement("a");
    a.href = fileURL;
    a.download = resumeFile.name;
    a.click();


  }
  const workExperience = [
    { content: "02+", description: "Years\nexperience" },
    { content: "10+", description: "Completed\nProjects" },
    { content: "10+", description: "Companies\nWorked" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.aboutHeader}>
       <h1 className={styles.aboutMe}>About Me</h1>
        <p className={styles.introduction}>My details</p>
      </div>
   
     <Image
        src="/aboutme.jpg"
        className={styles.myImage}
        alt="image goes here"
        height="350px"
        width="350px"
      />
       <p className={styles.description}>
        I am a Electronics and communications engineer, currently working as an 
        freelancer for different companies. I have a stronger interest in machine learning and
        deep learning. I am currently working on a project to build a chatbot for a
        social network.And I love playing around with code and keep tinkering around in my 
        free time.
      </p>
      <div className={styles.worksDone}>
        {workExperience.map((data, index) => {
          return (
            <div key={index} className={styles.experience}>
              <h2 className={styles.experienceContent}>{data.content}</h2>
              <p className={styles.experienceDescription}>{data.description}</p>
            </div>
          );
        })}
      </div>
      <Button classname={styles.downloadButton} 
      onclick={pdfDownloadHandler}
       download>Download CV</Button>
    </div>
  );
}
