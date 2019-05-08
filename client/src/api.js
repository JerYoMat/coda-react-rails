import { getAuthToken } from './sessionStorage';
const PREFIX = 'api/v1/'


export const getCompanies = () => {
  return fetch(PREFIX + 'companies')
  .then(handleErrors)
  .then(res => res.json());
};

export const getStatmentData = (ticker) => {
  return fetch(`../../${PREFIX}/companies/${ticker}`, {
  method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(handleErrors)
  .then(res => res.json())
}


export const loginUser = (email, password) => {
  return postData('../' +PREFIX + 'auth/login', {
    email,
    password
  });
};

export const createUser = (username, email, password) => {
  return postData('../'+ PREFIX + 'users', {
    username,
    email,
    password
  });
};

export const updateUser = user => {
  return putData(PREFIX + `/users/${user.id}`, user);
};



function postData(url = ``, data = {}) {
  return fetchWithData(url, data, 'POST');
}
function putData(url = ``, data = {}) {
  return fetchWithData(url, data, 'PUT');
}


function fetchWithData(
  url = ``,
  data = {},
  method = 'POST'
) {
  const authToken = getAuthToken()
  // Default options are marked with *
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: authToken
        ? `Bearer ${authToken}`
        : undefined
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  })
    .then(handleErrors)
    .then(response => response.json());
}

function handleErrors(response) {
  if (!response.ok) {
    return response.json().then(body => {
      throw new Error(body.message);
    });
  } else {
    return response;
  }
}