import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import styles from './Header.module.css';
import { ReactComponent as ImgDog } from '../../assets/dogs.svg';
import { useContext } from "react";


export default function Header() {
  const { data } = useContext(UserContext);

  return (
    <header className={styles.header} >
      <nav className={`${styles.nav} container`}>
        <Link className="logo" to="/" aria-label="Dogs - Home">
          <ImgDog />
        </Link>

        {data ? (
          <Link className={styles.login} to="/account">
            {data.username}
          </Link>
        ) : (
          <Link className={styles.login} to="/login">
            Login / Criar
          </Link>
        )}

      </nav>
    </header>
  );
}