import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import LoginForm from "../LoginForm";
import UserCreate from "../UserCreate";
import ForgetPassword from "../ForgetPassword";
import ResetPassword from "../ResetPassword";

import styles from './Login.module.css';

export default function Login() {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to='/account' />
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<UserCreate />} />
          <Route path="forget" element={<ForgetPassword />} />
          <Route path="reset" element={<ResetPassword />} />
        </Routes>
      </div>
    </section>
  );
}