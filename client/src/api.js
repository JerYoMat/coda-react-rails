
export const getCompanies = () => {
  return fetch('/companies').then(res => res.json());
};