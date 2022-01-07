export const BASE_URL_API = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
  return {
    url: `${BASE_URL_API}/jwt-auth/v1/token`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_VALIDATE_POST(token) {
  return {
    url: `${BASE_URL_API}/jwt-auth/v1/token/validate`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function GET_USER(token) {
  return {
    url: `${BASE_URL_API}/api/user`,
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    url: `${BASE_URL_API}/api/user`,
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function PHOTO_POST(formData, token) {
  return {
    url: `${BASE_URL_API}/api/photo`,
    options: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData
    },
  };
}