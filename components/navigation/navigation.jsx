import Link from "next/link";
import styles from "./navigation.module.css";

function Navigation({ name, link, icon, keyName }) {
  return (
    <li className={styles.nav} key={keyName}>
      <Link href={link}>
        <a className={styles.nav_child}>
          {icon}
          {name}
        </a>
      </Link>
    </li>
  );
}

export default Navigation;
