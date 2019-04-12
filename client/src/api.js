
export const getCompanies = () => {
  return fetch('/api/v1/companies').then(res => res.json());
};