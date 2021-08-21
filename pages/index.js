import styles from "../styles/Home.module.css";
import {useEffect} from "react";
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

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(router);
      
    })
    return () => {
    }
  }, )

  function gotoContact(){
   router.push('#contact');
  }
  return (
    <Fragment>
    <div className={styles.home}>
      <div className={styles.container} id="home">
        
        <div className={styles.socialLinks}>
          <SocialLinks/>
        </div>
       
    
      <div className={styles.description}>
       <h1>Hello I am pramod</h1>
      <h3>Mobile Developer</h3>
      <p className="description">
        I am a full stack developer who has a keen interest in emerging technology.
         I like to keep myself busy exploring with my mind.And oh!I love to learn new things.
      </p>
    
        <Button onclick={gotoContact}>Contact Me</Button>
    
        </div>
      <ImageBlob />
      </div>
      
      {/* <div>
      <WaveTop/>
      </div> */}
    </div>
    <div id="about" className={styles.waveTop}>
        
        </div>
    
    <div  className={styles.about}
    >
      
      <AboutPage resumeFile={resume[0]}/>
     
    </div>
      
      <div id="skills">
      <div className={styles.wave}>
      </div>
        <SkillsPage/>
        
      </div>
   
    <div className={styles.servicesWaveTop}></div>
      <div id="services" className={styles.services}>
        <MyServices/>
      </div>
      <div className="" id="portfolio">
      <div className={styles.servicesWave}>

</div>
        <Portfolio/>
          
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </Fragment>
  );
}

export default HomePage;
