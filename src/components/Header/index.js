import { Link } from "react-router-dom";
// import { ContainerHeader, ContainerNav } from "./styles";
import styles from './Header.module.css';

import { ReactComponent as ImgDog } from '../../assets/dogs.svg';


export default function Header() {
  return (
    <header className={styles.header} >
      <nav className={`${styles.nav} container`}>
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <ImgDog />
        </Link>

        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
}