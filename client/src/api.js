const PREFIX = 'api/v1/'


export const getCompanies = () => {
  return fetch(PREFIX + 'companies').then(res => res.json());
};

export const getStatmentData = (ticker) => {
  return fetch(`../../${PREFIX}/companies/${ticker}`, {
  method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(res => res.json())
}

function postData(url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(response => response.json());
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