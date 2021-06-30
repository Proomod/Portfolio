import Navigation from "../navigation/navigation";
import * as Unicons from "@iconscout/react-unicons";
import { Fragment, useState, useEffect } from "react";
import styles from "./navigation.module.css";

function Navigations(props) {
  const [width, setWidth] = useState(0);
  const [isOpen, setToggler] = useState(false);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = (e) => {
    if (width >= 1000) {
      setToggler(true);
    }
  };

  useEffect(() => {
    if (width >= 1000) {
      setToggler(true);
    }
  }, [width]);

  function navToggleHandler() {
    setToggler(!isOpen);
  }
  console.log(width);
  console.log(isOpen);

  const navData = [
    {
      name: "Home",
      link: "/",
      icon: <Unicons.UilHome />,
    },
    {
      name: "About",
      link: "/about",
      icon: <Unicons.UilUser />,
    },
    {
      name: "Skills",
      link: "/skills",
      icon: <Unicons.UilBooks />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <Unicons.UilBriefcase />,
    },
    {
      name: "portfolio",
      link: "/portfolio",
      icon: <Unicons.UilScenery />,
    },
    {
      name: "Contact",
      link: "/contact",
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
      <ul
        className={styles.navList}
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(35vh)",
        }}
      >
        {navItems}
      </ul>
      <button onClick={navToggleHandler} className={styles.nav_toggler}>
        {isOpen ? nav_toggle_items[0] : nav_toggle_items[1]}
      </button>
    </Fragment>
  );
}

export default Navigations;
