import * as Unicons from "@iconscout/react-unicons";
import styles from './skillsData.module.css';

const skillsData =()=>[
    {
      title: "Front End Development",
      icon: <Unicons.UilBracketsCurly className={styles.frontEndIcon} />,
      description:"",
      fields: [
        {
        name: "HTML",
          completion: "90%",
         
        },
        {
          name: "CSS",
          completion: "70%"
        },
        { name: "VanillaJS",
         "completion": "60%" },
        { name: "React",
         completion: "50%" }
      ]
    },
    {
      title: "BackEnd Development",
      icon: <Unicons.UilBracketsCurly className={styles.frontEndIcon} />,
      fields: [
        {
          name: "Django",
          completion: "40%"
        },
        {
          name: "nodeJS",
          completion: "50%"
        },
        { name: "firebase", completion: "80%" }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Unicons.UilBracketsCurly className={styles.frontEndIcon} />,
      fields: [
        {
          name: "Flutter",
          completion: "80%"
        },
        {
          name: "React Native",
          completion: "20%"
        }
      ]
    },
    {
      title: "Machine Learning and AI",
      icon: <Unicons.UilBracketsCurly className={styles.frontEndIcon} />,
      fields: [
        {
          name: "tensorflow",
          completion: "50%"
        }
      ]
    },
    {
      title: "Game Development",
      icon: <Unicons.UilBracketsCurly className={styles.frontEndIcon} />,
      fields: [
        {
          name: "Unity",
          completion: "20%"
        },
        {
          name: "C#",
          completion: "40%"
        }
      ]
    }
  ]
  // console.log(typeof data);

  
export default skillsData;