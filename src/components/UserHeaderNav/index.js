import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from '../../context/UserContext';

import { ReactComponent as FeedSvg } from '../../assets/feed.svg';
import { ReactComponent as StatisticSvg } from '../../assets/estatisticas.svg';
import { ReactComponent as AddSvg } from '../../assets/adicionar.svg';
import { ReactComponent as LogoutSvg } from '../../assets/sair.svg';

import styles from './UserHeaderNav.module.css';

export default function UserHeaderNav() {
  const [mobile, setMobile] = useState(null);
  const { userLogout } = useContext(UserContext);

  return (
    <nav className={styles.nav}>
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
  )
}