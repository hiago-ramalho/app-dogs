import { useContext } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../context/UserContext";

import Input from '../Input';
import Button from '../Button';
import Error from "../Helper/Error";

import styles from './LoginForm.module.css';
import stylesBtn from '../Button/Button.module.css';

export default function LoginForm() {

  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          {...username}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          {...password}
        />

        {loading ? <Button disabled>Carregando...</Button> : <Button>Entrar</Button>}

        <Error error={error} />
        {/* {error && <p>{error}</p>} */}
      </form>


      <Link className={styles.forget} to="/login/forget">
        Esqueceu a senha?
      </Link>

      <div className={styles.register}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui uma conta? Cadastre-se no site.</p>
        <Link className={stylesBtn.button} to="/login/create">
          Cadastro
        </Link>
      </div>

    </section>
  );
}