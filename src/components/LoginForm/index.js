import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    }).then(response => {
      console.log(response);
      return response.json();
    }).then(json => {
      console.log(json);
    })
  }

  return (
    <div>
      <h1>Login</h1>

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Entrar</button>
      </form>


      <Link to="/login/create">
        Cadastro
      </Link>
    </div>
  )
}