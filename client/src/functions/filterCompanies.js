//the assumption is that data is an array of objects.   Each objext must have a property called companyname

function filterCompanies(searchText, numResults, data) {
  return data
    .filter(jsonObj => {
      if (jsonObj.companyname.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      return false;
    })
    .slice(0, numResults);
}

export default filterCompanies;