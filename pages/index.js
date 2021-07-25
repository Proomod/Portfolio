import styles from "../styles/Home.module.css";
import Link from "next/link";
import AboutPage from '../components/pages/aboutPage/aboutPage';
import * as Unicons from "@iconscout/react-unicons";
import { Fragment } from "react";
import Button from '../components/button/button';
import ImageBlob from "../components/profilePic/photoBlob";
import {useRouter} from 'next/router';
import SkillsPage from "../components/pages/skillsPage/skills"
function HomePage() {
  const router=useRouter();

  function gotoContact(){
   router.push('/contact');
  }
  return (
    <Fragment>
      <div className={styles.container}>
        
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
         
      
      <div className={styles.description}>
      <h1>Hello I am pramod</h1>
        <h3>Mobile Developer</h3>
        <p className="description">
          Cupidatat excepteur dolore sunt culpa nostrud adipisicing ex
          exercitation ipsum sunt. Ipsum ea anim dolore est excepteur consequat
          consectetur sint adipisicing fugiat non. Pariatur ex ex fugiat elit
        </p>
      
          <Button onclick={gotoContact}>Contact Me</Button>
      
      </div>
      <ImageBlob />
      </div>

      <div id="about" className={styles.about}>
        {AboutPage()}
      </div>
      <div id="skill">
        {SkillsPage()}
        
      </div>

    </Fragment>
  );
}

export default HomePage;
