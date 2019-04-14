
export const getCompanies = () => {
  return fetch('api/v1/companies').then(res => res.json());
};

export const getCompanyFins = (companyId) => {
  return postData(`api/v1/companies/${companyId}`)
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
