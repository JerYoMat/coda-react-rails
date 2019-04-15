
export const getCompanies = () => {
  return fetch('api/v1/companies').then(res => res.json());
};

export const getStatmentData = (ticker) => {
  return fetch(`../../api/v1/companies/${ticker}`, {
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
