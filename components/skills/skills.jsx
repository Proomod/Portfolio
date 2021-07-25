import styles from "./skills.module.css";
import React,{Fragment} from 'react';
import Toggler from '../collapsible/collapsible';
import skillsData from "./data";

export default function Skills() {
  // const [isOpen, setOpenStatus] = useState(false);
 


  // function clickHandler() {
  //   setOpenStatus(!isOpen);
  // }
  console.log(skillsData()[0]);

  return (
    <div className={styles.container}>
      <h2 className={styles.skillsHeader}>Skills</h2>
      <p>My current skills level</p>
<div className={styles.skillsContainer}>
  {
    skillsData().map(skills=>{
    const collapsible = (
      <ul>
        {
          skills.fields.map(field=> { 
            return (
              <li key={field.name}>
          <div className={styles.skillPercentage}>
            <h4>{field.name}</h4>
            <p>{field.completion}</p>
          </div>
          <div className={styles.progressbarFull}>
            <div className={styles.progressbarCompleted}></div>
          </div>
        </li>
            )
          })
    }
    </ul>
     )
      
      return (
      <Toggler classname={styles.collapseButton} collapsible={collapsible} key={skills.title}>
      <div className={styles.skillIdentifier}>
        {skills.icon}
        <div className={styles.skillTitle}>
          <h3>{skills.title}</h3>
          <p>doing for a long time</p>
        </div>
      </div>
    </Toggler>
      );
    })

  }
</div>
  </div>
  );
}
