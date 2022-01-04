import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { USER_POST } from '../../services/api';
import useForm from '../../hooks/useForm';
import useFetch from '../../hooks/useFetch';

import Input from '../Input';
import Button from '../Button';
import Error from '../Helper/Error';

export default function UserCreate() {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    });

    const { response } = await request(url, options);

    if (response.ok) userLogin(username.value, password.value);

    console.log(response);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastro</h1>

      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="E-mail" type="text" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />

        {loading ? <Button disabled >Cadastrando...</Button> : <Button>Cadastrar</Button>}

        <Error error={error} />

      </form>
    </section>
  )
}