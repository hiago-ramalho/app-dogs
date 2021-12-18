import { Route, Routes } from "react-router-dom";
import LoginForm from "../LoginForm";
import UserCreate from "../UserCreate";
import ForgetPassword from "../ForgetPassword";
import ResetPassword from "../ResetPassword";

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