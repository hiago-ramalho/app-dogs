export const BASE_URL_API = 'https://dogsapi.origamid.dev/json'; 

export function TOKEN_POST(body) {
  return {
    url: BASE_URL_API + '/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    },
  };
}

export function GET_USER(token) {
  return {
    url: BASE_URL_API + '/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}