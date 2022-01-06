import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import useMedia from "../../hooks/useMedia";
import { UserContext } from '../../context/UserContext';

import { ReactComponent as FeedSvg } from '../../assets/feed.svg';
import { ReactComponent as StatisticSvg } from '../../assets/estatisticas.svg';
import { ReactComponent as AddSvg } from '../../assets/adicionar.svg';
import { ReactComponent as LogoutSvg } from '../../assets/sair.svg';

import styles from './UserHeaderNav.module.css';

export default function UserHeaderNav() {
  const { userLogout } = useContext(UserContext);

  const mobile = useMedia('(max-width: 40rem)');

  const [mobileMenu, setMobileMenu] = useState(false);

  const { pathname } = useLocation();
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
      )}
      <nav
        className={
          `
            ${mobile ? styles.navMobile : styles.nav}
            ${mobileMenu && styles.navMobileActive}
          `
        }
      >
        <NavLink to="/account" end >
          <FeedSvg />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to="/account/statistics" >
          <StatisticSvg />

          {mobile && 'Estatísticas'}

        </NavLink>
        <NavLink to="/account/post">
          <AddSvg />

          {mobile && 'Adicionar Foto'}

        </NavLink>

        <button onClick={userLogout}>
          <LogoutSvg />
          {mobile && 'Sair'}

        </button>
      </nav>
    </>
  )
}