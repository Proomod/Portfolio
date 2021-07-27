import styles from "../styles/Home.module.css";
import AboutPage from '../components/pages/aboutPage/aboutPage';
import { Fragment } from "react";
import Button from '../components/button/button';
import ImageBlob from "../components/profilePic/photoBlob";
import {useRouter} from 'next/router';
import SkillsPage from "../components/pages/skillsPage/skills";
import Portfolio from "../components/pages/portfolioPage/portfolio";
import MyServices from "../components/pages/servicePage/services";
import Contact from "../components/pages/contactPage/contact";
import SocialLinks from '../components/socialLinks/socialLinks';

function HomePage() {
  const router=useRouter();

  function gotoContact(){
   router.push('#contact');
  }
  return (
    <Fragment>
      <div className={styles.container} id="home">
        
          <div className={styles.socialLinks}>
            <SocialLinks/>
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
        <AboutPage/>
      </div>
      <div id="skills">
        <SkillsPage/>
        
      </div>
      <div className="" id="portfolio">
        <Portfolio/>
          
      </div>
      <div id="services">
        <MyServices/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </Fragment>
  );
}

export default HomePage;
