import { useNavigate } from 'react-router-dom';
import { createContext, useCallback, useEffect, useState } from 'react';
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE_POST } from '../services/api';

export const UserContext = createContext();

export default function UserStorage({ children }) {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const userLogout = useCallback(async function () {
    setData(null);
    setLogin(null);
    setError(null);
    setLoading(false);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, [navigate])



  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
    console.log(json);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenResponse = await fetch(url, options);

      if (!tokenResponse.ok) throw new Error(`Error: ${tokenResponse.statusText}`);

      const { token } = await tokenResponse.json();
      window.localStorage.setItem('token', token);

      await getUser(token);
      navigate('/account');
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    (async function autoLogin() {
      const token = window.localStorage.getItem('token');

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);

          if (!response.ok) throw new Error('Token inválido!');

          await getUser(token);
        } catch (error) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }

    })()
  }, [userLogout])



  return (
    <UserContext.Provider value={{ userLogin, userLogout, data, error, loading, login }}>
      {children}
    </UserContext.Provider>
  )
}