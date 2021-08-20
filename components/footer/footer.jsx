import styles from './Footer.module.css';
import SocialLinks from '../socialLinks/socialLinks';
import Link from 'next/link';
const Footer=()=>{

   return (      
        <div className={styles.container}>
            <div className={styles.contact}>
                <Link href="#home">
                <a>
                <h1>Pramod</h1>
                </a>
                </Link>
                <p>Engineer</p>
            </div>
            <div className={styles.information}>
                <div className={styles.links}>
                <Link href="#contact">
                    <a>Contact</a>
                </Link>
                <Link href="#services">
                    <a>Services</a>
                </Link>
                <Link href="#portfolio">
                    <a>Portfolio</a>
                </Link>
                </div>
                <p>Technical Expert for all your needs</p>
            </div>
            <div className={styles.socialLinks}>
               <SocialLinks/>
            </div>
         </div>   
   );
   
}
export default Footer;