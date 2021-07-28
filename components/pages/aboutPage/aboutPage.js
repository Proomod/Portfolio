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
     <div className={styles.myImage}>
     <Image
      styles="grid-area:b"
        src="/pp.png"
        
        alt="image goes here"
        height="300px"
        width="300px"
      />
     </div>
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
      <Button classname={styles.download} 
      onclick={pdfDownloadHandler}
       download>Download CV</Button>
    </div>
  );
}
