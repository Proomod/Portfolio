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
import * as fs from 'fs/promises';
import path from 'path';



export async function getStaticProps(){
  const directory=path.join(process.cwd(),'resume');
  const files=await fs.readdir(directory);
  console.log(files);
  const file=await fs.readFile(path.join(directory,files[0]),'binary');
return {
  props:{
    resume:await Promise.all([{
      name:files[0],
      content:file
    }])
  }

}

}


function HomePage({resume}) {
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

      <div id="about" className={styles.about}
      >
        <AboutPage resumeFile={resume[0]}/>
      </div>
      <div id="skills">
        <SkillsPage/>
        
      </div>
    
      <div id="services">
        <MyServices/>
      </div>
      <div className="" id="portfolio">
        <Portfolio/>
          
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </Fragment>
  );
}

export default HomePage;
