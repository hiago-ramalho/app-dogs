import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../LoginForm";
import UserCreate from "../UserCreate";
import ForgetPassword from "../ForgetPassword";
import ResetPassword from "../ResetPassword";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to='/account' />
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<UserCreate />} />
        <Route path="forget" element={<ForgetPassword />} />
        <Route path="reset" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}