import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { TOKEN_POST, GET_USER } from "../../services/api";

import Input from '../Input';
import Button from '../Button';

export default function LoginForm() {

  const username = useForm();
  const password = useForm();

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch( url, options );
    const json = await response.json();

    console.log(json);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    console.log("Aqui")
    
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
      console.log("dentro do fetch")
    }
    console.log("passou do fetch")
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

        <Button>Entrar</Button>
      </form>


      <Link to="/login/create">
        Cadastro
      </Link>
    </section>
  );
}