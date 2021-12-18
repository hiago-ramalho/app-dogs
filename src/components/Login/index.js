import { Route, Routes } from "react-router-dom";
import ForgetPassword from "../ForgetPassword";
import LoginForm from "../LoginForm";
import ResetPassword from "../ResetPassword";
import UserCreate from "../UserCreate";

export default function Login() {
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