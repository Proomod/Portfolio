import Navigation from "../navigation/navigation";
import * as Unicons from "@iconscout/react-unicons";
import { Fragment, useState, useEffect } from "react";
import styles from "./navigation.module.css";

function Navigations(props) {
  const [width, setWidth] = useState(0);
  const [isOpen, setToggler] = useState(false);
  const [isScrolled,setScrollToggler]=useState(false);
  useEffect(() => {
    if (width >= 990) {
      setToggler(true);
    }
    const handleResize = (e) => {
      setWidth(window.innerWidth);
    };
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);
  
  useEffect(() => {
    
   function handleScroll(e){
    console.log(window.scrollY);
    (window.scrollY > 0 && width >=990) ? setScrollToggler(true):setScrollToggler(false);
   
   }
      window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
   
  },[isOpen,width]);

  function navToggleHandler() {
    setToggler(!isOpen);
  }

  const navData = [
    {
      name: "Home",
      link: "#",
      icon: <Unicons.UilHome />,
    },
    {
      name: "About",
      link: "#about",
      icon: <Unicons.UilUser />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <Unicons.UilBooks />,
    },
    {
      name: "Services",
      link: "#services",
      icon: <Unicons.UilBriefcase />,
    },
    {
      name: "portfolio",
      link: "#portfolio",
      icon: <Unicons.UilScenery />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <Unicons.UilMessage />,
    },
  ];

  const nav_toggle_items = [
    <Unicons.UilMultiply key={0} />,
    <Unicons.UilPlus key={1} />,
  ];
  var navItems = navData.map((data, index) => {
    return (
      <Navigation
        key={index}
        name={data.name}
        link={data.link}
        icon={data.icon}
      />
    );
  });

  return (
    <Fragment>
       <div className={`${styles.navWrapper} ${isScrolled?styles.stickyNav:null}`}>
     <ul
        className={styles.navList}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(35vh)",
        }}
      >
        {navItems}
      </ul>
     </div>
      <div>
        <div className={styles.nameHolder} onClick={navToggleHandler} >
          <h3>Pramod</h3>
        
      <button className={styles.nav_toggler}>
        {isOpen ? nav_toggle_items[0] : nav_toggle_items[1]}
      </button>
      </div>
      </div>
    </Fragment>
  );
}

export default Navigations;
