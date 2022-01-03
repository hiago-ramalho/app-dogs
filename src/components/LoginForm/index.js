import { useContext } from "react";
import { Link } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../context/UserContext";

import Input from '../Input';
import Button from '../Button';

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
    <section>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
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

        {error && <p>{error}</p>}
      </form>


      <Link to="/login/create">
        Cadastro
      </Link>
    </section>
  );
}