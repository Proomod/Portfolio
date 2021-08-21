import Link from "next/link";
import styles from "./navigation.module.css";
import {useState,useEffect} from  'react';
import { useRouter } from 'next/router';


function Navigation({ name, link, icon, keyName }) {
  const router = useRouter();

  
  const [width,getWidth]=useState(0);
  useEffect(() => {
    getWidth(window.innerWidth);
    const handleResize= () => {
      getWidth(window.innerWidth);
      
    }
    window.addEventListener("resize",handleResize)

    return () => {
      window.removeEventListener("resize",handleResize);
    }
  }, [width])
  return (
    <li className={styles.nav} key={keyName}>
      <Link href={link}>
        <a className={` ${router.asPath===`/${link}`?
        `${styles.nav_child} ${styles.active}`:
        styles.nav_child}`} >
          {width<=990?icon:null}
          {name}
        </a>
      </Link>
    </li>
  );
}

export default Navigation;
